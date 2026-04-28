import { useEffect, useState } from "react";

export default function Footer() {

  const [show, setShow] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.scrollHeight;

    // 🔥 chỉ hiện khi gần cuối trang (footer)
    if (scrollTop + windowHeight >= fullHeight - 150) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          {/* Logo + mô tả */}
          <div className="footer-left">
            <h2 className="footer-logo">LightNovelVN</h2>
            <p className="footer-desc">
              Nơi đọc light novel miễn phí, cập nhật nhanh và chất lượng cao.
            </p>
          </div>

          {/* Email */}
          <div className="footer-right">
            <h3>Liên hệ</h3>

            <div className="footer-contact">
              <a href="mailto:tghuy.k24tt@kontum.udn.vn">
                tghuy.k24tt@kontum.udn.vn
              </a>
            </div>
          </div>

        </div>

      </footer>

      {/* 🔥 NÚT SCROLL FLOATING */}
      {show && (
        <button onClick={scrollToTop} className="scroll-top">
          ↑
        </button>
      )}
    </>
  );
}

