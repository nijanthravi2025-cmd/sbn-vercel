import { useState, Suspense, lazy } from 'react';
import { useAdmin } from '../context/AdminContext';
import '../styles/Welcome.css';

const World = lazy(() => import('./ui/globe').then(m => ({ default: m.World })));

const globeConfig = {
  pointSize: 4,
  globeColor: "#ffffff",
  showAtmosphere: true,
  atmosphereColor: "#d1d5db",
  atmosphereAltitude: 0.1,
  emissive: "#ffffff",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "#4b5563", // Dark gray to make continents pop against white globe
  ambientLight: "#ffffff",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 20.5937, lng: 78.9629 }, // Focus on India
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
const sampleArcs = [
  { order: 1, startLat: 28.6139, startLng: 77.209, endLat: 3.139, endLng: 101.6869, arcAlt: 0.2, color: colors[1] },
  { order: 1, startLat: 28.6139, startLng: 77.209, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[0] },
  { order: 2, startLat: 28.6139, startLng: 77.209, endLat: 40.7128, endLng: -74.006, arcAlt: 0.5, color: colors[2] },
  { order: 2, startLat: 1.3521, startLng: 103.8198, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.2, color: colors[1] },
  { order: 3, startLat: -33.8688, startLng: 151.2093, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3, color: colors[0] }
];

export default function Welcome() {
  const { siteData } = useAdmin();
  const { title, description, features, statsNumber, statsText, image } = siteData.welcomeData;

  return (
    <section className="welcome split-section">
      <div className="container split-container">
        <div className="split-left welcome-text">
          <h2 className="text-gradient">
            {title}
          </h2>
          <p>
            {description}
          </p>
          <ul className="feature-list">
            {features.map((item, index) => (
              <li key={index}>
                <span className="check-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="split-right welcome-image">
          <div className="image-wrapper globe-wrapper">
            <div className="globe-container">
              <Suspense fallback={<div className="globe-loader">Loading Globe...</div>}>
                <World data={sampleArcs} globeConfig={globeConfig} />
              </Suspense>
            </div>
            <div className="stats-badge globe-stats">
              <span className="number">
                {statsNumber}
              </span>
              <span className="badge-text">
                {statsText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
