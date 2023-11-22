import CardItem from "./CardItem";

export default function News({
  setNews,
  setSelectedNews,
  AllNewsap,
  onscrollToTop,
  isEnglish,
}) {
  function setSelected(id) {
    setSelectedNews(id);
    onscrollToTop();
  }
  return (
    <section className="News">
      <div className="container">
        <div className="news__title">
          <button onClick={(e) => setNews(true)}>
            {isEnglish ? "View all news" : "مشاهده همه اخبار"}
            <i class="fa fa-newspaper-o"></i>
          </button>
          <div>
            <p>{isEnglish ? "Latest News" : "آخرین اخبار"}</p>
            <i class="fa fa-pencil-square-o"></i>
          </div>
        </div>
        <div className="news__cards">
          {Array.from({ length: 3 }, (_, i) => {
            let rst = 3 - i;
            return (
              <CardItem
                id={AllNewsap[rst].id}
                title={AllNewsap[rst].title}
                titleEn={AllNewsap[rst].titleEn}
                place={AllNewsap[rst].place}
                placeEn={AllNewsap[rst].placeEn}
                image={
                  AllNewsap[rst].image ||
                  require("../media/istockphoto-1324356458-612x612-1.jpg")
                }
                onsetSelected={setSelected}
                isEnglish={isEnglish}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
