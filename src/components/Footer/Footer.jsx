import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <p>
          © 2023 Phonebook. All rights reserved. <br />
          Created by Petro Shutak
        </p>
      </div>
    );
  }
}

Footer.propTypes = {
  children: PropTypes.node,
};
