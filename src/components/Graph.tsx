import React, { useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  TimeScale,
  Title,
} from 'chart.js'
import 'chartjs-adapter-date-fns' // Import the date-fns adapter
import { Sales } from '../utils/productData'

// Register the scale
Chart.register(LineElement, PointElement, LinearScale, TimeScale, Title)

interface GraphProps {
  data: Sales[]
}

const Graph: React.FC<GraphProps> = ({ data }) => {
  useEffect(() => {
    // Clean up the chart.js registration on component unmount
    return () => {
      Chart.unregister(LineElement, PointElement, LinearScale, TimeScale, Title)
    }
  }, [])

  const chartData = {
    labels: data.map((sales) => new Date(sales.weekEnding)),
    datasets: [
      {
        label: 'Retail Sales Over Time',
        data: data.map((sales) => sales.retailSales),
        fill: true,
        borderColor: '#44a8f6',
      },
    ],
  }

  const chartOptions: any = {
    backgroundColor: '#FFFFFF',
    scales: {
      x: {
        type: 'time',
        position: 'bottom',
        time: {
          unit: 'month',
          tooltipFormat: 'MMM YYYY',
        },
        title: { display: true, text: 'Months' },
        grid: { display: false },
      },
      y: {
        type: 'linear',
        position: 'left',
        title: { display: true, text: 'Retail Sales' },
        grid: { color: '#E0E0E0' },
      },
    },
    plugins: {
      legend: {
        labels: {
          backgroundColor: '#FFFFFF',
        },
      },
      title: {
        display: true,
        text: 'Retail Sales Over Time',
        font: { size: 16 },
        boxWidth: 200, // Adjust the width as needed
        backgroundColor: '#FFFFFF', // Set the background color here
      },
      tooltip: { mode: 'nearest' },
    },
  }

  return <Line data={chartData} options={chartOptions} />
}

export default Graph
