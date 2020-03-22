import * as React from 'react';
import AppNavBar from 'components/AppNavBar';
import {
  makeSelectLocation,
  makeSelectTodos,
  makeSelectError,
  makeSelectShowHealth,
  makeSelectInfo,
} from 'containers/App/selectors';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import HeaderRow from './components/HeaderRow';
import TodosRow from './components/TodosRow';
import ErrorRow from './components/ErrorRow';
import { logoutUser, showHealth, closeHealth } from 'containers/App/actions';
import HealthCheckModal from 'components/HealthCheckModal';

const stateSelector = createStructuredSelector({
  location: makeSelectLocation(),
  todos: makeSelectTodos(),
  error: makeSelectError(),
  showHealthModal: makeSelectShowHealth(),
  info: makeSelectInfo(),
});

export default function HomePage() {
  const { location, todos, error, showHealthModal, info } = useSelector(
    stateSelector,
  );
  const currentPath = location.pathname === '/' ? '/home' : location.pathname;

  const dispatch = useDispatch();
  const handleHealthShow = () => dispatch(showHealth());
  const handleHealthClose = () => dispatch(closeHealth());
  const onLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <AppNavBar
        handleShowHealth={handleHealthShow}
        onLogout={onLogout}
        currentPath={currentPath}
      ></AppNavBar>
      <Container>
        <HeaderRow></HeaderRow>
        <TodosRow todos={todos}></TodosRow>
        <ErrorRow error={error}></ErrorRow>
      </Container>
      <HealthCheckModal
        show={showHealthModal}
        info={info}
        handleClose={handleHealthClose}
      ></HealthCheckModal>
    </div>
  );
}
