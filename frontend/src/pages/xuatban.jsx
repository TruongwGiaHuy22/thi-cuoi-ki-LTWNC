// PHẦN XUẤT BẢN
import React, { useState } from "react";
import { novels } from "../data/novel.js";

export default function XuatBan() {

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Lọc tất cả truyện có cover
  const data = novels.filter(n => n.cover);

  // Tính toán phân trang
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="xuatban-container">
      
      {/* MAIN */}
      <div className="xuatban-main">
        {currentData.map((item) => {
          const info = item.sangTacInfo || {};
          return (
            <div key={item.id} className="xuatban-item">
              
              <div className="xuatban-img">
                <img src={item.cover} alt={item.title} />
              </div>

              <div className="xuatban-content">
                <h2 className="xuatban-title">{item.title}</h2>

                <p className="xuatban-publisher">
                  {item.type || "Không rõ thể loại"}
                </p>

                <div className="xuatban-info">
                  <p><b>Tác giả:</b> {info.author || "Ẩn danh"}</p>
                  <p><b>Số từ:</b> {info.words || "-"}</p>
                  <p><b>Thể loại:</b> {(item.genres && item.genres.join(", ")) || "-"}</p>
                  <p><b>Trạng thái:</b> {item.status || "-"}</p>
                </div>

                <p className="xuatban-desc">
                  {info.description || item.description || "Không có mô tả."}
                </p>

                <button className="xuatban-btn">
                  Xem chi tiết
                </button>
              </div>
            </div>
          );
        })}

        {/* ===== PHÂN TRANG (CHỈ THÊM PHẦN NÀY) ===== */}
        <div className="xuatban-pagination">
          {/* về đầu */}
          <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
            «
          </button>

          {/* số trang */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              className={currentPage === page ? "active" : ""}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}

          {/* về cuối */}
          <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>
            »
          </button>
        </div>
      </div>

      {/* SIDEBAR */}
      <div className="xuatban-sidebar">
        <div className="xuatban-filter">
          <h3>Thể loại</h3>
          {[...new Set(data.flatMap(n => n.genres || []))].map((genre, i) => (
            <label key={i}>
              <input type="checkbox" /> {genre}
            </label>
          ))}
        </div>

        <div className="xuatban-filter">
          <h3>Tựa gốc</h3>
          <select className="xuatban-select">
            <option>Chọn tựa</option>
            {data.map((n, i) => (
              <option key={i}>{n.title}</option>
            ))}
          </select>
        </div>

        <div className="xuatban-filter">
          <h3>Trạng thái</h3>
          {[...new Set(data.map(n => n.status))].map((status, i) => (
            <label key={i}>
              <input type="checkbox" /> {status}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}