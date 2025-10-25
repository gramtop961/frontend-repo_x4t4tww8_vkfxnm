export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-10 border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {year} Hello World. All rights reserved.</p>
        <p className="opacity-80">Made with React + Tailwind</p>
      </div>
    </footer>
  );
}
