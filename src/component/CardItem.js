export default function CardItem({
  id,
  onsetSelected,
  title = "No Title !",
  image = "https://wkdonlinedogtraining.com/wp-content/themes/wkd-wp/build/images/bg-no-img-big.jpg",
  place,
  placeEn,
  isEnglish,
  titleEn,
}) {
  return (
    <div
      className={place === "خبر" ? "news__card news_cardBtn" : "news__card"}
      onClick={() => onsetSelected(id)}
    >
      <img src={image} alt="" />
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
