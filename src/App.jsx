import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton'

// import Music from 'components/music';
import AppleIcon from 'components/icons/apple';
import Button from 'components/buttonGroup/button';
import CardList from 'components/cardList';
import FacebookIcon from 'components/icons/facebook';
import Form from 'components/Form';
import GoogleIcon from 'components/icons/google';
import ImageSlider from 'components/imageSlider';
import ImageSlider2 from 'components/imageSlider2';
import Layout from 'components/layout';
import Main from 'components/main';
import MinusIcon from 'components/icons/minus';
import MusicRaw from 'components/playList/musicPlay';
import PlayList from 'components/playList';
import PlusIcon from 'components/icons/plus';
import Tabs from 'components/tabs';

import imageList from 'fakeData/image.json';

import 'react-loading-skeleton/dist/skeleton.css'
import './App.css';
import { axiosClient, axiosAdmin } from 'helper/axiosClient';
import axios from 'axios';

function App() {
  const [title] = useState('Đây là trang APP nè');
  const [count, setCount] = useState(10);
  const [products, setProducts] = useState([]);
  const [post, setPost] = useState([]);

  // useEffect(() => {
  //   axios.get("https://64a021baed3c41bdd7a707f1.mockapi.io/products")
  //   .then(function (res) {
  //     setProducts(res.data)
  //   })
  //   .catch(function (error) {
  //     console.error('««««« error »»»»»', error);
  //   })
  // }, []);

  const onSubmitAsync = async () => {
    const data = {
      email: 'nv03@gmail.com',
      password: '123456',
    };

    try {
      // Promise
      const response = await axiosClient.post("/employees/login", data);
      console.log(response.data);
    } catch (err) {
      console.error(err);
      console.log('Login thất bại');
    }
  };

  const getProducts = async () => {
    try {
      const url = "https://64a021baed3c41bdd7a707f1.mockapi.io/products"
      const res = await axios.get(url);
      setProducts(res.data)
    } catch (err) {
      console.error('««««« err »»»»»', err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => res.json())
  //     .then(data => setPost(data));
  // }, []);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function (res) {
    setPost(res.data)
  })
  .catch(function (error) {
    console.error('««««« error »»»»»', error);
  })
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
          
          <Form />

          <PlayList />

          <Button
            icon={<MinusIcon />}
            title="Call API"
            buttonClass="button_secondary"
            iconClass="icon_secondary"
            titleClass="title_secondary"
            onClick={onSubmitAsync}
          />

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
            icon={<i className="fa-solid fa-xmark fa-2xl"></i>}
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

          {/* <Music /> */}
          <MusicRaw />

          <ImageSlider imageList={imageList} />

          <ImageSlider2 imageList={imageList} />

          <Tabs />

          {/* <CardList list={post} /> */}

          <CardList list={products} />
        </div>
        <Main />
      </Layout>
    </div>
  );
}

export default App;
