export default function ContactUs() {
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
            <h3> : آدرس کارخانه</h3>
            <p>تبریز بلوار ملت شرکت خودروسازان دیزلی آذربایجان</p>
            <p>دورنگار : 34260100 -041</p>
          </div>
          <div className="contact-ways">
            <h3> : راههای ارتباطی</h3>
            <p>دفتر مرکزی :34246088- 041</p>
            <p>امور مشتریان :34260426- 041</p>
            <p>ایمیل : Mail@advmco.ir</p>
          </div>
        </div>
        <a href="https://maps.app.goo.gl/31rmZfLtBrrdM5YH8">
          <img
            src={require("../media/icons8-location-96.png")}
            className="locate"
            alt=""
          />
          <img
            src={require("../media/Screenshot 2023-11-11 at 20-31-46 Google Maps.png")}
            className="contact-location"
            alt=""
          />
        </a>
      </div>
    </section>
  );
}
