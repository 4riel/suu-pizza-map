import { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './landing.css'

interface Pizza {
  name: string
  desc: string
  img: string
}

const pizzas: Pizza[] = [
  { name: 'Chiang Mai Slice', desc: 'Cozy spot with thin crust perfection.', img: 'https://picsum.photos/seed/pizza1/400/300' },
  { name: 'Seoul Pizza Lab', desc: 'Creative toppings and great atmosphere.', img: 'https://picsum.photos/seed/pizza2/400/300' },
  { name: 'Napoli Classic', desc: 'Authentic Neapolitan pies straight from the oven.', img: 'https://picsum.photos/seed/pizza3/400/300' },
  { name: 'Tokyo Tomato', desc: 'Fusion-style slices with a local twist.', img: 'https://picsum.photos/seed/pizza4/400/300' },
  { name: 'Berlin Dough', desc: 'Late-night favorite with crispy bases.', img: 'https://picsum.photos/seed/pizza5/400/300' },
  { name: 'NYC Pie Co.', desc: 'Classic New York slices done right.', img: 'https://picsum.photos/seed/pizza6/400/300' },
]

const Landing: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    })
    document.querySelectorAll('.hidden').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <nav>
        <div>Suu Pizza</div>
        <div>
          <a href="#hero">Home</a>
          <a href="./index.html">Map</a>
        </div>
      </nav>
      <header id="hero" className="hero">
        <div className="hero-content">
          <h1>The Best Pizza on Earth</h1>
          <p className="tagline">curated by Suu, global pizza adventurer</p>
          <a href="./index.html" className="btn">Explore the Map</a>
        </div>
      </header>
      <section id="about" className="hidden">
        <div className="card">
          <h2>Who is Suu?</h2>
          <p>
            Suu is traveling the world one slice at a time, tasting pizzas from Naples
            to New York, and crafting her own creations inspired by global flavors.
          </p>
        </div>
      </section>
      <section id="gallery">
        <h2>Featured Pizzas</h2>
        <div className="grid">
          {pizzas.map((p) => (
            <div className="pizza-card hidden" key={p.name}>
              <img src={p.img} alt={p.name} />
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <a href="#" className="btn small">See more</a>
            </div>
          ))}
        </div>
      </section>
      <footer>
        <p>Follow Suu's journey</p>
        <div className="social">
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">TikTok</a>
        </div>
        <a href="mailto:suu@example.com" className="btn">Submit your pizza</a>
      </footer>
    </>
  )
}

const rootElement = document.getElementById('root') as HTMLElement
createRoot(rootElement).render(<Landing />)
export default Landing

