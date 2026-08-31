import type { HTMLAttributes, ReactNode } from 'react'
import '../styles/tokens.css'

export type InstrumentPanelProps = HTMLAttributes<HTMLElement> & {
  eyebrow?: string
  title: string
  status?: ReactNode
  children?: ReactNode
}

export function InstrumentPanel({ eyebrow, title, status, children, style, ...props }: InstrumentPanelProps) {
  return (
    <section
      {...props}
      style={{
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid color-mix(in srgb, var(--mw-accent-primary) 44%, #36404a)',
        borderRadius: 'var(--mw-radius-lg)',
        background: 'linear-gradient(145deg, var(--mw-surface-panel), var(--mw-surface-void))',
        boxShadow: 'var(--mw-shadow-instrument)',
        color: 'var(--mw-text-primary)',
        padding: 'var(--mw-space-8)',
        ...style,
      }}
    >
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(circle at 82% 12%, color-mix(in srgb, var(--mw-accent-primary) 18%, transparent), transparent 35%)' }} />
      <header style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr auto', gap: 'var(--mw-space-4)', alignItems: 'start' }}>
        <div>
          {eyebrow ? <div style={{ color: 'var(--mw-text-muted)', fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase' }}>{eyebrow}</div> : null}
          <h2 style={{ margin: '8px 0 0', fontSize: 28, lineHeight: 1.2 }}>{title}</h2>
        </div>
        {status}
      </header>
      <div style={{ position: 'relative', marginTop: 'var(--mw-space-6)' }}>{children}</div>
    </section>
  )
}
