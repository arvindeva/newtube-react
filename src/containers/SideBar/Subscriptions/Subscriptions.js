import React from 'react';
import { Divider } from 'semantic-ui-react';
import Subscription from './Subscription/Subscription';
import SideBarHeader from '../SideBarHeader/SideBarHeader';

class Subscriptions extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SideBarHeader title="subscriptions" />
        <Subscription label="MusicChannel" broadcasting />
        <Subscription label="Coursea" amountNewVideos={10} />
        <Subscription label="TEDx Talks" amountNewVideos={23} />
        <Subscription label="Stanford iOS" amountNewVideos={4} />
        <Subscription label="Udacity" amountNewVideos={114} />
        <Divider />
      </React.Fragment>
    );
  }
}

export default Subscriptions;
