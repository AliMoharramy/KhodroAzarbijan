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
import PopupNav from "./component/PopupNav";

const products = [
  {
    id: 1,
    title: "کامیون فورس ۸.۵ تن کابین خوابدار",
    haveVideo: false,
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
    haveVideo: false,
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
    haveVideo: false,
    image:
      "https://panel.bahman.ir/api/file_manager/dn/88d7ab26-8b53-49b2-a3a6-03c16267352a",
    place: "محصول",
  },
];

const AllNewsap = [
  {
    id: 1,
    title: "بهره برداری از 4 طرح تراکتورسازی در سفر دوم رئیس جمهور",
    haveVideo: false,
    image: "http://tractornews.ir/NewsImage/79032",
    text: `مدیر عامل شرکت خودروسازان دیزلی آذربایجان گروه صنعتی تراکتورسازی ایران در این رابطه به خبرنگار ما گفت: اولین محموله از تولیدات کامیونت 11 تنی به تعداد 20 دستگاه تحویل شهرداری کلان شهر تبریز شد.

    سعید پناهی با اشاره به اینکه اولین محصولات کامیونت 11 تنی برای ارائه خدمات به شهروندان شهر اولینها اختصاص داده شده افزود: این محصولات در حوزه خدمات شهری با انواع کاربردها قابلیت استفاده در بخشهای آتش نشانی، کشتارگاهها، حمل زباله و ... می باشد که مقرر شده 20 دستگاه آن وارد ناوگان حمل و نقل پسماندها کلان شهر تبریز شود.
    
    وی از آمادگی خودروسازان دیزلی گروه تراکتورسازی برای ارائه خدمات به سایر کلان شهرها و تامین نیاز آنها خبر داد.
    
    به گفته پناهی از 500 دستگاه ظرفیت تولیدی خودروسازان، 50 درصد آن تولید و آماده تحویل به مشتریان می باشد.
    
    تولیدات تراکتورسازی عمر ناوگان خدمات شهری را از 9.5 به 6 سال کاهش می دهد
    
    مدیرعامل سازمان پسماندهای شهرداری کلان شهر تبریز نیز در آیین تحویل کلید این خودروها به خبرنگار ما گفت: باتوجه به تکلیفی محوله از سوی شهردار تبریز درباره نوسازی ناوگان خدمات شهری، پیگیرهای متعدد از خودروسازان مختلف جهت انتخاب خودروی مناسب به منظور جایگزینی خودروهای موجود صورت گرفت و نهایتا مطمئن ترین خودرو که از هر جنبه نظر کارشناسان فنی شهرداری را جلب کرد تولیدات خودروسازان تراکتورسازی بود.
    
    حبیبه هراتی با تاکید بر اینکه این نوسازی در وهله اول به منظور کاهش آلودگی هوای تبریز صورت می گیرد اظهار داشت: هر خودروهای 11 تنی تولیدی در تراکتورسازی جایگزین 2 دستگاه خودروی موجود در ناوگان خدمات شهری تبریز می شود و در واقعه به جای هر 2 بار تردد برای جمع آوری زباله های شهری یک بار در شبانه روز این امر صورت خواهد گرفت.
    
    وی اذعان داشت: ورود این خودرها به ناوگان خدمات شهر در کاهش بار ترافیکی کلان شهر تبریز و همچنین کاهش آلودگی زیست محیطی و بخصوص آلودگی هوای این شهر تاثیرات غیر قابل انگای خواهد داشت که باید به این ویژگی ها، قابلیتهای کاهش هزینه های خدمات شهری و هزینه های استهلاک و نگهداری خودروهای موجود را اضافه کرد.
    
    هراتی از کاهش عمر ناوگان خدمات شهری از 9.5 سال به 6 سال را از دیگر پیامدهای جایگزینی محصول کامیونت11 تنی تراکتورسازی با خودروهای موجود مجموعه تحت مدیریتش اعلام کرد.
    
    به گفته این مقام مسئول در حوزه کلان شهر تبریز استقبال از تولیدات تراکتورسازی از سوی شهرداری تبریز و صدور دستورات لازم به منظور فراهم آوردن زمینه استفاده از آنها در ناوگان شهرداری تبریز صورت گرفته و اقدامات شخص شهردار تبریز زمینه بهره مندی از این محصولات را ممکن ساخته بطوری که مقرر شده تا در گام نخست 20 دستگاه از این تولیدات را وارد ناوگان خدمات شهری تبریز کنیم و برای مرحله بعد نیز پیش بینی تجهیز 20 دستگاه دیگر توسط کامیونتهای 11 تنی انجام شده که مطمئنا با طی این روند بزودی شاهد نوسازی کامل ناوگان خدمات شهری کلان شهر تبریز با استفاده از تولیدات صنعتگران خود تبریز خواهیم بود.
    
    گفتنی است خط تولید و مونتاژ انواع خودروهای تجاری سبک و سنگین، کشنده و ون طی 18 خرداد و با حضور ريیس جمهور در مساحت 10 هزار متر مربعی و برای تولید 4 هزار دستگاه انواع کامیونت، کشنده و ون راه اندازی شد، در واقعه شرکت خودروسازان دیزلی آذربایجان یکی از 12 شرکت اقماری گروه صنعتی تراکتورسازی ایران می باشد که 8 شرکت از این تعداد زیر مجموعه در سایت تبریز این کارخانه، 2 شرکت در خارج از آذربایجان شرقی و 2 شرکت در بیرون از مرزهای ایران اسلامی، بزرگترین تولید کننده ماشین آلات کشاورزی و تراکتور از 35 تا 150 اسب بخار در کشور محسوب می شود بطوری که در حال حاضر 99 درصد نیاز کشاورزان کشور به تراکتور را تامین و بالغ بر 45 میلیون دلار ارز طی سال گذشته از محل صادرات انواع تراکتور، موتور، قطعات ریخته و ... تولیدی این مجموعه عاید کشور شده است.`,
    albume: [
      "http://tractornews.ir/NewsImage/79395",
      "http://tractornews.ir/NewsImage/79396",
      "http://tractornews.ir/NewsImage/79397",
      "http://tractornews.ir/NewsImage/79398",
      "http://tractornews.ir/NewsImage/79399",
    ],
  },
  {
    id: 2,
    title:
      "اولین محصول خط تولید راه اندازی شده توسط رییس جمهور وارد ناوگان خدمات شهری تبریز شد ",
    haveVideo: true,
    video: "blob:https://www.aparat.com/1ff08bd1-cc1c-4840-948f-5e10ad7eae32",
    image:
      "https://static.cdn.asset.aparat.com/avt/55185891-4182-l__8886.jpg?width=900&quality=90&secret=MCIthHAC32zIBY7UvOlVqA",
    text: `اولین محصول خط تولید راه اندازی شده توسط رییس جمهور وارد ناوگان خدمات شهری تبریز شد `,
  },
  {
    id: 3,
    title:
      "تراکتورسازی را جزء 3 قطب برتر کشور در صنعت خودروسازی دیزلی و تجاری می کنیم",
    haveVideo: false,
    image: "",
    text: `مصطفی وحید زاده افزود: در این رابطه گروه تراکتورسازی ایران مجهز به زیرساختهایی است که در هیچ خودروساز داخلی و حتی منطقه وجود ندارد چرا که عمق قطعه سازی این مجموعه توسط شبکه ای منسجم در داخل خود کارخانه، کشور و حتی خارج از مرزهای ایران اسلامی پشتیبانی می شود که حاصل نزدیک به 6 دهه فعالیت در این عرصه می باشد.

    وی با اشاره به طی مراحل لازم برای تولید محصول نهایی در این عرصه اضافه کرد: برای این منظور مراحل کسب مجوز و پروانه های بهره برداری، محیط زیست، شماره گذاری و ... طی شده و با انجام اندک اقداماتی در زمینه تقویت و اصلاح زیرساختها، جهت همراستایی با این هدف به زودی شاهد تولید اولین محصولات تجاری تراکتورسازی در بخش خودروهای دیزلی و تجاری خواهیم بود.
    
    وحیدزاده تنوع محصول را یکی از راههای کسب درآمد پایدار عنوان و تاکید کرد: در تمامی بخشها، معطوف شدن نگاه به یک روش، منتج به نتیجه ای مداوم نخواهد شد، پس به منظور پایداری درآمد و همچنین حضور موفق در بازار رقابت باید تنوع بخشی به تولیدات و تقسیم محل درآمدها با اهداف متعدد به عنوان استراتژی بروز مورد توجه تراکتورسازان قرار گیرد.
    
    این فعال عرصه صنعت کشور اظهار داشت: برنامه ریزی درآمد تراکتورسازان امسال نیز با این رویکرد و تقسیم بندی 50 درصدی درآمد از محل تولید تراکتور به عنوان محصول اصلی و 50 درصد از سایر بخشها همچون خودروسازان، تولید ابزار و قطعات، تولید موتور، صادرات، فروش قطعات و ... صورت گرفته است.
    
    وی در بخشی از این جلسه گریزی به مقوله رفع موانع تولید زد و گفت: در کشور آنچه سد راه تولید می شود موانع خلق الساعه ای هست که از سلایق شخصی افراد سرچشمه می گیرد و به عبارتی رفع این موانع به عنوان بهترین مشوق می تواند مسیر جاری تولید را شتاب بخشیده و رونق تولید را دوچندان نماید.
    
    وحیدزاده در عین حال اذعان داشت: در کشور قوانین و مصوبات لازم از سوی قوا به تصویب رسیده و وجود دارد که به معنی واقعی از تولید حمایت و پشتیانی می کند اما نگاه غیر تخصصی، نظرات و ایده های شخصی، راه را بر اجرایی شدن این قوانین بسته و تولید را از مسیر اصلی به حاشیه های پرطمطراق و بروکراسی های پیچیده سوق می دهد.
    
    عضو هیأت مدیره گروه صنعتی تراکتورسازی ایران از هجمه های اخیر در رابطه با تعیین قیمت و عدم افزایش آن به عنوان مصداقی بارز در باب این معضل یاد کرد و گفت: همه موانع ایجاد شده طی یکسال گذشته در مسیر تولید تراکتورسازی در حالی صورت گرفت که با وجود حتی افزایش بیش از 350 درصدی در قیمت بسیاری از مواد اولیه از این مجموعه خواسته می شد نه تنها افزایش قیمت ندهد بلکه مرجع تعیین قیمت نیز خودشان باشند در حالی که در قانون مرتبط با خصوصی سازی صنایع ایران با صراحت اعلام شده که دولت حق تعیین و قیمت گذاری در این صنایع را نداشته و درصورت ممارست بر این موضوع باید مابه التفاوت حاصل را به تولید کننده بپردازد.
    
    وی ضمن یادآوری تاکیدات سالهای اخیر مقام معظم رهبری به مقوله تولید تصریح کرد: ایشان به معنی واقعی به موضوع تولید به عنوان راه نجات تمامی تمدنها و کشورها واقف هستند و به این دلیل سالهاست گره حل ریشه ای تمامی مشکلات را در تولید و به تبع آن افزایش درآمد ناخالص ملی و جذب درآمد پایدار می دانند.
    
    وحیدزاده کشور را وارث تورم ایجاد شده در دهه 50 قرن گذشته دانست و گفت: با شروع ورود و حضور افرادی بدون تخصص، تجربه، علم و دانش در عرصه تولیدگرایی، افول صنعت در کشور کلید خورد و تولیدگرایی به عنوان تنها راه حل طی پله های طرقی به بن بست رسید و تا به امروز اثرات آن نیز همچنان ادامه دارد.
    
    گفتنی است در پایان این جلسه از تلاشهای چندین ساله حامد محجل شجا در کسوت مدیرعاملی شرکت خودروسازان دیزلی آذربایجان ( کامیونت) گروه صنعتی تراکتورسازی ایران تقدیر و آقای سعید پناهی به عنوان مدیرعامل جدید این مجموعه معرفی شد.`,
    albume: [
      "http://tractornews.ir/NewsImage/77946",
      "http://tractornews.ir/NewsImage/77947",
      "http://tractornews.ir/NewsImage/77948",
      "http://tractornews.ir/NewsImage/77949",
      "http://tractornews.ir/NewsImage/77950",
    ],
  },
  {
    id: 4,
    title:
      "ایجاد خط تولید و مونتاژ خودروهای تجاری جدید با ظرفیت 4 هزار دستگاه در تراکتورسازی ",
    haveVideo: false,
    image: "",
    text: `به گزارش روابط عمومی و امور بین الملل گروه صنعتی تراکتورسازی ایران،سعید پناهی افزود: این خط در مساحت 10 هزار متر مربعی و با سرمایه گذاری 2هزار و 800 هزار میلیارد ریالی و برای تولید 4 هزار دستگاه انواع کامیونت، کشنده و ون ایجاد شده است.
    وی برنامه تولید امسال این خط تولید را 500 دستگاه اعلام و اضافه کرد: این خط تولید در کمتر از شش ماه تجهیز و راه اندازی شده و با ایجاد این خط برای 200 نفر به صورت مستقیم و بیش از 300 نفر به صورت غیر مستقیم زمینه اشتغال فراهم شده است.
    پناهی افزایش تنوع محصولات کامیونت از 6 تن به بالا که نیاز آن در کشور کاملا محسوس می باشد از مهمترین اهداف ایجاد این خط دانست و گفت: افزایش کیفیت تولیدات در این حوزه، افزایش تولید روزانه به 20 دستگاه، تلاش برای تنوع بخشی به تولیدات تراکتورسازی و خروج از تک محصولی در این واحد صنعتی و مهمتر از همه ایجاد اشتغال از دیگر اهداف راه اندازی این خط تولید می باشد.
    این فعال صنعتی خبر خوشی هم به حوزه های که نیازمند کامیونتهای 11 تنی هستند داد و اظهار داشت: کامیونت 11 تنی به عنوان یک محصول استراتژیک که نیاز بسیاری از حوزه های و صنایع می باشد همزمان با این افتتاح در این مجموعه تولید و به متقاضیان عرضه خواهد شد.
    گفتنی است تراکتورسازی ایران هم اکنون با 12 شرکت اقماری که 8 شرکت در تبریز، 2 شرکت در خارج از آذربایجان شرقی و 2 شرکت در بیرون از مرزهای ایران اسلامی، بزرگترین تولید کننده ماشین آلات کشاورزی و تراکتور از 35 تا 150 اسب بخار در کشور می باشد که در حال حاضر 99 درصد نیاز کشاورزان کشور به تراکتور را تامین و بالغ بر 41 میلیون دلار ارز آوری طی سال گذشته از محل صادرات انواع تراکتور، موتور، قطعات ریخته و ... برای کشور داشته است.`,
    albume: [
      "http://tractornews.ir/NewsImage/79018",
      "http://tractornews.ir/NewsImage/79019",
      "http://tractornews.ir/NewsImage/79020",
      "http://tractornews.ir/NewsImage/79021",
    ],
  },
];

function App() {
  const [page, setPage] = useState("صفحه اصلی");
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [news, setNews] = useState(false);
  const [selectedNews, setSelectedNews] = useState(0);
  const [isPopup, setIsPopup] = useState(false);
  const [selectedForm, setSelectedForm] = useState("فروش");
  const [isEnglish, setIsEnglish] = useState(false);

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
      {isPopup && (
        <PopupNav
          page={page}
          onselectPage={selectPage}
          setIsPopup={setIsPopup}
        />
      )}
      <Header
        page={page}
        onselectPage={selectPage}
        setIsPopup={setIsPopup}
        setIsEnglish={setIsEnglish}
        isEnglish={isEnglish}
      />

      {selectedNews === 0 ? (
        news ? (
          <AllNews
            setNews={setNews}
            AllNewsap={AllNewsap}
            setSelectedNews={setSelectedNews}
            onscrollToTop={scrollToTop}
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
      {page === "فروش" && (
        <Forms selectedForm={selectedForm} setSelectedForm={setSelectedForm} />
      )}
      {page === "تماس با ما" && <ContactUs />}
      {page !== "تماس با ما" && <Footer />}
    </div>
  );
}

export default App;
