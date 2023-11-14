export default function TireComplaint() {
  return (
    <form className="tireComplaint-form">
      <div className="sform-names">
        <div className="address">
          <label htmlFor="address">: آدرس</label>
          <input type="text" name="address" />
        </div>
        <div className="national">
          <label htmlFor="NationalCode">: شماره‌تماس </label>
          <input type="text" name="NationalCode" />
        </div>
        <div className="firstName">
          <label htmlFor="firstName"> : نام‌خانوادگی </label>
          <input type="text" name="firstName" />
        </div>
        <div className="brand">
          <label htmlFor="brand">: نام برند</label>
          <input type="text" name="brand" />
        </div>
        <div className="fixphone">
          <label htmlFor="fixphone">: تلفن ثابت</label>
          <input type="text" name="fixphone" />
        </div>
        <div className="email">
          <label htmlFor="email">: ایمیل</label>
          <input type="email" name="email" />
        </div>
      </div>
      <div className="sform-phone">
        <div className="buyDate">
          <div className="year">
            <input type="number" name="birthYear" placeholder="سال" />
          </div>
          <div className="month">
            <input type="number" name="birthMonth" placeholder="ماه" />
          </div>
          <div className="day">
            <input type="number" name="birthday" placeholder="روز" />
          </div>
          <label>: تاریخ خرید</label>
        </div>
        <div className="size">
          <label htmlFor="size">: سایز و نام طرح آج </label>
          <input type="number" name="size" />
        </div>
      </div>
      <div className="cityandmore">
        <div className="national">
          <label htmlFor="city">: نام نمایندگی، شهر و استان </label>
          <input type="text" name="city" />
        </div>
        <div className="complaint">
          <label htmlFor="complaint">: شرح شکایت </label>
          <textarea
            name="complaint"
            cols="30"
            rows="10"
            placeholder="... محل درج پاسخ"
          ></textarea>
        </div>
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
