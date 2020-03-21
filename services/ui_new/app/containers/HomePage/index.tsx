import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import AppNavBar from 'components/AppNavBar';
import { makeSelectLocation } from 'containers/App/selectors';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CenteredSection from 'components/CenteredSection';
import HeaderRow from './components/HeaderRow';
import TodosRow from './components/TodosRow';

const stateSelector = createStructuredSelector({
  location: makeSelectLocation(),
});

export default function HomePage() {
  const { location } = useSelector(stateSelector);
  const currentPath = location.pathname === '/' ? '/home' : location.pathname;
  return (
    <div>
      <AppNavBar currentPath={currentPath}></AppNavBar>
      <Container>
        <HeaderRow></HeaderRow>
        <TodosRow></TodosRow>
      </Container>
    </div>
  );
}
