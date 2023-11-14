export default function ContactUs() {
  window.onscroll = function (ev) {
    const headerPart = document.getElementsByClassName("header_contaner");
    const sliderPart = document.getElementsByClassName("contact-us");
    if (window.scrollY >= 160) {
      //headerPart[0].classList.add("fixed-header");
      //sliderPart[0].classList.add("after-scrolled");
    } else {
      //headerPart[0].classList.remove("fixed-header");
      //sliderPart[0].classList.remove("after-scrolled");
    }
  };
  return (
    <section className="contact-us">
      <div className="contact-us_container">
        <div className="contact-us_info">
          <div className="contact-address">
            <h3>آدرس</h3>
            <p>
              کیلومتر۱۳ بزرگراه شهید لشگری(جاده مخصوص کرج)، ستاد ،سازمان فروش،
              مرکز خدمات پس از فروش و تعمیرگاه مرکزی گروه بهمن{" "}
            </p>
            <p>کد پستی: ۳۹۷۱۱ -۱۳۹۹۹</p>
          </div>
          <div className="contact-ways">
            <h3>راههای ارتباطی </h3>
            <p>مرکز تماس :۴۸۰۲۷-۰۲۱</p>
            <p>ایمیل : info@bahman.ir</p>
            <p>شماره واتس اپ خدمات پس از فروش: ۹۸۹۹۴۱۶۷۲۶۲۰+</p>
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
