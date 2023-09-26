import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Space, Table } from 'antd';

import { LOCATIONS } from 'constants/index';
import { formatter } from 'helper';
import { axiosAdmin } from 'helper/axiosClient';

const columns = [
  {
    title: 'Name',
    // dataIndex: 'name',
    key: 'name',
    render: (text, record, index) => <Link to={`/${LOCATIONS.PRODUCTS_PAGE}/${record._id}`}>{record.name}</Link>,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    width: '5%',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (text, r) => <span>{formatter.format(text)}</span>,
  },
  {
    title: 'Discount',
    dataIndex: 'discount',
    key: 'discount',
    render: (text) => <span>{text || 0} %</span>,
  },
  {
    title: 'Giá bán',
    dataIndex: 'discountedPrice',
    key: 'discountedPrice',
    render: (text, r) => <span>{formatter.format(text)}</span>,
  },
  {
    title: 'Tồn kho',
    dataIndex: 'stock',
    key: 'stock',
  },
  {
    title: 'Danh mục',
    dataIndex: 'stock',
    key: 'stock',
    render: (text, r) => <span>{r.category.name}</span>,
  },
  {
    title: 'Nhà cung cấp',
    dataIndex: 'supplier',
    key: 'supplier',
    render: (text, r) => <span>{r.supplier.name}</span>,
  },
  {
    title: 'Tồn kho ',
    dataIndex: 'stock',
    key: 'stock',
  },
  {
    title: 'Thao tác',
    key: 'action',
    render: () => <span>
      <button>XÓA</button>
      <button>Sửa</button>
    </span>,
  },
];
// 
const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  const getProductsData = async () => {
    try {
      const url = '/products';

      const res = await axiosAdmin.get(url);

      setProducts(res.data.payload);
    } catch (err) {
      console.error('««««« err »»»»»', err);
    }
  }

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <Table rowKey="_id" columns={columns} dataSource={products} />
  )
};

export default ProductsPage;