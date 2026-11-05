import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import Alert from '../components/Alert';
import AppBar from '../components/AppBar';
import DrinkIcon from '../components/DrinkIcon';
import Icon from '../components/Icon';
import { selectCurrentUser } from '../store/authSlice';
import { fetchLists, selectLists } from '../store/listsSlice';
import { capitalize } from '../utils/text';

const SKELETON_CARDS = 6;

const DrinksPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const { items, status, error } = useSelector(selectLists);

  useEffect(() => {
    dispatch(fetchLists());
  }, [dispatch]);

  const greetingName = user?.username.split('@')[0];

  return (
    <>
      <AppBar title="Drinks" subtitle={greetingName ? `Hi ${greetingName}, what did you drink?` : null} />
      <div className="page">
        {status === 'failed' && (
          <Alert
            action={<button type="button" className="button button--small" onClick={() => dispatch(fetchLists())}>Retry</button>}
          >
            {error}
          </Alert>
        )}

        <ul className="drink-grid" aria-busy={status === 'loading'}>
          {status === 'loading' && Array.from({ length: SKELETON_CARDS }, (_, index) => (
            <li key={index} className="drink-card drink-card--skeleton" aria-hidden="true" />
          ))}
          {status === 'succeeded' && items.map((drink) => (
            <li key={drink.id}>
              <Link to={`/form/${drink.id}`} className="drink-card">
                <DrinkIcon icon={drink.icon} />
                <span className="drink-card__title">{capitalize(drink.title)}</span>
                <Icon name="fas fa-plus" className="drink-card__add" />
                <span className="visually-hidden">Log</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DrinksPage;
