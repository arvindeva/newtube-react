import React from 'react';
import { Checkbox, Divider } from 'semantic-ui-react';
import './NextUpVideo.scss';
import VideoPreview from '../VideoPreview/VideoPreview';

const NextUpVideo = props => {
  return (
    <React.Fragment>
      <div className="next-up-container">
        <h4>Up Next</h4>
        <div className="up-next-toggle">
          <span>Autoplay</span>
          <Checkbox toggle defaultChecked />
        </div>
      </div>
      <VideoPreview horizontal={true} />
      <Divider />
    </React.Fragment>
  );
};

export default NextUpVideo;
