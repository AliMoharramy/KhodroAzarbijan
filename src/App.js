import { useState } from "react";
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

const products = [
  {
    id: 1,
    title: "کامیون فورس ۸.۵ تن کابین خوابدار",
    image:
      "https://panel.bahman.ir/api/file_manager/dn/86795e49-4cec-4d33-bd31-a0610355ed8b",
    place: "محصول",
    album: [
      "https://panel.bahman.ir/api/file_manager/dn/5094b89c-50eb-411b-bdc1-b9484909b802",
      "https://panel.bahman.ir/api/file_manager/dn/87b477fd-90ff-423d-8983-20c35c0f3122",
      "https://panel.bahman.ir/api/file_manager/dn/16c2d2e1-1c16-4ef3-abfd-eaabd5612490",
    ],
  },
  {
    id: 2,
    title: " کشنده BAIC X9 ",
    image:
      "https://panel.bahman.ir/api/file_manager/dn/d17bd00e-9d68-4f01-8fdd-0ecfd7a63b10",
    place: "محصول",
    album: [
      "https://panel.bahman.ir/api/file_manager/dn/44b2e6d6-4b65-4555-ae09-3d53ce87b528",
      "https://panel.bahman.ir/api/file_manager/dn/51d89edd-b81a-47c6-82d8-7a9a083b0c71",
      "https://panel.bahman.ir/api/file_manager/dn/e2b357db-8d4d-4b53-bc50-541ff1814789",
    ],
  },
  {
    id: 3,
    title: "حمل خودرو کامیون فورس ۶ تن",
    image:
      "https://panel.bahman.ir/api/file_manager/dn/88d7ab26-8b53-49b2-a3a6-03c16267352a",
    place: "محصول",
  },
];

const AllNewsap = [
  {
    id: 1,
    title: "تولید ۷۶۳ هزار خودرو در ۷ ماه/ تولید خودرو طبق وعده ها پیش نرفت",
    image:
      "https://media.mehrnews.com/d/2022/05/31/3/4168663.jpg?ts=1653984627276",
  },
  {
    id: 2,
    title: "انتصاب مدیر عامل جدید شرکت خودروی آذربایجان",
    image:
      "https://www.digikala.com/mag/wp-content/uploads/2023/10/08.03-27.jpg",
  },
  {
    id: 3,
    title: "رشد ۲۰۰ درصدي توليد در سيباموتور",
    image:
      "https://www.digikala.com/mag/wp-content/uploads/2023/10/08.03-45.jpg",
  },
  {
    id: 4,
    title: "رشد ۲۰۰ درصدي توليد در سيباموتور",
    image:
      "https://www.digikala.com/mag/wp-content/uploads/2023/10/08.03-45.jpg",
  },
];

function App() {
  const [page, setPage] = useState("صفحه اصلی");
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [news, setNews] = useState(false);
  const [selectedNews, setSelectedNews] = useState(0);

  function selectPage(e) {
    setPage(e);
    setSelectedProduct(0);
    setNews(false);
    setSelectedNews(0);
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
      case "فروش":
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
    if (window.scrollY >= 160) {
      headerPart[0].classList.add("fixed-header");
      sliderPart[0].classList.add("after-scrolled");
    } else {
      headerPart[0].classList.remove("fixed-header");
      sliderPart[0].classList.remove("after-scrolled");
    }
  };

  return (
    <div className="App">
      <Header page={page} onselectPage={selectPage} />

      {selectedNews === 0 ? (
        news ? (
          <AllNews
            setNews={setNews}
            AllNewsap={AllNewsap}
            setSelectedNews={setSelectedNews}
          />
        ) : (
          page === "صفحه اصلی" && (
            <>
              <Slider />
              <News
                setNews={setNews}
                setSelectedNews={setSelectedNews}
                AllNewsap={AllNewsap}
              />
            </>
          )
        )
      ) : (
        <NewsPage
          setSelectedNews={setSelectedNews}
          Newsap={AllNewsap[selectedNews - 1]}
          AllNewsap={AllNewsap}
        />
      )}
      {selectedProduct === 0 ? (
        page === "محصولات" && (
          <Products
            products={products}
            setSelectedProduct={setSelectedProduct}
          />
        )
      ) : (
        <ProductPage
          item={products[selectedProduct - 1]}
          setSelectedProduct={setSelectedProduct}
        />
      )}
      {page === "نمایندگی‌ها" && <Representation />}
      {page === "درباره‌ما" && <AboutUs />}
      {page === "فروش" && <Forms />}
      {page === "تماس با ما" && <ContactUs />}
      <Footer />
    </div>
  );
}

export default App;
