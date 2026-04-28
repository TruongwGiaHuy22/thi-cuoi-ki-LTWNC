import { useParams } from "react-router-dom";
import { novels } from "../data/novel.js";
import ChapterList from "../compoment/chapterlist.jsx";

export default function NovelDetail() {
  const { id } = useParams();
  const novel = novels.find(n => n.id === parseInt(id));

  return (
    <div className="novelsdetail-p-4">
      <img src={novel.cover} alt={novel.title} className="novelsdetail-w-48 novelsdetail-h-64 novelsdetail-object-cover" />
      <h2 className="novelsdetail-text-2xl novelsdetail-font-bold">{novel.title}</h2>
      <p>{novel.description}</p>
      <p className="novelsdetail-text-sm novelsdetail-text-gray-500">{novel.genres.join(", ")}</p>
      <ChapterList chapters={novel.chapters} />
    </div>
  );
}