import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("表单提交", form);
    setSubmitted(true);
  };

  if (submitted) return <p>感谢您的留言，我们会尽快联系您！</p>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input type="text" name="name" placeholder="姓名" className="w-full border p-2" onChange={handleChange} required />
      <input type="email" name="email" placeholder="邮箱" className="w-full border p-2" onChange={handleChange} required />
      <textarea name="message" placeholder="留言内容" className="w-full border p-2" rows="4" onChange={handleChange} required />
      <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded">提交</button>
    </form>
  );
}