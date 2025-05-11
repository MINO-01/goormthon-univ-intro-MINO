import Wrapper from "./components/Wrapper";
import LeftBox from "./components/LeftBox";
import RightBox from "./components/RightBox";
import Container from "./components/Container";
import Title from "./components/Title";
import ReactionButton from "./components/ReactionButton";
import Comments from "./components/Comments";

function App(){
  return (
    <Container>
      <Title/>
      <Wrapper>
      <LeftBox/>
      <RightBox/>
      </Wrapper>
      <ReactionButton/>
      <Comments/>
    </Container>
  );
};
export default App;