import RepperInfo from "./JsonFiles/RepperInfo.json";
export default function Representation({ isEnglish }) {
  return (
    <section className="represent">
      <div className="container">
        <div className="rep-container">
          {Array.from({ length: RepperInfo.repPerInfo.length }, (_, i) => {
            return (
              <div className="rep__carts">
                <div className="repCart">
                  <div className="rep__title">
                    <p>{RepperInfo.repPerInfo[i].code}</p>
                    <p>
                      {RepperInfo.repPerInfo[i].name}{" "}
                      <span>{RepperInfo.repPerInfo[i].lastName}</span>
                    </p>
                  </div>
                  <div className="rep__info">
                    <h5>
                      {isEnglish
                        ? RepperInfo.repPerInfo[i].cityEn
                        : RepperInfo.repPerInfo[i].city}
                    </h5>
                    <p>{RepperInfo.repPerInfo[i].address}</p>
                  </div>
                  <div className="rep__phone">
                    <i class="fa fa-location-arrow"></i>
                    <p>
                      {isEnglish ? "Phone" : "تلفن "}:{" "}
                      {RepperInfo.repPerInfo[i].phone}{" "}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
