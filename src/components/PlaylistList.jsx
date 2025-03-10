import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylists } from "../slices/playlistSlice";
import "../assets/css/global.css";

const PlaylistList = () => {
    const dispatch = useDispatch();
    const playlists = useSelector((state) => state.playlists.items);
    const status = useSelector((state) => state.playlists.status);
    const error = useSelector((state) => state.playlists.error);
  
    useEffect(() => {
      dispatch(fetchPlaylists());
    }, [dispatch]);
  
    return (
      <div className="container">
        <h1>All Playlists</h1>
        {status === "loading" && <div>Loading...</div>}
        {status === "failed" && <div>{error}</div>}
        <ul className="list">
          {playlists.map((playlist) => (
            <li className="item" key={playlist.id}>
              <NavLink className="link" to={`/playlists/${playlist.id}/`}>
                {playlist.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default PlaylistList;