/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Back from "../assets/x.svg";
import { ClipLoader } from "react-spinners";
import {
  ModalContainer,
  InputField,
  SubmitButton,
  BackButton,
  Overlay,
} from "./styled/form";
import { addSong, resetSongAdded } from "../store/songs/songSlice";
import { Song } from "../types/Song";

interface SongFormProps {
  onBackClick: () => void;
}

const SongForm: React.FC<SongFormProps> = ({ onBackClick }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const dispatch = useDispatch();
  const songAdded = useSelector((state: any) => state.songs.songAdded); // Access the songAdded flag from the state
  const loading = useSelector((state: any) => state.songs.loading);

  useEffect(() => {
    if (songAdded) {
      setTitle("");
      setArtist("");
      setAlbum("");
      setGenre("");
      setErrors({});
      onBackClick();
      dispatch(resetSongAdded()); // Reset the songAdded flag
    }
  }, [songAdded, onBackClick, dispatch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    let newErrors: { [key: string]: string } = {};

    if (!title) {
      valid = false;
      newErrors.title = "Title is required";
    }
    if (!artist) {
      valid = false;
      newErrors.artist = "Artist is required";
    }
    if (!album) {
      valid = false;
      newErrors.album = "Album is required";
    }
    if (!genre) {
      valid = false;
      newErrors.genre = "Genre is required";
    }

    setErrors(newErrors);

    if (valid) {
      const song: Song = {
        title: title,
        artist: artist,
        album: album,
        genre: genre,
      };
      dispatch(addSong(song));
    }
  };

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
          `}
          >
            Add New Song
          </div>
          <BackButton onClick={onBackClick}>
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
          {errors.title && (
            <div
              css={css`
                color: red;
                font-size: 0.875rem;
                margin-top: 5px;
              `}
            >
              {errors.title}
            </div>
          )}
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
          {errors.artist && (
            <div
              css={css`
                color: red;
                font-size: 0.875rem;
                margin-top: 5px;
              `}
            >
              {errors.artist}
            </div>
          )}
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
          {errors.album && (
            <div
              css={css`
                color: red;
                font-size: 0.875rem;
                margin-top: 5px;
              `}
            >
              {errors.album}
            </div>
          )}
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
          {errors.genre && (
            <div
              css={css`
                color: red;
                font-size: 0.875rem;
                margin-top: 5px;
              `}
            >
              {errors.genre}
            </div>
          )}
          <div
            css={css`
              margin-top: 15px;
            `}
          ></div>
          <SubmitButton type="submit">
            {loading ? (
              <ClipLoader size={14} color={"#fff"} />
            ) : (
              <div>Submit</div>
            )}
          </SubmitButton>
          {/* <BackButton
            css={css`
              outline: none;
            `}
            onClick={onBackClick}
          >
            Back
          </BackButton> */}
        </form>
      </ModalContainer>
      <Overlay />
    </>
  );
};

export default SongForm;
