import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    })
  }, [])

  return (
    <div className="bg-black text-white overflow-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50">

        <div className="flex items-center justify-between px-8 md:px-16 py-6 bg-black/20 backdrop-blur-md">

          <h1 className="text-2xl tracking-[4px] font-semibold">
            OLD SCHOOL TEA
          </h1>

          <nav className="hidden md:flex gap-10 uppercase text-sm tracking-[3px]">

            <a href="#story" className="hover:text-[#D4A373] transition">
              Story
            </a>

            <a href="#teas" className="hover:text-[#D4A373] transition">
              Teas
            </a>

            <a href="#gallery" className="hover:text-[#D4A373] transition">
              Gallery
            </a>

            <a href="#location" className="hover:text-[#D4A373] transition">
              Visit
            </a>

          </nav>

        </div>

      </header>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* CONTENT */}
        <div className="relative z-10 px-6 fade-up">

          <p className="tracking-[6px] uppercase text-[#D4A373] mb-6">
            Kottapuram • Kodungallur
          </p>

          <h1 className="text-6xl md:text-[120px] leading-none font-semibold hero-glow">
            OLD SCHOOL
          </h1>

          <h1 className="text-6xl md:text-[120px] leading-none text-[#D4A373] font-semibold hero-glow">
            TEA
          </h1>

          <p className="mt-8 text-gray-300 max-w-2xl mx-auto text-lg">
            Where nostalgia is brewed into every cup.
          </p>

          <div className="flex justify-center gap-6 mt-10">

            <button className="luxury-btn gold-btn">
              Explore
            </button>

            <button className="luxury-btn outline-btn">
              View Menu
            </button>

          </div>

        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs tracking-[4px] text-white animate-bounce">

          SCROLL

        </div>

      </section>

      {/* STORY SECTION */}
      <section
        id="story"
        data-aos="fade-up"
        className="py-32 px-8 md:px-20 bg-[#111]"
      >

        <div className="grid md:grid-cols-2 gap-20 items-center">

          <img
            src="https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?q=80&w=1974&auto=format&fit=crop"
            className="rounded-3xl"
          />

          <div>

            <p className="uppercase tracking-[5px] text-[#D4A373] mb-4">
              Our Story
            </p>

            <h2 className="text-5xl mb-8 leading-tight">
              A Luxury Tea Experience Inspired By Tradition.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Old School Tea brings together nostalgia, authentic flavors,
              and premium ambience to create unforgettable evenings in
              Kodungallur.
            </p>

          </div>

        </div>

      </section>

      {/* SIGNATURE TEAS */}
      <section
        id="teas"
        data-aos="fade-up"
        className="py-32 px-8 md:px-20"
      >

        <div className="text-center mb-20">

          <p className="uppercase tracking-[5px] text-[#D4A373] mb-4">
            Signature Brews
          </p>

          <h2 className="text-5xl">
            Crafted For Perfect Evenings
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="group relative overflow-hidden rounded-3xl card-hover">

            <img
              src="https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=1974&auto=format&fit=crop"
              className="h-[500px] w-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-8 left-8">

              <h3 className="text-3xl mb-2">
                Ginger Tea
              </h3>

              <p className="text-gray-300">
                Rich flavor with warm spice notes.
              </p>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="group relative overflow-hidden rounded-3xl card-hover">

            <img
              src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1974&auto=format&fit=crop"
              className="h-[500px] w-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-8 left-8">

              <h3 className="text-3xl mb-2">
                Sulaimani
              </h3>

              <p className="text-gray-300">
                Traditional soulful tea experience.
              </p>

            </div>

          </div>

          {/* CARD 3 */}
          <div className="group relative overflow-hidden rounded-3xl card-hover">

            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
              className="h-[500px] w-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-8 left-8">

              <h3 className="text-3xl mb-2">
                Mint Tea
              </h3>

              <p className="text-gray-300">
                Refreshing premium evening brew.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* EXPERIENCE SECTION */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10">

          <h2 className="text-6xl md:text-8xl leading-tight">
            Not Just Tea.
            <br />
            An Emotion.
          </h2>

        </div>

      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        data-aos="fade-up"
        className="py-32 px-8 md:px-20 bg-[#111]"
      >

        <div className="text-center mb-20">

          <p className="uppercase tracking-[5px] text-[#D4A373] mb-4">
            Gallery
          </p>

          <h2 className="text-5xl">
            Moments At Old School Tea
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <img
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1974&auto=format&fit=crop"
            className="rounded-3xl h-[400px] w-full object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2070&auto=format&fit=crop"
            className="rounded-3xl h-[400px] w-full object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop"
            className="rounded-3xl h-[400px] w-full object-cover"
          />

        </div>

      </section>

      {/* LOCATION */}
      <section
        id="location"
        data-aos="fade-up"
        className="py-32 text-center"
      >

        <p className="uppercase tracking-[5px] text-[#D4A373] mb-4">
          Visit Us
        </p>

        <h2 className="text-5xl mb-6">
          Old School Tea
        </h2>

        <p className="text-gray-400 text-lg">
          Kottapuram, Kodungallur
        </p>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center">

        <p className="text-gray-500">
          © 2026 Old School Tea — All Rights Reserved
        </p>

      </footer>

    </div>
  )
}
