import 'modern-normalize';

import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Tweets from 'pages/Tweets/Tweets';
import { GlobalStyles } from './GlobalStyles';

const Home = lazy(() => import('../pages/Home/Home'));

export const App = () => {
  return (
    <>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
        </Route>
      </Routes>
    </>
  );
};
