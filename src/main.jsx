import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.jsx'

// ✅ Google Analytics Code START
const script1 = document.createElement("script");
script1.async = true;
script1.src = "https://www.googletagmanager.com/gtag/js?id=G-GF2V3VYMM9";
document.head.appendChild(script1);

const script2 = document.createElement("script");
script2.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-GF2V3VYMM9');
`;
document.head.appendChild(script2);
// ✅ Google Analytics Code END

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)