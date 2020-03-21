import * as React from 'react';
import AppNavBar from 'components/AppNavBar';
import {
  makeSelectLocation,
  makeSelectTodos,
  makeSelectError,
} from 'containers/App/selectors';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import HeaderRow from './components/HeaderRow';
import TodosRow from './components/TodosRow';
import ErrorRow from './components/ErrorRow';
import { logoutUser } from 'containers/App/actions';

const stateSelector = createStructuredSelector({
  location: makeSelectLocation(),
  todos: makeSelectTodos(),
  error: makeSelectError(),
});

export default function HomePage() {
  const { location, todos, error } = useSelector(stateSelector);
  const currentPath = location.pathname === '/' ? '/home' : location.pathname;

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <AppNavBar onLogout={onLogout} currentPath={currentPath}></AppNavBar>
      <Container>
        <HeaderRow></HeaderRow>
        <TodosRow todos={todos}></TodosRow>
        <ErrorRow error={error}></ErrorRow>
      </Container>
    </div>
  );
}
