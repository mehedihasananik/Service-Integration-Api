import CheckoutButton from "../CheckoutButton/CheckoutButton";

export default function CheckoutPage() {
  const items = [
    { name: "Product 1", amount: 1000, quantity: 1 },
    { name: "Product 2", amount: 2000, quantity: 1 },
  ];

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutButton items={items} />
    </div>
  );
}
