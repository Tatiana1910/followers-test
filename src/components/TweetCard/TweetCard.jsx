import { useEffect, useState } from 'react';
import {
  ImageBorder,
  Container,
  ImageLabel,
  ImageThumb,
  CardText,
} from './TweetCard.styled';
import { updateFollowers } from 'helpers/fetchApi';
import { Button } from 'components/Button/Button';

export const TweetCard = ({ userObj, setFollowedUsers, followed }) => {
  const [isActive, setIsActive] = useState(followed);
  const [currentUser, setCurrentUser] = useState(userObj);

  useEffect(() => {
    if (currentUser === userObj) {
      return;
    }
    updateFollowers(currentUser);
  }, [currentUser, userObj]);

  const handleClick = () => {
    if (!isActive) {
      setIsActive(true);
      setFollowedUsers(prev => [...prev, userObj]);
      setCurrentUser(prev => ({ ...prev, followers: prev.followers + 1 }));
    } else {
      setIsActive(false);
      setFollowedUsers(prev => {
        const newFollowedUsers = prev.filter(
          item => item.user !== userObj.user
        );
        return newFollowedUsers;
      });
      setCurrentUser(prev => ({ ...prev, followers: prev.followers - 1 }));
    }
  };

  return (
    <Container>
      <ImageBorder>
        <ImageLabel>{currentUser.user}</ImageLabel>
        <ImageThumb>
          <img src={currentUser.avatar} alt={currentUser.user} />
        </ImageThumb>
      </ImageBorder>
      <CardText>{currentUser.tweets.toLocaleString('en-IN')} Tweets</CardText>
      <CardText>
        {currentUser.followers.toLocaleString('en-IN')} Followers
      </CardText>
      <Button
        text={isActive ? 'Following' : 'Follow'}
        onClick={handleClick}
        isActive={isActive}
      />
    </Container>
  );
};
