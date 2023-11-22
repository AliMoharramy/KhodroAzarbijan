export default function ProductPageInfo({ isEnglish, itemTable }) {
  console.log(itemTable);
  return (
    <div className="productpageinfo">
      <div className="catalog">
        <a
          href="https://drive.google.com/file/d/1OyORrs01Kx48MZdmHhHFCKscqqBXgkp0/view?usp=sharing"
          download
        >
          {isEnglish
            ? "View and receive the catalog"
            : "مشاهده و دریافت کاتالوگ"}
        </a>
      </div>
      <div className="product_table">
        <table>
          <thead>
            <tr>
              <th colspan="2">
                {isEnglish ? "Product Information" : "اطلاعات محصول"}
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: itemTable.length }, (_, i) => {
              return (
                <tr>
                  <td>
                    {isEnglish ? itemTable[i].nameEn : itemTable[i].value}
                  </td>
                  <td>{isEnglish ? itemTable[i].value : itemTable[i].name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
