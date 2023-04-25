import { TweetCard } from 'components/TweetCard/TweetCard';
import { StyledList } from './TweetCardList.styled';
import { useState, useEffect } from 'react';

export const TweetCardList = ({ users }) => {
  const [followedUsers, setFollowedUsers] = useState(
    JSON.parse(localStorage.getItem('followed')) || []
  );

  useEffect(() => {
    localStorage.setItem('followed', JSON.stringify(followedUsers));
  }, [followedUsers]);

  useEffect(() => {
    const unfollowedUsers = [];
    followedUsers.forEach(user => unfollowedUsers.push(user.id));
  }, [followedUsers]);

  return (
    <StyledList>
      {users.map(user => {
        const isFollowedUser = followedUsers.filter(
          item => item.user === user.user
        );
        const followed = isFollowedUser.length > 0 ? true : false;

        return (
          <TweetCard
            key={user.id}
            userObj={user}
            setFollowedUsers={setFollowedUsers}
            followed={followed}
          />
        );
      })}
    </StyledList>
  );
};
