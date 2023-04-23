import { Suspense } from 'react';
import {
  StyledLink,
  Header,
  StyledList,
  Footer,
  TextFooter,
} from './Layout.styled';
import { Outlet, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  const location = useLocation();
  return (
    <>
      <Header>
        <StyledList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/tweets" state={{ from: location }}>
              Tweets
            </StyledLink>
          </li>
        </StyledList>
      </Header>
      <main>
        <section>
          <Suspense fallback={<Loader />}>
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
