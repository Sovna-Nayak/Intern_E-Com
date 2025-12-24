import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-b pb-2"
              >
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 text-xl font-semibold">
            Total: ₹{total}
          </div>

          <button className="mt-4 bg-black text-white px-6 py-2 rounded">
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
