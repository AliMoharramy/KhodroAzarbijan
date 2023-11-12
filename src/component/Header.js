export default function Header({ page, onselectPage, setIsPopup }) {
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
            <a href="Header">
              <img src={require("../media/Group 3.png")} alt="" />
            </a>
          </div>
          <div className="language">
            <p className="persian">فارسی</p>
            <p className="english">english</p>
          </div>
          <div className="headerBar">
            <a href={`04135475935`}>
              <i class="fa fa-phone"></i>
            </a>
            <i class="fa fa-bars" onClick={(e) => setIsPopup(true)}></i>
          </div>
        </div>
        <div className="navbar">
          <ul>
            {Array.from({ length: navItems.length }, (_, i) => {
              return (
                <li
                  key={i}
                  onClick={(e) => onselectPage(e.target.innerText)}
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
