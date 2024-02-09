import { useState } from "react";
import AllNewsap from "../JsonFiles/AllNewsap";
import NewsPreview from "./NewsPreview";
const newNews = {
  id: Math.max(...AllNewsap.map((e) => e.id)) + 1,
  title: "",
  titleEn: "",
  haveVideo: false,
  place: "خبر",
  placeEn: "News",
  image: "",
  text: "",
  textEn: "",
};

function setNewsValue() {
  const setingForm = document.getElementsByClassName("setnewnews")[0];
  console.log(setingForm[1].value);
  newNews.title = setingForm[0].value;
  newNews.image = setingForm[1].value;
  newNews.text = setingForm[2].value;
}

export default function ControlPage() {
  const [newsPreview, setNewsPreview] = useState(false);
  function previewClick() {
    setNewsValue();
    setNewsPreview(true);
  }
  return (
    <section className="controlPage">
      {newsPreview ? (
        <NewsPreview newNews={newNews} setNewsPreview={setNewsPreview} />
      ) : (
        <>
          <div className="addNews">
            <p className="addNews_title">افزودن خبر</p>
            <div className="addNewsItem">
              <form action="" className="setnewnews">
                <label htmlFor="title">title :</label>
                <input type="text" name="title" />
                <label htmlFor="img">image url :</label>
                <input type="text" name="img" />
                <label htmlFor="newsText">news text : </label>
                <textarea name="newsText" cols="30" rows="10"></textarea>
              </form>
              <button onClick={previewClick}>See Preview</button>
            </div>
          </div>
          <div className="addProduct">
            <p className="addProduct_title">افزودن محصول</p>
          </div>
        </>
      )}
    </section>
  );
}
