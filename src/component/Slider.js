export default function Slider() {
  return (
    <>
      <section className="Slides">
        <img
          src={require("../media/Group 4(2).png")}
          className="slides-dotes"
          alt=""
        />
        <div className="slideShow">
          <div className="slider container">
            <div
              id="carouselExampleIndicators"
              class="carousel slide "
              data-bs-ride="carousel"
            >
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
                    src="http://yuejinmotor.net/images/s2.jpg"
                    class="d-block w-100"
                    alt="pic1"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="http://yuejinmotor.net/images/s1.jpg"
                    class="d-block w-100"
                    alt="pic2"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="http://yuejinmotor.net/images/s0.jpg"
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
    </>
  );
}
