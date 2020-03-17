import React, { Component } from 'react'

import './index.styl'
import {
  SearchOutlined
} from '@ant-design/icons';
import { Input, Button } from 'antd';

import { StickyContainer, Sticky } from 'react-sticky';
import { Carousel, Tabs, Icon, Grid } from 'antd-mobile';
class Home extends Component {
  state = {
    data: ['https://yanxuan.nosdn.127.net/781abaabb8136266ad81df530da655af.jpg?type=webp&imageView&quality=75&thumbnail=750x0', 'https://yanxuan.nosdn.127.net/31e77563da87061c9225cc5c7501ff24.jpg?type=webp&imageView&quality=75&thumbnail=750x0', 'https://yanxuan.nosdn.127.net/42ad3b25dedc0ed434f1b7974b4c8ae3.jpg?type=webp&imageView&quality=75&thumbnail=750x0', 'https://yanxuan.nosdn.127.net/31e77563da87061c9225cc5c7501ff24.jpg?type=webp&imageView&quality=75&thumbnail=750x0'],
    imgHeight: 176,
    slideIndex: 2,
  }
  renderTabBar = (props) => {
    return (<Sticky>
      {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} page={3} /></div>}
    </Sticky>);
  }
  tabs = [
    { title: ' 推荐 ', key: 't1' },
    { title: ' 居家生活 ', key: 't2' },
    { title: ' 服饰鞋包 ', key: 't3' },
    { title: ' 美食酒水 ', key: 't4' },
    { title: ' 个护清洁 ', key: 't6' },
    { title: ' 母婴亲子 ', key: 't7' },
    { title: ' 运动旅行 ', key: 't8' },
    { title: ' 数码家电 ', key: 't5' },
    { title: ' 全球特色 ', key: 't9' },

  ];


  componentDidUpdate () {
    // After the new child element is rendered, change the slideIndex
    // https://github.com/FormidableLabs/nuka-carousel/issues/327
    if (this.state.slideIndex !== this.state.data.length - 1) {
      /* eslint react/no-did-update-set-state: 0 */
      this.setState({ slideIndex: this.state.data.length - 1 });
    }
  }
  render () {
    return <div>
      <div className="nav">
        <span className="nav-log">网易严选</span>
        <div className="nav-input">
          <SearchOutlined />
          <Input danger="true" placeholder="Basic usage" className="home-input" />
        </div>
        <Button danger="true" className="nav-login">登入</Button>
      </div>
      <div className="home-scroll" >
        <StickyContainer className="tabs"
        >
          <Tabs tabs={this.tabs}
            initialPage={'t1'}
            renderTabBar={this.renderTabBar}
            className="tab"

          />
        </StickyContainer>
        <div className="home-icon"  >
          <Icon type={'up'} />
          <Icon type={'down'} />
        </div>

      </div>
      <Carousel
        autoplay={false}
        infinite
        selectedIndex={this.state.slideIndex}
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={index => console.log('slide to', index)}
      >
        {this.state.data.map((val, index) => (
          <a
            key={index}
            href="http://www.alipay.com"
            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
          >
            <img
              src={`${val}`}
              alt=""
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
              }}
            />
          </a>
        ))}
      </Carousel>
    </div >
  }
}

export default Home