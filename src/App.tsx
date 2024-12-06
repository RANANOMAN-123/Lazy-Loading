

import React, { Suspense } from 'react';
import './App.css';
import { NavLinks } from './constant/constants';
import { Loading } from './components/loading';

const Profile = React.lazy(() => import('./components/Profile'));
const AccountSettings = React.lazy(() => import('./components/AccountSettings'));

const App: React.FC = () => {
  const [currentComponent, setCurrentComponent] = React.useState<'profile' | 'settings'>('profile');

  return (
    <div className="App">
      <h1>{NavLinks.line4}</h1>
      <div>
        <button onClick={() => setCurrentComponent('profile')}>{NavLinks.line1}</button>
        <button onClick={() => setCurrentComponent('settings')}>{NavLinks.line2}</button>
      </div>
      <Suspense fallback={<div><Loading /></div>}>
        {currentComponent === 'profile' ? <Profile /> : <AccountSettings />}
      </Suspense>
    </div>
  );
};

export default App;