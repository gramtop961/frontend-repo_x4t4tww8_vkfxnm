import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-indigo-50">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[40rem] rounded-full bg-indigo-200/40 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            Ready to Code
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Hello, world!
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-gray-600 text-base sm:text-lg">
            A clean, modern starter to kick off your ideas. Built with React and Tailwind, styled for clarity.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-white shadow hover:bg-gray-800 transition-colors"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center rounded-lg border px-4 py-2.5 text-gray-900 bg-white hover:bg-gray-50 transition-colors"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
