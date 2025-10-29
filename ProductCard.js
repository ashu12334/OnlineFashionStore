import ProductCard from "../components/ProductCard";

const mockProducts = [
  { id: 1, name: "Denim Jacket", price: 2499, image: "/images/jacket.jpg" },
  { id: 2, name: "Sneakers", price: 3499, image: "/images/sneakers.jpg" },
  { id: 3, name: "Summer Dress", price: 1999, image: "/images/dress.jpg" },
];

export default function Products() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {mockProducts.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
