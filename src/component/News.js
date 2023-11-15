import CardItem from "./CardItem";

export default function News({
  setNews,
  setSelectedNews,
  AllNewsap,
  onscrollToTop,
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
            مشاهده همه اخبار<i class="fa fa-newspaper-o"></i>
          </button>
          <div>
            <p>آخرین اخبار</p>
            <i class="fa fa-pencil-square-o"></i>
          </div>
        </div>
        <div className="news__cards">
          {Array.from({ length: 3 }, (_, i) => {
            return (
              <CardItem
                id={AllNewsap[i].id}
                title={AllNewsap[i].title}
                image={
                  AllNewsap[i].image ||
                  require("../media/istockphoto-1324356458-612x612-1.jpg")
                }
                onsetSelected={setSelected}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
