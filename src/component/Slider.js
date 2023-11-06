export default function Slider() {
  return (
    <section className="Slides">
      {Array.from({ length: 9 }, (_, i) => {
        return (
          <p className="dot" style={{ right: `${i + 5.5}rem`, top: "-1rem" }}>
            .
          </p>
        );
      })}
      {Array.from({ length: 9 }, (_, i) => {
        return (
          <p className="dot" style={{ right: `${i + 5.5}rem`, top: "-2rem" }}>
            .
          </p>
        );
      })}
      {Array.from({ length: 7 }, (_, i) => {
        return (
          <p className="dot" style={{ right: "5.5rem", top: `${i}rem` }}>
            .
          </p>
        );
      })}
      {Array.from({ length: 7 }, (_, i) => {
        return (
          <p className="dot" style={{ right: "6.5rem", top: `${i}rem` }}>
            .
          </p>
        );
      })}
      <div className="slideShow">
        <div className="slider container">
          <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://old.bahman.ir/uploads/portal_slider/J6%20(3).jpg"
                  class="d-block w-100"
                  alt="pic1"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://old.bahman.ir/uploads/portal_slider/SM(1).jpg"
                  class="d-block w-100"
                  alt="pic2"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://old.bahman.ir/uploads/portal_slider/J6%20(1).jpg"
                  class="d-block w-100"
                  alt="pic3"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
