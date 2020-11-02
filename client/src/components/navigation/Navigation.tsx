import './style.css';

import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Page from 'src/components/page/Page';
import Modal from 'src/components/modal/Modal';
import TodoModal from 'src/components/todo_modal/TodoModal';
import useModal from 'src/hooks/useModal';

export default function Navigation(): JSX.Element {
  const { isShowing, toggle } = useModal();

  const todoModal = TodoModal;

  return (
    <Router>
      <div className="navigation-wrapper">
        <div className="decoration-line" />
        <nav className="navigation">
          <ul>
            <li id="add-item">
              <button id="button-add" onClick={toggle}>
                Добавить +
              </button>
            </li>
            <li>
              <Link to="/menu">
                <div id="sandwich-menu" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Modal isShowing={isShowing} hide={toggle} content={<TodoModal hide={toggle} />} />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <Page>
      <h2>{'Home'}</h2>
    </Page>
  );
}

function Menu() {
  return (
    <Page>
      <h2>{'Menu'}</h2>
    </Page>
  );
}
