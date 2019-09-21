import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { cl } from '../styled/GlobalStyle';

function DashboardActions(props) {
  return (
    <StyledActions>
      <Link to="/edit-profile" className="cta-link">
        Edit Profile
      </Link>
      <Link to="/add-experience" className="cta-link">
        Add Experience
      </Link>
      <Link to="/add-education" className="cta-link">
        Add Education
      </Link>
    </StyledActions>
  );
}

DashboardActions.propTypes = {};
const StyledActions = styled.div`
  padding: 2rem 0;
  a {
    margin: 1rem 0.3rem;
    background: ${cl.dark};
    color: ${cl.white};
    font-size: 1.3rem;
    padding: 1rem;
    font-weight: normal;
  }
`;
export default DashboardActions;