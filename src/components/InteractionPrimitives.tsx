import type { ButtonHTMLAttributes, ReactNode } from 'react'
import type { Tone } from './Observatory'
import './interaction-primitives.css'

export function ActionRail({ actions }: { actions: Array<{ id: string; label: string; icon?: ReactNode; tone?: Tone; active?: boolean; onClick?: () => void }> }) {
  return <div className="mw-action-rail">{actions.map(action => <button key={action.id} type="button" onClick={action.onClick} className={`mw-tone-${action.tone || 'neutral'} ${action.active ? 'is-active' : ''}`}><span>{action.icon || '◇'}</span><strong>{action.label}</strong></button>)}</div>
}

export function InstrumentButton({ tone = 'neutral', variant = 'primary', children, className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { tone?: Tone; variant?: 'primary'|'secondary'|'ghost' }) {
  return <button {...props} className={`mw-instrument-button mw-tone-${tone} is-${variant} ${className}`.trim()}>{children}</button>
}

export function StatusMatrix({ items }: { items: Array<{ label: string; value: ReactNode; tone?: Tone; detail?: string }> }) {
  return <div className="mw-status-matrix">{items.map(item => <div key={item.label} className={`mw-status-cell mw-tone-${item.tone || 'neutral'}`}><span>{item.label}</span><strong>{item.value}</strong>{item.detail ? <small>{item.detail}</small> : null}<i/></div>)}</div>
}

export function SegmentedRail({ items, value, onChange }: { items: Array<{ id: string; label: string; count?: ReactNode }>; value?: string; onChange?: (id: string) => void }) {
  return <div className="mw-segmented-rail">{items.map(item => <button key={item.id} type="button" className={item.id === value ? 'is-active' : ''} onClick={() => onChange?.(item.id)}><span>{item.label}</span>{item.count !== undefined ? <b>{item.count}</b> : null}</button>)}</div>
}

export function FilterDock({ children, label = 'FILTER DOCK', actions }: { children: ReactNode; label?: string; actions?: ReactNode }) {
  return <section className="mw-filter-dock"><header><span>{label}</span>{actions}</header><div>{children}</div></section>
}

export function ProgressRail({ value, label, detail, tone = 'active' }: { value: number; label: string; detail?: string; tone?: Tone }) {
  const safe = Math.max(0, Math.min(100, Number(value) || 0))
  return <div className={`mw-progress-rail mw-tone-${tone}`}><div><span>{label}</span><strong>{safe}%</strong></div><div className="mw-progress-track"><i style={{width:`${safe}%`}}/></div>{detail ? <small>{detail}</small> : null}</div>
}

export function LoadingOrbit({ label = 'Synchronizing instrument…' }: { label?: ReactNode }) {
  return <div className="mw-loading-orbit" role="status"><div><i/><i/><i/><span>◈</span></div><strong>{label}</strong></div>
}

export function EmptySignal({ title = 'No signal', detail, action }: { title?: ReactNode; detail?: ReactNode; action?: ReactNode }) {
  return <div className="mw-empty-signal"><div className="mw-empty-glyph">◇</div><strong>{title}</strong>{detail ? <p>{detail}</p> : null}{action ? <div>{action}</div> : null}</div>
}

export function InspectorRows({ rows }: { rows: Array<{ label: ReactNode; value: ReactNode; tone?: Tone }> }) {
  return <div className="mw-inspector-rows">{rows.map((row,index)=><div key={index} className={`mw-tone-${row.tone || 'neutral'}`}><span>{row.label}</span><strong>{row.value}</strong></div>)}</div>
}
