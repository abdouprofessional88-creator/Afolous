// رسوم توضيحية premium لكل منتج — SVG + CSS (تشتغل أوفلاين، بدون صور خارجية)
const BG = {
  wings: ['#2A0E08', '#F43F1E'],
  spicy: ['#33060A', '#FF2D2D'],
  tenders: ['#2A1A06', '#E8B44A'],
  burger: ['#1E1006', '#FF6B35'],
  doubleburger: ['#200B06', '#F43F1E'],
  box: ['#14090A', '#B3541E'],
  familybox: ['#160B08', '#D9A03A'],
  fries: ['#221206', '#F5A524'],
  friesclassic: ['#201304', '#E8B44A'],
  sauce: ['#1C0B08', '#F43F1E'],
  saucespicy: ['#26060A', '#FF2D2D'],
  drink: ['#0A1A22', '#38BDF8'],
  mojito: ['#0A2018', '#34D399'],
}

function Drumstick({ x, y, s = 1, r = 0, hot = false }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      <rect x="-7" y="18" width="14" height="26" rx="7" fill="#F3E3C8" />
      <rect x="-7" y="18" width="14" height="8" rx="4" fill="#E8B44A" />
      <circle cx="0" cy="0" r="22" fill={hot ? '#C22A12' : '#D94F1E'} />
      <circle cx="0" cy="0" r="22" fill="url(#crisp)" opacity=".55" />
      <circle cx="-7" cy="-8" r="6" fill="#F0854A" opacity=".8" />
      <circle cx="8" cy="4" r="4.5" fill="#A81F0A" opacity=".7" />
      <circle cx="-2" cy="10" r="3" fill="#7A1508" opacity=".6" />
    </g>
  )
}

export default function FoodArt({ art = 'wings', className = '' }) {
  const [a, b] = BG[art] || BG.wings
  const gid = `g-${art}`
  return (
    <svg viewBox="0 0 400 300" className={`food-svg w-full h-full ${className}`} role="img" aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={b} />
          <stop offset="1" stopColor={a} />
        </linearGradient>
        <radialGradient id="crisp" cx=".4" cy=".35" r=".9">
          <stop offset="0" stopColor="#FFD9A0" />
          <stop offset=".5" stopColor="#F0854A" stopOpacity=".6" />
          <stop offset="1" stopColor="#7A1508" stopOpacity=".9" />
        </radialGradient>
        <radialGradient id="plate" cx=".5" cy=".4" r=".8">
          <stop offset="0" stopColor="#fff" stopOpacity=".22" />
          <stop offset="1" stopColor="#000" stopOpacity=".45" />
        </radialGradient>
      </defs>

      <rect width="400" height="300" fill={`url(#${gid})`} />
      <g opacity=".14" fill="#fff">
        {Array.from({ length: 24 }).map((_, i) => (
          <circle key={i} cx={(i * 67) % 400} cy={(i * 43) % 300} r={i % 3 === 0 ? 2.4 : 1.2} />
        ))}
      </g>
      {/* طبق */}
      <ellipse cx="200" cy="218" rx="132" ry="34" fill="#0B0B0D" opacity=".55" />
      <ellipse cx="200" cy="210" rx="128" ry="32" fill="#17171B" />
      <ellipse cx="200" cy="210" rx="128" ry="32" fill="url(#plate)" />
      <ellipse cx="200" cy="208" rx="104" ry="24" fill="#FFFBF4" opacity=".08" />

      {(art === 'wings' || art === 'spicy' || art === 'tenders') && (
        <g>
          <Drumstick x={150} y={120} s={1.15} r={-24} hot={art === 'spicy'} />
          <Drumstick x={215} y={105} s={1.3} r={8} hot={art === 'spicy'} />
          <Drumstick x={268} y={130} s={1.05} r={32} hot={art === 'tenders'} />
          {art === 'spicy' && (
            <g fill="#FFD166">
              <path d="M120 60c4 8 12 10 14 20M150 48c3 7 10 9 12 17" stroke="#FFD166" strokeWidth="4" strokeLinecap="round" />
              <text x="250" y="60" fontSize="30">🌶️</text>
            </g>
          )}
          <ellipse cx="200" cy={art === 'tenders' ? 168 : 172} rx="46" ry="20" fill="#FFFBF4" />
          <ellipse cx="200" cy={art === 'tenders' ? 165 : 169} rx="40" ry="16" fill={art === 'spicy' ? '#C22A12' : '#E8B44A'} />
          <text x="200" y={art === 'tenders' ? 172 : 176} textAnchor="middle" fontSize="13" fontWeight="800" fill="#0B0B0D">صلصة أفولوس</text>
        </g>
      )}

      {(art === 'burger' || art === 'doubleburger') && (
        <g>
          <ellipse cx="200" cy="225" rx="95" ry="14" fill="#000" opacity=".4" />
          <rect x="115" y="196" width="170" height="20" rx="10" fill="#E8B44A" />
          <rect x="125" y="182" width="150" height="16" rx="8" fill="#7CB342" />
          <rect x="120" y="172" width="160" height="12" rx="6" fill="#C22A12" />
          {art === 'doubleburger' && <rect x="122" y="150" width="156" height="24" rx="12" fill="#D94F1E" />}
          <rect x="122" y={art === 'doubleburger' ? 128 : 148} width="156" height="26" rx="13" fill="#D94F1E" />
          <rect x="122" y={art === 'doubleburger' ? 128 : 148} width="156" height="10" rx="5" fill="#F0854A" opacity=".8" />
          <path d="M115 148 C115 100 150 84 200 84 C250 84 285 100 285 148 Z" fill="#F3C26B" />
          <g fill="#FFF3D6">
            <ellipse cx="165" cy="112" rx="7" ry="4" /><ellipse cx="200" cy="104" rx="7" ry="4" />
            <ellipse cx="235" cy="114" rx="7" ry="4" /><ellipse cx="185" cy="126" rx="6" ry="3.4" /><ellipse cx="220" cy="128" rx="6" ry="3.4" />
          </g>
          <rect x="130" y="188" width="140" height="8" rx="4" fill="#FFE9B8" />
        </g>
      )}

      {(art === 'box' || art === 'familybox') && (
        <g>
          <rect x={art === 'familybox' ? 80 : 105} y="120" width={art === 'familybox' ? 240 : 190} height="90" rx="14" fill="#101014" stroke="#E8B44A" strokeWidth="3" />
          <rect x={art === 'familybox' ? 80 : 105} y="120" width={art === 'familybox' ? 240 : 190} height="26" rx="13" fill="#E8B44A" />
          <text x="200" y="139" textAnchor="middle" fontSize="16" fontWeight="900" fill="#0B0B0D" fontFamily="Cairo">AFOULLOUS</text>
          <Drumstick x={150} y={110} s={0.9} r={-20} />
          <Drumstick x={205} y={100} s={1} r={10} />
          <Drumstick x={255} y={112} s={0.9} r={30} />
          <rect x="130" y="176" width="52" height="22" rx="6" fill="#F43F1E" />
          <rect x="218" y="176" width="52" height="22" rx="6" fill="#E8B44A" />
        </g>
      )}

      {(art === 'fries' || art === 'friesclassic') && (
        <g>
          <g fill="#F5C04A" stroke="#B3541E" strokeWidth="1.5">
            {[-48, -30, -12, 6, 24, 42].map((dx, i) => (
              <rect key={i} x={200 + dx - 9} y={86 + (i % 3) * 10} width="18" height={74 - (i % 3) * 8} rx="6" />
            ))}
          </g>
          {art === 'fries' && (
            <g>
              <circle cx="170" cy="120" r="13" fill="#D94F1E" /><circle cx="205" cy="112" r="15" fill="#C22A12" /><circle cx="238" cy="122" r="12" fill="#D94F1E" />
              <path d="M160 108 q30 -14 90 -6" stroke="#FFE9B8" strokeWidth="6" strokeLinecap="round" fill="none" />
            </g>
          )}
          <path d="M132 160 h136 l-14 62 a12 12 0 0 1 -12 10 h-84 a12 12 0 0 1 -12 -10 Z" fill="#C22A12" />
          <path d="M132 160 h136 v14 h-136 Z" fill="#0B0B0D" opacity=".25" />
          <text x="200" y="205" textAnchor="middle" fontSize="20" fontWeight="900" fill="#FFFBF4" fontFamily="Cairo">أفولوس</text>
        </g>
      )}

      {(art === 'sauce' || art === 'saucespicy') && (
        <g>
          <ellipse cx="200" cy="232" rx="70" ry="12" fill="#000" opacity=".4" />
          <rect x="160" y="110" width="80" height="110" rx="16" fill="#FFFBF4" />
          <rect x="160" y="150" width="80" height="70" rx="12" fill={art === 'saucespicy' ? '#C22A12' : '#E8B44A'} />
          <rect x="172" y="92" width="56" height="26" rx="8" fill="#0B0B0D" />
          <text x="200" y="190" textAnchor="middle" fontSize="15" fontWeight="900" fill="#0B0B0D">أفولوس</text>
        </g>
      )}

      {(art === 'drink' || art === 'mojito') && (
        <g>
          <ellipse cx="200" cy="234" rx="56" ry="10" fill="#000" opacity=".4" />
          <path d="M168 100 h64 l-8 124 a12 12 0 0 1 -12 10 h-24 a12 12 0 0 1 -12 -10 Z" fill={art === 'mojito' ? '#D8F5E4' : '#C81E1E'} opacity=".92" />
          <path d="M168 100 h64 l-2 26 h-60 Z" fill="#fff" opacity=".5" />
          <rect x="188" y="66" width="8" height="44" rx="4" fill="#F43F1E" transform="rotate(12 192 88)" />
          {art === 'mojito' && (<g fill="#15803D"><ellipse cx="182" cy="180" rx="10" ry="6" /><ellipse cx="214" cy="200" rx="10" ry="6" /></g>)}
          <text x="200" y="180" textAnchor="middle" fontSize="17" fontWeight="900" fill="#fff">AFOULLOUS</text>
        </g>
      )}

      {/* توهج علوي */}
      <rect width="400" height="300" fill="black" opacity="0" />
    </svg>
  )
}
