import { useNavigate } from "react-router-dom";

function AlbumItem({ image, name, desc, id }) {
  const navigate = useNavigate();
  return (
    <div
      key={id}
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-[180px] p-2 px-3 h-[150px] w-[200px] rounded cursor-pointer  hover:bg-[#ffffff26]"
    >
      <img
        className="rounded w-full h-full  object-contain "
        src={image}
        alt="album img"
      />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
}

export default AlbumItem;
