//src/components/ReactionButton.jsx
import styled from "styled-components";
import{useState,useEffect} from 'react';

const Button = styled.button`
  display:inline-block;
  margin: 10px;
  margin-top:0px
  font-size: 20px;
  background-color:#ffffff;
  color:black;
  border: solid black 2px;
`;
const Notice = styled.p`
  display:inline-block;
  font-size: 20px;
  font-weight:bold;
  color:black;
`;

function ReactionButton(){

   const [count, setCount] = useState(0);
   const goodClick = () =>{
    setCount(count +1);
    alert("좋아요가 적립되었습니다!");
   };
   
   const [badCount, setbadCount] = useState(0);
   const badClick = () =>{
    setbadCount(badCount+1);
    alert("싫어요가 적립되었습니다.")
   };
  useEffect(() => {
    alert("자기소개 페이지에 오신 것을 환영합니다!")
  },[]);

  useEffect(() => {
    if(count == 10){
      alert("⭐좋아요를 10번이나 눌러주었습니다⭐")
    }
  },[count]);
  return(
    <div>
    <Button onClick={goodClick}>👍 {count}</Button>
     {count==5 && <Notice>감사합니다👍</Notice>}
    <Button onClick={badClick}>👎{badCount} </Button>
    {badCount== 5 && <Notice>죄송합니다👎</Notice>}
    </div>
  );
};

export default ReactionButton;