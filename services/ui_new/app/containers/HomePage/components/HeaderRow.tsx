import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CenteredSection from 'components/CenteredSection';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';
import styled from 'styles/styled-components';

const HeaderWrapper = styled.div`
  margin: 1em;
`;

function HeaderRow() {
  return (
    <Row>
      <Col>
        <CenteredSection>
          <HeaderWrapper>
            <h2>
              <FormattedMessage {...messages.header} />
            </h2>
          </HeaderWrapper>
        </CenteredSection>
      </Col>
    </Row>
  );
}

export default HeaderRow;
