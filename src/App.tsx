import { useState } from 'react';
import Login from './components/pages/login';
import Main from './components/pages/main';

type AppView = 'main' | 'login' | 'settings';

function App() {
  const [view, setView] = useState<AppView>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-screen min-w-0 min-h-0 flex justify-center items-center">
      {view === 'main' && <Main setView={setView} />}
      {view === 'login' && <Login setView={setView} />}
      {view === 'settings' && <Login setView={setView} />}
    </div>
  );
}

export default App;
