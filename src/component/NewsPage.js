import CardItem from "./CardItem";
export default function NewsPage({
  setSelectedNews,
  Newsap,
  AllNewsap,
  isEnglish,
  setIsPopUpImg,
}) {
  function setSelected(id) {
    setSelectedNews(id);
  }
  window.onscroll = function (ev) {
    const headerPart = document.getElementsByClassName("header_contaner");
    const sliderPart = document.getElementsByClassName("newsPage");
    if (window.scrollY >= 160) {
      headerPart[0].classList.add("fixed-header");
      sliderPart[0].classList.add("after-scrolled");
    } else {
      headerPart[0].classList.remove("fixed-header");
      sliderPart[0].classList.remove("after-scrolled");
    }
  };
  return (
    <div className="newsPage">
      <div className="container">
        <div className="productBackbtn" onClick={() => setSelected(0)}>
          <i class="fa fa-chevron-left"></i>
          {isEnglish ? "Back" : "بازگشت"}
        </div>

        <div className="news-container">
          <div className="newsInfo">
            {Newsap.video ? (
              <video
                src={require("../media/videoStart.mp4")}
                poster={Newsap.image}
                controls
              ></video>
            ) : (
              <img src={Newsap.image} alt="" />
            )}
            <div className="newsInfo-details">
              <h3>{isEnglish ? Newsap.titleEn : Newsap.title}</h3>
              <p>{isEnglish ? Newsap.textEn : Newsap.text}</p>
            </div>
            {Newsap.albume && (
              <div className="newsImages">
                <div className="news_images-container">
                  {Array.from({ length: Newsap.albume.length }, (_, i) => {
                    return (
                      <div>
                        <img
                          src={Newsap.albume[i]}
                          alt="img"
                          onClick={(e) => setIsPopUpImg([e.target.src, true])}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <div className="anotherNews">
            {Array.from({ length: 3 }, (_, i) => {
              return (
                <CardItem
                  id={AllNewsap[i].id}
                  title={AllNewsap[i].title}
                  titleEn={AllNewsap[i].titleEn}
                  image={AllNewsap[i].image}
                  place={AllNewsap[i].place}
                  placeEn={AllNewsap[i].placeEn}
                  onsetSelected={setSelected}
                  isEnglish={isEnglish}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
