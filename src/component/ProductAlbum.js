export default function ProductAlbum({ album = [""] }) {
  console.log(album);
  return (
    <div className="product-album">
      <div className="album-container">
        {Array.from({ length: album.length }, (_, i) => {
          return <img src={album[i]} className={`album-img${i + 1}`} alt="" />;
        })}
      </div>
    </div>
  );
}
