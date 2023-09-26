import React from 'react';
import { Redirect } from 'react-router-dom';
import { LOCATIONS } from 'constants/index';

import ParentComponent from 'components/example/useCallback';
import Layout from 'components/layout';
import FormPage from 'pages/form';
import PlayList from 'pages/playList';
import ProductsPage from 'pages/products';
import SliderPage from 'pages/slider';
import TabPage from 'pages/tabs';
import Template from 'pages/template';
import NotFoundPage from 'pages/404';
import CounterApp from 'pages/counterApp';
import TodoApp from 'pages/todoApp';
import Profile from 'pages/profile';

const routers = [
  {
    path: LOCATIONS.HOME_PAGE,
    name: "Layout",
    element: <Layout />,
    children: [
      { isRoot: true, name: "Parent Component", element: <ParentComponent /> },
      { path: LOCATIONS.PLAY_LIST, name: "Play List", element: <PlayList /> },
      { path: LOCATIONS.FORM, name: "Form Register", element: <FormPage /> },
      { path: LOCATIONS.TAB, name: "Tab", element: <TabPage /> },
      { path: LOCATIONS.SLIDE, name: "Slider", element: <SliderPage /> },
      { path: LOCATIONS.PRODUCTS, name: "Product Page", element: <ProductsPage /> },
      { path: LOCATIONS.MY_PROFILE, name: "My Profile", element: <Profile /> },
    ]
  },
  { path: LOCATIONS.TEMPLATE, name: "Template", element: <Template /> },
  { path: LOCATIONS.COUNTER, name: "Counter", element: <CounterApp /> },
  { path: LOCATIONS.TODO, name: "Todo", element: <TodoApp /> },
  { path: "*", element: <NotFoundPage /> },
];

export default routers;