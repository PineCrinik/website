export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      &copy; {new Date().getFullYear()} MyCompany. 版权所有.
    </footer>
  );
}