// src/components/Graph.tsx
import React from 'react'
import { Line } from 'react-chartjs-2'
import { Sales } from '../utils/productData'
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from 'chart.js'

// Register the scale
ChartJS.register(LineElement, PointElement, LinearScale, Title)
interface GraphProps {
  data: Sales[]
}

const Graph: React.FC<GraphProps> = ({ data }) => {
  const chartData = {
    labels: Array.from({ length: data.length }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Retail Sales Over Time',
        data: data.map((sales) => sales.retailSales), // Update to access retailSales from each Sales object
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  }

  const chartOptions = {
    scales: {
      x: {
        type: 'linear' as const,
        position: 'bottom' as const,
        title: { display: true, text: 'Weeks' },
      },
      y: {
        type: 'linear' as const,
        position: 'left' as const,
        title: { display: true, text: 'Retail Sales' },
      },
    },
    plugins: {
      title: { display: true, text: 'Retail Sales Over Time' },
      tooltip: { mode: 'nearest' as const }, // Explicitly define the type here
    },
  }

  return <Line data={chartData} options={chartOptions} />
}

export default Graph
