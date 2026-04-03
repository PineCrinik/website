import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">MyCompany</div>
      <nav className="space-x-4">
        <Link to="/">首页</Link>
        <Link to="/about">关于我们</Link>
        <Link to="/products">产品</Link>
        <Link to="/news">新闻</Link>
        <Link to="/contact">联系我们</Link>
      </nav>
    </header>
  );
}