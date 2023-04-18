import React, {useState} from 'react';
import Table from 'terra-table';

const createCell = cell => ({ key: cell.key, children: cell.children });

const createCellsForRow = cells => cells.map(cell => createCell(cell));


const FixedHeightTable = (props) => {
  const [selectedKey, setSelectedKey] = useState([]);

  const handleRowToggle = (event, metaData) => {
    event.preventDefault();
    if (selectedKey !== metaData.key) {
      setSelectedKey(metaData.key);
    }
  };

  const createRow = rowData => (
    { ...rowData,
      key: rowData.key,
      cells: createCellsForRow(rowData.cells),
      toggleAction: {
        metaData: { key: rowData.key },
        onToggle: handleRowToggle,
        isToggled: selectedKey === rowData.key,
        toggleLabel: '',
      },
      onSelect: function(e, metaData) {
        console.log(e)
      }
    }
  );

  const createHeaderCell = (key, title) => (
    {
      key,
      id: `header-${key}`,
      metaData: { key },
      children: title,
    }
  );

  const createRows = (data) => {
    return data.map(childItem => createRow(childItem));
  };
  
  return (
    <div style={{maxHeight:'400px'}}>
    <Table
      summaryId="example-single-select"
      summary="This table shows an implementation of single row selection."
      numberOfColumns={6}
      cellPaddingStyle="standard"
      rowStyle="toggle"
      hasChevrons
      fill={false}
      showSimpleFooter={true}
      dividerStyle="horizontal"
      headerData={
        {
          cells: props.tableHeaders.map(header => createHeaderCell(`header-${header}`, header))
        }
    }
      bodyData={[
        {
          rows: createRows(props.tableRowData)
        },
      ]}
    />
    </div>
  );
};

export default FixedHeightTable;