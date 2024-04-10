type ServiceProps = {
  imageUrl: string,
  name: string,
  price: string,
  description: string
}

export default function Service({imageUrl, name, price, description}: ServiceProps) {
  return (
    <div className="card">
      <img
        className="product--image"
        src={imageUrl}
        alt="product image"
      />
      <h2>{name}</h2>
      <p className="price">{price}</p>
      <p>{description}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  );
}
