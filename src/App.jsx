import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <section id="get-started" className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">You’re all set</h3>
            <p className="mt-3 text-gray-600">Edit this page and start building your idea. Save to reload instantly.</p>
            <div className="mt-6 inline-flex items-center rounded-lg border px-4 py-2.5 bg-white text-gray-900 shadow-sm">
              src/App.jsx
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
