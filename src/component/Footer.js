export default function Footer() {
  return (
    <section className="Footer">
      <div className="container footer__container">
        <div className="footer__logo">
          <div className="logo footer__logo">
            <a href="#">
              <img src="https://amicoir.com/images/logo_fa.png" alt="" />
            </a>
          </div>
        </div>
        <div className="location">location</div>
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
        </div>
      </div>
    </section>
  );
}
