import { Image, StyledDiv } from './Home.styled';
import phonebook from '../../images/phonebook.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <StyledDiv>
      <Link to="/tweets">
        <Image src={phonebook} alt="phonebook" />
      </Link>
    </StyledDiv>
  );
};

export default Home;
