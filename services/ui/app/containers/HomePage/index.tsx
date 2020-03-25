import * as React from 'react';
import AppNavBar from 'components/AppNavBar';
import {
  makeSelectLocation,
  makeSelectTodos,
  makeSelectErrorTodos,
  makeSelectShowHealth,
  makeSelectInfo,
  makeSelectLoading,
  makeSelectErrorHealth,
} from 'containers/App/selectors';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import HeaderRow from './components/HeaderRow';
import TodosRow from './components/TodosRow';
import ErrorRow from './components/ErrorRow';
import { logoutUser, showHealth, closeHealth, deleteAllTodos } from 'containers/App/actions';
import HealthCheckModal from 'components/HealthCheckModal';
import LoadingIndicator from 'components/LoadingIndicator';
import AddTodoRow from './components/AddTodoRow';
import {
  makeSelectShowAddTodoModal,
  makeSelectShowNewTodoTitle,
  makeSelectShowNewTodoContent,
  makeSelectShowAddNewTodoDate,
} from './selectors';
import AddTodoModal from './components/AddTodoModal';
import {
  showAddTodoModal,
  saveNewTodo,
  changeNewTodoTitle,
  changeNewTodoContent,
  changeNewTodoDate,
} from './actions';
import reducer from './reducer';
import saga from './saga';

const stateSelector = createStructuredSelector({
  location: makeSelectLocation(),
  todos: makeSelectTodos(),
  error: makeSelectErrorTodos(),
  showHealthModal: makeSelectShowHealth(),
  info: makeSelectInfo(),
  showIndicator: makeSelectLoading(),
  errorHealth: makeSelectErrorHealth(),
  showTodoModal: makeSelectShowAddTodoModal(),
  newTodoTitle: makeSelectShowNewTodoTitle(),
  newTodoContent: makeSelectShowNewTodoContent(),
  newTodoDate: makeSelectShowAddNewTodoDate(),
});
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
const key = 'home';

export default function HomePage() {
  const {
    location,
    todos,
    error,
    showHealthModal,
    info,
    showIndicator,
    errorHealth,
    showTodoModal,
    newTodoTitle,
    newTodoContent,
    newTodoDate,
  } = useSelector(stateSelector);
  useInjectReducer({ key: key, reducer: reducer });
  useInjectSaga({ key: key, saga: saga });

  const currentPath = location.pathname === '/' ? '/home' : location.pathname;

  const dispatch = useDispatch();
  const handleHealthShow = () => dispatch(showHealth());
  const handleHealthClose = () => dispatch(closeHealth());
  const onDeleteAll = () => dispatch(deleteAllTodos());
  const onShowAddTodoModal = () => dispatch(showAddTodoModal(true));
  const onCloseAddTodoModal = () => dispatch(showAddTodoModal(false));
  const onSaveAddTodoModal = () => {
    dispatch(showAddTodoModal(false));
    dispatch(saveNewTodo());
  };

  const onChangeNewTodoTitle = (evt: any) =>
    dispatch(changeNewTodoTitle(evt.target.value));
  const onChangeNewTodoContent = (evt: any) =>
    dispatch(changeNewTodoContent(evt.target.value));
  const onChangeNewTodoDate = (evt: any) =>
    dispatch(changeNewTodoDate(evt.target.value));

  const onLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <AppNavBar
        errorHealth={errorHealth}
        handleShowHealth={handleHealthShow}
        onLogout={onLogout}
        currentPath={currentPath}
      ></AppNavBar>
      <Container>
        <HeaderRow></HeaderRow>
        <LoadingIndicator show={showIndicator}></LoadingIndicator>
        <AddTodoRow
        totalTodos={todos.length}
        handleShowAddTodoModal={onShowAddTodoModal}
        handleDeleteAll={onDeleteAll}
        ></AddTodoRow>
        <TodosRow todos={todos}></TodosRow>
        <ErrorRow error={error}></ErrorRow>
      </Container>
      <HealthCheckModal
        show={showHealthModal}
        info={info}
        handleClose={handleHealthClose}
      ></HealthCheckModal>
      <AddTodoModal
        show={showTodoModal}
        handleSave={onSaveAddTodoModal}
        handleClose={onCloseAddTodoModal}
        newTodoTitle={newTodoTitle}
        onChangeNewTodoTitle={onChangeNewTodoTitle}
        newTodoContent={newTodoContent}
        onChangeNewTodoContent={onChangeNewTodoContent}
        newTodoDate={newTodoDate}
        onChangeNewTodoDate={onChangeNewTodoDate}
      ></AddTodoModal>
    </div>
  );
}
