import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/carbon-graphs/dist/css/carbon-graphs.css';




/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const getGanttSimpleConfig = (id) => ({
    bindTo: id,
    axis: {
      x: {
        show: true,
        lowerLimit: new Date(2018, 1, 1, 12).toISOString(),
        upperLimit: new Date(2019, 1, 1, 12).toISOString(),
        rangeRounding: true, // If set to false, we don't extend the domain
      },
    },
    clickPassThrough: {
      task: false,
      activity: false,
      event: false,
      action: false,
      dateline: false,
    },
    dateline: [
      {
        showDatelineIndicator: true,
        label: {
          display: 'DST Start',
        },
        color: '#405978',
        shape: Carbon.helpers.SHAPES.DARK.DIAMOND,
        onClick: '',
        value: new Date(2018, 2, 10).toISOString(),
      },
      {
        showDatelineIndicator: true,
        label: {
          display: 'Current Date',
        },
        color: '#C97318',
        shape: Carbon.helpers.SHAPES.DARK.SQUARE,
        onClick: '',
        value: new Date(2018, 8, 5).toISOString(),
      },
      {
        showDatelineIndicator: true,
        label: {
          display: 'DST End',
        },
        color: '#405978',
        shape: Carbon.helpers.SHAPES.DARK.DIAMOND,
        onClick: '',
        value: new Date(2018, 10, 3).toISOString(),
      },
    ],
  });


  const taskDataset1 = [
    {
      key: 'task1',
      onClick: '',
      label: {
        display: 'Story Apex',
      },
      startDate: new Date(2018, 2, 1).toISOString(),
      endDate: new Date(2018, 3, 10).toISOString(),
    },
    {
      key: 'task2',
      onClick: '',
      label: {
        display: 'Story Broccoli',
      },
      startDate: new Date(2018, 8, 1).toISOString(),
      endDate: new Date(2018, 9, 10).toISOString(),
    },
  ];

  const taskDataset2 = [
    {
      key: 'task3',
      onClick: '',
      label: {
        display: 'Story Apex',
      },
      startDate: new Date(2018, 3, 1).toISOString(),
      endDate: new Date(2018, 7, 10).toISOString(),
    },
  ];


  const taskDataset3 = [
    {
      key: 'task4',
      onClick: '',
      label: {
        display: 'Story Charming',
      },
      startDate: new Date(2018, 6, 1).toISOString(),
      endDate: new Date(2018, 7, 10).toISOString(),
    },
    {
      key: 'task5',
      onClick: '',
      label: {
        display: 'Story Broccoli',
      },
      startDate: new Date(2018, 10, 1).toISOString(),
      endDate: new Date(2018, 10, 1).toISOString(),
    },
  ];

  const taskDataset4 = [
    {
      key: 'task6',
      onClick: '',
      label: {
        display: 'Story Apex',
      },
      startDate: new Date(2018, 6, 1).toISOString(),
      endDate: new Date(2018, 9, 10).toISOString(),
    },
  ];

  const loadTracks = (
    tasks = [],
    activities = [],
    events = [],
    actions = [],
    totalTracks = 1,
    isTrackSelectable = false,
  ) => {
    const dataObjects = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const each of Array(totalTracks).keys()) {
      const data = {
        key: `track ${each}`,
        onClick: isTrackSelectable ? '' : undefined,
        trackLabel: {
          display: `Project ${String.fromCharCode(65 + each)}`,
          onClick: '',
        },
        tasks: tasks[each] ? tasks[each] : {},
        activities: activities[each] ? activities[each] : {},
        events: events[each] ? events[each] : {},
        actions: actions[each] ? actions[each] : {},
      };
      dataObjects.push(data);
    }
    return dataObjects;
    /* gantt.unloadContent({
          key: "track 3",
          trackLabel: {
              display: "Project C"
          }
      }); */
  };


const graphConfig = utils.deepClone(getGanttSimpleConfig('#simpleGantt'));
const tasksData = [utils.deepClone(taskDataset1), utils.deepClone(taskDataset2), utils.deepClone(taskDataset3), utils.deepClone(taskDataset4)];
const dataset = loadTracks(tasksData, [], [], [], 4);

const SimpleGanttExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.gantt(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(data);
    });
  }, []);

  return (
    <div id="simpleGantt" />
  );
};

export default SimpleGanttExample;