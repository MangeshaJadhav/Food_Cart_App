import "./new.css";

function ProductList({ product, addToCart }) {
  return (
    <div className=" newbg flex m-1 shadow-lg p-3 mb-5 bg-red rounded">
      {product.map((productItem, productIndex) => {
        return (
          <div style={{ width: "33%" }}>
            <div className="product-item">
              <img
                className="proImg"
                src={productItem.url}
                width="100%"
                alt="im"
              />
              <p>
                {productItem.name} | {productItem.category}{" "}
              </p>
              <p> {productItem.seller} </p>
              <p> Rs. {productItem.price} /-</p>
              <button className="btn" onClick={() => addToCart(productItem)}>
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
