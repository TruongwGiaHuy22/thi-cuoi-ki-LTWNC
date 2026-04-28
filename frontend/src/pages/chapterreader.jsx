import { useParams, Link } from "react-router-dom";
import { novels } from "../data/novel.js";
import { useState } from "react";

export default function ChapterReader() {
  const { id } = useParams();
  const chapter = novels.flatMap(n => n.chapters).find(ch => ch.id === parseInt(id));
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "chapterreader-bg-gray-900 chapterreader-text-white chapterreader-p-4" : "chapterreader-bg-white chapterreader-text-black chapterreader-p-4"}>
      <h2 className="chapterreader-text-xl chapterreader-font-bold chapterreader-mb-4">{chapter.title}</h2>
      <p>{chapter.content}</p>
      <div className="chapterreader-flex chapterreader-justify-between chapterreader-mt-4">
        <Link to={`/chapter/${chapter.id - 1}`}>Prev</Link>
        <button onClick={() => setDark(!dark)}>Toggle Dark Mode</button>
        <Link to={`/chapter/${chapter.id + 1}`}>Next</Link>
      </div>
    </div>
  );
}