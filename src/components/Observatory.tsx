import type { CSSProperties, HTMLAttributes, ReactNode } from 'react'

export type Tone = 'neutral' | 'active' | 'success' | 'warning' | 'danger'

export function SignalBeacon({ label, tone = 'active' }: { label: ReactNode; tone?: Tone }) {
  return <span className={`mw-signal-beacon mw-tone-${tone}`}><i aria-hidden="true" />{label}</span>
}

export type MissionItem = { id: string; label: string; meta?: string }
export function MissionRail({ items, activeId, onSelect }: { items: MissionItem[]; activeId?: string; onSelect?: (id: string) => void }) {
  return <nav className="mw-mission-rail" aria-label="Mission navigation">
    <div className="mw-rail-kicker">MISSION RAIL</div>
    {items.map((item, index) => <button key={item.id} type="button" className={item.id === activeId ? 'is-active' : ''} onClick={() => onSelect?.(item.id)}>
      <span className="mw-rail-index">{String(index + 1).padStart(2, '0')}</span>
      <span className="mw-rail-label">{item.label}</span>
      {item.meta ? <small>{item.meta}</small> : null}
    </button>)}
  </nav>
}

export type OrbitalNode = { id: string; label: string; value?: ReactNode; tone?: Tone }
export function OrbitalCore({ title = 'CORE', subtitle, nodes, activeId }: { title?: string; subtitle?: string; nodes: OrbitalNode[]; activeId?: string }) {
  return <div className="mw-orbital-core">
    <div className="mw-orbital-grid" aria-hidden="true" />
    <div className="mw-orbit mw-orbit--outer" aria-hidden="true" />
    <div className="mw-orbit mw-orbit--middle" aria-hidden="true" />
    <div className="mw-orbit mw-orbit--inner" aria-hidden="true" />
    <div className="mw-core-center"><strong>{title}</strong>{subtitle ? <small>{subtitle}</small> : null}</div>
    {nodes.map((node, index) => {
      const angle = (360 / Math.max(nodes.length, 1)) * index - 90
      return <div key={node.id} className={`mw-orbit-node mw-tone-${node.tone || 'neutral'} ${node.id === activeId ? 'is-active' : ''}`} style={{ '--mw-angle': `${angle}deg` } as CSSProperties}>
        <i aria-hidden="true" /><span>{node.label}</span>{node.value !== undefined ? <b>{node.value}</b> : null}
      </div>
    })}
  </div>
}

export type EvidenceStep = { label: string; detail?: string; state?: 'idle' | 'active' | 'complete' | 'blocked' }
export function EvidenceSpine({ steps }: { steps: EvidenceStep[] }) {
  return <div className="mw-evidence-spine">
    <div className="mw-spine-title">EVIDENCE SPINE</div>
    {steps.map((step, index) => <div className={`mw-spine-step is-${step.state || 'idle'}`} key={`${step.label}-${index}`}>
      <i aria-hidden="true" /><div><strong>{step.label}</strong>{step.detail ? <small>{step.detail}</small> : null}</div>
    </div>)}
  </div>
}

export function TemporalOrrery({ points, activeIndex = -1 }: { points: Array<{ label: string; detail?: string }>; activeIndex?: number }) {
  return <div className="mw-temporal-orrery">
    <div className="mw-orrery-line" aria-hidden="true" />
    {points.map((point, index) => <div key={`${point.label}-${index}`} className={`mw-orrery-point ${index === activeIndex ? 'is-active' : ''}`}>
      <i aria-hidden="true" /><span>{point.label}</span>{point.detail ? <small>{point.detail}</small> : null}
    </div>)}
  </div>
}

export function CausalityGuardrail({ children = 'Temporal/geographic proximity does not establish causation.' }: { children?: ReactNode }) {
  return <div className="mw-causality-guardrail"><span>CAUSALITY GUARDRAIL</span><strong>{children}</strong></div>
}

export function ObservationShard({ eyebrow, title, meta, children, tone = 'neutral', className = '', ...props }: HTMLAttributes<HTMLElement> & { eyebrow?: string; title: ReactNode; meta?: ReactNode; children?: ReactNode; tone?: Tone }) {
  return <article {...props} className={`mw-observation-shard mw-tone-${tone} ${className}`.trim()}>
    <div className="mw-shard-notch" aria-hidden="true" />
    {eyebrow ? <small className="mw-shard-eyebrow">{eyebrow}</small> : null}
    <h3>{title}</h3>
    {meta ? <div className="mw-shard-meta">{meta}</div> : null}
    {children ? <div className="mw-shard-body">{children}</div> : null}
  </article>
}

export function ReliabilityPrism({ score, label = 'SOURCE RELIABILITY' }: { score: number; label?: string }) {
  const clamped = Math.max(0, Math.min(100, Number(score) || 0))
  return <div className="mw-reliability-prism" style={{ '--mw-score': clamped } as CSSProperties}>
    <div className="mw-prism-face"><span>{label}</span><strong>{clamped}</strong><small>/100</small></div>
    <div className="mw-prism-meter"><i /></div>
  </div>
}

export type MapPoint = { id: string; x: number; y: number; label?: string; tone?: Tone; size?: number }
export function MapRift({ title = 'GEO OBSERVATORY', points = [], children }: { title?: string; points?: MapPoint[]; children?: ReactNode }) {
  return <div className="mw-map-rift">
    <div className="mw-map-rift__header"><span>{title}</span><b>LIVE LAYER</b></div>
    <div className="mw-map-rift__surface">
      <div className="mw-map-grid" aria-hidden="true" />
      {points.map(point => <span key={point.id} className={`mw-map-point mw-tone-${point.tone || 'active'}`} style={{ left: `${point.x}%`, top: `${point.y}%`, width: point.size || 12, height: point.size || 12 }} title={point.label} />)}
      {children}
    </div>
  </div>
}

export function CommandDeck({ rail, core, spine, strip, header, className = '' }: { rail: ReactNode; core: ReactNode; spine: ReactNode; strip?: ReactNode; header?: ReactNode; className?: string }) {
  return <section className={`mw-command-deck ${className}`.trim()}>
    {header ? <header className="mw-command-deck__header">{header}</header> : null}
    <div className="mw-command-deck__rail">{rail}</div>
    <div className="mw-command-deck__core">{core}</div>
    <div className="mw-command-deck__spine">{spine}</div>
    {strip ? <div className="mw-command-deck__strip">{strip}</div> : null}
  </section>
}
