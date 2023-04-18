import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/carbon-graphs/dist/css/carbon-graphs.css';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const getTimelineConfig = (id) => ({
    bindTo: id,
    bindLegendTo: null,
    axis: {
      x: {
        label: 'Datetime',
        lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),
        upperLimit: new Date(2016, 0, 1, 15, 59).toISOString(),
      },
    },
    showLabel: true,
    showLegend: true,
  });


  const bobRossIpsum = 'Just use the old one inch brush. It is so important to do something every day that will make you happy.'
  + 'I sincerely wish for you every possible joy life could bring. Water is like me. It iss laaazy ... Boy, it '
  + 'always looks for the easiest way to do things\n\nWe are trying to teach you a technique here and how to use it. '
  + 'The least little bit can do so much. There we go.\n\nNo worries. No cares. Just float and wait for the wind to blow you around.'
  + 'These trees are so much fun. I get started on them and I have a hard time stopping. We wll make some happy little bushes here. '
  + 'Absolutely no pressure. You are just a whisper floating across a mountain. There are no limits in this world.'
  + 'A thin paint will stick to a thick paint.\n';

const data1 = {
  key: 'uid_1',
  label: {
    display: 'Timeline A',
  },
  color: Carbon.helpers.COLORS.BLUE,
  onClick: '',
  values: [
    {
      x: new Date(2016, 0, 1, 1, 30).toISOString(),
      content: bobRossIpsum,
    },
    {
      x: new Date(2016, 0, 1, 2, 15).toISOString(),
      content: bobRossIpsum,
    },
    {
      x: new Date(2016, 0, 1, 3, 15).toISOString(),
      content: bobRossIpsum,
    },
    {
      x: new Date(2016, 0, 1, 4, 15).toISOString(),
      content: bobRossIpsum,
    },
    {
      x: new Date(2016, 0, 1, 5, 15).toISOString(),
      content: bobRossIpsum,
    },
  ],
};

const data2 = {
    key: 'uid_2',
    label: {
      display: 'Timeline B',
    },
    shape: Carbon.helpers.SHAPES.DARK.RHOMBUS,
    color: Carbon.helpers.COLORS.GREEN,
    onClick: '',
    values: [
      {
        x: new Date(2016, 0, 1, 7, 15).toISOString(),
        content: 'This is custom value of another unit',
      },
      {
        x: new Date(2016, 0, 1, 9, 45).toISOString(),
        content: 'This is custom value of another unit',
      },
      {
        x: new Date(2016, 0, 1, 12).toISOString(),
        content: 'This is custom value of another unit',
      },
    ],
  };

const graphConfig = utils.deepClone(getTimelineConfig('#simpleTimelineGraph'));
const dataset = [utils.deepClone(data1), utils.deepClone(data2)];

const SimpleTimelineExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.timeline(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(data);
    });
  }, []);
  return (
    <div id="simpleTimelineGraph" />
  );
};

export default SimpleTimelineExample;