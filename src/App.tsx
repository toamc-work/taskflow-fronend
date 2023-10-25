import React, { useMemo } from 'react';
import logo from './logo.svg';
import './App.css';
import { RegisterScreen } from './screens/Register/screens';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { useResponsive } from './globalHooks/useResponsive';
import { LoginScreen } from './screens/Login/screens';
function App() {
  const {mobile, tablet, desktop} = useResponsive();
  
  const device = useMemo(() => {

    if(mobile.isMobile) return mobile.name;
    else if(tablet.isTablet) return tablet.name;
    else return desktop.name;

  }, [mobile, tablet, desktop]);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
          <Route path='/signup' element={<RegisterScreen status={device}/>}/>
          <Route path='/signin' element={<LoginScreen status={device}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
