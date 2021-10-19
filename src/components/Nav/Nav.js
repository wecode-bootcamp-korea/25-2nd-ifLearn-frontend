import React, { Component } from 'react';
import NavBtn from '../NavBtn';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
export default class Nav extends Component {
  render() {
    return (
      <NavHeader>
        <div className="navInner">
          <Link to="/">
            <img src="../images/navlogo.png" alt="logo" />
          </Link>
          <div className="header">
            <Link className="navLink" to="/">
              강의
            </Link>
            <Link className="navLink secondLink" to="/">
              로드맵
            </Link>
            <Link className="navLink" to="/">
              멘토링
            </Link>
            <Link className="navLink fourthLink" to="/">
              커뮤니티
            </Link>
            <Link className="navLink" to="/">
              이프런
            </Link>
          </div>
        </div>

        <div className="section">
          <NavBtn value="로그인" />
          <NavBtn value="회원가입" />
        </div>
      </NavHeader>
    );
  }
}

const NavHeader = styled.div`
  position: fixed;
  top: 0;
  z-index: 9999;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 100px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  .navInner {
    display: flex;
    align-items: center;
    .navLink {
      color: black;
      text-decoration: none;
      font-weight: 300;
    }
    .header {
      align-items: center;

      .secondLink,
      .fourthLink {
        margin: 0px 45px;
      }
    }

    img {
      width: 110px;
      height: 20px;
      margin-right: 45px;
    }
  }
`;
