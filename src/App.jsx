import { useEffect, useState } from 'react';

import AppleIcon from './components/icons/apple';
import Button from './components/buttonGroup/button';
import FacebookIcon from './components/icons/facebook';
import GoogleIcon from './components/icons/google';
import Layout from './components/layout';
import Main from './components/main';
import MinusIcon from './components/icons/minus';
import PlusIcon from './components/icons/plus';
import CardList from './components/cardList';

import productList from './fakeData/MOCK_DATA.json';

import './App.css';


function App() {
  const [title] = useState('Đây là trang APP nè');
  const [count, setCount] = useState(10);
  const [products, setProducts] = useState([]);

  useEffect(() => {
  setProducts(productList)
  }, []);

  return (
    <div className="App">
      <Layout title={title}>
        {/* <button onClick={() => setCount(count + 10)}> Count click</button> */}

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '30px',
          }}
        >
          <Button
            icon={<MinusIcon />}
            title="Trừ"
            buttonClass="button_secondary"
            iconClass="icon_secondary"
            titleClass="title_secondary"
            count={count}
            onClick={() => setCount(count - 1)}
          />

          <Button
            icon={<PlusIcon />}
            title="Cộng"
            count={count}
            onClick={() => setCount(count + 1)}
          />

          <Button
            title="Nhân đôi"
            icon={<i class="fa-solid fa-xmark fa-2xl"></i>}
            buttonClass="button_secondary"
            iconClass="icon_secondary"
            titleClass="title_secondary"
            count={count}
            onClick={() => setCount(count * 2)}
          />

          <Button icon={<AppleIcon />} title="Continue with Apple" />

          <Button icon={<GoogleIcon />} title="Continue with Google" />

          <Button
            icon={<FacebookIcon />}
            title="Continue with Facebook"
            buttonClass="button_secondary"
            iconClass="icon_secondary"
            titleClass="title_secondary"
          />

          <CardList list={products} />
        </div>
        <Main />
      </Layout>
    </div>
  );
}

export default App;
