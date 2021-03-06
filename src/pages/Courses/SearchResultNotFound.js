import React from 'react';
import styled from 'styled-components';

function SearchResultNotFound() {
  return (
    <div>
      <UndefinedList big>๐ ๊ฒ์ ๊ฒฐ๊ณผ๊ฐ ์์ด์! ๐</UndefinedList>
      <UndefinedList>
        ํํฐ๋ฅผ ๋ค์ ์ ์ฉํด๋ณด์๊ฑฐ๋ ์นดํ๊ณ ๋ฆฌ๋ฅผ ์ด๋ํด๋ณด์ธ์
      </UndefinedList>
    </div>
  );
}

const UndefinedList = styled.div`
  position: sticky;
  padding: 15px;
  text-align: center;
  font-size: ${props => (props.big ? '50px' : '25px')};
  font-weight: ${props => (props.big ? '700' : '400')};
  color: #787878;
`;

export default SearchResultNotFound;
