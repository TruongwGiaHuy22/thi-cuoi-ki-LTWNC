import { useState } from "react";
import { novels } from "../data/novel";

export default function DanhSachAI() {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genres = [
    "Action","Adapted to Anime","Adapted to Drama CD","Adapted to Manga","Adapted to Manhua","Adapted to Manhwa",
    "Adult","Adventure","Age Gap","Boys Love","Character Growth","Chinese Novel","Comedy","Cooking",
    "Different Social Status","Drama","Ecchi","English Novel","Fanfiction","Fantasy","Female Protagonist",
    "Game","Gender Bender","Harem","Historical","Horror","Incest","Isekai","Josei","Korean Novel","Magic",
    "Martial Arts","Mature","Mecha","Military","Misunderstanding","Mystery","Netorare","One shot","Otome Game",
    "Parody","Psychological","Reverse Harem","Romance","Satire","School Life","Science Fiction","Seinen",
    "Shoujo","Shoujo ai","Shounen","Shounen ai","Slice of Life","Slow Life","Sports","Super Power","Supernatural",
    "Suspense","Tragedy","Wars","Web Novel","Workplace","Wuxia","Xianxia","Yandere","Yuri"
  ];
  const toggleGenre = (genre) => {
    setSelectedGenres((current) =>
      current.includes(genre)
        ? current.filter((item) => item !== genre)
        : [...current, genre]
    );
  };

  // Lọc truyện AI có id từ 3 đến 15
  const aiNovels = novels
    .filter(n => n.type === "AI" && n.id >= 3 && n.id <= 15)
    .sort((a, b) => b.id - a.id);

  return (
    <div className="ai-container">
      {/* LEFT */}
      <div className="ai-left">
        <h2 className="ai-title">
          Truyện AI mới cập nhật ({aiNovels.length})
        </h2>
        {aiNovels.map((novel) => {
          const hasChapters = novel.chapters && novel.chapters.length > 0;
          const lastChapterTitle = hasChapters
            ? novel.chapters[novel.chapters.length - 1].title
            : "Chưa có chương";
          return (
            <div key={novel.id} className="ai-card">
              <img
                src={novel.cover || "/default.jpg"}
                alt={novel.title}
                className="ai-img"
              />
              <div className="ai-content">
                <h3 className="ai-name">{novel.title}</h3>
                <p className="ai-meta">
                  <span className="meta-label">Người đăng</span>
                  <span className="author-name">
                    {" "}{novel.sangTacInfo?.author || "Ẩn danh"}
                  </span>
                  <span className="meta-label"> &nbsp; Số từ </span>
                  <span className="word-count">
                    {novel.sangTacInfo?.words ||
                      (hasChapters ? novel.chapters.length * 1000 : 0)}
                  </span>
                </p>
                <p className="ai-desc">
                  {novel.sangTacInfo?.description || novel.description}
                </p>
                <p className="ai-chapter-main">
                  {novel.sangTacInfo?.chapterMain || lastChapterTitle}
                </p>
                <p className="ai-chapter-sub">
                  {novel.sangTacInfo?.chapterSub ||
                    (hasChapters ? "" : "Đang cập nhật nội dung...")}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* RIGHT SIDEBAR */}
      <aside className="ai-sidebar">
        <div className="sidebar-panel">
          <h3 className="ai-box-title">Chữ cái</h3>
          <div className="ai-alpha-grid">
            <span className="ai-alpha-active">TẤT CẢ</span>
            <span>#</span>
            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
              <span key={letter}>{letter}</span>
            ))}
          </div>
        </div>
        <div className="sidebar-panel ai-filter-panel">
          <h3 className="ai-box-title">Phân loại</h3>
          <label className="ai-check"><input type="checkbox" defaultChecked /> Truyện dịch</label>
          <label className="ai-check"><input type="checkbox" /> Truyện sáng tác</label>
          <label className="ai-check"><input type="checkbox" /> Truyện AI dịch</label>
          <button className="ai-apply-btn">Áp dụng</button>
        </div>
        <div className="sidebar-panel ai-filter-panel">
          <h3 className="ai-box-title">Tình trạng</h3>
          <label className="ai-check"><input type="checkbox" defaultChecked /> Đang tiến hành</label>
          <label className="ai-check"><input type="checkbox" defaultChecked /> Tạm ngưng</label>
          <label className="ai-check"><input type="checkbox" defaultChecked /> Đã hoàn thành</label>
          <button className="ai-apply-btn">Áp dụng</button>
        </div>
        <div className="sidebar-panel">
          <h3 className="ai-box-title">Thể loại</h3>
          <div className="ai-genre-list">
            {genres.map((genre) => (
              <label
                key={genre}
                className={`ai-genre-item ${selectedGenres.includes(genre) ? "active" : ""}`}
              >
                <input
                  type="checkbox"
                  checked={selectedGenres.includes(genre)}
                  onChange={() => toggleGenre(genre)}
                />
                <span>{genre}</span>
              </label>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
