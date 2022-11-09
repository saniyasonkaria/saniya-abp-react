import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsBooleanChart  from "./rds-chart-boolean";
import "./rds-chart-boolean.scss"

export default {
  title: "Charts/Boolean Chart",
  component: RdsBooleanChart,
} as ComponentMeta<typeof RdsBooleanChart>;

const Template: ComponentStory<typeof RdsBooleanChart> = (args) => <RdsBooleanChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  id:1,
  height:100,
  widht:100,
  dataSets: [
    {
      label: 'Dataset 1',
      data: [20, 10],
      fillStyle: 'blue',
      fillRect: [200, 100, 40, 10],
      backgroundColor: [
        '#01AE9D',
        '#E1E1E1'

      ],
      borderColor: [
        '#fff',
      ],
      borderWidth: 1,
      cutout: '90%',
      title: {
        text: "Doughnut Chart",
        verticalAlign: "center",
        dockInsidePlotArea: true
      },
    }
  ],
  labels: ['green', 'grey'],

  options: {
    maintainAspectRatio: false,
    elements: {
      center: {
        text: '50%'  //set as you wish
      }
    },
    cutoutPercentage: 75,
    legend: {

      display: false
    },
    responsive: true,
    plugins: {

      series: {
        label: {
          position: "inside",
          text: 'total', // or "inside" | "outside"
          display: false
        }
      },
      doughnutlabel: {
        labels: [{
          text: '550',
          font: {
            size: 20,
            weight: 'bold'
          }
        }, {
          text: 'total'
        }
        ]
      },

      legend: {
        display: false,
        align: "center",
        position: 'top',

      },


    }
  },
};