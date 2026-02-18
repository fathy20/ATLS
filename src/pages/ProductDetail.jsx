import { useParams, useNavigate, Link } from 'react-router-dom'
import lambImg from '../assets/lamb.png'
import orangeImg from '../assets/organge.png'
import purpleImg from '../assets/purple.png'
import greenImg from '../assets/green.png'

const allProducts = [
  { 
    id: 1, 
    name: 'LED Bulb', 
    nameAr: 'لمبات LED',
    price: '40W - 720 Lumens', 
    image: lambImg,
    color: '#1E88E5',
    category: 'electrical',
    tagline: 'إضاءة موفرة للطاقة',
    desc: 'لمبات LED عالية الجودة توفر إضاءة ساطعة مع استهلاك منخفض للطاقة وعمر افتراضي طويل.',
    fullDesc: 'لمبات LED عالية الجودة توفر إضاءة ساطعة مع استهلاك منخفض للطاقة وعمر افتراضي طويل. مصنوعة من مواد عالية الجودة تضمن الأداء الممتاز والمتانة. مثالية للاستخدام المنزلي والتجاري.',
    features: ['Real Watt 40W', '720 Lumens', 'Energy Efficient', 'Long Lifespan', 'Eco-Friendly']
  },
  { 
    id: 7, 
    name: 'Modern Chandelier', 
    nameAr: 'ثريا مودرن',
    price: 'Crystal LED', 
    image: lambImg,
    color: '#1976D2',
    category: 'electrical',
    tagline: 'أناقة لا تنتهي',
    desc: 'ثريا بتصميم عصري جذاب تضفي لمسة من الفخامة على صالون منزلك.',
    fullDesc: 'ثريا بتصميم عصري جذاب تضفي لمسة من الفخامة على صالون منزلك. مصنوعة من الكريستال الفاخر مع إضاءة LED موفرة للطاقة. تأتي مع ريموت كنترول للتحكم في الإضاءة.',
    features: ['Crystal Glass', 'LED Lights', 'Remote Control', 'Modern Design', 'Easy Installation']
  },
  { 
    id: 9, 
    name: 'Table Lamp', 
    nameAr: 'أباجورة مكتب',
    price: 'Adjustable', 
    image: purpleImg,
    color: '#0277BD',
    category: 'electrical',
    tagline: 'إضاءة مريحة',
    desc: 'أباجورة مكتب بتصميم أنيق وإضاءة مريحة للعين للقراءة والعمل.',
    fullDesc: 'أباجورة مكتب بتصميم أنيق وإضاءة مريحة للعين للقراءة والعمل. ذراع قابل للتعديل للحصول على الزاوية المثالية. تحكم باللمس سهل الاستخدام.',
    features: ['Adjustable Arm', 'Eye Protection', 'Touch Control', 'Modern Design', 'Energy Saving']
  },
  { 
    id: 2, 
    name: 'Deep Casserole', 
    nameAr: 'حلة عميقة',
    price: '16CM / 1.5L', 
    image: orangeImg,
    color: '#42A5F5',
    category: 'home',
    tagline: 'ستانلس ستيل فاخر',
    desc: 'حلل ستانلس ستيل 18/10 Cr-Ni بقاعدة كبسولة للتوزيع المثالي للحرارة.',
    fullDesc: 'حلل ستانلس ستيل 18/10 Cr-Ni بقاعدة كبسولة للتوزيع المثالي للحرارة. مقاومة للصدأ وسهلة التنظيف. مناسبة لجميع أنواع المواقد بما في ذلك الحث الكهربائي.',
    features: ['Capsule Bottom', '18/10 Cr-Ni Stainless Steel', 'Premium Quality', 'Dishwasher Safe', 'Induction Compatible']
  },
  { 
    id: 3, 
    name: 'Cookware Set', 
    nameAr: 'طقم أواني طبخ',
    price: 'Multiple Sizes', 
    image: purpleImg,
    color: '#1565C0',
    category: 'home',
    tagline: 'جودة لا تضاهى',
    desc: 'مجموعة متكاملة من أواني الطبخ الستانلس ستيل بأحجام متعددة لتلبية جميع احتياجات مطبخك.',
    fullDesc: 'مجموعة متكاملة من أواني الطبخ الستانلس ستيل بأحجام متعددة لتلبية جميع احتياجات مطبخك. تصميم متين وعملي. سهلة التنظيف والصيانة.',
    features: ['Various Sizes', 'Durable Build', 'Easy to Clean', 'Heat Resistant', 'Professional Grade']
  },
  { 
    id: 4, 
    name: 'Kitchen Essentials', 
    nameAr: 'أساسيات المطبخ',
    price: 'Premium Collection', 
    image: greenImg,
    color: '#0D47A1',
    category: 'home',
    tagline: 'كل ما يحتاجه منزلك',
    desc: 'تشكيلة واسعة من المنتجات المنزلية والكهرومنزلية عالية الجودة.',
    fullDesc: 'تشكيلة واسعة من المنتجات المنزلية والكهرومنزلية عالية الجودة. كل ما تحتاجه لمطبخ عصري ومجهز بالكامل. منتجات موثوقة من علامات تجارية عالمية.',
    features: ['Home Appliances', 'Kitchenware', 'Decorative Items', 'Premium Quality', 'Wide Selection']
  },
  { 
    id: 5, 
    name: 'Smart Blender', 
    nameAr: 'خلاط ذكي',
    price: '1000W High Speed', 
    image: orangeImg,
    color: '#64B5F6',
    category: 'home',
    tagline: 'قوة وتحمل',
    desc: 'خلاط عالي السرعة لتحضير أشهى العصائر والسموثي في ثوانٍ.',
    fullDesc: 'خلاط عالي السرعة لتحضير أشهى العصائر والسموثي في ثوانٍ. محرك قوي 1000 واط. وعاء زجاجي آمن وصحي. وضع خاص لتكسير الثلج.',
    features: ['1000W Motor', 'Glass Jar', 'Ice Crush Mode', 'Multiple Speeds', 'Safety Lock']
  },
  { 
    id: 6, 
    name: 'Coffee Maker', 
    nameAr: 'ماكينة قهوة',
    price: '1.5L Capacity', 
    image: purpleImg,
    color: '#2196F3',
    category: 'home',
    tagline: 'صباحك أجمل',
    desc: 'ماكينة تحضير القهوة المقطرة مع مؤقت مسبق لتبدأ يومك بنشاط.',
    fullDesc: 'ماكينة تحضير القهوة المقطرة مع مؤقت مسبق لتبدأ يومك بنشاط. سعة 1.5 لتر. نظام مانع للتنقيط. وظيفة الحفاظ على الحرارة.',
    features: ['Programmable', 'Anti-drip', 'Keep Warm', '1.5L Capacity', 'Auto Shut-off']
  },
  { 
    id: 8, 
    name: 'Granite Pan', 
    nameAr: 'مقلاة جرانيت',
    price: '28CM Non-stick', 
    image: orangeImg,
    color: '#0288D1',
    category: 'home',
    tagline: 'طهي صحي',
    desc: 'مقلاة جرانيت غير لاصقة تتيح لك الطهي بأقل كمية من الدهون.',
    fullDesc: 'مقلاة جرانيت غير لاصقة تتيح لك الطهي بأقل كمية من الدهون. طلاء مقاوم للخدش. توزيع متساوي للحرارة. مقبض مقاوم للحرارة.',
    features: ['Non-stick Coating', 'Scratch Resistant', 'Even Heat', 'Heat Resistant Handle', 'PFOA Free']
  },
  { 
    id: 10, 
    name: 'Food Processor', 
    nameAr: 'محضر طعام',
    price: 'Multi-function', 
    image: greenImg,
    color: '#01579B',
    category: 'home',
    tagline: 'مساعدك الشخصي',
    desc: 'محضر طعام متعدد الوظائف يختصر عليك الوقت والجهد في المطبخ.',
    fullDesc: 'محضر طعام متعدد الوظائف يختصر عليك الوقت والجهد في المطبخ. وظائف الفرم والتقطيع والعجن. محرك قوي ومتين. ملحقات متعددة.',
    features: ['Chopping', 'Slicing', 'Kneading', 'Powerful Motor', 'Multiple Attachments']
  },
  { 
    id: 11, 
    name: 'Electric Kettle', 
    nameAr: 'غلاية كهربائية',
    price: '1.7L Stainless', 
    image: orangeImg,
    color: '#039BE5',
    category: 'home',
    tagline: 'مشروبات ساخنة',
    desc: 'غلاية كهربائية سريعة الغليان بتصميم ستانلس ستيل آمن وصحي.',
    fullDesc: 'غلاية كهربائية سريعة الغليان بتصميم ستانلس ستيل آمن وصحي. سعة 1.7 لتر. إيقاف تلقائي. حماية من الغليان الجاف. قاعدة دوارة 360 درجة.',
    features: ['Auto Shut-off', 'Boil Dry Protection', '360 Base', '1.7L Capacity', 'Fast Boiling']
  },
  { 
    id: 12, 
    name: 'Decorative Vase', 
    nameAr: 'مزهرية ديكور',
    price: 'Ceramic', 
    image: purpleImg,
    color: '#4FC3F7',
    category: 'home',
    tagline: 'لمسة فنية',
    desc: 'مزهرية سيراميك بتصميم فني فريد يناسب جميع أنماط الديكور.',
    fullDesc: 'مزهرية سيراميك بتصميم فني فريد يناسب جميع أنماط الديكور. صناعة يدوية فاخرة. سيراميك عالي الجودة. تصميم فريد وأنيق.',
    features: ['Handcrafted', 'Premium Ceramic', 'Unique Design', 'Elegant Style', 'Versatile']
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
    <section style={{ padding: '120px 4% 4rem', background: 'var(--white)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div style={{ 
            background: `linear-gradient(135deg, ${product.color}10 0%, #f8f9fa 100%)`,
            borderRadius: '20px',
            padding: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '500px'
          }}>
            <img 
              src={product.image} 
              alt={product.nameAr} 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '450px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))'
              }} 
            />
          </div>

          <div style={{ textAlign: 'right' }}>
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
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
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
