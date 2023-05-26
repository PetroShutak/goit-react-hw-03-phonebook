import { Component } from 'react';
import PropTypes from 'prop-types';
import { FooterStyled } from './Footer.styled';

export default class Footer extends Component {
  render() {
    return (
      <FooterStyled>
        <p>
          © 2023 Phonebook. All rights reserved. <br />
          Created by Petro Shutak
        </p>
      </FooterStyled>
    );
  }
}

Footer.propTypes = {
  children: PropTypes.node,
};
