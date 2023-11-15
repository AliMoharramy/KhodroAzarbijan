import { useState } from "react";
import ProductAlbum from "./ProductAlbum";
import ProductPageInfo from "./ProductPageInfo";

const detailSelecterItems = ["آلبوم تصاویر", "ویژگی‌های فنی"];

export default function ProductPage({ item, setSelectedProduct }) {
  const [productInfo, setProductInfo] = useState("ویژگی‌های فنی");
  const powers = [
    "موتور نام آشنا و قدرتمند cummins از سری ISF3.8",
    "گیربکس 6 سرعته با قابلیت نصب PTO",
    "وزن ناخالص اسمی 11 تن و حمل بار تا 6 تن",
    "فضای بارگیری جادار و مناسب برای نصب انواع کاربری",
    "سیستم ترمز بادی با ایمنی بالا و عملکرد مطلوب مجهزبه ABS - EBD",
    "مجهز به فناوری های پیشرفته و حایز استانداردهای اروپایی",
  ];

  window.onscroll = function (ev) {
    const headerPart = document.getElementsByClassName("header_contaner");
    const sliderPart = document.getElementsByClassName("product-page");
    if (window.scrollY >= 160) {
      headerPart[0].classList.add("fixed-header");
      sliderPart[0].classList.add("after-scrolled");
    } else {
      headerPart[0].classList.remove("fixed-header");
      sliderPart[0].classList.remove("after-scrolled");
    }
  };

  return (
    <section className="product-page">
      <div className="container">
        <div className="productBackbtn" onClick={() => setSelectedProduct(0)}>
          <i class="fa fa-chevron-left"></i>
          بازگشت
        </div>
        <div className="info">
          <div className="product-page__top">
            <div className="product-img">
              <img src={item.image} alt="" />
            </div>

            <div className="product-dis">
              <h2 className="productName"> {item.title} </h2>
              <ul>
                {Array.from({ length: powers.length }, (_, i) => {
                  return <li>{powers[i]}</li>;
                })}
              </ul>
              {/* <p>
                کشنده بایک X9 به پیشرانه ۱۲.۹ لیتری توربو دیزل مجهز است که از
                نوع ۶ سیلندر خطی بوده و توان تولید نهایت قدرت ۵۶۰ اسب بخار و
                نهایت گشتاور ۲۶۰۰ نیوتن متر را دارد. قدرت از طریق جعبه دنده ۱۲
                سرعته اتوماتیک ZF به چرخ ها منتقل می شود. کلاچ این کشنده از نوع
                تک صفحه ای خشک با فنر دیافراگمی است و مخزن سوخت ۱,۰۵۰ لیتر حجم
                دارد. سیستم تعلیق در جلو از نوع فنر تخت چند لایه پارابولیک مجهز
                به میل موجگیر و کمک فنر هیدرو تلسکوپی است و در عقب سیستم تعلیق
                بادی را با ۴ بالشتک هوا و سیستم تنظیم ارتفاع را داریم.
              </p> */}
            </div>
          </div>
          <div className="product-details">
            <div className="detail-selecter">
              {Array.from({ length: detailSelecterItems.length }, (_, i) => {
                return (
                  <p
                    onClick={(e) => setProductInfo(detailSelecterItems[i])}
                    className={
                      productInfo === detailSelecterItems[i] && "productActive"
                    }
                  >
                    {detailSelecterItems[i]}
                  </p>
                );
              })}
            </div>
            <div className="product-moreInfo">
              {productInfo === "ویژگی‌های فنی" ? (
                <ProductPageInfo />
              ) : (
                <ProductAlbum album={item.album} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
