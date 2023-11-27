export default function AboutUs({ isEnglish }) {
  return (
    <section className="about-us">
      <div className="container">
        <div className="about__header">
          <div className="about-img-top">
            <img
              src={require("../media/aboutusfirst.jpg")}
              alt=""
              className="topImgAbout"
            />
            <img
              src={require("../media/bigDotes.png")}
              className="dotted"
              alt=""
            />
          </div>
          <div>
            <h4>
              {isEnglish
                ? "Azerbaijan diesel car manufacturers"
                : "خودروسازان دیزلی آذربایجان"}
            </h4>
            <p align="justify" className={!isEnglish && "enlastline"}>
              {isEnglish
                ? `Azerbaijan diesel manufacturers are affiliated companies of Industries Group
                Iran Tractor Manufacturing is located in Tabriz, with the purpose of production and supply
                Trucks and light and semi-heavy trucks have been established
                .`
                : `شرکت خودروسازان دیزلی آذربایجان از شرکت‌های وابسته به گروه صنایع
              تراکتورسازی ایران واقع در تبریز می‌باشد که با هدف تولید و عرضه
              خودروهای حمل بار کامیونت و کامیون سبک و نیمه سنگین تاسیس شده‌ است
              `}
            </p>
          </div>
        </div>
        <div className="about_text">
          <p align="justify" className={!isEnglish && "enlastline"}>
            {isEnglish
              ? `Azarakhsh series trucks and Cadia series trucks in this company
              Designed, manufactured and supplied. Design and production of Azarakhsh series products and
              Cadia has mainly relied on the technical knowledge and facilities of domestic manufacturers
              The way that in the production of Azarakhsh truck since the beginning of its introduction to the market, the index percentage
              Above 75% has been achieved, Koch is unique in its kind in the country.
              Due to the rapid changes in the technology of the automotive industry and the improvement of requirements
              A standard in the country, this company has introduced new products in recent years
              The cooperation of foreign companies has assembled and introduced. Specifications and features
              These products are available in other parts of the website
              is placed In 2019, the site for the production of used commercial vehicles is also in
              Neighboring the factory has been set up and the exploitation permit for reed utilization
              The organization of industry, mining and trade has been obtained.`
              : `کامیونت سری آذرخش و کامیونت / کامیون‌های سری کادیا در این شرکت
            طراحی، تولید و عرضه شده‌اند. طراحی و تولید محصولات سری‌های آذرخش و
            کادیا عمدتا متکی بر دانش فنی و امکانات سازندگان داخلی بوده است به
            نحوی که در تولید کامیونت آذرخش از ابتدای معرفی به بازار، درصد شاخص
            بالاتر از 75% حاصل شده‌است کخ در نوع خود در کشور بی‌نظیر می باشد .
            باتوجه به تغییرات سریع تکنولوژی صنعت خودرو و ارتقای الزامات
            استانداردی در کشور، این شرکت در سنوات اخیر محصولات جدیدی را با
            همکاری شرکتهای خارجی مونتاژ و معرفی نموده است . مشخصات و ویژگی های
            این محصولات در قسمت ‌های دیگر تارنمای اینترنتی در دسترس علاقمندان
            قرار گرفته است . درسال 1399 سایت تولید کاربری خودروهای تجاری نیز در
            جوار کارخانه راه اندازی شده و پروانه بهره برداری کاربری سازی نی از
            سازمان صنعت ، معدن و تجارت اخذ شده است `}
          </p>
          <div className="about-img-bottom">
            <img
              src={require("../media/picture-c500-1.jpg")}
              alt=""
              className="aboutsecendImg"
            />
            <img
              src={require("../media/bigDotes.png")}
              className="dotted"
              alt=""
            />
          </div>

          <p
            className={`about-bottomText ${!isEnglish && "enlastline"}`}
            align="justify"
          >
            {isEnglish
              ? `The cooperation of domestic component manufacturers, after-sales service activists, companies
              Utilization, academics and knowledge-based companies, car repairers
              Trucks and trucks in high-quality production, more economical and providing appropriate services
              We push customers more. It is hoped that the actions of this company will meet the needs
              Our beloved country in the field of transporting goods and satisfying our compatriots and drivers
              May it be useful and effective.`
              : `دست همکاری قطعه سازان داخلی، فعالان حوزه خدمات پس از فروش ، شرکت‌های
            کاربری سازی ، دانشگاهیان و شرکت های دانش بنیان، تمیرکاران خودروهای
            کامیونت و کامیون را در تولید باکیفیت، اقتصادی تر و ارائه خدمات مناسب
            تر به مشتریان می فشاریم . امید است اقدامات این شرکت در رفع نیازهای
            کشور عزیزمان در حوزه حمل و نقل کالا و جلب رضایت هموطنان و رانندگان
            محترم مفید و موثر واقع شود`}
          </p>
        </div>
      </div>
    </section>
  );
}
