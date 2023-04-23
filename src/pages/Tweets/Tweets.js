import { useLocation } from 'react-router-dom';
import { BackLink } from './Tweets.styled';
import { MdArrowBackIos } from 'react-icons/md';
import { TweetCard } from 'components/TweetCard/TweetCard';

const Tweets = () => {
  const location = useLocation();
  return (
    <>
      <BackLink to={location.state?.from ?? '/'}>
        <MdArrowBackIos />
        Back
      </BackLink>
      <section>
        <TweetCard />
      </section>
    </>
  );
};

export default Tweets;
