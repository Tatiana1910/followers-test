import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background-image: linear-gradient(-110deg, rgb(31 9 61), rgb(160 88 233));
  display: flex;
  align-items: center;
  box-shadow: 0px 5px 10px 2px rgba(189, 145, 161, 0.53);
  padding-left: 55px;
  padding-right: 55px;
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 50px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  padding-top: 32px;
  padding-bottom: 32px;
  font-weight: 500;
  font-size: 25px;
  transform: scale(1);
  transition: transform 250ms linear;

  &:hover,
  &:focus {
    color: #5cd3a8;
    transform: scale(1.1);
  }

  &.active {
    color: #5cd3a8;
    transform: scale(1.1);
  }
`;

export const Footer = styled.footer`
  background-image: linear-gradient(
    -110deg,
    rgb(9 60 61 / 49%),
    rgb(233 88 170 / 64%)
  );
`;

export const TextFooter = styled.p`
  color: black;
  text-align: center;
  color: black;
  font-size: 15px;
  font-weight: 500;
  margin: 0;
  padding: 10px;
`;
