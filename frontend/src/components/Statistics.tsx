/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { css } from "@emotion/react";

import { useDispatch, useSelector } from "react-redux";
import { startFetchStatistics } from "../store/statitstics/stateSlice";
import ChartComponent from './charts/ChartComponent';
import { chartContainer, chartItem } from './styled/ChartStyles'; // Import styles
import PieChartComponent from './charts/PieChartComponent'; // Import the PieChartComponent

import { skeletonContainerStyle,skeletonChartContainerStyle, skeletonBarStyle, skeletonPieStyle } from './styled/Loading/stat'; // Import styles

const Statistics: React.FC = () => {
  const statistics = useSelector((state: any) => state.statistics.statistics);
  const loading = useSelector((state: any) => state.statistics.loading);
  const error = useSelector((state: any) => state.statistics.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startFetchStatistics());
  }, [dispatch]);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        margin: 0 auto;
      `}
    >
      <h1
        css={css`
          font-size: 2em;
          margin-bottom: 20px;
          color: #4b3450;
        `}
      >
        Statistics
      </h1>

      {loading && 
       <>
        <div css={skeletonContainerStyle}>
          <div css={skeletonChartContainerStyle}>
            <div css={skeletonBarStyle}></div>
            <div css={skeletonBarStyle}></div>
            <div css={skeletonBarStyle}></div>
          </div>
          <div css={skeletonPieStyle}></div>
        </div>
     </>
      }
      {error && <p>Error: {error}</p>}
      {!loading && !error && Object.keys(statistics).length > 0 && (
        <>
          <div css={chartContainer}>
            <div css={chartItem}>
              <ChartComponent data={statistics.genreCounts} title="Genres" />
            </div>
            <div css={chartItem}>
              <ChartComponent data={statistics.artistCounts} title="Artists" />
            </div>
            <div css={chartItem}>
              <ChartComponent data={statistics.albumCounts} title="Albums" />
            </div>
          </div>
          <div
            css={css`
              margin-top: 40px;
              width: 100%;
              display: flex;
              justify-content: center;
            `}
          >
            <PieChartComponent
              data={{
                'Total Songs': statistics.totalSongs,
                'Total Artists': statistics.totalArtists,
                'Total Albums': statistics.totalAlbums,
                'Total Genres': statistics.totalGenres,
              }}
              title="Overall Statistics"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Statistics;