import React, { Suspense, useEffect } from 'react';
import './App.scss';
import Navbar from './Components/Navbar';
import { useActiveMenu } from 'react-active-menu';
import LocalNavbar from './Components/LocalNavbar';
import { useMediaQuery } from 'react-responsive';
import MobileMenu from './Components/MobileMenu';

function App() {
  
  const LazyMainPage = React.lazy(() => import('./Pages/Main'));
  const LazyFondPage = React.lazy(() => import('./Pages/Fond'));
  const LazyVersatilityPage = React.lazy(() => import('./Pages/Versatility'));
  const LazyManagerPage = React.lazy(() => import('./Pages/Manager'));

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
            <LazyVersatilityPage />
            <LazyManagerPage />
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
