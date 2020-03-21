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
        <Row>
          <Col>
            <CenteredSection>
              <h2>
                <FormattedMessage {...messages.header} />
              </h2>
            </CenteredSection>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
