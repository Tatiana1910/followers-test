import { RotatingTriangles } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export const Loader = () => {
  return (
    <Container>
      <RotatingTriangles
        visible={true}
        height="100"
        width="100"
        colors={['#5736a3', '#5736a3', '#5736a3']}
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangels-wrapper"
      />
    </Container>
  );
};
