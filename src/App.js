import { useEffect, useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import News from "./component/News";
import Products from "./component/Products";
import Slider from "./component/Slider";
import Representation from "./component/Representation";
import ProductPage from "./component/ProductPage";
import AboutUs from "./component/AboutUs";
import AllNews from "./component/AllNews";
import NewsPage from "./component/NewsPage";
import Forms from "./component/Forms";
import ContactUs from "./component/ContactUs";
import PopupNav from "./component/PopupNav";
import PopupImg from "./component/PopupImg";
import ProductsInfo from "./component/JsonFiles/ProductsInfo.json";
import Loading from "./component/Loading";
import TopBanner from "./component/TopBanner";

function App({ AllNewsap }) {
  const [page, setPage] = useState("صفحه اصلی");
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [news, setNews] = useState(false);
  const [selectedNews, setSelectedNews] = useState(0);
  const [isPopup, setIsPopup] = useState(false);
  const [selectedForm, setSelectedForm] = useState("خدمات پس از فروش");
  const [isEnglish, setIsEnglish] = useState(false);
  const [isPopUpImg, setIsPopUpImg] = useState(["", false]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [isLoading]);

  useEffect(() => {
    if (localStorage.getItem("page") !== null) {
      setPage(localStorage.getItem("page"));
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("page", page);
    }, 500);
  }, [page]);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  function selectPage(e) {
    setPage(e);
    setSelectedProduct(0);
    setNews(false);
    setSelectedNews(0);
    scrollToTop();
    setIsPopup(false);
  }

  window.onscroll = function (ev) {
    let selectedSection = "Slides";
    switch (page) {
      case "صفحه اصلی":
        selectedSection = "Slides";
        break;
      case "درباره‌ما":
        selectedSection = "about-us";
        break;
      case "محصولات":
        selectedSection = "Products";
        break;
      case "خدمات پس از فروش":
        selectedSection = "Form";
        break;
      case "نمایندگی‌ها":
        selectedSection = "represent";
        break;
      case "تماس با ما":
        selectedSection = "ContactUs";
        break;
      default:
        selectedSection = "Slides";
        break;
    }
    const headerPart = document.getElementsByClassName("header_contaner");
    const sliderPart = document.getElementsByClassName(selectedSection);
    if (selectedSection === "Slides") {
      sliderPart[0].classList.add("after-scrolled2");
    }
    if (window.scrollY >= 160) {
      headerPart[0].classList.add("fixed-header");
      sliderPart[0].classList.add("after-scrolled");
    } else {
      headerPart[0].classList.remove("fixed-header");
      sliderPart[0].classList.remove("after-scrolled");
    }
  };

  return (
    <div className={`App ${isEnglish ? "englishVersion" : ""}`}>
      {isLoading && <Loading />}
      {isPopUpImg[1] && (
        <PopupImg item={isPopUpImg[0]} setIsPopUpImg={setIsPopUpImg} />
      )}
      {isPopup && (
        <PopupNav
          page={page}
          onselectPage={selectPage}
          setIsPopup={setIsPopup}
          isEnglish={isEnglish}
        />
      )}
      {page === "صفحه اصلی" && <TopBanner />}
      <Header
        page={page}
        onselectPage={selectPage}
        setIsPopup={setIsPopup}
        setIsEnglish={setIsEnglish}
        isEnglish={isEnglish}
        setIsLoading={setIsLoading}
      />
      {selectedNews === 0 ? (
        news ? (
          <AllNews
            setNews={setNews}
            AllNewsap={AllNewsap}
            setSelectedNews={setSelectedNews}
            onscrollToTop={scrollToTop}
            isEnglish={isEnglish}
          />
        ) : (
          page === "صفحه اصلی" && (
            <>
              <Slider />
              <News
                setNews={setNews}
                setSelectedNews={setSelectedNews}
                AllNewsap={AllNewsap}
                onscrollToTop={scrollToTop}
                isEnglish={isEnglish}
              />
            </>
          )
        )
      ) : (
        <NewsPage
          setSelectedNews={setSelectedNews}
          Newsap={AllNewsap[selectedNews - 1]}
          AllNewsap={AllNewsap}
          isEnglish={isEnglish}
          setIsPopUpImg={setIsPopUpImg}
        />
      )}
      {selectedProduct === 0 ? (
        page === "محصولات" && (
          <Products
            products={ProductsInfo.products}
            setSelectedProduct={setSelectedProduct}
            isEnglish={isEnglish}
          />
        )
      ) : (
        <ProductPage
          item={ProductsInfo.products[selectedProduct - 1]}
          setSelectedProduct={setSelectedProduct}
          isPopUpImg={isPopUpImg}
          setIsPopUpImg={setIsPopUpImg}
          isEnglish={isEnglish}
        />
      )}
      {page === "نمایندگی‌ها" && <Representation isEnglish={isEnglish} />}
      {page === "درباره‌ما" && <AboutUs isEnglish={isEnglish} />}
      {page === "خدمات پس از فروش" && (
        <Forms
          selectedForm={selectedForm}
          setSelectedForm={setSelectedForm}
          isEnglish={isEnglish}
        />
      )}
      {page === "تماس با ما" && <ContactUs isEnglish={isEnglish} />}
      {page !== "تماس با ما" && <Footer isEnglish={isEnglish} />}
    </div>
  );
}

export default App;
