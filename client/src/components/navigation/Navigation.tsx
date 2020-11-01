import './style.css';

import React from 'react';
import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import Page from 'src/components/page/Page';

export default function Navigation() {
  return (
    <Router>
			<div className='navigation-wrapper'>
				<div className='decoration-line' />
				<nav className='navigation'>
					<ul>
						<li id='add-item'>
							<Link to='/add'>{'Add'}</Link>
						</li>
						<li>
							<Link to='/menu'><div id='sandwich-menu' /></Link>
						</li>
					</ul>
				</nav>
			</div>
			<Switch>
				<Route path='/'>
					<Home />
				</Route>
				<Route path='/add'>
					<Add />
				</Route>
				<Route path='/menu'>
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

function Add() {
  return (
		<Page>
			<h2>{'Add'}</h2>
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