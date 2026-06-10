import { ImageResponse } from 'next/og'
import { getProject } from '@/content/projects'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)
  const name = project?.name ?? 'Ricardo Ramirez'
  const tagline = project?.tagline ?? 'Senior Frontend Developer'

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
          RICARDO RAMIREZ · CASE STUDY
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, marginTop: 16 }}>{name}</div>
        <div style={{ fontSize: 30, color: '#d4d4d8', marginTop: 12, maxWidth: 980 }}>
          {tagline}
        </div>
      </div>
    ),
    size
  )
}
