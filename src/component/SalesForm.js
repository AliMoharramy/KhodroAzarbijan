export default function SalesForm() {
  return (
    <form className="sale-form">
      <div className="sform-names">
        <div className="national">
          <label htmlFor="NationalCode">: کدملی </label>
          <input type="text" name="NationalCode" />
        </div>
        <div className="lastName">
          <label htmlFor="lastName"> : نام‌خانوادگی</label>
          <input type="text" name="lastName" />
        </div>
        <div className="firstName">
          <label htmlFor="firstName"> : نام </label>
          <input type="text" name="firstName" />
        </div>
      </div>
      <div className="sform-phone">
        <div className="phoneNumber">
          <label htmlFor="phoneNumber">: شماره تماس </label>
          <input type="number" name="phoneNumber" />
        </div>
        <div className="birthDate">
          <div className="year">
            <label htmlFor="birthYear">: سال</label>
            <input type="number" name="birthYear" placeholder="1375" />
          </div>
          <div className="month">
            <label htmlFor="birthMonth">: ماه</label>
            <input type="number" name="birthMonth" placeholder="5" />
          </div>
          <div className="day">
            <label htmlFor="birthday">: روز</label>
            <input type="number" name="birthday" placeholder="16" />
          </div>
        </div>
      </div>
      <label htmlFor="firstName">: توضیحات</label>
      <textarea
        name="moredata"
        className="sform-moredata"
        cols="30"
        rows="10"
      ></textarea>
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
