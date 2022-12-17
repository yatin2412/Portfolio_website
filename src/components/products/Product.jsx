import "./Product.css";

const Product = ({img,link}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link}>
      <img src={img} alt="11" border="0" className="p-img"/></a>
    </div>
  );
};

export default Product;