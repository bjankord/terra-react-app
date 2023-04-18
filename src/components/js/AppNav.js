/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import moment from 'moment';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import ApplicationNavigation from 'terra-application-navigation';
import IconsOnlyAndInMenuTabs from './Tabs';
import NoResultsStatus from './Status';
import DetailViewDivided from './ClinicalDetailView';
import Footer from './ActionFooter';
import FixedHeightTable from './Table';
import SimpleGanttExample from './GanttChart';
import SimpleTimelineExample from './Timeline';
import AnimationExample from './Placeholder';
import SectionList from './List';
import OverlayExample from './Overlay';
import Flowsheet from './Tabulator';
import TimeSlider from './Slider';
import MyChart from './LineChart';
import FBCChart from './StackedBarChart';

import Table from './Datatable';
import Modal from 'react-bootstrap/Modal';
import ActionHeaderWithClose from './ActionHeader';
import Container from './Container';
import PageBodyWrapper from './PageBodyWrapper';
import Cards from './Cards';
import ToggleDefault from './InfoToggle';



import SwitchComponent from './Switch';




const titleConfig = {
  title: 'Critical Care View',
};

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

let data = {
    "WARFARIN_MANAGEMENT": {
      "FORMS": [
        {
          "FORM_ID": 454883977.0,
          "ISO_DATE": "2023-04-10T13:42:00",
          "RESULTS": [
            {
              "EVENT_DISP": "HITH INR Result Source",
              "RESULT_VAL": "Point of Care (POC)",
              "UNIT": "",
              "EVENT_ID": 1393936839.0
            },
            {
              "EVENT_DISP": "INR (Transcribed)",
              "RESULT_VAL": "2.5",
              "UNIT": "",
              "EVENT_ID": 1393936841.0
            },
            {
              "EVENT_DISP": "HITH Transcribed POC INR Verified",
              "RESULT_VAL": "Yes",
              "UNIT": "",
              "EVENT_ID": 1393936963.0
            },
            {
              "EVENT_DISP": "HITH Patient/Carer Informed INR",
              "RESULT_VAL": "Yes",
              "UNIT": "",
              "EVENT_ID": 1393936971.0
            },
            {
              "EVENT_DISP": "INR Due Date",
              "RESULT_VAL": "1:2023040800000000:0.000000:0:0",
              "UNIT": "",
              "EVENT_ID": 1393936979.0
            }
          ]
        },
        {
          "FORM_ID": 454884007.0,
          "ISO_DATE": "2023-04-09T13:43:00",
          "RESULTS": [
            {
              "EVENT_DISP": "HITH Transcribed POC INR Verified",
              "RESULT_VAL": "Yes ",
              "UNIT": "",
              "EVENT_ID": 1393937060.0
            },
            {
              "EVENT_DISP": "HITH Patient/Carer Informed INR",
              "RESULT_VAL": "Yes",
              "UNIT": "",
              "EVENT_ID": 1393937068.0
            },
            {
              "EVENT_DISP": "INR Due Date",
              "RESULT_VAL": "1:2023041100000000:0.000000:0:0",
              "UNIT": "",
              "EVENT_ID": 1393937076.0
            },
            {
              "EVENT_DISP": "HITH INR Result Source",
              "RESULT_VAL": "Point of Care (POC)",
              "UNIT": "",
              "EVENT_ID": 1393936875.0
            },
            {
              "EVENT_DISP": "INR (Transcribed)",
              "RESULT_VAL": "2.3",
              "UNIT": "",
              "EVENT_ID": 1393936877.0
            }
          ]
        },
        {
          "FORM_ID": 454883947.0,
          "ISO_DATE": "2023-04-08T13:41:00",
          "RESULTS": [
            {
              "EVENT_DISP": "HITH Transcribed POC INR Verified",
              "RESULT_VAL": "Yes",
              "UNIT": "",
              "EVENT_ID": 1393936893.0
            },
            {
              "EVENT_DISP": "HITH Patient/Carer Informed INR",
              "RESULT_VAL": "Yes",
              "UNIT": "",
              "EVENT_ID": 1393936901.0
            },
            {
              "EVENT_DISP": "INR Due Date",
              "RESULT_VAL": "1:2023040600000000:0.000000:0:0",
              "UNIT": "",
              "EVENT_ID": 1393936909.0
            },
            {
              "EVENT_DISP": "HITH INR Result Source ",
              "RESULT_VAL": "Point of Care (POC)",
              "UNIT": "",
              "EVENT_ID": 1393936803.0
            },
            {
              "EVENT_DISP": "INR (Transcribed)",
              "RESULT_VAL": "1.8",
              " UNIT": "",
              "EVENT_ID": 1393936805.0
            }
          ]
        },
        {
          "FORM_ID": 454883957.0,
          "ISO_DATE": "2023-04-07T13:41:00",
          "RESULTS": [
            {
              "EVENT_DISP": "HIT H Transcribed POC INR Verified",
              "RESULT_VAL": "Yes",
              "UNIT": "",
              "EVENT_ID": 1393936928.0
            },
            {
              "EVENT_DISP": "HITH Patient/Carer Informed INR",
              "RESULT_VAL": "Yes",
              "UNIT": "",
              "EVENT_ID": 1393936936.0
            },
            {
              "EVENT_DISP": "HITH INR Result Source",
              "RESULT_VAL": "Point of Care (POC)",
              "UNIT": "",
              "EVENT_ID": 1393936815.0
            },
            {
              "EVENT_DISP": "INR (Transcribed)",
              "RESULT_VAL": "1.4",
              "UNIT": "",
              "EVENT_ID": 1393936817.0
            },
            {
              "EVENT_DISP": "INR Due Date",
              "RESULT_VAL": "1:2023040700000000:0.000000:0:0",
              "UNIT": "",
              "EVENT_ID": 1393936944.0
            }
          ]
        },
        {
          "FORM_ID": 454883997.0,
          "ISO_DATE": "2023-04-06T13:43:00",
          "RESULTS": [
            {
              "EVENT_DISP": "HITH Patient/Carer Informed INR",
              "RESULT_VA L": "Yes",
              "UNIT": "",
              "EVENT_ID": 1393937033.0
            },
            {
              "EVENT_DISP": "INR Due Date",
              "RESULT_VAL": "1:2023041000000000:0.000000:0:0",
              "UNIT": "",
              "EVENT_ID": 1393937041.0
            },
            {
              "EVENT_DISP": "HITH INR Result Source",
              "RESULT_VAL": "Point of Care (POC)",
              "UNIT": "",
              "EVENT_ID": 1393936863.0
            },
            {
              "EVENT_DISP": "INR (Transcribed)",
              "RESULT_VAL": "1.2",
              "UNIT": "",
              "EVENT_ID": 1393936865.0
            },
            {
              "EVENT_DISP": "HITH Transcribed POC INR Verified",
              "RESULT_VAL": "Yes",
              "UNIT": "",
              "EVENT_ID": 1393937025.0
            }
          ]
        },
        {
          "FORM_ID": 454883987.0,
          "ISO_DATE": "2023-04-05T13:42:00",
          "RESULTS": [
            {
              "EVENT_DISP": "HITH INR Result Source",
              "RESULT_VAL": "Point of Care (POC)",
              "UNIT": "",
              "EVENT_ID": 1393936851.0
            },
            {
              "EVENT_DISP": "INR (Transcribed)",
              "RESULT_VAL": "1.1",
              "UNIT": "",
              "EVENT_ID": 1393936853.0
            },
            {
              "EVENT_DISP": "HITH Transcribed POC INR Verified",
              "RESULT_VAL": "Yes",
              "UNIT": "",
              "EVENT_ID": 1393936998.0
            },
            {
              "EVENT_DISP": "INR Due Date",
              "RESULT_VAL": "1:2023040900000000:0.000000:0:0",
              "UNIT": "",
              "EVENT_ID": 1393937006.0
            }
          ]
        }
      ]
    }
  }

let headers = ['Date', 'INR (Transcribed)', 'INR Source', 'Result Verified', 'Next Dose Prescribed'];


let rows = [];
for (var i=0; i < data.WARFARIN_MANAGEMENT.FORMS.length; i++ ) {
  let obj = {};
  obj.key = data.WARFARIN_MANAGEMENT.FORMS[i].FORM_ID;
  i % 2 !== 0 ? obj.isStriped = true : obj.isStriped = false;

  obj.cells = [
    {
      children: <div style={{color:'red', fontStyle:'italic'}}>No result found</div>,
      key: makeid(10)
    }, {
      children: <div style={{color:'red', fontStyle:'italic'}}>No result found</div>,
      key:  makeid(10)
    }, {
      children: <div style={{color:'red', fontStyle:'italic'}}>No result found</div>,
      key:  makeid(10)
    }, {
      children: <div style={{color:'red', fontStyle:'italic'}}>No result found</div>,
      key:  makeid(10)
    }, {
      children: <div style={{color:'red', fontStyle:'italic'}}>No result found</div>,
      key:  makeid(10)
    }
  ];

  obj.cells[0].children = moment(data.WARFARIN_MANAGEMENT.FORMS[i].ISO_DATE).format('D/M/YY');
  obj.cells[0].key =  makeid(10) + '-' + data.WARFARIN_MANAGEMENT.FORMS[i].ISO_DATE;
  
  for (var p=1; p<5; p++) {

    for (var t=0; t < data.WARFARIN_MANAGEMENT.FORMS[i].RESULTS.length; t++) {
      if (data.WARFARIN_MANAGEMENT.FORMS[i].RESULTS[t].EVENT_DISP === "INR (Transcribed)" && p ===1 ) {
        obj.cells[p].children = data.WARFARIN_MANAGEMENT.FORMS[i].RESULTS[t].RESULT_VAL;
        obj.cells[p].key = data.WARFARIN_MANAGEMENT.FORMS[i].RESULTS[t].EVENT_ID;
      } else if (data.WARFARIN_MANAGEMENT.FORMS[i].RESULTS[t].EVENT_DISP === "HITH INR Result Source" && p ===2 ) {
        obj.cells[p].children = data.WARFARIN_MANAGEMENT.FORMS[i].RESULTS[t].RESULT_VAL;
        obj.cells[p].key = data.WARFARIN_MANAGEMENT.FORMS[i].RESULTS[t].EVENT_ID;
      } else if (data.WARFARIN_MANAGEMENT.FORMS[i].RESULTS[t].EVENT_DISP === "HITH Transcribed POC INR Verified" && p ===3 ) {
        obj.cells[p].children = data.WARFARIN_MANAGEMENT.FORMS[i].RESULTS[t].RESULT_VAL;
        obj.cells[p].key = data.WARFARIN_MANAGEMENT.FORMS[i].RESULTS[t].EVENT_ID;
      } else if (data.WARFARIN_MANAGEMENT.FORMS[i].RESULTS[t].EVENT_DISP === "HITH Dose Prescribed" && p ===4 ) {
        obj.cells[p].children = data.WARFARIN_MANAGEMENT.FORMS[i].RESULTS[t].RESULT_VAL;
        obj.cells[p].key = data.WARFARIN_MANAGEMENT.FORMS[i].RESULTS[t].EVENT_ID;
      } 
    }
  }
  rows.push(obj);

}

const homeNavigationContent = [
    {
        title: 'Vital Signs',
        titleEndContent: 'collapsibleMenu',
        content: <AnimationExample/>
    },
    {
        title: 'Infusions',
        titleEndContent: 'collapsibleMenu',
        content: <AnimationExample/>
    },
    {
        title: 'Fluid Balance',
        titleEndContent: 'collapsibleMenu',
        horizontalLine: true,
        upperContent: <OverlayExample/>,
        lowerContent: <NoResultsStatus/>
    }
];

const carePlansContent = [
    {
        title: 'Care Plan',
        titleEndContent: 'collapsibleMenu',
        content: <DetailViewDivided/>
    },
    {
        title: 'Timeline',
        titleEndContent: 'collapsibleMenu',
        content: <SimpleTimelineExample/>
    },


    
];

const infusionsContent = [
    {
        title: 'Active Infusions',
        titleEndContent: 'collapsibleMenu',
        content: <SimpleGanttExample/>
    },
    {
        title: 'Infusions & Rate Changes',
        titleEndContent: 'collapsibleMenu',
        content: <MyChart/>
    },
    {
        title: 'Inactive Infusions',
        titleEndContent: 'collapsibleMenu',
        content: <NoResultsStatus/>
    }
];

const graphingContent = [
    {
        title: 'Graphing',
        titleEndContent: 'collapsibleMenu',
        content: <div style={{display:'flex'}}><div className="container-25"><SectionList/></div><div className="container-70" style={{marginLeft: 'auto',float:'right'}}><MyChart/></div></div>
    },
];

const resultsFlowsheetContent = [
    {
        title: 'Flowsheet',
        titleEndContent: 'collapsibleMenu',
        content: <Flowsheet/>
    },
];

const fluidBalanceContent = [
    {
        title: 'Fluid Balance Graph',
        titleEndContent: 'collapsibleMenu',
        content: <FBCChart/>
    },
    {
        title: 'Fluid Balance Table',
        titleEndContent: 'collapsibleMenu',
        content: <FixedHeightTable  tableHeaders={headers} tableRowData={rows}/>
    },
];

const crrtTpeSpadContent = [
    {
        title: 'Dashboard',
        titleEndContent: 'collapsibleMenu',
        content: <DetailViewDivided/>
    },
    {
        title: 'Timeline',
        titleEndContent: 'collapsibleMenu',
        content: <SimpleGanttExample/>
    },
];

const otherContent = [
    {
        title: 'Fluid Balance',
        titleEndContent: 'collapsibleMenu',
        content: <Table/>
    },
    {
        title: 'Fluid Balance',
        titleEndContent: 'collapsibleMenu',
        horizontalLine: true,
        upperContent: <OverlayExample/>,
        lowerContent: <TimeSlider/>
    }
];


const specialtyContent = {
    Cardiovascular: {
        content: [
            {
                title: 'Cardiovascular',
                titleEndContent: 'collapsibleMenu',
                content: <AnimationExample/>
            },
        ]   
    },
    Neurological: {
        content: [
            {
                title: 'Neurological',
                titleEndContent: 'collapsibleMenu',
                content: <AnimationExample/>
            },
        ]   
    }, 
    Respiratory: {
        content: [
            {
                title: 'Respiratory',
                titleEndContent: 'collapsibleMenu',
                content: <AnimationExample/>
            },
        ]   
    }, 
    Gastrointestinal: {
        content: [
            {
                title: 'Gastrointestinal',
                titleEndContent: 'collapsibleMenu',
                content: <AnimationExample/>
            },
        ]   
    }, 
    Genitourinary: {
        content: [
            {
                title: 'Genitourinary',
                titleEndContent: 'collapsibleMenu',
                content: <AnimationExample/>
            },
        ]   
    }, 
    Pain: {
        content: [
            {
                title: 'Pain',
                titleEndContent: 'collapsibleMenu',
                content: <AnimationExample/>
            },
        ]   
    }, 
    InsulinManagement: {
        content: [
            {
                title: 'Insulin Management',
                titleEndContent: 'collapsibleMenu',
                content: <AnimationExample/>
            },
        ]   
    }, 
    Narcotics: {
        content: [
            {
                title: 'Narcotics & Other Sedatives',
                titleEndContent: 'collapsibleMenu',
                content: <AnimationExample/>
            },
        ]   
    }, 
    Heparin: {
        content: [
            {
                title: 'Heparin & Other Anticoagulants',
                titleEndContent: 'collapsibleMenu',
                content: <AnimationExample/>
            },
        ]   
    }, 
}


const navigationItems = [
  {
    key: 'Home',
    text: 'Home',
    metaData: {
      display: 'Home',
      header: '',
      content: (<PageBodyWrapper 
        children={
            <>
            {homeNavigationContent.map(card => <Cards title={card.title} titleEndContent={card.titleEndContent} horizontalLine={card.horizontalLine} upperContent={card.upperContent} lowerContent={card.lowerContent} content={card.content}/>)}
            </>
        }/>)
    },
  },{
    key: 'Care Plans',
    text: 'Care Plans',
    metaData: {
      display: 'Care Plans',
      header: '',
      content: (<PageBodyWrapper 
        children={
            <>
            {carePlansContent.map(card => <Cards title={card.title} titleEndContent={card.titleEndContent} horizontalLine={card.horizontalLine} upperContent={card.upperContent} lowerContent={card.lowerContent} content={card.content}/>)}
            </>
        }/>)
    },
  }, {
    key: 'Specialty Views',
    text: 'Specialty Views',
    metaData: {
      display: 'Specialty Views',
      header: <IconsOnlyAndInMenuTabs 
                cardiovascularContent={specialtyContent.Cardiovascular.content.map(card => <Cards title={card.title} titleEndContent={card.titleEndContent} horizontalLine={card.horizontalLine} upperContent={card.upperContent} lowerContent={card.lowerContent} content={card.content}/>)}
                neurologicalContent={specialtyContent.Neurological.content.map(card => <Cards title={card.title} titleEndContent={card.titleEndContent} horizontalLine={card.horizontalLine} upperContent={card.upperContent} lowerContent={card.lowerContent} content={card.content}/>)}
                respiratoryContent={specialtyContent.Respiratory.content.map(card => <Cards title={card.title} titleEndContent={card.titleEndContent} horizontalLine={card.horizontalLine} upperContent={card.upperContent} lowerContent={card.lowerContent} content={card.content}/>)}
                gastrointestinalContent={specialtyContent.Gastrointestinal.content.map(card => <Cards title={card.title} titleEndContent={card.titleEndContent} horizontalLine={card.horizontalLine} upperContent={card.upperContent} lowerContent={card.lowerContent} content={card.content}/>)}
                painContent={specialtyContent.Pain.content.map(card => <Cards title={card.title} titleEndContent={card.titleEndContent} horizontalLine={card.horizontalLine} upperContent={card.upperContent} lowerContent={card.lowerContent} content={card.content}/>)}
                insulinManagementContent={specialtyContent.InsulinManagement.content.map(card => <Cards title={card.title} titleEndContent={card.titleEndContent} horizontalLine={card.horizontalLine} upperContent={card.upperContent} lowerContent={card.lowerContent} content={card.content}/>)}
                narcoticsContent={specialtyContent.Narcotics.content.map(card => <Cards title={card.title} titleEndContent={card.titleEndContent} horizontalLine={card.horizontalLine} upperContent={card.upperContent} lowerContent={card.lowerContent} content={card.content}/>)}
                heparinContent={specialtyContent.Heparin.content.map(card => <Cards title={card.title} titleEndContent={card.titleEndContent} horizontalLine={card.horizontalLine} upperContent={card.upperContent} lowerContent={card.lowerContent} content={card.content}/>)}
                genitourinaryContent={specialtyContent.Genitourinary.content.map(card => <Cards title={card.title} titleEndContent={card.titleEndContent} horizontalLine={card.horizontalLine} upperContent={card.upperContent} lowerContent={card.lowerContent} content={card.content}/>)}/>,

      content: ''
    },
  }, {
    key: 'Infusions',
    text: 'Infusions',
    metaData: {
      display: 'Infusions',
      header: '',
      content: (<PageBodyWrapper 
        children={
            <>
            {infusionsContent.map(card => <Cards title={card.title} titleEndContent={card.titleEndContent} horizontalLine={card.horizontalLine} upperContent={card.upperContent} lowerContent={card.lowerContent} content={card.content}/>)}
            </>
        }/>)
    },
  },{
    key: 'Graphing',
    text: 'Graphing',
    metaData: {
      display: 'Graphing',
      header: '',
      content: (<PageBodyWrapper 
        children={
            <>
            {graphingContent.map(card => <Cards title={card.title} titleEndContent={card.titleEndContent} horizontalLine={card.horizontalLine} upperContent={card.upperContent} lowerContent={card.lowerContent} content={card.content}/>)}
            </>
        }/>)
    },
  }, {
    key: 'Results Flowsheet',
    text: 'Results Flowsheet',
    metaData: {
      display: 'Results Flowsheet',
      header: '',
      content: (<PageBodyWrapper 
        children={
            <>
            {resultsFlowsheetContent.map(card => <Cards title={card.title} titleEndContent={card.titleEndContent} horizontalLine={card.horizontalLine} upperContent={card.upperContent} lowerContent={card.lowerContent} content={card.content}/>)}
            </>
        }/>)
    },
  }, {
    key: 'Fluid Balance',
    text: 'Fluid Balance',
    metaData: {
      display: 'Fluid Balance',
      header: '',
      content: (<PageBodyWrapper 
        children={
            <>
            {fluidBalanceContent.map(card => <Cards title={card.title} titleEndContent={card.titleEndContent} horizontalLine={card.horizontalLine} upperContent={card.upperContent} lowerContent={card.lowerContent} content={card.content}/>)}
            </>
        }/>)
    },
  }, {
    key: 'CRRT/TPE/SPAD',
    text: 'CRRT/TPE/SPAD',
    metaData: {
      display: 'CRRT/TPE/SPAD',
      header: '',
      content: (<PageBodyWrapper 
        children={
            <>
            {crrtTpeSpadContent.map(card => <Cards title={card.title} titleEndContent={card.titleEndContent} horizontalLine={card.horizontalLine} upperContent={card.upperContent} lowerContent={card.lowerContent} content={card.content}/>)}
            </>
        }/>)
    },
  }, 
  {
    key: 'Other',
    text: 'Other',
    metaData: {
      display: 'Other',
      header: '',
      content: (<PageBodyWrapper 
        children={
            <>
            {otherContent.map(card => <Cards title={card.title} titleEndContent={card.titleEndContent} horizontalLine={card.horizontalLine} upperContent={card.upperContent} lowerContent={card.lowerContent} content={card.content}/>)}
            </>
        }/>)
    },
  }
];

const utilityItems = [
  {
    icon: <IconSearch />,
    key: 'search-page',
    text: 'Search Page',
    metaData: {
      test: 'a',
    },
  }, 
];

const AppNav = ({ onAction }) => {
  const [activeKey, setActiveKey] = useState(navigationItems[0].key);
  const [workspaceHeader, setWorkspaceHeader] = useState(navigationItems[0].metaData.header);
  const [workspaceContent, setWorkspaceContent] = useState(navigationItems[0].metaData.content);
  const [showSettingsModal, setSettingsModalShow] = useState(false);
  const handleSettingsModalClose = () => setSettingsModalShow(false);
  const handleSettingsModalShow = () => setSettingsModalShow(true);
  const [showHelpModal, setHelpModalShow] = useState(false);
  const handleHelpModalClose = () => setHelpModalShow(false);
  const handleHelpModalShow = () => setHelpModalShow(true);

  return (
    <ApplicationNavigation
            titleConfig={titleConfig}
            onSelectExtensionItem={onAction}
            navigationItems={navigationItems}
            activeNavigationItemKey={activeKey}
            onSelectNavigationItem={function(key,metaData) {
                setActiveKey(key);
                setWorkspaceHeader(metaData.header);
                setWorkspaceContent(metaData.content);
            }}
            utilityItems={utilityItems}
            onSelectUtilityItem={() => alert('Not available')}
            onSelectSettings={handleSettingsModalShow}
            onSelectHelp={handleHelpModalShow}
            id="critical-care-view"
            >
        <Container 
            header={
                workspaceHeader
            }
            content={
                workspaceContent
            }/>
        <Modal show={showSettingsModal} onHide={handleSettingsModalClose} animation={false}>
            <ActionHeaderWithClose title="Settings" onClose={handleSettingsModalClose}/>
            <Modal.Body>
                <SwitchComponent/><span style={{padding: '0px 10px'}}>This determines whether x or y preference</span>
                <div style={{padding: '10px 0px'}}/>
                <SwitchComponent/><span style={{padding: '0px 10px'}}>This determines whether x or y preference</span>
                <div style={{padding: '10px 0px'}}/>
                <SwitchComponent/><span style={{padding: '0px 10px'}}>This determines whether x or y preference</span>
                <div style={{padding: '10px 0px'}}/>
                <SwitchComponent/><span style={{padding: '0px 10px'}}>This determines whether x or y preference</span>
            </Modal.Body>
            <Footer/>
        </Modal>
        <Modal show={showHelpModal} onHide={handleHelpModalClose} animation={false}>
            <ActionHeaderWithClose title="Help" onClose={handleHelpModalClose}/>
            <Modal.Body>
                <ToggleDefault/>
            </Modal.Body>
            <Footer/>
        </Modal>
        </ApplicationNavigation>

  );
};

export default AppNav;
