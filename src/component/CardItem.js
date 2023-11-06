export default function CardItem({
  title = "No Title !",
  image = "https://wkdonlinedogtraining.com/wp-content/themes/wkd-wp/build/images/bg-no-img-big.jpg",
  place = "خبر",
}) {
  return (
    <div className="news__card" onClick={(e) => console.log(e.target)}>
      <img src={image} alt="" />
      <div className="news__info">
        <h5>{title}</h5>
      </div>
      <button>مشاهده {place}</button>
    </div>
  );
}
