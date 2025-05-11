import styled from "styled-components";
import ContactLink from "./ContactLink";

const Boxright = styled.div`
  background-color: #f0f0f0;
  border: solid 3px black;
  border-radius: 16px;
  box-sizing: border-box;
  flex:1;
  padding: 24px;
  margin-right:10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;
function RightBox(){
  return(
    <Boxright>
      <ContactLink url="https://github.com/MINO-01/goormthon-univ-intro-MINO" blogurl="https://velog.io/@mino-01"/>
    </Boxright>
  );
}

export default RightBox;