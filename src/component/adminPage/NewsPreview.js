import { useState } from "react";
import CardItem from "../CardItem";
import NewsPage from "../NewsPage";
import Header from "../Header";
export default function NewsPreview({ newNews, setNewsPreview }) {
  const [newsPage, setNewsPage] = useState(0);
  return (
    <div>
      <Header />
      {newsPage ? (
        <NewsPage
          setSelectedNews={setNewsPage}
          Newsap={newNews}
          AllNewsap={[{}, {}, {}]}
        />
      ) : (
        <div className="cardHolder">
          <CardItem
            id={newNews.id}
            title={newNews.title}
            titleEn={newNews.titleEn}
            place={newNews.place}
            placeEn={newNews.placeEn}
            image={newNews.image}
            onsetSelected={setNewsPage}
            // isEnglish={isEnglish}
          />
        </div>
      )}
      <button onClick={(e) => setNewsPreview(false)}>go back</button>
    </div>
  );
}
