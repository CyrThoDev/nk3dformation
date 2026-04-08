export function WireframeSVG() {
  return (
    <svg width="300" height="230" viewBox="0 0 300 230" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#0A2D5C" strokeWidth="1.1" opacity="0.75">
        <polygon points="55,158 195,158 195,88 55,88" fill="#E8F0FA" fillOpacity="0.6" />
        <polygon points="55,88 105,48 245,48 195,88" fill="#E8F0FA" fillOpacity="0.4" />
        <polygon points="195,88 245,48 245,108 195,158" fill="#E8F0FA" fillOpacity="0.25" />
        <line x1="55" y1="88" x2="195" y2="88" strokeDasharray="5,4" opacity="0.4" />
        <line x1="195" y1="88" x2="245" y2="48" strokeDasharray="5,4" opacity="0.4" />
        <ellipse cx="125" cy="123" rx="26" ry="16" stroke="#E8762A" strokeWidth="1.3" />
        <ellipse cx="125" cy="123" rx="15" ry="9" stroke="#E8762A" strokeDasharray="3,3" opacity="0.5" strokeWidth="1" />
      </g>
      <g stroke="#1A4F8A" strokeWidth="0.7">
        <line x1="55" y1="173" x2="195" y2="173" />
        <line x1="55" y1="170" x2="55" y2="176" />
        <line x1="195" y1="170" x2="195" y2="176" />
        <text x="125" y="187" textAnchor="middle" fontSize="9" fill="#4A5568" fontFamily="monospace">140.00 mm</text>
      </g>
      {([[55,88],[195,88],[195,158],[55,158],[105,48],[245,48],[245,108]] as [number,number][]).map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="white" stroke="#E8762A" strokeWidth="1.1" />
      ))}
      <text x="248" y="44" fontSize="8" fill="#8A9AB0" fontFamily="'Barlow Condensed',sans-serif" letterSpacing="0.08em">CATIA V5 — Part Design</text>
    </svg>
  );
}