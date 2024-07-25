/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";

import MainLayout from "../layouts/MainLayout";
import Statistics from "../components/Statistics";
import SongForm from "../components/SongForm";
import SongList from "../components/SongList";
import { AddSongButton } from "./styled/HomePageStyled";


const HomePage: React.FC = () => {
  const [showForm, setShowForm] = React.useState(false);
  return (
    <MainLayout>
      <div css={css`display: flex; justify-content: space-between;`}>
        <div></div>
        <AddSongButton onClick={() => setShowForm(true)}>
          Add New Song
        </AddSongButton>
      </div>
      <Statistics />
      {showForm && (
        <SongForm
          onBackClick={() => {
            setShowForm(false);
          }}
        />
      )}
      <SongList />
    </MainLayout>
  );
};

export default HomePage;
