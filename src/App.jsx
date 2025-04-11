import styled from "styled-components";

const Title = styled.h1`
  color: f5f5f5;
  text-align:center;
  border: 5px solid green;
  font-size: 3rem;
  padding:20px;
  margin-top:0px;
`;
const Container = styled.div`
  background-color: black;
  color:black;
  text-align:center;
`;
const Link = styled.a`
  font-size:2rem;
  color:green;
  &:hover {
    text-decoration: underline;
  }
`;
const Box = styled.div`
  background-color: #f0f0f0;
  border-radius: 16px;     
  padding: 24px;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;
const Wapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App(){
  return (
    <Container>
      <Wapper>
      <Box>
      <Title>저를 소개합니다.</Title>
      <h2>한 줄 자기소개</h2>
      <p>저는 개발자라는 목표가 생겨 이번에 편입으로 컴퓨터소프트웨어공학과에 들어왔고 부족하지만 이번 구름톤 활동에 열심히 참여하도록 하겠습니다.</p>
      <h2>깃허브 링크</h2>
      <p><a href="https://github.com/MINO-01/goormthon-univ-intro-MINO">https://github.com/MINO-01/goormthon-univ-intro-MINO</a></p>
      <h2>관심 분야</h2>
      <p>프론트엔드 개발자</p>
      <Link href="https://velog.io/@mino-01" target="_blank">블로그 보러가기</Link>
      </Box>
      </Wapper>
    </Container>
  )
}
export default App;