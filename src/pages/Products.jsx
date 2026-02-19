import { useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import dlsbLed from '../assets/dlsb-led.webp'
import dlRound from '../assets/dl-round.webp'
import dlSquare from '../assets/dl-square.webp'
import mangoMidi from '../assets/mango-midi.webp'
import eliaDl from '../assets/elia-dl.webp'
import ebPlus from '../assets/eb-plus.webp'
import orangeImg from '../assets/organge.png'
import purpleImg from '../assets/purple.png'
import greenImg from '../assets/green.png'

gsap.registerPlugin(ScrollTrigger)

const electricalProducts = [
  { 
    id: 13, 
    name: 'DLSB LED', 
    nameAr: 'داون لايت DLSB LED',
    price: '10W - 1000 Lumens', 
    image: dlsbLed,
    color: '#1E88E5',
    tagline: 'إضاءة مودولارية احترافية',
    desc: 'داون لايت LED مودولار بقوة 10 واط من سلسلة DLSB، مصنوع من الألومنيوم المضغوط مع عاكس ساتان لتوزيع متجانس للضوء.',
    features: ['10W Power Consumption', '1000 Lumens Output', 'CRI 90+', 'Modular Design', 'Satin Reflector']
  },
  { 
    id: 14, 
    name: 'DL ROUND', 
    nameAr: 'داون لايت دائري',
    price: '15W - 1500 Lumens', 
    image: dlRound,
    color: '#1976D2',
    tagline: 'تصميم دائري أنيق',
    desc: 'داون لايت دائري بقوة 15 واط مع تصميم عصري وإضاءة موحدة، مثالي للمكاتب والمساحات التجارية.',
    features: ['15W Power Consumption', '1500 Lumens Output', 'Round Design', 'CRI 90+', 'IP44 Rated']
  },
  { 
    id: 15, 
    name: 'DL SQUARE', 
    nameAr: 'داون لايت مربع',
    price: '20W - 2000 Lumens', 
    image: dlSquare,
    color: '#0277BD',
    tagline: 'تصميم مربع مميز',
    desc: 'داون لايت مربع بقوة 20 واط مع تصميم هندسي حديث وإضاءة قوية للمساحات الكبيرة.',
    features: ['20W Power Consumption', '2000 Lumens Output', 'Square Design', 'IP65 Rated', 'High Output']
  },
  { 
    id: 16, 
    name: 'MANGO+ MIDI', 
    nameAr: 'سبوت لايت مانجو ميدي',
    price: '12W - Adjustable', 
    image: mangoMidi,
    color: '#0288D1',
    tagline: 'إضاءة مركزة قابلة للتوجيه',
    desc: 'سبوت لايت مانجو ميدي بقوة 12 واط مع إمكانية التوجيه والتعديل، مثالي لإبراز التفاصيل المعمارية.',
    features: ['12W Power Consumption', 'Adjustable Direction', 'COB LED', 'CRI 90+', 'Compact Design']
  },
  { 
    id: 17, 
    name: 'ELIA DL', 
    nameAr: 'سبوت لايت إيليا',
    price: '15W - High CRI', 
    image: eliaDl,
    color: '#039BE5',
    tagline: 'إضاءة احترافية عالية الجودة',
    desc: 'سبوت لايت إيليا بقوة 15 واط مع معامل CRI 95+ للحصول على ألوان طبيعية ودقيقة، مثالي للمعارض والمحلات.',
    features: ['15W Power Consumption', 'CRI 95+', 'Adjustable Beam', 'Premium Quality', '50,000 Hours']
  },
  { 
    id: 18, 
    name: 'EB+', 
    nameAr: 'سبوت لايت طوارئ EB+',
    price: '6W - Emergency', 
    image: ebPlus,
    color: '#01579B',
    tagline: 'إضاءة طوارئ آمنة',
    desc: 'سبوت لايت طوارئ EB+ بقوة 6 واط مع بطارية احتياطية 3 ساعات، معتمد ضد الحريق ومقاوم للماء IP65.',
    features: ['6W Power Consumption', '3h Emergency Backup', 'IP65 Rated', 'Fire Rated', 'Manual Test']
  },
]

const homeProducts = [
  { 
    id: 2, 
    name: 'Deep Casserole', 
    nameAr: 'حلة عميقة',
    price: '16CM / 1.5L', 
    image: orangeImg,
    color: '#42A5F5',
    tagline: 'ستانلس ستيل فاخر',
    desc: 'حلل ستانلس ستيل 18/10 Cr-Ni بقاعدة كبسولة للتوزيع المثالي للحرارة.',
    features: ['Capsule Bottom', '18/10 Cr-Ni Stainless Steel', 'Premium Quality']
  },
  { 
    id: 3, 
    name: 'Cookware Set', 
    nameAr: 'طقم أواني طبخ',
    price: 'Multiple Sizes', 
    image: purpleImg,
    color: '#1565C0',
    tagline: 'جودة لا تضاهى',
    desc: 'مجموعة متكاملة من أواني الطبخ الستانلس ستيل بأحجام متعددة لتلبية جميع احتياجات مطبخك.',
    features: ['Various Sizes', 'Durable Build', 'Easy to Clean']
  },
  { 
    id: 4, 
    name: 'Kitchen Essentials', 
    nameAr: 'أساسيات المطبخ',
    price: 'Premium Collection', 
    image: greenImg,
    color: '#0D47A1',
    tagline: 'كل ما يحتاجه منزلك',
    desc: 'تشكيلة واسعة من المنتجات المنزلية والكهرومنزلية عالية الجودة.',
    features: ['Home Appliances', 'Kitchenware', 'Decorative Items']
  },
  { 
    id: 5, 
    name: 'Smart Blender', 
    nameAr: 'خلاط ذكي',
    price: '1000W High Speed', 
    image: orangeImg,
    color: '#64B5F6',
    tagline: 'قوة وتحمل',
    desc: 'خلاط عالي السرعة لتحضير أشهى العصائر والسموثي في ثوانٍ.',
    features: ['1000W Motor', 'Glass Jar', 'Ice Crush Mode']
  },
  { 
    id: 6, 
    name: 'Coffee Maker', 
    nameAr: 'ماكينة قهوة',
    price: '1.5L Capacity', 
    image: purpleImg,
    color: '#2196F3',
    tagline: 'صباحك أجمل',
    desc: 'ماكينة تحضير القهوة المقطرة مع مؤقت مسبق لتبدأ يومك بنشاط.',
    features: ['Programmable', 'Anti-drip', 'Keep Warm']
  },
  { 
    id: 8, 
    name: 'Granite Pan', 
    nameAr: 'مقلاة جرانيت',
    price: '28CM Non-stick', 
    image: orangeImg,
    color: '#0288D1',
    tagline: 'طهي صحي',
    desc: 'مقلاة جرانيت غير لاصقة تتيح لك الطهي بأقل كمية من الدهون.',
    features: ['Non-stick Coating', 'Scratch Resistant', 'Even Heat']
  },
  { 
    id: 10, 
    name: 'Food Processor', 
    nameAr: 'محضر طعام',
    price: 'Multi-function', 
    image: greenImg,
    color: '#01579B',
    tagline: 'مساعدك الشخصي',
    desc: 'محضر طعام متعدد الوظائف يختصر عليك الوقت والجهد في المطبخ.',
    features: ['Chopping', 'Slicing', 'Kneading']
  },
  { 
    id: 11, 
    name: 'Electric Kettle', 
    nameAr: 'غلاية كهربائية',
    price: '1.7L Stainless', 
    image: orangeImg,
    color: '#039BE5',
    tagline: 'مشروبات ساخنة',
    desc: 'غلاية كهربائية سريعة الغليان بتصميم ستانلس ستيل آمن وصحي.',
    features: ['Auto Shut-off', 'Boil Dry Protection', '360 Base']
  },
  { 
    id: 12, 
    name: 'Decorative Vase', 
    nameAr: 'مزهرية ديكور',
    price: 'Ceramic', 
    image: purpleImg,
    color: '#4FC3F7',
    tagline: 'لمسة فنية',
    desc: 'مزهرية سيراميك بتصميم فني فريد يناسب جميع أنماط الديكور.',
    features: ['Handcrafted', 'Premium Ceramic', 'Unique Design']
  }
]

export default function Products() {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category') || 'electrical'

  useEffect(() => {
    const productCards = gsap.utils.toArray('.product-card-grid')
    productCards.forEach((card) => {
      gsap.fromTo(card, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [category])

  return (
    <section className="products-section" style={{ paddingTop: '120px' }}>
      <div className="products-header">
        <p className="section-tag">كتالوج المنتجات</p>
      </div>

      {/* Electrical Products Section */}
      {category === 'electrical' && (
        <div>
          <div className="products-header" style={{ marginBottom: '2rem' }}>
            <h3 className="products-title" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>
              <strong>منتجات كهربائية</strong>
            </h3>
          </div>
          <div className="products-grid-layout">
            {electricalProducts.map((product) => (
              <Link 
                key={product.id}
                to={`/product/${product.id}`}
                className="product-card-grid"
                style={{ '--product-color': product.color, textDecoration: 'none' }}
              >
                <div className="product-image-wrapper-grid">
                  <img src={product.image} alt={product.name} className="product-image-grid" />
                </div>
                
                <div className="product-content-grid">
                  <h3 className="product-name-grid">{product.nameAr}</h3>
                  <p className="product-price-grid">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Home Products Section */}
      {category === 'home' && (
        <div>
          <div className="products-header" style={{ marginBottom: '2rem' }}>
            <h3 className="products-title" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>
              <strong>منتجات منزلية</strong>
            </h3>
            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              أدوات مطبخ وأجهزة منزلية عالية الجودة
            </p>
          </div>
          <div className="products-grid-layout">
            {homeProducts.map((product) => (
              <Link 
                key={product.id}
                to={`/product/${product.id}`}
                className="product-card-grid"
                style={{ '--product-color': product.color, textDecoration: 'none' }}
              >
                <div className="product-image-wrapper-grid">
                  <img src={product.image} alt={product.name} className="product-image-grid" />
                </div>
                
                <div className="product-content-grid">
                  <h3 className="product-name-grid">{product.nameAr}</h3>
                  <p className="product-price-grid">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
