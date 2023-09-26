import { useState } from 'react';

import Layout from 'components/layout';
import Main from 'components/main';
import Register from 'components/register';

import './App.css';
import PlayList from 'components/playList';

function App() {
  const [title] = useState('Đây là trang APP nè');

  return (
    <div className="container-fluid h-full d-flex">
      {/* <Register /> */}
      <PlayList />

    </div>
  );
}

export default App;
