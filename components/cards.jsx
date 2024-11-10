const ProductCard = ({ name, description, price, image }) => {
    return (
      <div className="product-card">
        <img src={image} alt={name} className="product-image" />
        <div className="product-info">
          <h3 className="product-name">{name}</h3>
          <p className="product-description">{description}</p>
          <p className="product-price">${price}</p>
        </div>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    );
  };
  
  export default ProductCard;