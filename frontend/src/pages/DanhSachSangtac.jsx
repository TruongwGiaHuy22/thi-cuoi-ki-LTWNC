import { useState } from "react";
import { novels } from "../data/novel";

export default function DanhSachSangTac() {
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

  const sangTac = [...novels]
    .filter(n => n.type === "Sáng tác")
    .sort((a, b) => b.id - a.id)
    .slice(0, 13);

  return (
    <div className="sangtac-container">
      
      {/* LEFT */}
      <div className="sangtac-left">
        <h2 className="sangtac-title">
          Mới cập nhật ({sangTac.length})
        </h2>

        {sangTac.map((novel) => {
          const hasChapters = novel.chapters && novel.chapters.length > 0;

          const lastChapterTitle = hasChapters
            ? novel.chapters[novel.chapters.length - 1].title
            : "Chưa có chương";

          return (
            <div key={novel.id} className="sangtac-card">
              
              <img
                src={novel.cover || "/default.jpg"}
                alt={novel.title}
                className="sangtac-img"
              />

              <div className="sangtac-content">
                <h3 className="sangtac-name">{novel.title}</h3>

                <p className="sangtac-meta">
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

                <p className="sangtac-desc">
                  {novel.sangTacInfo?.description || novel.description}
                </p>

                <p className="sangtac-chapter-main">
                  {novel.sangTacInfo?.chapterMain || lastChapterTitle}
                </p>

                <p className="sangtac-chapter-sub">
                  {novel.sangTacInfo?.chapterSub ||
                    (hasChapters ? "" : "Đang cập nhật nội dung...")}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* RIGHT SIDEBAR */}
      <aside className="sangtac-sidebar">
        <div className="sidebar-panel">
          <h3 className="danhsach-box-title">Chữ cái</h3>
          <div className="danhsach-alpha-grid">
            <span className="danhsach-alpha-active">TẤT CẢ</span>
            <span>#</span>
            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
              <span key={letter}>{letter}</span>
            ))}
          </div>
        </div>

        <div className="sidebar-panel danhsach-filter-panel">
          <h3 className="danhsach-box-title">Phân loại</h3>
          <label className="danhsach-check"><input type="checkbox" defaultChecked /> Truyện dịch</label>
          <label className="danhsach-check"><input type="checkbox" /> Truyện sáng tác</label>
          <label className="danhsach-check"><input type="checkbox" /> Truyện AI dịch</label>
          <button className="danhsach-apply-btn">Áp dụng</button>
        </div>

        <div className="sidebar-panel danhsach-filter-panel">
          <h3 className="danhsach-box-title">Tình trạng</h3>
          <label className="danhsach-check"><input type="checkbox" defaultChecked /> Đang tiến hành</label>
          <label className="danhsach-check"><input type="checkbox" defaultChecked /> Tạm ngưng</label>
          <label className="danhsach-check"><input type="checkbox" defaultChecked /> Đã hoàn thành</label>
          <button className="danhsach-apply-btn">Áp dụng</button>
        </div>
        <div className="sidebar-panel">
          <h3 className="danhsach-box-title">Thể loại</h3>
          <div className="danhsach-genre-list">
            {genres.map((genre) => (
              <label
                key={genre}
                className={`danhsach-genre-item ${selectedGenres.includes(genre) ? "active" : ""}`}
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
