import React from 'react';
import Header from '../header';
import Footer from '../footer';

import './layout.css';

export default function Layout(props) {
  console.log('««««« props »»»»»', props);
  const { children, title } = props;
  // const children = props.children;
  // const title = props.title;

  return (
    <>
      <Header />

      <aside className="aside-left"></aside>

        <h1>{title}</h1>

        {children}
      <Footer />
    </>
  );
}
