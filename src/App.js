import { useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import News from "./component/News";
import Products from "./component/Products";
import Slider from "./component/Slider";
import Representation from "./component/Representation";
import AboutUs from "./component/AboutUs";

function App() {
  const [page, setPage] = useState("صفحه اصلی");
  return (
    <div className="App">
      <Header page={page} setPage={setPage} />
      {page === "صفحه اصلی" && (
        <>
          <Slider />
          <News />
        </>
      )}
      {page === "محصولات" && <Products />}
      {page === "نمایندگی‌ها" && <Representation />}
      {page === "درباره‌ما" && <AboutUs />}
      <Footer />
    </div>
  );
}

window.onscroll = function (e) {
  console.log(e);
};

export default App;
