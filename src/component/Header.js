import HeaderContent from "./JsonFiles/HeaderContent.json";
export default function Header({
  page,
  onselectPage,
  setIsPopup,
  setIsEnglish,
  isEnglish,
  setIsLoading,
}) {
  function changeLangWithLoad() {
    setIsLoading(true);
    setIsEnglish(isEnglish ? false : true);
  }
  return (
    <header>
      <div className="header_contaner">
        <div className="right-nav">
          <div className="logo">
            <img src={require("../media/logo.png")} alt="" />
          </div>
          <div className="language" onClick={(e) => changeLangWithLoad()}>
            <p className="persian">{isEnglish ? "فا" : "En"}</p>
          </div>
          <div className="headerBar">
            <a href="tel:04134250426">
              <i class="fa fa-phone"></i>
            </a>
            <i class="fa fa-bars" onClick={(e) => setIsPopup(true)}></i>
          </div>
        </div>
        <div className="navbar">
          <ul>
            <div className="language" onClick={(e) => changeLangWithLoad()}>
              <p className="persian">{isEnglish ? "فا" : "En"}</p>
            </div>

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
      </div>
    </header>
  );
}
