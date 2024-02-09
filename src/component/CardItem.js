export default function CardItem({
  id,
  onsetSelected,
  title = "No Title !",
  image = "https://wkdonlinedogtraining.com/wp-content/themes/wkd-wp/build/images/bg-no-img-big.jpg",
  place,
  placeEn,
  isEnglish,
  titleEn,
  fromSer = false,
}) {
  return (
    <div
      className={place === "خبر" ? "news__card news_cardBtn" : "news__card"}
      onClick={() => onsetSelected(id)}
    >
      <div className="card__img-div">
        {fromSer ? (
          <img src={require("../media/c50021.jpg")} alt="" />
        ) : (
          <img src={image} alt="" />
        )}
      </div>
      <div className="news__info">
        <h5>{isEnglish ? titleEn : title}</h5>
      </div>
      <button>
        {isEnglish ? `See the ${placeEn}` : `مشاهده ${place}`}
        {place === "خبر" && <i className="fa fa-link"></i>}
      </button>
    </div>
  );
}
