/** @jsxImportSource @emotion/react */
import React from 'react';
import Chart from 'react-apexcharts';
import { css } from '@emotion/react';
import { ApexOptions } from 'apexcharts';

interface ChartComponentProps {
  data: { count: number, genre?: string, artist?: string, album?: string }[];
  title: string;
}

const ChartComponent: React.FC<ChartComponentProps> = ({ data, title }) => {
  const seriesData = data.map(item => item.count);
  const categories = data.map(item => item.genre || item.artist || item.album);
  const options: ApexOptions = {
    chart: {
      type: 'bar',
      toolbar: {
        show: true
      }
    },
    title: {
      text: `${title} Counts`,
      align: 'center',
      style: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#4b3450'
      }
    },
    xaxis: {
      categories: categories,
      labels: {
        style: {
          colors: '#4b3450',
          fontSize: '12px'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#4b3450',
          fontSize: '12px'
        }
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: 'top'
        },
        columnWidth: '50%',
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#fff']
      }
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'], // alternating row colors
        opacity: 0.5
      }
    },
    colors: ['#694666'], // Change the bar color
    tooltip: {
      theme: 'light'
    }
  };

  const series = [
    {
      name: title,
      data: seriesData
    }
  ];

  return (
    <div
      css={css`
        margin-bottom: 20px;
        background-color: #fff; // Add background color to the container
        border-radius: 10px; // Add border radius for rounded corners
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Add box shadow for a subtle effect
        padding: 20px; // Add padding inside the container
      `}
    >
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default ChartComponent;