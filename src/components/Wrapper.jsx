// //src/components/Wrapper.jsx
import styled from "styled-components";
import React from "react";

const StyledWrapper = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  text-align:center;
  align-items: stretch;
  width: 100vw;
  margin-bottom: 5px;
`;
// children:Wrappper 안에 들어갈 모든 하위 요소들
function Wrapper({children}){
    return <StyledWrapper>{children}</StyledWrapper>;
}

export default Wrapper;

