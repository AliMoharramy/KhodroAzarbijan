import CardItem from "./CardItem";

export default function AllNews({
  setNews,
  AllNewsap,
  setSelectedNews,
  onscrollToTop,
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
          بازگشت
        </div>
        <div className="allNews-container">
          {Array.from({ length: AllNewsap.length }, (_, i) => {
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
    </section>
  );
}
