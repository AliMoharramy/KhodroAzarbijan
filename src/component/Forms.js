import ProductSurveyForm from "./ProductSurveyForm";
import SalesForm from "./SalesForm";
import TireComplaint from "./TireComplaint";
import TireSurveyForm from "./TireSurveyForm";

export default function Forms({ setSelectedForm, selectedForm, isEnglish }) {
  const SelectForms = [
    "نظرسنجی تایر",
    "نظرسنجی محصول",
    "ثبت شکایت تایر",
    "ثبت شکایت محصول",
  ];
  const SelectFormsEn = [
    "Tyre Survey",
    "Product Survey",
    "Tyre Complaint Registration",
    "Product Complaint Registration",
  ];
  const links = [
    "https://survey.porsline.ir/s/phBDNWPD",
    "https://survey.porsline.ir/s/phBDNWPD",
    "https://survey.porsline.ir/s/Isbgh2ub",
    "https://survey.porsline.ir/s/Isbgh2ub",
  ];
  return (
    <section className="Form">
      <div className="container form-container">
        {/* <div className="forms-left">
          <h3>فرم {selectedForm}</h3>
          {selectedForm === "فروش" && <SalesForm />}
          {selectedForm === "نظرسنجی تایر" && <TireSurveyForm />}
          {selectedForm === "نظرسنجی محصول" && <ProductSurveyForm />}
          {selectedForm === "ثبت شکایت تایر" && <TireComplaint />}
          {selectedForm === "ثبت شکایت محصول" && <TireComplaint />}
        </div> */}
        <div className="forms-right">
          <ul>
            <a href={require("../media/Tire Manual.pdf")} download>
              <li>
                {isEnglish ? "Tire application guide" : "راهنمای کاربرد تایر"}
              </li>
            </a>
            <a href={require("../media/EB0037-03 _TRUCK.pdf")} download>
              <li>{isEnglish ? "Product guide" : "راهنمای محصول"}</li>
            </a>
            {Array.from({ length: SelectForms.length }, (_, i) => {
              return (
                <a href={links[i]}>
                  <li
                    className={
                      selectedForm === SelectForms[i] && "form-activeBtn"
                    }
                    onClick={(e) => setSelectedForm(SelectForms[i])}
                  >
                    {isEnglish ? SelectFormsEn[i] : SelectForms[i]}
                  </li>
                </a>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
