import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

`

export default () => (
  <Wrapper>
    <Link href ="/hoge">
      <a>Counter APP</a>
    </Link>
  </Wrapper>
);
