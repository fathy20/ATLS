import { useEffect, useRef } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import './App.css'
import NewsTicker from './components/NewsTicker'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Brands from './pages/Brands'
import logo from '../logo_conmpany/logo_atls.png'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    if (location.hash) {
      const elem = document.querySelector(location.hash)
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [location.pathname])

  return (
    <div ref={containerRef}>
      <NewsTicker />
      
      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/products">المنتجات</Link></li>
          <li><Link to="/#features">مميزاتنا</Link></li>
          <li><Link to="/#contact">تواصل معنا</Link></li>
          <li><Link to="/">الرئيسية</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>

      {/* Footer */}
      <footer className="footer-rich">
        <div className="footer-grid">
          <div className="footer-col">
            <div style={{ marginBottom: '3.5rem', display: 'block' }}>
              <Link to="/" className="logo" style={{ display: 'inline-block' }}>
                <img src={logo} alt="ATLAS أطلس" className="logo-img" style={{ height: '50px' }} />
              </Link>
            </div>
            <p className="footer-desc">
              شركة أطلس لإستيراد المواد الكهربائية والمنزلية نجمع بين التكنولوجيا الحديثة والجودة العالية لنقدم لك تجربة استثنائية.
            </p>
          </div>
          
          <div className="footer-col">
            <h4>روابط سريعة</h4>
            <ul className="footer-links-list">
              <li><Link to="/">الرئيسية</Link></li>
              <li><Link to="/products">المنتجات</Link></li>
              <li><Link to="/#features">مميزاتنا</Link></li>
              <li><Link to="/#contact">تواصل معنا</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>الأقسام</h4>
            <ul className="footer-links-list">
              <li><Link to="/products?category=electrical">الكهربائيات</Link></li>
              <li><Link to="/products?category=home">المنزلية</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>تواصل معنا</h4>
            <ul className="footer-links-list contact-list">
              <li>
                <span>📍</span>
                <span>طرابلس، الكريمية، بجانب شارع سيدي سليم</span>
              </li>
              <li>
                <span>📞</span>
                <div dir="ltr" style={{ display: 'inline-block' }}>
                  <div>0913407799</div>
                </div>
              </li>
            </ul>
            <div className="social-links">
              <a href="https://www.facebook.com/atlas2026/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/atlas_ly2026?igsh=MTB1c2RyeGl2ampvcQ==" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@atlasly5?_r=1&_t=ZS-93t89GS4fdH" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2026 أطلس للأجهزة المنزلية. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
