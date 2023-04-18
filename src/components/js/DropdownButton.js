import React from 'react';
import DropdownButton, { Item } from 'terra-dropdown-button';

const DropdownButtonComponent = () => {

  return (
    <React.Fragment>
      <DropdownButton
        label="Export"
      >
        <Item label="Export as PDF" />
        <Item label="Export as Plain Text"/>
        <Item label="Export as Web Page" />
        <Item label="Export as XML"/>
      </DropdownButton>
    </React.Fragment>
  );
};

export default DropdownButtonComponent;