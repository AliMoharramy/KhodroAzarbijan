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

const AllNewsap = [
  {
    id: 1,
    title: "بهره برداری از 4 طرح تراکتورسازی در سفر دوم رئیس جمهور",
    titleEn:
      "Operation of 4 tractor construction projects during the second visit of the president",
    haveVideo: false,
    place: "خبر",
    placeEn: "News",
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
    textEn: `The managing director of Azarbaijan Diesel Automobiles Company of Iran Tractor Manufacturing Group told our reporter in this regard: The first shipment of 11-ton trucks, 20 units, was delivered to the municipality of Tabriz.

    Saeed Panahi pointed out that the first products of the 11-ton truck are dedicated to providing services to the citizens of the city and added: these products can be used in the field of urban services with a variety of applications in fire departments, slaughterhouses, garbage transportation, etc. It is decided that 20 of its machines will enter the waste transportation fleet of Tabriz metropolis.
   
    He informed about the readiness of diesel car manufacturers of Tractorsazi Group to provide services to other big cities and meet their needs.
   
    According to Panahi, out of the 500 vehicles in the production capacity of car manufacturers, 50% of them are produced and ready to be delivered to customers.
   
    The production of tractors reduces the life of the city service fleet from 9.5 to 6 years
   
    The Managing Director of Tabriz Municipal Waste Organization also told our reporter during the ceremony of handing over the keys to these cars: According to the task assigned by the mayor of Tabriz regarding the renewal of the city service fleet, numerous inquiries were made from different car manufacturers to choose the right car to replace the existing cars. Finally, the most reliable car that attracted the opinion of the technical experts of the municipality in every aspect was the production of Tractor Sazi car manufacturers.
   
    Emphasizing that this renovation is done primarily to reduce air pollution in Tabriz, Habiba Herati said: Every 11 ton vehicle produced in Tractorsazi replaces 2 vehicles in the fleet of Tabriz urban services, and in fact instead of every 2 Traffic to collect urban waste will be done once a day.
   
    He admitted: The entry of these vehicles into the city service fleet will have an inestimable effect on reducing the traffic load of the metropolis of Tabriz, as well as reducing the environmental pollution and especially the air pollution of this city. Added depreciation and maintenance costs for existing vehicles.
   
    Herati announced the reduction of the life of the urban service fleet from 9.5 years to 6 years as another consequence of replacing the 11-ton truck product of Tractorsazi with the existing vehicles of the collection under his management.
   
    According to this official, in Tabriz metropolitan area, Tabriz municipality has welcomed the production of tractors and issued the necessary orders in order to provide the basis for their use in the fleet of Tabriz municipality, and the actions of the mayor of Tabriz made it possible to benefit from these products. In the first step, it has been decided to introduce 20 of these products into the fleet of Tabriz city services, and for the next stage, it is planned to equip another 20 devices with 11-ton trucks, which will surely lead to the complete modernization of the city services fleet. We will be the metropolis of Tabriz using the products of our artisans.
   
    It should be noted that the production and assembly line of light and heavy commercial vehicles, tractors and vans was launched on June 18, with the presence of the president, in an area of 10 thousand square meters and for the production of 4 thousand trucks, tractors and vans, in the event of the Khodrosazan company. Azarbaijan Diesel is one of the 12 satellite companies of Iran Tractor Industrial Group, 8 of which are located in the Tabriz site of this factory, 2 companies outside East Azerbaijan and 2 companies outside the borders of Islamic Iran, the largest producer of agricultural machinery. And tractors are considered from 35 to 150 horsepower in the country, so that currently 99% of the country's farmers' needs for tractors are met and amounting to 45 million dollars of foreign exchange during the last year from the export of all kinds of tractors, engines, spare parts, etc. The production of this collection has been earned by the country`,
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
    titleEn:
      "The first product of the production line launched by the president entered the fleet of urban services in Tabriz",
    haveVideo: true,
    place: "خبر",
    placeEn: "News",
    video: "blob:https://www.aparat.com/1ff08bd1-cc1c-4840-948f-5e10ad7eae32",
    image: "http://tractornews.ir/NewsImage/79397",
    text: `اولین محصول خط تولید راه اندازی شده توسط رییس جمهور وارد ناوگان خدمات شهری تبریز شد `,
    textEn: `The first product of the production line launched by the president entered the fleet of urban services in Tabriz`,
  },
  {
    id: 3,
    title:
      "ایجاد خط تولید و مونتاژ خودروهای تجاری جدید با ظرفیت 4 هزار دستگاه در تراکتورسازی ",
    titleEn:
      "Creating a new commercial vehicle production and assembly line with a capacity of 4,000 units in Tractorsazi",
    haveVideo: false,
    place: "خبر",
    placeEn: "News",
    image:
      "https://asrazadionline.ir/wp-content/uploads/2023/06/photo_%DB%B2%DB%B0%DB%B2%DB%B3-%DB%B0%DB%B6-%DB%B0%DB%B7_%DB%B2%DB%B1-%DB%B3%DB%B3-%DB%B3%DB%B7-750x430.jpg",
    text: `به گزارش روابط عمومی و امور بین الملل گروه صنعتی تراکتورسازی ایران،سعید پناهی افزود: این خط در مساحت 10 هزار متر مربعی و با سرمایه گذاری 2هزار و 800 هزار میلیارد ریالی و برای تولید 4 هزار دستگاه انواع کامیونت، کشنده و ون ایجاد شده است.
    وی برنامه تولید امسال این خط تولید را 500 دستگاه اعلام و اضافه کرد: این خط تولید در کمتر از شش ماه تجهیز و راه اندازی شده و با ایجاد این خط برای 200 نفر به صورت مستقیم و بیش از 300 نفر به صورت غیر مستقیم زمینه اشتغال فراهم شده است.
    پناهی افزایش تنوع محصولات کامیونت از 6 تن به بالا که نیاز آن در کشور کاملا محسوس می باشد از مهمترین اهداف ایجاد این خط دانست و گفت: افزایش کیفیت تولیدات در این حوزه، افزایش تولید روزانه به 20 دستگاه، تلاش برای تنوع بخشی به تولیدات تراکتورسازی و خروج از تک محصولی در این واحد صنعتی و مهمتر از همه ایجاد اشتغال از دیگر اهداف راه اندازی این خط تولید می باشد.
    این فعال صنعتی خبر خوشی هم به حوزه های که نیازمند کامیونتهای 11 تنی هستند داد و اظهار داشت: کامیونت 11 تنی به عنوان یک محصول استراتژیک که نیاز بسیاری از حوزه های و صنایع می باشد همزمان با این افتتاح در این مجموعه تولید و به متقاضیان عرضه خواهد شد.
    گفتنی است تراکتورسازی ایران هم اکنون با 12 شرکت اقماری که 8 شرکت در تبریز، 2 شرکت در خارج از آذربایجان شرقی و 2 شرکت در بیرون از مرزهای ایران اسلامی، بزرگترین تولید کننده ماشین آلات کشاورزی و تراکتور از 35 تا 150 اسب بخار در کشور می باشد که در حال حاضر 99 درصد نیاز کشاورزان کشور به تراکتور را تامین و بالغ بر 41 میلیون دلار ارز آوری طی سال گذشته از محل صادرات انواع تراکتور، موتور، قطعات ریخته و ... برای کشور داشته است.`,
    textEn: `According to the public relations and international affairs report of the Iran Tractor Manufacturing Industrial Group, Saeed Panahi added: This line has been established in an area of 10,000 square meters with an investment of 2,800,000 billion Rials and for the production of 4,000 types of trucks, tractors and vans. .
    He announced the production plan of this production line for 500 machines this year and added: This production line was equipped and launched in less than six months, and with the creation of this line, 200 people will be directly employed and more than 300 people will be indirectly employed. has been prepared.
    Panahi considered increasing the variety of truck products from 6 tons and above, the need of which is quite noticeable in the country, as one of the most important goals of creating this line and said: increasing the quality of products in this field, increasing daily production to 20 units, trying to diversify tractor production. And getting out of a single product in this industrial unit and most importantly creating employment is one of the other goals of launching this production line.
    This industrial activist also gave good news to the areas that need 11-ton trucks and stated: 11-ton trucks are a strategic product that is needed by many areas and industries, at the same time as this opening in this complex, it will be produced and supplied to the applicants. will be.
    It should be noted that Iran Tractor Manufacturing is currently the largest producer of agricultural machinery and tractors from 35 to 150 horsepower in the country with 12 satellite companies, 8 in Tabriz, 2 outside East Azerbaijan and 2 outside the borders of Islamic Iran. May it be that 99% of the country's farmers' needs for tractors have been met and over 41 million dollars have been collected for the country during the last year from the export of all kinds of tractors, engines, cast parts, etc.`,
    albume: ["https://s6.uupload.ir/files/79021_tep3.jpeg"],
  },
  {
    id: 4,
    title:
      "تراکتورسازی را جزء 3 قطب برتر کشور در صنعت خودروسازی دیزلی و تجاری می کنیم",
    titleEn:
      "We make tractor manufacturing one of the top 3 poles in the country in the diesel and commercial automotive industry",
    haveVideo: false,
    place: "خبر",
    placeEn: "News",
    image: "https://s6.uupload.ir/files/photo_2023-11-18_13-15-45_6s4l.jpg",
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
    textEn: `Mustafa Vahidzadeh added: In this regard, Iran Tractor Group is equipped with infrastructure that does not exist in any domestic or even regional automobile manufacturer, because the depth of component manufacturing of this group is supported by a coherent network within the factory itself, the country and even outside the borders of Islamic Iran. It is the result of nearly 6 decades of activity in this field.

    Referring to the steps necessary to produce the final product in this field, he added: For this purpose, the steps of obtaining licenses and permits for exploitation, environment, numbering, etc. have been completed and by taking a few measures in the field of strengthening and improvement Infrastructures, in order to align with this goal, we will soon see the production of the first commercial tractor products in the diesel and commercial vehicle sector.
   
    Vahidzadeh named product variety as one of the ways to earn stable income and emphasized: in all sectors, focusing on one method will not lead to a consistent result, so in order to have stable income as well as a successful presence in the competitive market, diversification should be done. Production and distribution of income with multiple goals should be taken into consideration by tractor manufacturers as an updated strategy.
   
    This activist in the field of the country's industry stated: This year, the income planning of tractor manufacturers is also based on this approach and the division of 50 percent of the income from the tractor production site as the main product and 50 percent from other sectors such as automobile manufacturers, tool and parts production, engine production, export, Parts have been sold.
   
    In a part of this meeting, he referred to the category of removing obstacles to production and said: In the country, what is creating roadblocks are the obstacles to creation that originate from the personal tastes of people, and in other words, removing these obstacles can be the best incentive for the path Accelerate the current production and double the prosperity of production.
   
    At the same time, Vahidzadeh admitted: In the country, the necessary laws and approvals have been approved by the authorities and exist, which in the true sense support production, but non-specialist views, personal opinions and ideas will prevent the implementation of these laws. Closed rules push production away from the mainstream to the fringes and complicated bureaucracies.
   
    A member of the board of directors of the Iran Tractor Manufacturing Industrial Group mentioned the recent attacks regarding price determination and non-increase as a clear example of this problem and said: All the obstacles created during the past one year in the path of tractor manufacturing took place while Even if there is an increase of more than 350% in the price of many raw materials, this group was asked not only not to increase the price, but also to be the authority for determining the price, while in the law related to the privatization of Iranian industries, it is clearly stated that the government has the right to determine the price. And he does not have pricing in these industries, and if he practices this issue, he must pay the resulting difference to the producer.
   
    While recalling the emphasis of the Supreme Leader in recent years on the production category, he stated: He is aware of the issue of production as the way to save all civilizations and countries in the real sense, and for this reason, for years, he has been solving the root of all problems in production and as a result They consider increasing the gross national income and attracting sustainable income.
   
    Vahidzadeh considered the country to be the inheritor of the inflation created in the 50s of the last century and said: With the beginning of the entry and presence of people without expertise, experience, science and knowledge in the field of productionism, the decline of industry in the country was keyed and productionism as the only solution in the steps of It reached a dead end and its effects continue to this day.
   
    It should be noted that at the end of this meeting, the efforts of Hamed Mohjal Shaja in the guise of CEO of Azarbaijan Diesel Automobile Company (Kamiunt) of Iran Tractor Industrial Group were appreciated and Mr. Saeed Panahi was introduced as the new CEO of this group.`,
    albume: [
      "http://tractornews.ir/NewsImage/77946",
      "http://tractornews.ir/NewsImage/77947",
      "http://tractornews.ir/NewsImage/77948",
      "http://tractornews.ir/NewsImage/77949",
      "http://tractornews.ir/NewsImage/77950",
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
  const [isPopUpImg, setIsPopUpImg] = useState(["", false]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [isLoading]);

  // if (localStorage.getItem("page") !== null) {
  //   setPage(localStorage.getItem("page"));
  // }
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
      {page === "فروش" && (
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
