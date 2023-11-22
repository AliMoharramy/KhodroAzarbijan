import CardItem from "./CardItem";

export default function Products({ products, setSelectedProduct, isEnglish }) {
  function setSelected(id) {
    setSelectedProduct(id);
  }
  return (
    <section className="Products">
      <div className="container">
        <div className="products__title">
          <h3>{isEnglish ? "Products" : "محصولات"}</h3>
        </div>
        <div className="products__items">
          {Array.from({ length: products.length }, (_, i) => {
            return (
              <CardItem
                id={products[i].id}
                title={products[i].title}
                titleEn={products[i].titleEn}
                image={products[i].image}
                place={products[i].place}
                placeEn={products[i].placeEn}
                onsetSelected={setSelected}
                isEnglish={isEnglish}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
