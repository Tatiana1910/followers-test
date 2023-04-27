import { useLocation } from 'react-router-dom';
import { BackLink, LoadMoreBtn } from './Tweets.styled';
import { MdArrowBackIos } from 'react-icons/md';
import { TweetCardList } from 'components/TweetCardList/TweetCardList';
import { useEffect, useState } from 'react';
import { getAllUsers } from 'services/fetchApi';
import { Loader } from 'components/Loader/Loader';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [enableFetch, setEnableFetch] = useState([]);

  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    getAllUsers(page)
      .then(data => {
        if (!data) {
          return;
        } else if (data.length < 3) {
          setUsers(prev => [...prev, ...data]);
          setEnableFetch(false);
          return;
        }
        page === 1 ? setUsers([...data]) : setUsers(prev => [...prev, ...data]);
        setEnableFetch(true);
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, [page]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <BackLink to={location.state?.from ?? '/'}>
        <MdArrowBackIos />
        Back
      </BackLink>

      <section>
        <TweetCardList users={users} />
      </section>
      {enableFetch && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore}>LoadMore</LoadMoreBtn>
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default Tweets;
