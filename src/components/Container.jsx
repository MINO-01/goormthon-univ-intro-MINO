import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: white;
  color:black;
`;

function Container({children}){
    return <StyledContainer>{children}</StyledContainer>;
}

export default Container;