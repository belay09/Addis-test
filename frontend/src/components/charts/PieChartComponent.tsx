/** @jsxImportSource @emotion/react */
import React from 'react';
import Chart from 'react-apexcharts';
import { css } from '@emotion/react';
import { ApexOptions } from 'apexcharts';

interface PieChartComponentProps {
  data: { [key: string]: number };
  title: string;
}

const PieChartComponent: React.FC<PieChartComponentProps> = ({ data, title }) => {
  const series = Object.values(data);
  const labels = Object.keys(data);

  // Ensure there is data to display
  if (series.length === 0 || labels.length === 0) {
    return <div>No data available</div>;
  }

  const options: ApexOptions = {
    chart: {
      width: 380,
      type: 'pie',
      background: '#fff', // Add background color to the chart
    },
    colors: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1'], // Updated slice colors
    fill: {
      type: 'solid', // Changed fill type to solid
    },
    stroke: {
      width: 4,
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#000'], // Label color
        fontSize: '12px',
        fontWeight: 'normal',
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        opacity: 0.45,
      },
      formatter: function (val, opts) {
        const value = typeof val === 'number' ? val : parseFloat(val as string);
        return value.toFixed(1) + '%';
      },
    },
    tooltip: {
      y: {
        formatter: function (val, { seriesIndex, dataPointIndex }) {
          const label = labels[seriesIndex];
          const value = series[seriesIndex];
          return `${label}: ${value}`;
        }
      }
    },
    legend: {
      show: false, // Hide default legend
    },
    title: {
      text: title,
      align: 'center',
      style: {
        fontSize: '20px',
        color: '#4b3450',
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  return (
    <div
      css={css`
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px;
        position: relative;
        height: 500px;
        background-color: #fff; // Add background color to the container
        border-radius: 10px; // Add border radius for rounded corners
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Add box shadow for a subtle effect
      `}
    >
      <Chart options={options} series={series} type="pie" width="100%" height="90%" />
      <div
        css={css`
          display: flex;
          justify-content: center;
          margin-top: 20px;
        `}
      >
        {labels.map((label, index) => (
          <div
            key={index}
            css={css`
              margin: 0 10px;
              display: flex;
              align-items: center;
            `}
          >
            <span
              css={css`
                display: inline-block;
                width: 12px;
                height: 12px;
                background-color: ${options.colors ? options.colors[index] : '#694666'};
                margin-right: 5px;
              `}
            ></span>
            <span
              css={css`
                font-size: 14px;
                color: #4b3450;
                font-weight: 500;
              `}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartComponent;
