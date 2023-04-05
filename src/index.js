import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { publicRoutes } from './routes';
import GlobalStyles from './components/GlobalStyles'
import ScrollToTop from './components/ScrollToTop'
import { DefaultLayout } from './layouts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalStyles>
    <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route key={index} path={route.path} element={
                <Layout>
                  <ScrollToTop />
                  <Page />
                </Layout>
              } />
            );
          })}
        </Routes>
    </BrowserRouter>
  </GlobalStyles>
);
