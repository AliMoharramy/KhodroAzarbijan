export default function PopupNav({ page, onselectPage, setIsPopup }) {
  const navItems = [
    "صفحه اصلی",
    "درباره‌ما",
    "محصولات",
    "فروش",
    "نمایندگی‌ها",
    "تماس با ما",
  ];
  return (
    <div className="popupnav">
      <i class="fa fa-close" onClick={(e) => setIsPopup(false)}></i>
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
  );
}
