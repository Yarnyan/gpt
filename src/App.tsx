import React, { Suspense, useEffect } from 'react';
import './App.scss';
import Navbar from './Components/Navbar';
import { useActiveMenu } from 'react-active-menu';
import LocalNavbar from './Components/LocalNavbar';
import { useMediaQuery } from 'react-responsive';
import MobileMenu from './Components/MobileMenu';

function App() {
  
  const LazyMainPage = React.lazy(() => import('./Pages/Main'));
  const LazyBotPage = React.lazy(() => import('./Pages/Bot'));
  const LazyAboutPage = React.lazy(() => import('./Pages/About'));
  const LazyFondPage = React.lazy(() => import('./Pages/Fond'));
  const LazyContactsPage = React.lazy(() => import('./Pages/Contacts'));
  const LazyReviewsPage = React.lazy(() => import('./Pages/Reviews'));
  const LazyNewsPage = React.lazy(() => import('./Pages/News'));
  const LazyFAQPage = React.lazy(() => import('./Pages/faq'));

  const { registerContainer } = useActiveMenu();

  const matchesMobile = useMediaQuery({
    query: '(max-width: 1300px)'
  })

  return (
    <div className="App">
      <div className="wrap">
        <div ref={registerContainer} className="content">
          <Suspense>
            <LazyMainPage />
            <LazyFondPage />
            {/* <LazyBotPage />
            <LazyAboutPage />
            <LazyNewsPage />
            <LazyReviewsPage />
            <LazyFAQPage />
            <LazyContactsPage /> */}
          </Suspense>
        </div>
        {
          !matchesMobile ?
            <div className="navBar">
              <Navbar />
            </div> :
            <MobileMenu/>
        }

      </div>
    </div>
  );
}

export default App;
