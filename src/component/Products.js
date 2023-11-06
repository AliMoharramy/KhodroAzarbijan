import CardItem from "./CardItem";

export default function Products() {
  const products = [
    {
      id: 1,
      title: "کامیون فورس ۸.۵ تن کابین خوابدار",
      image:
        "https://panel.bahman.ir/api/file_manager/dn/86795e49-4cec-4d33-bd31-a0610355ed8b",
      place: "محصول",
    },
    {
      id: 2,
      title: "حمل خودرو کامیون فورس ۶ تن",
      image:
        "https://panel.bahman.ir/api/file_manager/dn/88d7ab26-8b53-49b2-a3a6-03c16267352a",
      place: "محصول",
    },
    {
      id: 3,
      title: "حمل خودرو کامیون فورس ۶ تن",
      image:
        "https://panel.bahman.ir/api/file_manager/dn/88d7ab26-8b53-49b2-a3a6-03c16267352a",
      place: "محصول",
    },
    {
      id: 3,
      title: "حمل خودرو کامیون فورس ۶ تن",
      image:
        "https://panel.bahman.ir/api/file_manager/dn/88d7ab26-8b53-49b2-a3a6-03c16267352a",
      place: "محصول",
    },
    {
      id: 3,
      title: "حمل خودرو کامیون فورس ۶ تن",
      image:
        "https://panel.bahman.ir/api/file_manager/dn/88d7ab26-8b53-49b2-a3a6-03c16267352a",
      place: "محصول",
    },
    {
      id: 3,
      title: "حمل خودرو کامیون فورس ۶ تن",
      image:
        "https://panel.bahman.ir/api/file_manager/dn/88d7ab26-8b53-49b2-a3a6-03c16267352a",
      place: "محصول",
    },
    {
      id: 3,
      title: "حمل خودرو کامیون فورس ۶ تن",
      image:
        "https://panel.bahman.ir/api/file_manager/dn/88d7ab26-8b53-49b2-a3a6-03c16267352a",
      place: "محصول",
    },
  ];

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
                title={products[i].title}
                image={products[i].image}
                place={products[i].place}
              />
            );
          })}
          <CardItem place="محصول" />
        </div>
      </div>
    </section>
  );
}
