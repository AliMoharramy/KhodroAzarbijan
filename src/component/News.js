import CardItem from "./CardItem";

export default function News() {
  return (
    <section className="News">
      <div className="container">
        <div className="news__title">
          <button>همه اخبار</button>
          <p>آخرین اخبار</p>
        </div>
        <div className="news__cards">
          <CardItem
            title="انتصاب مدیر عامل جدید شرکت خودروی آذربایجان"
            image="https://www.digikala.com/mag/wp-content/uploads/2023/10/08.03-27.jpg"
          />
          <CardItem
            title="رشد ۲۰۰ درصدي توليد در سيباموتور"
            image="https://www.digikala.com/mag/wp-content/uploads/2023/10/08.03-45.jpg"
          />
          <CardItem
            title="عرضه کشنده تک محور و کامیون کمپرسی سیبا موتور در بورس کالا"
            image="https://www.digikala.com/mag/wp-content/uploads/2023/10/08.03-17.jpg"
          />
        </div>
      </div>
    </section>
  );
}
