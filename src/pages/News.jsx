import news from "../data/news";
import NewsCard from "../components/NewsCard";

export default function News() {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-6">公司新闻</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {news.map(n => <NewsCard key={n.id} news={n} />)}
      </div>
    </section>
  );
}