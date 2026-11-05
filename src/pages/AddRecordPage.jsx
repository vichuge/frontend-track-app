import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router';
import Alert from '../components/Alert';
import AppBar from '../components/AppBar';
import DrinkIcon from '../components/DrinkIcon';
import EmptyState from '../components/EmptyState';
import Icon from '../components/Icon';
import Spinner from '../components/Spinner';
import { fetchLists, selectListById, selectLists } from '../store/listsSlice';
import { createRecord, resetCreateStatus, selectRecordsState } from '../store/recordsSlice';
import { capitalize, pluralize } from '../utils/text';

export const MIN_CUPS = 1;
export const MAX_CUPS = 99;
const QUICK_PICKS = [1, 2, 3, 4];

const clamp = (value) => Math.min(Math.max(value, MIN_CUPS), MAX_CUPS);

const AddRecordPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status: listsStatus } = useSelector(selectLists);
  const drink = useSelector(selectListById(id));
  const { createStatus, createError } = useSelector(selectRecordsState);
  const [cups, setCups] = useState('1');
  const saving = createStatus === 'loading';

  useEffect(() => {
    dispatch(fetchLists());
    dispatch(resetCreateStatus());
  }, [dispatch]);

  const amount = Number(cups);
  const valid = Number.isInteger(amount) && amount >= MIN_CUPS && amount <= MAX_CUPS;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!valid || saving) return;
    const result = await dispatch(createRecord({ listId: drink.id, times: amount }));
    if (createRecord.fulfilled.match(result)) {
      navigate('/records', {
        state: { added: { id: result.payload.id, message: `Added ${pluralize(amount, 'cup')} of ${drink.title}.` } },
      });
    }
  };

  if (listsStatus === 'loading' || listsStatus === 'idle') {
    return (
      <>
        <AppBar title="Add record" backTo="/list" />
        <div className="page page--center"><Spinner size="lg" label="Loading drink" /></div>
      </>
    );
  }

  if (!drink) {
    return (
      <>
        <AppBar title="Add record" backTo="/list" />
        <div className="page">
          <EmptyState
            icon="fas fa-circle-question"
            title="Drink not found"
            action={<Link to="/list" className="button button--primary">Back to drinks</Link>}
          >
            This drink does not exist or could not be loaded.
          </EmptyState>
        </div>
      </>
    );
  }

  const step = (delta) => setCups((current) => String(clamp((Number(current) || 0) + delta)));

  return (
    <>
      <AppBar title={capitalize(drink.title)} subtitle="Add record" backTo="/list" />
      <div className="page">
        <form className="card record-form" onSubmit={handleSubmit} noValidate>
          <DrinkIcon icon={drink.icon} size="lg" />
          <label className="record-form__question" htmlFor="cups">
            {`How many cups of ${drink.title} did you drink?`}
          </label>

          <div className="stepper">
            <button type="button" className="stepper__button" onClick={() => step(-1)} disabled={amount <= MIN_CUPS} aria-label="One cup less">
              <Icon name="fas fa-minus" />
            </button>
            <input
              id="cups"
              className="stepper__input"
              type="number"
              inputMode="numeric"
              min={MIN_CUPS}
              max={MAX_CUPS}
              value={cups}
              onChange={(event) => setCups(event.target.value)}
              aria-invalid={!valid}
              aria-describedby="cups-help"
            />
            <button type="button" className="stepper__button" onClick={() => step(1)} disabled={amount >= MAX_CUPS} aria-label="One cup more">
              <Icon name="fas fa-plus" />
            </button>
          </div>
          <p id="cups-help" className={valid ? 'field__hint' : 'field__error'}>
            {valid ? 'cups' : `Enter a whole number from ${MIN_CUPS} to ${MAX_CUPS}.`}
          </p>

          <fieldset className="chips">
            <legend className="visually-hidden">Quick picks</legend>
            {QUICK_PICKS.map((value) => (
              <button
                key={value}
                type="button"
                className={`chip ${amount === value ? 'is-selected' : ''}`.trim()}
                aria-pressed={amount === value}
                onClick={() => setCups(String(value))}
              >
                {value}
              </button>
            ))}
          </fieldset>

          {createStatus === 'failed' && <Alert>{createError}</Alert>}

          <button type="submit" className="button button--primary button--block" disabled={!valid || saving} aria-busy={saving}>
            {saving ? <Spinner size="sm" label="Saving" /> : 'Save record'}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddRecordPage;
