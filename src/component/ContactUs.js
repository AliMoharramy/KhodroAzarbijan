export default function ContactUs({ isEnglish }) {
  window.onscroll = function (ev) {
    const headerPart = document.getElementsByClassName("header_contaner");
    const sliderPart = document.getElementsByClassName("contact-us");
    if (window.scrollY >= 160) {
      headerPart[0].classList.add("fixed-header");
      sliderPart[0].classList.add("after-scrolled");
    } else {
      headerPart[0].classList.remove("fixed-header");
      sliderPart[0].classList.remove("after-scrolled");
    }
  };
  return (
    <section className="contact-us">
      <div className="contact-us_container">
        <div className="contact-us_info">
          <div className="contact-address">
            <h3>{isEnglish ? "factory address : " : ": آدرس کارخانه"}</h3>
            <p>
              {isEnglish
                ? "Tabriz, Mellat Blvd., Azerbaijan Diesel Automobile Company"
                : "تبریز بلوار ملت شرکت خودروسازان دیزلی آذربایجان"}
            </p>
            <p>دورنگار : 34260100 -041</p>
          </div>
          <div className="contact-ways">
            <h3>
              {" "}
              {isEnglish ? "Ways of communication :" : ": راههای ارتباطی"}
            </h3>
            <p>دفتر مرکزی :34246088- 041</p>
            <p>امور مشتریان :34245954- 041</p>
            <p>ایمیل : Mail@advmco.ir</p>
          </div>
        </div>
        <a href="https://maps.app.goo.gl/WrWkBZNUSpCt9YWS7">
          <img
            src={require("../media/icons8-location-96.png")}
            className="locate"
            alt=""
          />
          <img
            src={require("../media/location.png")}
            className="contact-location"
            alt=""
          />
        </a>
      </div>
    </section>
  );
}
