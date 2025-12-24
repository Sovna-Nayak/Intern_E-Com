import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <div key={product.id} className="border p-4 rounded shadow">
              <img
                src={product.image}
                alt={product.name}
                className="h-40 mx-auto"
              />
              <h3 className="font-semibold mt-2">{product.name}</h3>
              <p>₹{product.price}</p>
              <Link
                to={`/products/${product.id}`}
                className="text-blue-600 text-sm"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;

