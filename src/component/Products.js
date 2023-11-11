import CardItem from "./CardItem";

export default function Products({ products, setSelectedProduct }) {
  function setSelected(id) {
    setSelectedProduct(id);
  }
  return (
    <section className="Products">
      <div className="container">
        <div className="products__title">
          <h3>محصولات</h3>
        </div>
        <div className="products__items">
          {Array.from({ length: products.length }, (_, i) => {
            return (
              <CardItem
                id={products[i].id}
                title={products[i].title}
                image={products[i].image}
                place={products[i].place}
                onsetSelected={setSelected}
              />
            );
          })}
          <CardItem place="محصول" />
        </div>
      </div>
    </section>
  );
}
