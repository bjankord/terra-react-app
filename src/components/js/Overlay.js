import React from 'react';
import LoadingOverlay from 'terra-overlay/lib/LoadingOverlay';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';
import classNames from 'classnames/bind';
import styles from '../scss/OverlayDocCommon.module.scss';

const cx = classNames.bind(styles);

class OverlayExample extends React.Component {
  constructor() {
    super();

    this.state = { show: true };
  }

  render() {
    return (
      <OverlayContainer 
      className={cx('overlay-container')} 
      overlay={
        <LoadingOverlay 
        isOpen={this.state.show} 
        isAnimated 
        isRelativeToContainer={true} 
        zIndex="6000" 
        />
      }/>
    );
  }
}

export default OverlayExample;