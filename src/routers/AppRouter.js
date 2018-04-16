import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MainPage from '../components/MainPage';
import Header from '../components/Header';
import AboutPage from '../components/About';
import ProjectsPage from '../components/Projects';
import ContactPage from '../components/Contact';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={MainPage} exact={true} />
        <Route path="/about" component={AboutPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;