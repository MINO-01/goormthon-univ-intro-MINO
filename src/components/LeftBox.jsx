import styled from "styled-components";
import Introduction from "./Introduction";

const StyledBoxleft = styled.div`
  background-color: #f0f0f0;
  border: solid 3px black;
  border-radius: 16px;
  box-sizing: border-box;
  flex:1;
  padding: 24px;
  margin-left:10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;
function LeftBox(){
    return(
        <StyledBoxleft>
          <Introduction  job="" name =""/>
        </StyledBoxleft>
    );
}

export default LeftBox;