import HeaderContent from "./JsonFiles/HeaderContent.json";

export default function PopupNav({
  page,
  onselectPage,
  setIsPopup,
  isEnglish,
}) {
  return (
    <div className="popupnav">
      <i class="fa fa-close" onClick={(e) => setIsPopup(false)}></i>
      <ul>
        {Array.from({ length: HeaderContent.navItems.length }, (_, i) => {
          return (
            <li
              key={i}
              onClick={(e) => onselectPage(HeaderContent.navItems[i])}
              className={page === HeaderContent.navItems[i] && "activebtn"}
            >
              {isEnglish
                ? HeaderContent.navItemsEn[i]
                : HeaderContent.navItems[i]}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
