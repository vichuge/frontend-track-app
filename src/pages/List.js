import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getList } from '../redux/actions';
import NavBar from '../components/NavBar';
import Bar from '../components/Bar';

const List = () => {
  const dispatch = useDispatch();
  const reduxList = useSelector((state) => state.list);
  const [list, setList] = useState({ elements: [] });
  const history = useHistory();
  useEffect(() => {
    if (!reduxList.status) dispatch(getList(localStorage.getItem('token')));
    setList(reduxList);
    if (localStorage.length === 0 || localStorage.token === 'undefined') history.push('/logout');
  });
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
      <NavBar className="navbar-list" isSelect="list" />
    </>
  );
};

export default List;
