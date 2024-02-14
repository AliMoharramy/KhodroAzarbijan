export default function FirstStep({ answer, changing, showComment }) {
  function playIt() {
    document.getElementById("player").play();
  }
  return (
    <>
      <div className="form__group field">
        <input
          type="input"
          className="form__field"
          placeholder="Name"
          name="name"
          id="name"
          value={answer}
          onChange={(e) => changing(e.target.value)}
          required
        />
        <label htmlFor="name" className="form__label">
          Let me see .. 😎
        </label>
      </div>
      <p className="showErrorsof">{showComment}</p>
      <div className="palybtn">
        <button onClick={() => playIt()}>بی‌کلام</button>
        <p>مایل به تمایل ؟</p>
      </div>
    </>
  );
}
