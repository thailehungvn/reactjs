import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Space, Table, Tag } from 'antd';

import CardList from 'components/cardList';
import { Link } from 'react-router-dom';
import { formatter } from 'helper';

function ProductsPage(props) {
  const [products, setProducts] = useState([]);

  const columns = [
    {
      title: 'No',
      key: 'no',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Product',
      dataIndex: 'productName', // field muốn mapping
      key: 'productName',
      render: (text, record) => <Link to={`products/${record.id}`}>{text}</Link>,
    },
    {
      title: 'Thumbnail',
      dataIndex: 'image',
      key: 'image',
      render: (text, record) => <img src={text} alt="pic" />,
    },
    {
      title: 'ShopName',
      dataIndex: 'shopName',
      key: 'shopName',
    },
    {
      title: 'Price',
      dataIndex: 'oldPrice',
      key: 'oldPrice',
      render: (text) => <span>{formatter.format(text)}</span>,
    },
    {
      title: 'New Price',
      key: 'newPrice',
      render: (text, r) => <span>{formatter.format(r.newPrice)}</span>,
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
    },
    
    // {
    //   title: 'Tags',
    //   key: 'tags',
    //   dataIndex: 'tags',
    //   render: (_, { tags }) => (
    //     <>
    //       {tags.map((tag) => {
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'loser') {
    //           color = 'volcano';
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    // {
    //   title: 'Action',
    //   key: 'action',
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <a>Invite {record.name}</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
  ];
  
  const getProducts = async () => {
    try {
      const url = 'https://nodejs-4fqb.onrender.com/products';
      const res = await axios.get(url);
      setProducts(res.data);
    } catch (err) {
      console.error('««««« err »»»»»', err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  // <CardList list={products} />

  return (
    <Table columns={columns} dataSource={products} />
  )
  ;
}

export default ProductsPage;