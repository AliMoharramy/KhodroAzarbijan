import CardItem from "./CardItem";

export default function AllNews({
  setNews,
  AllNewsap,
  setSelectedNews,
  onscrollToTop,
  isEnglish,
}) {
  function setSelected(id) {
    setSelectedNews(id);
    onscrollToTop();
  }
  window.onscroll = function (ev) {
    const headerPart = document.getElementsByClassName("header_contaner");
    const sliderPart = document.getElementsByClassName("allNews");
    if (window.scrollY >= 160) {
      headerPart[0].classList.add("fixed-header");
      sliderPart[0].classList.add("after-scrolled");
    } else {
      headerPart[0].classList.remove("fixed-header");
      sliderPart[0].classList.remove("after-scrolled");
    }
  };
  return (
    <section className="allNews">
      <div className="container">
        <div className="productBackbtn" onClick={() => setNews(0)}>
          <i class="fa fa-chevron-left"></i>
          {isEnglish ? "Back" : "بازگشت"}
        </div>
        <div className="allNews-container">
          {Array.from({ length: AllNewsap.length }, (_, i) => {
            return (
              <CardItem
                id={AllNewsap[i].id}
                title={AllNewsap[i].title}
                titleEn={AllNewsap[i].titleEn}
                image={
                  AllNewsap[i].image ||
                  require("../media/istockphoto-1324356458-612x612-1.jpg")
                }
                place={AllNewsap[i].place}
                placeEn={AllNewsap[i].placeEn}
                isEnglish={isEnglish}
                onsetSelected={setSelected}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
