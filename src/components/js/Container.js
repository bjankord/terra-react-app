import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ContentContainer from 'terra-content-container';
import classNames from 'classnames/bind';

import styles from '../scss/ContentContainerDocCommon.module.scss';

const cx = classNames.bind(styles);

const Container = (props) => (
  <div className={cx('content-container-fill')}>
    {
      /**
       * ScrollRefCallback is used to refer to the scrollable area of the content container DOM element.
       */
    }
    <ContentContainer header={props.header} footer={props.footer} fill>
      {props.content}
    </ContentContainer>
  </div>
);

export default Container;