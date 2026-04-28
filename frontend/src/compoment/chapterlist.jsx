import { Link } from "react-router-dom";

export default function ChapterList({ chapters }) {
  return (
    <ul className="chapterlist-space-y-2">
      {chapters.map(ch => (
        <li key={ch.id}>
          <Link to={`/chapter/${ch.id}`} className="chapterlist-text-blue-500">{ch.title}</Link>
        </li>
      ))}
    </ul>
  );
}