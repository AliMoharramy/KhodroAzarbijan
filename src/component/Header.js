export default function Header({ page, setPage }) {
  const navItems = [
    "تماس با ما",
    "نمایندگی‌ها",
    "فروش",
    "محصولات",
    "درباره‌ما",
    "صفحه اصلی",
  ];
  return (
    <header>
      <div className="header_contaner">
        <div className="right-nav">
          <div className="logo">
            <a href="#">
              <img src="https://amicoir.com/images/logo_fa.png" alt="" />
            </a>
          </div>
          <div className="language">
            <p className="persian">فارسی</p>
            <p className="english">english</p>
          </div>
        </div>
        <div className="navbar">
          <ul>
            {Array.from({ length: navItems.length }, (_, i) => {
              return (
                <li
                  key={i}
                  onClick={(e) => setPage(e.target.innerText)}
                  className={page === navItems[i] && "activebtn"}
                >
                  {navItems[i]}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
