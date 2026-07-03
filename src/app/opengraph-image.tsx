import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 72,
          background: 'linear-gradient(135deg, #09090b 0%, #18181b 60%, #2e1065 130%)',
          color: '#fafafa',
          fontSize: 32,
        }}
      >
        <div style={{ fontSize: 26, color: '#a1a1aa', letterSpacing: 4 }}>
          RICARDORAMIREZ.DEV
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, marginTop: 16, maxWidth: 1000 }}>
          Frontend developer building fast, accessible interfaces
        </div>
        <div style={{ fontSize: 30, color: '#d4d4d8', marginTop: 14 }}>
          React · Next.js · TypeScript · TanStack — case studies with real metrics
        </div>
      </div>
    ),
    size
  )
}
