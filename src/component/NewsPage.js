import CardItem from "./CardItem";
export default function NewsPage({ setSelectedNews, Newsap, AllNewsap }) {
  function setSelected(id) {
    setSelectedNews(id);
  }
  window.onscroll = function (ev) {
    const headerPart = document.getElementsByClassName("header_contaner");
    const sliderPart = document.getElementsByClassName("newsPage");
    if (window.scrollY >= 160) {
      headerPart[0].classList.add("fixed-header");
      sliderPart[0].classList.add("after-scrolled");
    } else {
      headerPart[0].classList.remove("fixed-header");
      sliderPart[0].classList.remove("after-scrolled");
    }
  };
  return (
    <div className="newsPage">
      <div className="container">
        <div className="productBackbtn" onClick={() => setSelected(0)}>
          <i class="fa fa-chevron-left"></i>
          بازگشت
        </div>

        <div className="news-container">
          <div className="newsInfo">
            <img src={Newsap.image} alt="" />
            <div className="newsInfo-details">
              <h3>{Newsap.title}</h3>
              <p>
                به گزارش خبرنگار مهر، وزارت صمت ابتدای امسال وعده تولید یک
                میلیون و ۷۰۰ هزار دستگاه انواع خودرو را تا پایان سال داد. بر
                همین اساس بررسی آمار وزارت صمت از تولید خودرو طی هفت ماهه امسال
                نشان می‌دهد که در این مدت ۷۶۲ هزار و ۵۶۷ دستگاه انواع خودرو در
                بخش دولتی و خصوصی تولید شده که اگرچه نسبت به مدت مشابه پارسال
                رشد ۲۲ درصدی را نشان می‌دهد اما نسبت به وعده وزارتخانه حدود ۲۰۰
                هزار دستگاه فاصله دارد. اگر قرار بود خودروسازان طبق وعده وزارت
                صمت پیش روند باید در ۷ ماه ۹۸۷ هزار دستگاه خودرو تولید می‌کردند
                یعنی باید ماهانه ۱۴۱ هزار دستگاه خودرو تولید می‌شد اما به صورت
                میانگین حدود ۶۴ هزار دستگاه هر ماه تولید شده است. جزئیات تولید
                خودرو بر این اساس از ۷۶۲ هزار و ۵۶۷ دستگاهی که تولید شده سهم
                خودروهای سواری ۶۴۶ هزار و ۴۸۶ دستگاه بوده که بیانگر رشد ۱۹ درصدی
                نسبت به مدت مشابه پارسال است. صرفاً در مهر ماه نیز ۱۰۲ هزار و
                ۱۳۵ دستگاه خودروی سواری تولید شده است. در این مدت ۹۱ هزار و ۷۶
                دستگاه وانت و ۲ هزار و ۲۶۵ دستگاه ون تولید شده که به ترتیب
                افزایش ۴۷ درصدی و ۲۹ درصدی را نشان می‌دهد. همچنین تولید مینی بوس
                و میدل باس نیز بدون تغییر نسبت به ۷ ماهه پارسال به میزان ۵۳۸
                دستگاه بوده است. این خودروها توسط بخش خصوصی تولید شده است. تولید
                اتوبوس با کاهش ۲۹ درصدی به ۴۹۱ دستگاه رسیده است. همچنین تولید
                کامیونت، کامیون و کشنده هم با ۲۱ هزار و ۷۱۱ دستگاه نشان از رشد
                ۳۵ درصدی دارد.
              </p>
            </div>
          </div>
          <div className="anotherNews">
            {Array.from({ length: 3 }, (_, i) => {
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
      </div>
    </div>
  );
}
