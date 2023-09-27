import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import AppleIcon from 'components/icons/apple';
import Button from 'components/buttonGroup/button';
import FacebookIcon from 'components/icons/facebook';
import GoogleIcon from 'components/icons/google';
import MinusIcon from 'components/icons/minus';
import PlusIcon from 'components/icons/plus';


import 'react-loading-skeleton/dist/skeleton.css';
import { axiosClient } from 'helper/axiosClient';

function Template() {
  const [count, setCount] = useState(0);

  const onSubmitAsync = async () => {
    const data = {
      email: 'nv03@gmail.com',
      password: '123456',
    };

    try {
      // Promise
      const response = await axiosClient.post('/employees/login', data);
      console.log(response.data);
    } catch (err) {
      console.error(err);
      console.log('Login thất bại');
    }
  };

  return (
    <div className="Template">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '30px',
        }}
      >
        <h1 className="mb-4">{count}</h1>
        {/* <Button
          icon={<MinusIcon />}
          title="Call API"
          buttonClass="button_secondary"
          iconClass="icon_secondary"
          titleClass="title_secondary"
          onClick={onSubmitAsync}
        /> */}

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

        {/* <Button icon={<AppleIcon />} title="Continue with Apple" />

        <Button icon={<GoogleIcon />} title="Continue with Google" />

        <Button
          icon={<FacebookIcon />}
          title="Continue with Facebook"
          buttonClass="button_secondary"
          iconClass="icon_secondary"
          titleClass="title_secondary"
        /> */}
      </div>
    </div>
  );
}

export default Template;
