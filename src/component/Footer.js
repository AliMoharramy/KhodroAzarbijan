export default function Footer() {
  return (
    <section className="Footer">
      <div className="container footer__container">
        <div className=" footer-location">
          <a href="https://maps.app.goo.gl/31rmZfLtBrrdM5YH8">
            <img
              src={require("../media/Screenshot 2023-11-11 at 20-31-46 Google Maps.png")}
              alt=""
            />
          </a>
        </div>

        <div className="footer__info">
          <div className="phone">
            <p>
              شماره تماس : <span> 041-365-98-43</span>
            </p>
          </div>
          <div className="address">
            <p>
              آدرس :
              <span>
                کیلومتر۱۳ بزرگراه شهید لشگری(جاده مخصوص کرج)، ستاد ،سازمان فروش،
                مرکز خدمات پس از فروش و تعمیرگاه مرکزی گروه بهمن
              </span>
            </p>
          </div>
          <div className="footer__logo">
            <div className="logo">
              <a href=".Footer">
                <img src={require("../media/logo.png")} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
