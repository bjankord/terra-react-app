import React from 'react';
import List, { Item, Section, Utils } from 'terra-list';
import { Placeholder } from '@cerner/terra-docs';
import classNames from 'classnames/bind';
import styles from '../scss/ListDocCommon.module.scss';

const cx = classNames.bind(styles);


const mockData = [{
    key: '1',
    title: 'Test',
    childItems: [{
        key:'1-1',
        title: 'Test2'
    },
    {
        key:'1-2',
        title: 'Test2'
    },
    {
        key:'1-3',
        title: 'Test2'
    }]

},
{
    key: '2',
    title: 'Test',
    childItems: [{
        key:'2-1',
        title: 'Test2'
    },
    {
        key:'2-2',
        title: 'Test2'
    },
    {
        key:'2-3',
        title: 'Test2'
    }]

}]


const createListItem = itemData => (
    <Item 
    key={itemData.key}
    isSelectable>
      <Placeholder title={itemData.title} className={cx('placeholder')} />
    </Item>
  );

class SectionList extends React.Component {
  constructor(props) {
    super(props);
    this.createSection = this.createSection.bind(this);
    this.createSections = this.createSections.bind(this);
    this.handleSectionSelection = this.handleSectionSelection.bind(this);
    this.state = { collapsedKeys: [], selectedKeys: []  };
    this.handleItemSelection = this.handleItemSelection.bind(this);
  }

  handleItemSelection(event, metaData) {
    event.preventDefault();
    this.setState(state => ({ selectedKeys: Utils.updatedMultiSelectedKeys(state.selectedKeys, metaData.key) }));
  }

  handleSectionSelection(event, metaData) {
    event.preventDefault();
    this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.collapsedKeys, metaData.key) }));
  }

  createSection(sectionData) {
    return (
      <Section
        key={sectionData.key}
        title={sectionData.title}
        isCollapsed={this.state.collapsedKeys.indexOf(sectionData.key) >= 0}
        isCollapsible
        metaData={{ key: sectionData.key }}
        onSelect={this.handleSectionSelection}
      >
        {sectionData.childItems.map(childItem => createListItem(childItem))}
      </Section>
    );
  }

  createSections(data) {
    return data.map(section => this.createSection(section));
  }

  

  render() {
    return (
      <List ariaSelectionStyle="multi-select">
        {this.createSections(mockData)}
      </List>
    );
  }
}

export default SectionList;