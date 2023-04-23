import { useLocation } from 'react-router-dom';
import { BackLink } from './Tweets.styled';
import { MdArrowBackIos } from 'react-icons/md';
import { TweetCardList } from 'components/TweetCardList/TweetCardList';

const Tweets = () => {
  const location = useLocation();
  return (
    <>
      <BackLink to={location.state?.from ?? '/'}>
        <MdArrowBackIos />
        Back
      </BackLink>
      <section>
        <TweetCardList />
      </section>
    </>
  );
};

export default Tweets;
