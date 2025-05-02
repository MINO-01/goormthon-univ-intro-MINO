import styled from "styled-components";
import { useState, useEffect } from 'react';

const Title = styled.h1`
  color: f5f5f5;
  text-align:center;
  font-size: 3rem;
  padding:20px;
  margin-top:0px;
`;
const Container = styled.div`
  background-color: white;
  color:black;
`;
const Link = styled.a`
  font-size:2rem;
  color:green;
  &:hover {
    text-decoration: underline;
  }
`;
const Boxleft = styled.div`
  background-color: #f0f0f0;
  border: solid 3px black;
  border-radius: 16px;
  box-sizing: border-box;
  flex:1;
  padding: 24px;
  margin-left:10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;
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
const Wapper = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  text-align:center;
  align-items: stretch;
  width: 100vw;
  margin-bottom: 5px;
`;
const Info = styled.p`
  font-size:20px;
  line-height:1.7;
`;
const Gitlink = styled.a`
  font-size: 20px;
  color:green;
  &:hover {
    text-decoration: underline;
  }
`;
const Subtitle = styled.h2`
  font-size: 1.7rem;
  font-weight: bold;
`;
const Bloginfo = styled.p`
  margin-top: 100px;
`;
const Button = styled.button`
  display:inline-block;
  margin: 10px;
  margin-top:0px
  font-size: 20px;
  background-color:#ffffff;
  color:black;
  border: solid black 2px;
`;

// 댓글 스타일 컴포넌트
const Contcontainer = styled.div`
  margin:10px
`;

const ToggleButton = styled.button`
  background-color: #ffffff;
  color: black;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: green;
  }
`;

const CommentBox = styled.textarea`
  width: 300px;
  padding: 10px;
  border: solid black 2px;
  background-color:#ffffff;
  color:black;
  border-radius: 5px;
  resize: none;
`;

const SubmitButton = styled.button`
  margin-top: 5px;
  padding: 8px 15px;
  background-color: #ffffff;
  color: black;
  border: solid black 2px;
  border-radius: 5px;
  cursor: pointer;
  text-align:right;
  &:hover {
    background-color: #218838;
  }
`;

const CommentList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;

const CommentItem = styled.li`
  background-color: #f1f1f1;
  padding: 5px;
  margin-top: 5px;
  border-radius: 5px;
  display:block;
`;

const CommentSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const toggleComments = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const addComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <Contcontainer>
      <ToggleButton onClick={toggleComments}>
        {isOpen ? "▲ 닫기" : "▼ 댓글"}
      </ToggleButton>

      {isOpen && (
        <div>
          <CommentBox
            value={comment}
            onChange={handleInputChange}
            placeholder="댓글을 입력하세요"
            rows="4"
            cols="50"
          />
          <br />
          <SubmitButton onClick={addComment}>등록</SubmitButton>

          <CommentList>
            {comments.map((cmt, index) => (
              <CommentItem key={index}>{cmt}</CommentItem>
            ))}
          </CommentList>
        </div>
      )}
    </Contcontainer>
  );
};

function App(){

   const [count, setCount] = useState(0);
   const goodClick = () =>{
    setCount(count +1);
    alert("좋아요가 적립되었습니다!");
    if(count == 9){
      alert("⭐좋아요를 10번이나 눌러주었습니다⭐")
    }
   };
   
   const [badCount, setbadCount] = useState(0);
   const badClick = () =>{
    setbadCount(badCount+1);
    alert("싫어요가 적립되었습니다.")
   };
  useEffect(() => {
    alert("자기소개 페이지에 오신 것을 환영합니다!")
  },[]);

  return (
    <Container>
      <Title>저를 소개합니다.</Title>
      <Wapper>
      <Boxleft>
      <Subtitle>한 줄 자기소개</Subtitle>
      <Info>저는 개발자라는 목표가 생겨 이번에 편입으로 컴퓨터소프트웨어공학과에 들어왔고 부족하지만 이번 구름톤 활동에 열심히 참여하도록 하겠습니다.</Info>
      <Subtitle>관심 분야</Subtitle>
      <Info>프론트엔드 개발자</Info>
      </Boxleft>
      <Boxright>
      <Subtitle>깃허브 링크</Subtitle>
      <Gitlink href="https://github.com/MINO-01/goormthon-univ-intro-MINO">https://github.com/MINO-01/goormthon-univ-intro-MINO</Gitlink>
      <Bloginfo><Link href="https://velog.io/@mino-01" target="_blank">블로그 보러가기</Link></Bloginfo>
      </Boxright>
      </Wapper>
      <Button onClick={goodClick}>👍 {count}</Button>
      <Button onClick={badClick}>👎{badCount} </Button>
      <CommentSection />
    </Container>
  );
};
export default App;