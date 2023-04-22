import { Image, StyledDiv } from './Home.styled';
import phonebook from '../../images/phonebook.png';

const Home = () => {
  return (
    <StyledDiv>
      <Image src={phonebook} alt="phonebook" />
    </StyledDiv>
  );
};

export default Home;
