import styled from "styled-components";

const Info = styled.p`
  font-size:20px;
  line-height:1.7;
`;

const Subtitle = styled.h2`
  font-size: 1.7rem;
  font-weight: bold;
`;

function Introduction({job,name}){
    return(
        <div>
        <Subtitle>이름</Subtitle>
        <Info>{name || "정보없음"}</Info>
        <Subtitle>관심 분야</Subtitle>
        <Info>{job || "정보없음"}</Info>
        <Subtitle>자기소개</Subtitle>
        <Info>저는 개발자라는 목표가 생겨 이번에 편입으로 컴퓨터소프트웨어공학과에 들어왔고 부족하지만 이번 구름톤 활동에 열심히 참여하도록 하겠습니다.</Info>
        </div>
    );
}

export default Introduction;