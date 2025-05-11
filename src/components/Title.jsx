import styled from "styled-components";
const StyledTitle = styled.h1`
  color: f5f5f5;
  text-align:center;
  font-size: 3rem;
  padding:20px;
  margin-top:0px;
`;
function Title(){
    return(
        <div>
        <StyledTitle> 자기소개 페이지</StyledTitle>
        </div>
    );
}

export default Title;