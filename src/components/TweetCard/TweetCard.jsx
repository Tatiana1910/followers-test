import {
  ImageBorder,
  Container,
  ImageLabel,
  ImageThumb,
  CardText,
  Button,
} from './TweetCard.styled';

export const TweetCard = () => {
  return (
    <Container>
      <ImageBorder>
        <ImageLabel></ImageLabel>
        <ImageThumb></ImageThumb>
      </ImageBorder>
      <CardText>Tweets</CardText>
      <CardText>Followers</CardText>
      <Button>Follow</Button>
    </Container>
  );
};
