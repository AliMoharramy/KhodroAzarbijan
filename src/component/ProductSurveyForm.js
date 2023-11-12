import FormQuestions from "./FormQuestions";

export default function ProductSurveyForm() {
  const questionText = [];
  return (
    <form className="productSurvey-form">
      <div className="sform-names">
        <div className="typeLastic">
          <label htmlFor="lastName"> : مدل و نوع لاستیک</label>
          <input type="text" name="lastName" />
        </div>
        <div className="national">
          <label htmlFor="NationalCode">: شماره‌تماس </label>
          <input type="text" name="NationalCode" />
        </div>
        <div className="firstName">
          <label htmlFor="firstName"> : نام‌خانوادگی </label>
          <input type="text" name="firstName" />
        </div>
      </div>
      <div className="tireForm-questions">
        {Array.from({ length: questionText.length }, (_, i) => {
          return <FormQuestions question={questionText[i]} />;
        })}
      </div>
      <button
        type="submit"
        form="submit"
        value="Submit"
        className="sform-submitBtn"
      >
        Submit
      </button>
    </form>
  );
}
