/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

import Back from "../assets/x.svg";
import {
  ModalContainer,
  InputField,
  SubmitButton,
  BackButton,
  Overlay,
} from "./styled/form";
import { SongFormProps } from "../types/Prop-types";
import { updateSongStart,resetSongUpdated } from "../store/songs/songSlice";
import { Song } from "../types/Song";

const UpdateSongForm: React.FC<SongFormProps> = ({
  onBackClick,
  _id: initialId,
  title: initialTitle,
  artist: initialArtist,
  album: initialAlbum,
  genre: initialGenre,
}) => {
  const [title, setTitle] = useState(initialTitle || "");
  const [artist, setArtist] = useState(initialArtist || "");
  const [album, setAlbum] = useState(initialAlbum || "");
  const [genre, setGenre] = useState(initialGenre || "");
  const [id, setId] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const song: Song = {
      _id: id,
      title: title,
      artist: artist,
      album: album,
      genre: genre,
    };
    dispatch(updateSongStart(song));
  };
  const loading = useSelector((state: any) => state.songs.loading);
  const songUpdated = useSelector((state: any) => state.songs.songUpdated);
  // Use useEffect to update the state when props change
  useEffect(() => {
    setTitle(initialTitle || "");
    setArtist(initialArtist || "");
    setAlbum(initialAlbum || "");
    setGenre(initialGenre || "");
    setId(initialId || "");
  }, [initialTitle, initialArtist, initialAlbum, initialGenre]);
  useEffect(() => {
    if (songUpdated) {
      setTitle("");
      setArtist("");
      setAlbum("");
      setGenre("");
      onBackClick();
      dispatch(resetSongUpdated()); // Reset the songAdded flag
    }
  }, [songUpdated, onBackClick, dispatch]);

  return (
    <>
      <Overlay />
      <ModalContainer>
        <div
          css={css`
            display: flex;

            justify-content: space-between;
          `}
        >
<div
          css={css`
            margin-bottom: 15px;
            font-size: 20px;
            font-weight: bold;
            color: #4b3450;
          `}
        >
          Update New Song
        </div>          <BackButton onClick={onBackClick}>
            <img src={Back} alt="" />
          </BackButton>
        </div>
        
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="title"
            css={css`
              margin-bottom: 5px;
              font-weight: bold;
            `}
          >
            Title
          </label>
          <InputField
            type="text"
            placeholder="Song Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label
            htmlFor="artist"
            css={css`
              margin-bottom: 5px;
              font-weight: bold;
            `}
          >
            Artist
          </label>
          <InputField
            type="text"
            placeholder="Artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
          <label
            htmlFor="album"
            css={css`
              margin-bottom: 5px;
              font-weight: bold;
            `}
          >
            Album
          </label>
          <InputField
            type="text"
            placeholder="Album"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
          />
          <label
            htmlFor="genre"
            css={css`
              margin-bottom: 5px;
              font-weight: bold;
            `}
          >
            Genre
          </label>
          <InputField
            type="text"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <SubmitButton type="submit">
          {loading ? (
              <ClipLoader size={14} color={"#fff"} />
            ) : (
              <div>Submit</div>
            )}      
          </SubmitButton>
          {/* <BackButton onClick={onBackClick}>Back</BackButton> */}
        </form>
      </ModalContainer>
      <Overlay />
    </>
  );
};

export default UpdateSongForm;
