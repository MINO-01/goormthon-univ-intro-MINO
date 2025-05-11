import styled from "styled-components";

const Subtitle = styled.h2`
  font-size: 1.7rem;
  font-weight: bold;
`;
const Blogtitle = styled.h2`
  font-size: 1.7rem;
  font-weight: bold;
  margin-top: 130px;
`;
const Link = styled.a`
  font-size:2rem;
  color:green;
  &:hover {
    text-decoration: underline;
  }
`;
const Gitlink = styled.a`
  font-size: 20px;
  color:green;
  &:hover {
    text-decoration: underline;
  }
`;

function ContactLink({url,blogurl}){
    return(
        <div>
            <Subtitle>깃허브 링크</Subtitle>
            <Gitlink href={url}>https://github.com/MINO-01/goormthon-univ-intro-MINO</Gitlink>
            <Blogtitle>블로그 링크</Blogtitle>
            {blogurl &&<Link href={blogurl} target="_blank">블로그 보러가기</Link>}
        </div>
    );
}

export default ContactLink;