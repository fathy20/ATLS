import { Link } from 'react-router-dom'
import besserLogo from '../../logas/besser_logo.png'
import fantonLogo from '../../logas/FANTON_LOGO_IT_Feb2017.png'
import gewissLogo from '../../logas/GewissDX15016.jpg'
import tecnoLogo from '../../logas/logo_tecno_home.png'

const brands = [
  {
    id: 'performance-in-lighting',
    name: 'Performance in Lighting',
    nameAr: 'بيرفورمانس إن لايتنج',
    logo: gewissLogo,
    description: 'حلول إضاءة LED احترافية للمساحات التجارية والمكتبية',
    color: '#FF6B35'
  },
  {
    id: 'gewiss',
    name: 'Gewiss',
    nameAr: 'جيويس',
    logo: gewissLogo,
    description: 'منتجات كهربائية عالية الجودة',
    color: '#E85D04'
  },
  {
    id: 'fanton',
    name: 'Fanton',
    nameAr: 'فانتون',
    logo: fantonLogo,
    description: 'أنظمة كهربائية متطورة',
    color: '#DC2F02'
  },
  {
    id: 'besser',
    name: 'Besser',
    nameAr: 'بيسر',
    logo: besserLogo,
    description: 'حلول إضاءة مبتكرة',
    color: '#D00000'
  }
]

export default function Brands() {
  return (
    <section style={{ padding: '120px 4% 4rem', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ 
            fontSize: '0.85rem', 
            letterSpacing: '2px', 
            color: 'var(--primary)',
            marginBottom: '1rem',
            fontFamily: 'Cairo, sans-serif',
            fontWeight: '600'
          }}>
            شركاؤنا
          </p>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            fontWeight: '700',
            color: 'var(--text-dark)',
            fontFamily: 'Cairo, sans-serif'
          }}>
            أفضل العلامات التجارية
          </h1>
          <p style={{
            fontSize: '1rem',
            color: 'var(--text-light)',
            marginTop: '1rem',
            fontFamily: 'Cairo, sans-serif'
          }}>
            اختر العلامة التجارية لعرض منتجاتها
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          padding: '0 1rem'
        }}>
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={`/products?brand=${brand.id}`}
              style={{
                textDecoration: 'none',
                background: 'var(--white)',
                borderRadius: '20px',
                padding: '3rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                border: '2px solid transparent',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)'
                e.currentTarget.style.borderColor = brand.color
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
                e.currentTarget.style.borderColor = 'transparent'
              }}
            >
              <div style={{
                width: '100%',
                height: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `linear-gradient(135deg, ${brand.color}10 0%, #f8f9fa 100%)`,
                borderRadius: '15px',
                padding: '1.5rem'
              }}>
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>

              <div style={{ textAlign: 'center', width: '100%' }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: 'var(--text-dark)',
                  marginBottom: '0.5rem',
                  fontFamily: 'Cairo, sans-serif'
                }}>
                  {brand.nameAr}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: brand.color,
                  marginBottom: '0.8rem',
                  fontWeight: '500'
                }}>
                  {brand.name}
                </p>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-light)',
                  lineHeight: '1.6',
                  fontFamily: 'Cairo, sans-serif'
                }}>
                  {brand.description}
                </p>
              </div>

              <div style={{
                padding: '0.8rem 2rem',
                background: `${brand.color}15`,
                borderRadius: '10px',
                color: brand.color,
                fontWeight: '600',
                fontSize: '0.9rem',
                fontFamily: 'Cairo, sans-serif',
                marginTop: 'auto'
              }}>
                عرض المنتجات ←
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
