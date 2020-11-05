import './Navigation.css';

import React, { useState, useCallback } from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Modal from 'src/components/modal/Modal';
import TodoModal from 'src/components/todo_modal/TodoModal';

export default function Navigation(): JSX.Element {
  const [isShowing, toggle] = useState(false);

  const toggleModal = useCallback(
    () => {
      toggle(!isShowing);
    },
    [isShowing]
  )

  /*function toggleModal() {
    toggle(!isShowing);
  }*/

  return (
    <Router>
      <div className='navigation-wrapper'>
        <div className='decoration-line' />
        <nav className='navigation'>
          <ul>
            <li id='add-item'>
              <button id='button-add' onClick={toggleModal}>
                Добавить +
              </button>
            </li>
            <li>
              <Link to='/menu'>
                <div id='sandwich-menu' />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Modal isShowing={isShowing} hide={toggleModal}>
        <TodoModal />
      </Modal>
      <Switch>
        <Route path='/' />
        <Route path='/menu' />
      </Switch>
    </Router>
  );
}
