export default function ProductAlbum({ albume = [""], setIsPopUpImg }) {
  return (
    <div className="product-album">
      <div className="album-container">
        {Array.from({ length: albume.length }, (_, i) => {
          return (
            <div>
              <img
                src={albume[i]}
                className={`album-img${i + 1}`}
                alt=""
                onClick={(e) => setIsPopUpImg([e.target.src, true])}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
