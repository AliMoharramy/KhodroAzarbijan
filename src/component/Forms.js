import SalesForm from "./SalesForm";

export default function Forms() {
  const SelectForms = [
    "فروش",
    "نظرسنجی تایر",
    "نظرسنجی محصول",
    "ثبت شکایت تایر",
    "ثبت شکایت محصول",
  ];
  return (
    <section className="Form">
      <div className="container form-container">
        <div className="forms-left">
          <SalesForm />
        </div>
        <div className="forms-right">
          <ul>
            {Array.from({ length: SelectForms.length }, (_, i) => {
              return <li>{SelectForms[i]}</li>;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
