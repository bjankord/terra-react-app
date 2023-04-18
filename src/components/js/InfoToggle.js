import React, { useState } from 'react';
import Toggle from 'terra-toggle';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import { KEY_TAB } from 'keycode-js';
import '../scss/Toggle.module.scss';

const ToggleDefault = () => {
  return (
    <div>
      <IconInformation data-show-focus-styles={true} focusable a11yLabel="information Icon" tabIndex="0" role="button"  aria-expanded={true} aria-controls="toggle" />
      <Toggle id="default-toggle" isOpen={true}>
        <p>
          Some information about the page.
        </p>
      </Toggle>
    </div>
  );
};

export default ToggleDefault;
