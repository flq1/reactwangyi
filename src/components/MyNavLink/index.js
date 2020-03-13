// import React from 'react'
// import { NavLink } from 'react-router-dom'
// export default function MyNavLink (props) {
//   return <NavLink className='list-group-item'
//     activeClassName='my-active' {...props} />
// }
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MyNavLink (props) {
  return (
    <NavLink
      className='list-group-item'
      activeClassName='my-active'
      // 将props对象上所有属性展开在 NavLink
      // to={props.to}
      // children={props.children}
      {...props}
    />
  );
}
