/* eslint-disable no-alert */
import React from 'react';
import ActionHeader from 'terra-action-header';

const ActionHeaderWithClose = (props) => (
    <ActionHeader
      title={props.title}
      onClose={props.onClose}
    />
);

export default ActionHeaderWithClose;
/* eslint-enable no-alert */