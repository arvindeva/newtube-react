import React from 'react';
import SideBarItem from './SideBarItem/SideBarItem';
import { Menu, Divider } from 'semantic-ui-react';
import SideBarHeader from './SideBarHeader/SideBarHeader';
import Subscriptions from './Subscriptions/Subscriptions';

import './SideBar.scss';

class SideBar extends React.Component {
  render() {
    return (
      <Menu borderless vertical stackable fixed="left" className="side-nav">
        <SideBarItem highlight={true} label="Home" icon="home" />
        <SideBarItem label="Trending" icon="fire" />
        <SideBarItem label="Followers" icon="spy" />
        <Divider />
        <SideBarHeader title='Library'/>
        <SideBarItem label="History" icon="history" />
        <SideBarItem label="Watch later" icon="clock" />
        <SideBarItem label="Liked videos" icon="thumbs up" />
        <Divider />
        <Subscriptions></Subscriptions>
        <SideBarHeader title='More From Youtube'/>
        <SideBarItem label="Movies and Shows" icon="film" />
        <Divider />
        <SideBarItem label="Report history" icon="flag" />
        <SideBarItem label="Help" icon="help circle" />
        <SideBarItem label="Send feedback" icon="comment" />
        <Divider />
      </Menu>
    );
  }
}

export default SideBar;