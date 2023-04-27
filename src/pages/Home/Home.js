import { Image, StyledDiv } from './Home.styled';
import follow from '../../images/follow.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <StyledDiv>
      <Link to="/tweets">
        <Image src={follow} alt="follow" />
      </Link>
    </StyledDiv>
  );
};

export default Home;
