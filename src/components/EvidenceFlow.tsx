import type { ReactNode } from 'react'
import type { Tone } from './Observatory'
import './evidence-flow.css'

export type WitnessStep = { id: string; label: string; detail?: ReactNode; tone?: Tone; state?: 'idle'|'active'|'complete' }
export function WitnessThread({ steps }: { steps: WitnessStep[] }) {
  return <div className="mw-witness-thread">{steps.map((step,index)=><div className={`mw-witness-step mw-tone-${step.tone || 'neutral'} is-${step.state || 'idle'}`} key={step.id}><div className="mw-witness-node"><span>{String(index+1).padStart(2,'0')}</span><i/></div><div><strong>{step.label}</strong>{step.detail ? <small>{step.detail}</small> : null}</div>{index < steps.length-1 ? <b aria-hidden="true">→</b> : null}</div>)}</div>
}

export type ProvenanceItem = { id: string; type: string; title: string; meta?: string; tone?: Tone; verified?: boolean }
export function ProvenanceRail({ items }: { items: ProvenanceItem[] }) {
  return <div className="mw-provenance-rail">{items.map(item=><article key={item.id} className={`mw-provenance-item mw-tone-${item.tone || 'neutral'}`}><span>{item.id}</span><div><small>{item.type}</small><strong>{item.title}</strong>{item.meta ? <em>{item.meta}</em> : null}</div><i className={item.verified ? 'is-verified' : ''}>{item.verified ? '✓' : '•'}</i></article>)}</div>
}

export function SourceSeal({ type, label, score, tone = 'active' }: { type: ReactNode; label: ReactNode; score?: ReactNode; tone?: Tone }) {
  return <div className={`mw-source-seal mw-tone-${tone}`}><div className="mw-source-seal__glyph"><i/><span>◇</span></div><div><small>{type}</small><strong>{label}</strong>{score !== undefined ? <em>{score}</em> : null}</div></div>
}

export function EvidenceRules({ title = 'EVIDENCE RULES', rows }: { title?: ReactNode; rows: Array<{ label: ReactNode; value: ReactNode; tone?: Tone }> }) {
  return <section className="mw-evidence-rules"><header>{title}</header><div>{rows.map((row,index)=><div key={index} className={`mw-tone-${row.tone || 'neutral'}`}><span>{row.label}</span><strong>{row.value}</strong></div>)}</div></section>
}
