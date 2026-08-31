import type { CSSProperties, ReactNode } from 'react'
import type { Tone } from './Observatory'
import './data-viz-primitives.css'

export function TruthAperture({ score, label = 'TRUTH APERTURE', detail, tone = 'active' }: { score: number; label?: ReactNode; detail?: ReactNode; tone?: Tone }) {
  const safe = Math.max(0, Math.min(100, Number(score) || 0))
  return <div className={`mw-truth-aperture mw-tone-${tone}`} style={{ '--mw-aperture': safe } as CSSProperties}>
    <div className="mw-truth-aperture__rings" aria-hidden="true"><i/><i/><i/><i/></div>
    <div className="mw-truth-aperture__center"><span>{label}</span><strong>{safe}</strong><small>/100</small>{detail ? <em>{detail}</em> : null}</div>
    <div className="mw-truth-aperture__ticks" aria-hidden="true" />
  </div>
}

export type LatticeNode = { id: string; x: number; y: number; label: string; value?: ReactNode; tone?: Tone }
export type LatticeEdge = { from: string; to: string; strength?: number; dashed?: boolean }
export function CausalityLattice({ nodes, edges = [] }: { nodes: LatticeNode[]; edges?: LatticeEdge[] }) {
  const byId = new Map(nodes.map(node => [node.id, node]))
  return <div className="mw-causality-lattice">
    <svg className="mw-causality-lattice__edges" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">{edges.map((edge,index) => {
      const a = byId.get(edge.from), b = byId.get(edge.to); if (!a || !b) return null
      return <line key={`${edge.from}-${edge.to}-${index}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} style={{ opacity: Math.max(.15, Math.min(1, edge.strength ?? .5)) }} className={edge.dashed ? 'is-dashed' : ''}/>
    })}</svg>
    <div className="mw-causality-lattice__grid" aria-hidden="true" />
    {nodes.map(node => <div key={node.id} className={`mw-lattice-node mw-tone-${node.tone || 'neutral'}`} style={{left:`${node.x}%`,top:`${node.y}%`}}><i/><span>{node.label}</span>{node.value !== undefined ? <strong>{node.value}</strong> : null}</div>)}
  </div>
}

export function SignalWave({ values, label = 'SIGNAL WAVE', tone = 'active', detail }: { values: number[]; label?: ReactNode; tone?: Tone; detail?: ReactNode }) {
  const data = values.length ? values : [0]
  const min = Math.min(...data), max = Math.max(...data), span = Math.max(1, max - min)
  const points = data.map((value,index) => `${(index / Math.max(1,data.length - 1))*100},${30 - ((value-min)/span)*26}`).join(' ')
  return <div className={`mw-signal-wave mw-tone-${tone}`}><header><span>{label}</span>{detail ? <small>{detail}</small> : null}</header><svg viewBox="0 0 100 32" preserveAspectRatio="none" role="img" aria-label="signal waveform"><polyline points={points}/></svg><div className="mw-signal-wave__baseline"/></div>
}

export function StateVector({ title = 'STATE VECTOR', items }: { title?: ReactNode; items: Array<{ label: string; value: number; tone?: Tone }> }) {
  return <div className="mw-state-vector"><header>{title}</header><div>{items.map(item => { const safe=Math.max(0,Math.min(100,item.value)); return <section key={item.label} className={`mw-tone-${item.tone || 'neutral'}`}><span>{item.label}</span><div><i style={{width:`${safe}%`}}/></div><strong>{safe}</strong></section>})}</div></div>
}

export function EventPulse({ label, value, tone = 'active', detail }: { label: ReactNode; value: ReactNode; tone?: Tone; detail?: ReactNode }) {
  return <div className={`mw-event-pulse mw-tone-${tone}`}><div className="mw-event-pulse__glyph"><i/><i/><span>◆</span></div><div><span>{label}</span><strong>{value}</strong>{detail ? <small>{detail}</small> : null}</div></div>
}
