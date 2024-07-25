/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardParent, songCardStyles } from "./css/list";
import { fetchSongsStart, removeSongStart } from "../store/songs/songSlice";
import { SearchContainer } from "./styled/SearchContainer";
import { ClipLoader } from "react-spinners";
import UpdateSongForm from "./UpdateSong";
import { Song } from "../types/Song";
import {
  skeletonCardStyle,
  skeletonContainerStyle
} from './styled/Loading/songListSkeletonStyles'; // Import styles

const SongList: React.FC = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize] = useState(8);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");
  const [id, setId] = useState("");
  const songs = useSelector((state: any) => state.songs.songs);
  const loading = useSelector((state: any) => state.songs.loading);
  const error = useSelector((state: any) => state.songs.error);

  useEffect(() => {
    dispatch(fetchSongsStart({ searchQuery: searchTerm, page, pageSize }));
  }, [dispatch, searchTerm, page, pageSize]);
  const handleSearch = () => {
    setPage(1);
    dispatch(fetchSongsStart({ searchQuery: searchTerm, page: 1, pageSize }));
  };

  const handleEdit = (song: Song) => {
    setId(song._id || "");
    setTitle(song.title);
    setArtist(song.artist);
    setAlbum(song.album);
    setGenre(song.genre);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    console.log(`Delete ${id}`);
    dispatch(removeSongStart(id));
  };

  const handlePagination = (newPage: number) => {
    setPage(newPage);
    dispatch(
      fetchSongsStart({ searchQuery: searchTerm, page: newPage, pageSize })
    );
  };

  return (
    <div
      css={css`
        max-width: 100%;
        margin: 0 auto;
        font-family: Arial, sans-serif;
      `}
    >
      {isEditing && (
        <UpdateSongForm
          onBackClick={() => {
            setIsEditing(false);
          }}
          _id={id}
          title={title}
          artist={artist}
          album={album}
          genre={genre}
        />
      )}
      <h1
        css={css`
          text-align: center;
          margin-bottom: 20px;
          font-size: 2em;
          color: #4b3450;
        `}
      >
        Song List
      </h1>
      <div>
        <SearchContainer>
          <input
            type="search"
            placeholder="Search By Genre"
            onChange={(e) => setSearchTerm(e.target.value)}
            css={css`
              border: 1px solid #ccc;
              border-radius: 4px;
              width: 200px;
            `}
          />

          <button
            onClick={handleSearch}
            css={css`
              padding: 10px 20px;
              background-color: #694666;
              color: white;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              &:hover {
                background-color: #4b3450;
              }
            `}
          >
            Search
          </button>
        </SearchContainer>
        <div css={cardParent}>
          {error ? (
            <div>Error: {error}</div>
          ) : loading ? (
            
              <div css={skeletonContainerStyle}>
                <div css={skeletonCardStyle}></div>
                <div css={skeletonCardStyle}></div>
                <div css={skeletonCardStyle}></div>
                <div css={skeletonCardStyle}></div>
                <div css={skeletonCardStyle}></div>
                <div css={skeletonCardStyle}></div>
                <div css={skeletonCardStyle}></div>
                <div css={skeletonCardStyle}></div>
              </div>
            
          ) : songs && songs.length ? (
            <>
              {songs.map((song: any) => (
                <div key={song.id} css={songCardStyles}>
                  <div className="card-image">
                    <div className="card-content">
                      <h1>{song.title}</h1>
                   
            <p>
              <span className="label">Artist: </span> {song.artist}
            </p>
            <p>
              <span className="label">Genre: </span> {song.genre}
            </p>
            <p>
              <span className="label">Album: </span> {song.album}
            </p>
                    </div>
                  </div>
                  <div className="card-buttons">
                    <button
                      className="edit"
                      onClick={() => handleEdit(song)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete"
                      onClick={() => handleDelete(song._id)}
                    >
                      Delete                    </button>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div>No songs found</div>
          )}
        </div>
        <div
          css={css`
            display: flex;
            justify-content: center;
            margin-top: 20px;
          `}
        >
          <button
            onClick={() => handlePagination(page - 1)}
            disabled={page === 1}
            css={css`
              padding: 10px 20px;
              margin-right: 10px;
              background-color: #694666;
              color: white;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              &:disabled {
                background-color: #ccc;
                color: #000;
                cursor: not-allowed;
              }
              &:hover:not(:disabled) {
                background-color: #4b3450;
              }
            `}
          >
            Previous
          </button>
          <span
            css={css`
              padding: 10px 20px;
              font-size: 16px;
            `}
          >
            {page}
          </span>
          <button
            onClick={() => handlePagination(page + 1)}
            disabled={songs.length < pageSize}
            css={css`
              padding: 10px 20px;
              margin-left: 10px;
              background-color: #694666;
              color: white;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              &:disabled {
              color: #000;
                background-color: #ccc;
                cursor: not-allowed;
              }
              &:hover:not(:disabled) {
                background-color: #4b3450;
              }
            `}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SongList;