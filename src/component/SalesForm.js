export default function SalesForm() {
  return (
    <form>
      <input type="number" name="phoneNumber" />
      <label htmlFor="phoneNumber">: شماره تماس </label>
      <input type="text" name="lastName" />
      <label htmlFor="lastName"> : نام‌خانوادگی</label>
      <input type="text" name="firstName" />
      <label htmlFor="firstName"> : نام </label>
      <button type="submit" form="submit" value="Submit">
        Submit
      </button>
    </form>
  );
}
