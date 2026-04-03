export default function ProductCard({ product }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="h-40 w-full object-cover mb-2"/>
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p>{product.description}</p>
    </div>
  );
}