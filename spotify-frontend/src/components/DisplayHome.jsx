import { useContext } from "react";
import AlbumItem from "./AlbumItem";
import Navbar from "./Navbar";
import SongsItem from "./SongsItem";
import { PlayerContext } from "./../context/PlayerContext";

function DisplayHome() {
  const { songsData, albumsData } = useContext(PlayerContext);
  return (
    <>
      <Navbar />
      <div className="mb-4 h-60 ">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex h-60 overflow-auto scrollbar-hide">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              image={item.image}
              name={item.name}
              desc={item.desc}
              id={item._id}
            />
          ))}
        </div>
      </div>
      <div className="mb-4 h-60 ">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex h-50 overflow-auto scrollbar-hide">
          {songsData.map((item, index) => (
            <SongsItem
              key={index}
              image={item.image}
              name={item.name}
              desc={item.desc}
              id={item._id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default DisplayHome;
