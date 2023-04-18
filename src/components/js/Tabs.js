import React from 'react';
import PropTypes from 'prop-types';
import Tabs from 'terra-tabs';
import PageBodyWrapper from './PageBodyWrapper';

const propTypes = { responsiveTo: PropTypes.string };

const IconsOnlyAndInMenuTabs = (props) => {
  const cardiovascularContent = props.cardiovascularContent;
  const neurologicalContent = props.neurologicalContent;
  const respiratoryContent = props.respiratoryContent;
  const gastrointestinalContent = props.gastrointestinalContent;
  const painContent = props.painContent;
  const insulinManagementContent = props.insulinManagementContent;
  const narcoticsContent = props.narcoticsContent;
  const heparinContent = props.heparinContent;
  const genitourinaryContent = props.genitourinaryContent;

  const cardiovascular = (
    <Tabs.Pane label="Cardiovascular" key="Cardiovascular">
      <PageBodyWrapper>
        {cardiovascularContent && cardiovascularContent}
      </PageBodyWrapper>
    </Tabs.Pane>
  );

  const neurological = (
    // eslint-disable-next-line react/forbid-component-props
    <Tabs.Pane label="Neurological" key="Neurological">
      <PageBodyWrapper>
        {neurologicalContent && neurologicalContent}
      </PageBodyWrapper>
    </Tabs.Pane>
  );

  const respiratory = (
    <Tabs.Pane label="Respiratory" key="Respiratory">
      <PageBodyWrapper>
        {respiratoryContent && respiratoryContent}
      </PageBodyWrapper>
    </Tabs.Pane>
  );

  const gastrointestinal = (
    <Tabs.Pane label="Gastrointestinal" key="Gastrointestinal">
      <PageBodyWrapper>
        {gastrointestinalContent && gastrointestinalContent}
      </PageBodyWrapper>
    </Tabs.Pane>
  );

  const genitourinary = (
    <Tabs.Pane label="Genitourinary" key="Genitourinary">
      <PageBodyWrapper>
        {genitourinaryContent && genitourinaryContent}
      </PageBodyWrapper>
    </Tabs.Pane>
  );

  const pain = (
    <Tabs.Pane label="Pain" key="Pain">
      <PageBodyWrapper>
        {painContent && painContent}
      </PageBodyWrapper>
    </Tabs.Pane>
  );

  const insulinManagement = (
    <Tabs.Pane label="Insulin Management" key="Insulin Management">
      <PageBodyWrapper>
        {insulinManagementContent && insulinManagementContent}
        </PageBodyWrapper>
    </Tabs.Pane>
  );
  const narcoticsAndOtherSedatives = (
    <Tabs.Pane label="Narcotics & Other Sedatives" key="Narcotics & Other Sedatives">
      <PageBodyWrapper>
        {narcoticsContent && narcoticsContent}
      </PageBodyWrapper>
    </Tabs.Pane>
  );
  const heparinAndOtherAnticoagulants = (
    <Tabs.Pane label="Heparin & Other Anticoagulants" key="Heparin & Other Anticoagulants">
      <PageBodyWrapper>
        {heparinContent && heparinContent}
      </PageBodyWrapper>
    </Tabs.Pane>
  );

  return (
      <Tabs responsiveTo={props.responsiveTo} tabFill={true}>
        {cardiovascular}
        {neurological}
        {respiratory}
        {gastrointestinal}
        {genitourinary}
        {pain}
        {insulinManagement}
        {narcoticsAndOtherSedatives}
        {heparinAndOtherAnticoagulants}
      </Tabs>
      
  );
};

IconsOnlyAndInMenuTabs.propTypes = propTypes;

export default IconsOnlyAndInMenuTabs;