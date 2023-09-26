import React from 'react';
import { Redirect } from 'react-router-dom';
// import { LOCATIONS } from 'constants/index';
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

const LOCATIONS = {
  HOME_PAGE: '/',
  PLAY_LIST: 'play-list',
  FORM: 'form',
  TAB: 'tabs',
  SLIDE: 'slider',
  PRODUCTS: 'products',
  TEMPLATE: 'template',
  COUNTER: 'counter',
  TODO: 'todo',
}

const routers = [
  {
    path: LOCATIONS.HOME_PAGE,
    element: <Layout />,
    children: [
      { isRoot: true, element: <ParentComponent /> },
      { path: LOCATIONS.PLAY_LIST, element: <PlayList /> },
      { path: LOCATIONS.FORM, element: <FormPage /> },
      { path: LOCATIONS.TAB, element: <TabPage /> },
      { path: LOCATIONS.SLIDE, element: <SliderPage /> },
      { path: LOCATIONS.PRODUCTS, element: <ProductsPage /> 
    },
    ]
  },
  { path: LOCATIONS.TEMPLATE, element: <Template /> },
  { path: LOCATIONS.COUNTER, element: <CounterApp /> },
  { path: LOCATIONS.TODO, element: <TodoApp /> },
  { path: "*", element: <NotFoundPage /> },
];

export default routers;