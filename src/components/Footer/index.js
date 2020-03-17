import React, { Component } from 'react'

import {
  DatabaseOutlined,
  HomeOutlined,
  TransactionOutlined,
  UserDeleteOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import MyNavLink from '../MyNavLink/index'
import './index.styl'
class Footer extends Component {
  render () {
    return <div className="Footer" >
      <MyNavLink to="/home"  >
        <HomeOutlined />
        首页</MyNavLink>
      <MyNavLink to="/classification" >
        <DatabaseOutlined />
        分类</MyNavLink>
      <MyNavLink to="/buy" >
        <TransactionOutlined />
        值得买</MyNavLink>
      <MyNavLink to="/cart" >
        <ShoppingCartOutlined />
        购物车</MyNavLink>
      <MyNavLink to="/personal">
        <UserDeleteOutlined />
        个人</MyNavLink>

    </div>
  }
}
export default Footer