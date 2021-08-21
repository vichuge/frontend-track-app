import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getList } from '../redux/actions';
import NavBar from '../components/NavBar';
import Bar from '../components/Bar';

const List = ({
  getList,
  list,
}) => {
  const history = useHistory();
  if (localStorage.length === 0) history.push('/logout');
  if (list.status === false) getList(localStorage.getItem('token'));
  return (
    <>
      <div className="wrap">
        <Bar title="List" />
        <div className="columns is-mobile is-multiline list-columns">
          {list.elements.map((elem) => (
            <div className="column is-half" key={elem.id}>
              <div className="card">
                <Link to={`/form/${elem.id}`} className="list-option">
                  <div className="card-content">
                    <div className="content">
                      <div className="columns is-mobile is-justify-content-space-around">
                        <div className="column">
                          <i className={`${elem.icon} fa-2x`} />
                        </div>
                        <div className="column is-half">
                          {elem.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <NavBar isSelect="list" />
    </>
  );
};

List.propTypes = {
  getList: PropTypes.func.isRequired,
  list: PropTypes.shape({
    elements: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    status: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  list: state.list,
});

const mapDistpachToProps = {
  getList,
};

export default connect(mapStateToProps, mapDistpachToProps)(List);
