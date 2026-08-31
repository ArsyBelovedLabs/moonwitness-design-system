import type { ReactNode } from 'react'
import './page-primitives.css'
import type { Tone } from './Observatory'

export function InstrumentHeader({ code, title, subtitle, status, actions }: { code: string; title: ReactNode; subtitle?: ReactNode; status?: ReactNode; actions?: ReactNode }) {
  return <header className="mw-instrument-header">
    <div className="mw-instrument-heading"><span>{code}</span><h1>{title}</h1>{subtitle ? <p>{subtitle}</p> : null}</div>
    <div className="mw-instrument-header__aside">{status}{actions}</div>
  </header>
}

export function ArchiveGate({ label = 'ARCHIVE GATE', placeholder = 'Search evidence, signal, source…', value = '', onChange, trailing }: { label?: string; placeholder?: string; value?: string; onChange?: (value: string) => void; trailing?: ReactNode }) {
  return <div className="mw-archive-gate">
    <span className="mw-archive-gate__label">{label}</span>
    <div className="mw-archive-gate__field"><span aria-hidden="true">⌁</span><input aria-label={label} value={value} placeholder={placeholder} onChange={event => onChange?.(event.target.value)} />{trailing}</div>
  </div>
}

export type MetricRailItem = { label: string; value: ReactNode; detail?: ReactNode; tone?: Tone }
export function MetricRail({ items }: { items: MetricRailItem[] }) {
  return <div className="mw-metric-rail">{items.map((item, index) => <div key={`${item.label}-${index}`} className={`mw-metric-rail__item mw-tone-${item.tone || 'neutral'}`}>
    <span>{item.label}</span><strong>{item.value}</strong>{item.detail ? <small>{item.detail}</small> : null}<i aria-hidden="true" />
  </div>)}</div>
}

export type ChronologyPoint = { id: string; label: string; date?: string; detail?: string; tone?: Tone; active?: boolean }
export function ChronologyTrack({ points }: { points: ChronologyPoint[] }) {
  return <div className="mw-chronology-track"><div className="mw-chronology-track__line" aria-hidden="true" />{points.map((point, index) => <article key={point.id} className={`mw-chronology-point mw-tone-${point.tone || 'neutral'} ${point.active ? 'is-active' : ''}`}>
    <i aria-hidden="true" /><span>{String(index + 1).padStart(2, '0')}</span><strong>{point.label}</strong>{point.date ? <time>{point.date}</time> : null}{point.detail ? <small>{point.detail}</small> : null}
  </article>)}</div>
}

export type RevelationLensItem = { key: string; name: string; reference?: string; focus?: string; tone?: Tone }
export function RevelationLens({ items }: { items: RevelationLensItem[] }) {
  return <div className="mw-revelation-lens">{items.map(item => <article key={item.key} className={`mw-revelation-lens__item mw-tone-${item.tone || 'neutral'}`}>
    <div className="mw-revelation-lens__orb"><span>{item.key}</span></div><div><strong>{item.name}</strong>{item.reference ? <small>{item.reference}</small> : null}{item.focus ? <p>{item.focus}</p> : null}</div>
  </article>)}</div>
}

export function InspectorDock({ title = 'INSPECTOR', eyebrow, children, footer }: { title?: ReactNode; eyebrow?: ReactNode; children: ReactNode; footer?: ReactNode }) {
  return <aside className="mw-inspector-dock"><header>{eyebrow ? <span>{eyebrow}</span> : null}<strong>{title}</strong></header><div className="mw-inspector-dock__body">{children}</div>{footer ? <footer>{footer}</footer> : null}</aside>
}

export function InstrumentGrid({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mw-instrument-grid ${className}`.trim()}>{children}</div>
}
