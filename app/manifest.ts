import type { MetadataRoute } from 'next';
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: '/', name: 'Sapienza Foiling Team · Workspace', short_name: 'SFT',
    description: 'Agenda, reparti e risorse del Sapienza Foiling Team',
    lang: 'it', start_url: '/', scope: '/', display: 'standalone',
    background_color: '#f5f5f7', theme_color: '#822433',
    icons: [
      { src: '/pwa/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/pwa/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/pwa/icon-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
