import './listProduct.css'
const ProductCard = ({ product }) => {
  return (
    <div>
      <a href={`/san-pham/${product.slug}`}>
        <div>
          <img loading="lazy" src={product.thumbnail_url ? product.thumbnail_url : product.image} alt="" />
          <div className="pt-3 text-black">
            <div className="text-sm line-clamp-1">{product.name}</div>
            <div className="pt-2 font-semibold text-base">
              {product.price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
