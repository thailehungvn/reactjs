import { useState } from 'react';

import Layout from 'components/layout';
import Main from 'components/main';
import Register from 'components/register';

import './App.css';

function App() {
  const [title] = useState('Đây là trang APP nè');

  return (
    <div className="container-fluid h-full d-flex">
      <Register />
    </div>
  );
}

export default App;
