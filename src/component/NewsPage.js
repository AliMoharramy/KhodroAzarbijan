import CardItem from "./CardItem";
export default function NewsPage({ setSelectedNews, Newsap, AllNewsap }) {
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
          بازگشت
        </div>

        <div className="news-container">
          <div className="newsInfo">
            {Newsap.video ? (
              <video src={require("../media/videoStart.mp4")} controls></video>
            ) : (
              <img src={Newsap.image} alt="" />
            )}
            <div className="newsInfo-details">
              <h3>{Newsap.title}</h3>
              <p>{Newsap.text}</p>
            </div>
            {Newsap.albume && (
              <div className="newsImages">
                <div className="news_images-container">
                  {Array.from({ length: Newsap.albume.length }, (_, i) => {
                    return <img src={Newsap.albume[i]} alt="img" />;
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
                  image={AllNewsap[i].image}
                  onsetSelected={setSelected}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
