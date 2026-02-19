import { useParams, useNavigate, Link } from 'react-router-dom'
import dlsbLed from '../assets/dlsb-led.webp'
import dlRound from '../assets/dl-round.webp'
import dlSquare from '../assets/dl-square.webp'
import mangoMidi from '../assets/mango-midi.webp'
import eliaDl from '../assets/elia-dl.webp'
import ebPlus from '../assets/eb-plus.webp'

const allProducts = [
  { 
    id: 13, 
    name: 'DLSB LED', 
    nameAr: 'داون لايت DLSB LED',
    price: '10W - 1000 Lumens', 
    image: dlsbLed,
    color: '#1E88E5',
    category: 'electrical',
    tagline: 'إضاءة مودولارية احترافية',
    desc: 'داون لايت LED مودولار بقوة 10 واط من سلسلة DLSB، مصنوع من الألومنيوم المضغوط مع عاكس ساتان لتوزيع متجانس للضوء.',
    fullDesc: 'داون لايت LED مودولار بقوة 10 واط من سلسلة DLSB للإضاءة المخفية في المناطق المكتبية والتجارية. مصنوع من جسم واحد من الألومنيوم المضغوط العالمي لجميع وظائف مبدد الحرارة LED، مثبت على السقف وموصل بمجموعة التغذية. وحدة إضاءة أساسية مدمجة في انتشار الضوء في العاكس المضاد. عاكس ساتان مُعالج بالرجوع أو توزيع متجانس للضوء. عاكس أبيض مودولار مطبوع في ABS وملحوم بوحدة LED لانعكاس محايد للضوء. الوزن الخفيف ونظام التثبيت السريع والتوصيل البسيط يتيح تركيباً سهلاً وسريعاً.',
    features: ['10W Power Consumption', '1000 Lumens Output', 'CRI 90+', 'Modular Design', 'Satin Reflector']
  },
  { 
    id: 14, 
    name: 'DL ROUND', 
    nameAr: 'داون لايت دائري',
    price: '15W - 1500 Lumens', 
    image: dlRound,
    color: '#1976D2',
    category: 'electrical',
    tagline: 'تصميم دائري أنيق',
    desc: 'داون لايت دائري بقوة 15 واط مع تصميم عصري وإضاءة موحدة، مثالي للمكاتب والمساحات التجارية.',
    fullDesc: 'داون لايت دائري بقوة 15 واط مع تصميم عصري وإضاءة موحدة، مثالي للمكاتب والمساحات التجارية. يوفر 1500 لومن من الإضاءة الساطعة مع معامل CRI 90+ للحصول على ألوان طبيعية. تصميم دائري أنيق يتناسب مع جميع أنواع الديكورات الحديثة. مصنوع من مواد عالية الجودة مع حماية IP44 ضد الرطوبة. سهل التركيب والصيانة مع عمر افتراضي طويل يتجاوز 50,000 ساعة.',
    features: ['15W Power Consumption', '1500 Lumens Output', 'Round Design', 'CRI 90+', 'IP44 Rated']
  },
  { 
    id: 15, 
    name: 'DL SQUARE', 
    nameAr: 'داون لايت مربع',
    price: '20W - 2000 Lumens', 
    image: dlSquare,
    color: '#0277BD',
    category: 'electrical',
    tagline: 'تصميم مربع مميز',
    desc: 'داون لايت مربع بقوة 20 واط مع تصميم هندسي حديث وإضاءة قوية للمساحات الكبيرة.',
    fullDesc: 'داون لايت مربع بقوة 20 واط مع تصميم هندسي حديث وإضاءة قوية للمساحات الكبيرة. يوفر 2000 لومن من الإضاءة القوية مع حماية IP65 ضد الماء والغبار. تصميم مربع مميز يضيف لمسة عصرية للمساحات التجارية والسكنية. مثالي للحمامات والمطابخ والأماكن الخارجية. مصنوع من الألومنيوم المضغوط عالي الجودة مع نظام تبديد حراري فعال.',
    features: ['20W Power Consumption', '2000 Lumens Output', 'Square Design', 'IP65 Rated', 'High Output']
  },
  { 
    id: 16, 
    name: 'MANGO+ MIDI', 
    nameAr: 'سبوت لايت مانجو ميدي',
    price: '12W - Adjustable', 
    image: mangoMidi,
    color: '#0288D1',
    category: 'electrical',
    tagline: 'إضاءة مركزة قابلة للتوجيه',
    desc: 'سبوت لايت مانجو ميدي بقوة 12 واط مع إمكانية التوجيه والتعديل، مثالي لإبراز التفاصيل المعمارية.',
    fullDesc: 'سبوت لايت مانجو ميدي بقوة 12 واط مع إمكانية التوجيه والتعديل، مثالي لإبراز التفاصيل المعمارية والديكورات. تقنية COB LED توفر إضاءة موحدة وقوية مع معامل CRI 90+ لإظهار الألوان الحقيقية. تصميم مدمج وأنيق يتناسب مع جميع أنواع الأسقف. إمكانية التوجيه تتيح لك التحكم الكامل في اتجاه الإضاءة. مثالي للمحلات التجارية والمعارض والمساحات السكنية الراقية.',
    features: ['12W Power Consumption', 'Adjustable Direction', 'COB LED', 'CRI 90+', 'Compact Design']
  },
  { 
    id: 17, 
    name: 'ELIA DL', 
    nameAr: 'سبوت لايت إيليا',
    price: '15W - High CRI', 
    image: eliaDl,
    color: '#039BE5',
    category: 'electrical',
    tagline: 'إضاءة احترافية عالية الجودة',
    desc: 'سبوت لايت إيليا بقوة 15 واط مع معامل CRI 95+ للحصول على ألوان طبيعية ودقيقة، مثالي للمعارض والمحلات.',
    fullDesc: 'سبوت لايت إيليا بقوة 15 واط مع معامل CRI 95+ للحصول على ألوان طبيعية ودقيقة، مثالي للمعارض والمحلات. جهاز LED مخفي للإضاءة المركزة في المناطق المكتبية والتجارية. وحدة إضاءة مخفية مودولارية بنظام بصري دائري متماثل، مزودة بنظام تبديد حراري سلبي من الألومنيوم المضغوط. إطار ألومنيوم مضغوط مطلي بالبودرة البيضاء مع خيارين بصريين (36° و 60°) يضمنان معامل وهج UGR أقل من 19. عمر افتراضي يتجاوز 50,000 ساعة.',
    features: ['15W Power Consumption', 'CRI 95+', 'Adjustable Beam', 'Premium Quality', '50,000 Hours']
  },
  { 
    id: 18, 
    name: 'EB+', 
    nameAr: 'سبوت لايت طوارئ EB+',
    price: '6W - Emergency', 
    image: ebPlus,
    color: '#01579B',
    category: 'electrical',
    tagline: 'إضاءة طوارئ آمنة',
    desc: 'سبوت لايت طوارئ EB+ بقوة 6 واط مع بطارية احتياطية 3 ساعات، معتمد ضد الحريق ومقاوم للماء IP65.',
    fullDesc: 'سبوت لايت طوارئ EB+ بقوة 6 واط مع بطارية احتياطية 3 ساعات، معتمد ضد الحريق ومقاوم للماء IP65. يعمل تلقائياً عند انقطاع التيار الكهربائي لضمان السلامة. متوفر طقم طوارئ خارجي مع 3 ساعات استقلالية. زر اختبار يدوي للتحقق من جاهزية النظام. مثالي للمباني التجارية والسكنية والمستشفيات والمدارس. معتمد ضد الحريق ومقاوم للماء والغبار مع زاوية إضاءة 45°. ضروري لضمان السلامة في حالات الطوارئ.',
    features: ['6W Power Consumption', '3h Emergency Backup', 'IP65 Rated', 'Fire Rated', 'Manual Test']
  }
]

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = allProducts.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div style={{ padding: '120px 4%', textAlign: 'center' }}>
        <h2>المنتج غير موجود</h2>
        <Link to="/products" style={{ color: 'var(--primary)' }}>العودة للمنتجات</Link>
      </div>
    )
  }

  return (
    <section className="product-detail-section" style={{ padding: '120px 4% 4rem', background: 'var(--white)' }}>
      <div className="product-detail-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <button 
          onClick={() => navigate(-1)}
          style={{
            padding: '0.6rem 1.5rem',
            background: 'var(--light-gray)',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginBottom: '2rem',
            fontFamily: 'Cairo, sans-serif',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          ← العودة
        </button>

        <div className="product-detail-layout" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
          <div className="product-image-container" style={{ 
            background: `linear-gradient(135deg, ${product.color}10 0%, #f8f9fa 100%)`,
            borderRadius: '20px',
            padding: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px',
            width: '100%',
            maxWidth: '600px'
          }}>
            <img 
              src={product.image} 
              alt={product.nameAr} 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '400px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))'
              }} 
            />
          </div>

          <div className="product-info-container" style={{ textAlign: 'center', width: '100%', maxWidth: '800px' }}>
            <p style={{ 
              fontSize: '0.75rem', 
              letterSpacing: '2px', 
              color: product.color,
              marginBottom: '0.5rem',
              fontFamily: 'Cairo, sans-serif',
              fontWeight: '700',
              textTransform: 'uppercase'
            }}>
              {product.tagline}
            </p>
            
            <h1 style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)', 
              fontWeight: '700',
              marginBottom: '0.5rem',
              color: 'var(--text-dark)'
            }}>
              {product.nameAr}
            </h1>
            
            <h2 style={{ 
              fontSize: '1.3rem', 
              fontWeight: '400',
              marginBottom: '1.5rem',
              color: 'var(--text-light)'
            }}>
              {product.name}
            </h2>

            <div style={{ 
              padding: '1rem 1.5rem',
              background: 'var(--light-gray)',
              borderRadius: '12px',
              marginBottom: '2rem',
              display: 'inline-block'
            }}>
              <span style={{ 
                fontSize: '1.2rem', 
                fontWeight: '600',
                color: 'var(--text-dark)'
              }}>
                {product.price}
              </span>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ 
                fontSize: '1.2rem', 
                fontWeight: '700',
                marginBottom: '1rem',
                fontFamily: 'Cairo, sans-serif'
              }}>
                الوصف
              </h3>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8',
                color: 'var(--text-light)',
                fontFamily: 'Cairo, sans-serif'
              }}>
                {product.fullDesc}
              </p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ 
                fontSize: '1.2rem', 
                fontWeight: '700',
                marginBottom: '1rem',
                fontFamily: 'Cairo, sans-serif'
              }}>
                المميزات
              </h3>
              <div className="product-features-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
                {product.features.map((feature, i) => (
                  <span 
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.6rem 1.2rem',
                      background: 'var(--light-gray)',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontFamily: 'Cairo, sans-serif'
                    }}
                  >
                    <span style={{ 
                      width: '8px', 
                      height: '8px', 
                      background: product.color,
                      borderRadius: '50%'
                    }}></span>
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ 
              padding: '1.5rem',
              background: 'var(--light-gray)',
              borderRadius: '12px',
              marginTop: '2rem'
            }}>
              <p style={{ 
                fontSize: '0.9rem',
                lineHeight: '1.6',
                color: 'var(--text-light)',
                fontFamily: 'Cairo, sans-serif',
                textAlign: 'center'
              }}>
                للاستفسار والطلب، يرجى التواصل معنا عبر الهاتف: <strong>0913407799</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
