import React, { Component } from 'react'
import MyNavLink from '../MyNavLink/index'
class Footer extends Component {
  render () {
    return <div>
      <MyNavLink to="/home" >首页</MyNavLink>
      <MyNavLink to="/classifcation" >分类</MyNavLink>
      <MyNavLink to="/buy" >值得买</MyNavLink>
      <MyNavLink to="/cart" >购物车</MyNavLink>
      <MyNavLink to="/personal">个人</MyNavLink>
    </div>
  }
}
export default Footer