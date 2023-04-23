import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 130px;
  padding: 14px 28px;
  color: #373737;
  font-family: 'MontserratSemiBold';
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-size: 20px;
  line-height: 22px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: #5cd3a8;
  }
`;
