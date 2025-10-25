import { Rocket } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 text-white">
            <Rocket className="h-5 w-5" />
          </span>
          <span className="font-semibold tracking-tight text-gray-900">Hello World</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#get-started" className="hover:text-gray-900 transition-colors">Get Started</a>
          <a href="#" className="rounded-full px-3 py-1.5 bg-gray-900 text-white text-xs font-medium hover:bg-gray-800 transition-colors">Live</a>
        </nav>
      </div>
    </header>
  );
}
