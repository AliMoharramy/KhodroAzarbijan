import FooterInfoData from "./JsonFiles/FooterInfoData.json";
export default function Footer({ isEnglish }) {
  return (
    <section className="Footer">
      <div className="container footer__container">
        {Array.from(
          { length: FooterInfoData.footerInfoData.length },
          (_, i) => {
            return (
              <div className="footerItem">
                <div className=" footer-location">
                  <a href="https://maps.app.goo.gl/31rmZfLtBrrdM5YH8">
                    <img
                      src={require("../media/Screenshot 2023-11-11 at 20-31-46 Google Maps.png")}
                      alt=""
                    />
                  </a>
                </div>
                <h5>
                  {isEnglish
                    ? FooterInfoData.footerInfoData[i].titleEn
                    : FooterInfoData.footerInfoData[i].title}
                </h5>
                <div className="footer__info">
                  <div className="phone">
                    <p>{FooterInfoData.footerInfoData[i].address}</p>
                    <p>{FooterInfoData.footerInfoData[i].phone}</p>
                    <p>{FooterInfoData.footerInfoData[i].far}</p>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}
