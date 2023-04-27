import 'modern-normalize';

import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';

import { GlobalStyles } from './GlobalStyles/GlobalStyles';

const Home = lazy(() => import('./pages/Home/Home'));
const Tweets = lazy(() => import('./pages/Tweets/Tweets'));

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
