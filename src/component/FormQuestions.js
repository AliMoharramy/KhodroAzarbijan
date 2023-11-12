export default function FormQuestions({ question }) {
  function reternvalue(e) {
    //worked fine
    // if (e.target.type === "radio") {
    //   console.log(e.target.name, e.target.value);
    // }
  }
  const rateValues = ["ضعیف", "متوسط", "خوب", "عالی"];
  return (
    <fieldset className="question" onClick={(e) => reternvalue(e)}>
      <p> : {question}</p>
      <div className="question-select">
        {Array.from({ length: rateValues.length }, (_, i) => {
          return (
            <label>
              <input type="radio" name={question} value={rateValues[i]} />
              {rateValues[i]}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
