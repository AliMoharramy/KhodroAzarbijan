import ProductSurveyForm from "./ProductSurveyForm";
import SalesForm from "./SalesForm";
import TireComplaint from "./TireComplaint";
import TireSurveyForm from "./TireSurveyForm";

export default function Forms({ setSelectedForm, selectedForm, isEnglish }) {
  const SelectForms = [
    "فروش",
    "نظرسنجی تایر",
    "نظرسنجی محصول",
    "ثبت شکایت تایر",
    "ثبت شکایت محصول",
  ];
  const SelectFormsEn = [
    "Sale",
    "Tyre Survey",
    "Product Survey",
    "Tyre Complaint Registration",
    "Product Complaint Registration",
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
            {Array.from({ length: SelectForms.length }, (_, i) => {
              return (
                <li
                  className={
                    selectedForm === SelectForms[i] && "form-activeBtn"
                  }
                  onClick={(e) => setSelectedForm(SelectForms[i])}
                >
                  {isEnglish ? SelectFormsEn[i] : SelectForms[i]}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
