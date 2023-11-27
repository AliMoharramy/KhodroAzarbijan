export default function TopBanner() {
  return (
    <div className="header-top-part">
      <div className="azarbaijanLogo">
        <a href="#">
          <img src={require("../media/logo.png")} alt="Logo" />
        </a>
      </div>
      <div className="header-top-name">
        <h1>خودروسازان دیزلی آذربایجان</h1>
        <p>متعلق به گروه تراکتورسازی ایران</p>
      </div>
      <div className="tractor-logo">
        <a href="https://itmco.ir">
          <img src={require("../media/Untitled.png")} alt="" />
        </a>
      </div>
    </div>
  );
}
