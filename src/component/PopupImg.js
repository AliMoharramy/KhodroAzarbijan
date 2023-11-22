export default function PopupImg({ item, setIsPopUpImg }) {
  //console.log(item);
  return (
    <div className="popImg">
      <i class="fa fa-close" onClick={(e) => setIsPopUpImg(false)}></i>
      <div className="imgcontainer">
        <img src={item} alt="" />
      </div>
    </div>
  );
}
