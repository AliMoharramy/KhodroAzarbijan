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
            <a href="#">
              <img src={require("../media/logo.png")} alt="Logo" />
            </a>
          </div>
          <div className="language" onClick={(e) => changeLangWithLoad()}>
            <p className="persian">{isEnglish ? "فا" : "En"}</p>
          </div>
          <div className="headerBar">
            <a href="tel:04134245954">
              <i class="fa fa-phone"></i>
            </a>
            <i class="fa fa-bars" onClick={(e) => setIsPopup(true)}></i>
          </div>
        </div>
        <div className="navbar">
          <ul>
            {Array.from({ length: HeaderContent.navItems.length }, (_, i) => {
              //let setsitems = HeaderContent.navItems.length - i;
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
