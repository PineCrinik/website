export default function NewsCard({ news }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <img src={news.image} alt={news.title} className="h-40 w-full object-cover mb-2"/>
      <h3 className="text-xl font-semibold">{news.title}</h3>
      <p>{news.content}</p>
    </div>
  );
}