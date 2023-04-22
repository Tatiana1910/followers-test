import { Suspense } from 'react';
import {
  StyledLink,
  Header,
  StyledList,
  Footer,
  TextFooter,
} from './Layout.styled';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Header>
        <StyledList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/tweets">Tweets</StyledLink>
          </li>
        </StyledList>
      </Header>
      <main>
        <section>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </section>
      </main>
      <Footer>
        <TextFooter>
          &copy; 2023 Tetiana Kramarenko
          <br />
          All rights reserved.
        </TextFooter>
      </Footer>
    </>
  );
};
