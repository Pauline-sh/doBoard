import './Navigation.css';

import { block } from 'bem-cn';
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Calendar from 'src/components/calendar/Calendar';
import Modal from 'src/components/modal/Modal';
import TodoModal from 'src/components/todo_modal/TodoModal';
import MenuSvg from 'src/resources/icons/menu.svg';

const b = block('navigation');

function Navigation(): JSX.Element {
  const [isModalShowing, toggleModal] = useState(false);
  const [isMenuShowing, toggleMenu] = useState(false);

  const handleModalToggle = () => {
    toggleModal(!isModalShowing);
  };

  const handleButtonMenuClick = () => {
    toggleMenu(!isMenuShowing);
  };

  return (
    <Router>
      <div className={b('wrapper')}>
        <div className={b('decoration-line')} />
        <nav className={b()}>
          <ul>
            <li className={b('item_justify-start')}>
              <button id='button-add' onClick={handleModalToggle}>
                Добавить +
              </button>
            </li>
            <li>
              <button id='button-menu' onClick={handleButtonMenuClick}>
                <img src={MenuSvg} />
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <Modal isShowing={isModalShowing} handleClick={handleModalToggle}>
        <TodoModal />
      </Modal>
      <Switch>
        <Route path='/'>
          <Calendar />
        </Route>
      </Switch>
    </Router>
  );
}

export default Navigation;
