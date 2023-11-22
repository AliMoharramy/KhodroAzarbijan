import { useState } from "react";
import ProductAlbum from "./ProductAlbum";
import ProductPageInfo from "./ProductPageInfo";

const detailSelecterItems = ["آلبوم تصاویر", "ویژگی‌های فنی"];
const detailSelecterItemsEn = ["Album", "Technical Features"];

export default function ProductPage({
  item,
  setSelectedProduct,
  setIsPopUpImg,
  isPopUpImg,
  isEnglish,
}) {
  const [productInfo, setProductInfo] = useState("ویژگی‌های فنی");

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
          {isEnglish ? "Back" : "بازگشت"}
        </div>
        <div className="info">
          <div className="product-page__top">
            <div className="product-img">
              <img src={item.image} alt="" />
            </div>

            <div className="product-dis">
              <h2 className="productName"> {item.title} </h2>
              <ul>
                {Array.from({ length: item.powers.length }, (_, i) => {
                  return (
                    <li>{isEnglish ? item.powersEn[i] : item.powers[i]}</li>
                  );
                })}
              </ul>
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
                    {isEnglish
                      ? detailSelecterItemsEn[i]
                      : detailSelecterItems[i]}
                  </p>
                );
              })}
            </div>
            <div className="product-moreInfo">
              {productInfo === "ویژگی‌های فنی" ? (
                <ProductPageInfo isEnglish={isEnglish} itemTable={item.table} />
              ) : (
                <ProductAlbum
                  albume={item.albume}
                  setIsPopUpImg={setIsPopUpImg}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
