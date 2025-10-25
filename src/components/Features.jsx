import { Zap, Palette, Shield } from "lucide-react";

const features = [
  {
    title: "Fast by default",
    description: "Vite + React for instant reloads and a silky-smooth dev experience.",
    icon: Zap,
    color: "from-amber-400 to-orange-500",
  },
  {
    title: "Beautifully styled",
    description: "Tailwind utilities make it easy to craft clean, modern interfaces.",
    icon: Palette,
    color: "from-fuchsia-400 to-violet-500",
  },
  {
    title: "Ready to scale",
    description: "Structure your app with focused components and best practices.",
    icon: Shield,
    color: "from-emerald-400 to-teal-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">What you get</h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            A minimal setup with great defaults so you can focus on building.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <article key={f.title} className="group rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr ${f.color} text-white shadow-sm`}>
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-1.5 text-gray-600 text-sm leading-relaxed">{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
