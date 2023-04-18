import React, { useState } from 'react';
import Switch from 'terra-switch';

const SwitchComponent = () => {
  const [value, setValue] = useState(true); // makes switch on by default
  return (
    <Switch
      isChecked={value}
      labelText="Day View"
      onChange={setValue}
    />
  );
};

export default SwitchComponent;