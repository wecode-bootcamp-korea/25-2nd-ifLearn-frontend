import React, { Component } from 'react';
import styled from 'styled-components';

export default class NavBtn extends Component {
  render() {
    const { value } = this.props;

    return <NavFooter>{value}</NavFooter>;
  }
}

const NavFooter = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 10px;

  :last-child {
    background-color: #fe6d5a;
    margin-left: 10px;
    color: #fff;
  }
`;
