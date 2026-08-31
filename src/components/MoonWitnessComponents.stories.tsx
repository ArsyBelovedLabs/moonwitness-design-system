import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { MoonWitnessProvider } from './MoonWitnessProvider'
import { ObservationShard, ReliabilityPrism, SignalBeacon } from './Observatory'
import { ActionRail, EmptySignal, FilterDock, InspectorRows, InstrumentButton, LoadingOrbit, ProgressRail, SegmentedRail, StatusMatrix } from './InteractionPrimitives'
import { ArchiveGate, InspectorDock, InstrumentHeader, MetricRail } from './PagePrimitives'

const meta = { title: 'MoonWitness/Component Lab', parameters: { layout: 'fullscreen' } } satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

function Lab() {
  const [segment,setSegment]=useState('all')
  const [search,setSearch]=useState('')
  return <MoonWitnessProvider theme="myth-fade"><div className="mw-page-stage">
    <InstrumentHeader code="COMPONENT LAB" title="MoonWitness Interaction Primitives" subtitle="Reusable states and mechanics for Command Center, Observatory, Evidence, Maps and future MoonWitness products." status={<SignalBeacon tone="success" label="STORYBOOK / LIVE"/>}/>
    <div className="mw-page-stage__body">
      <MetricRail items={[{label:'DEFAULT',value:'READY',detail:'base state'},{label:'FOCUS',value:'VISIBLE',detail:'keyboard'},{label:'MOTION',value:'SAFE',detail:'reduced-motion aware'},{label:'THEME',value:'TOKEN',detail:'no raw brand fork'}]}/>
      <section className="mw-page-surface"><h2>ACTIONS</h2><ActionRail actions={[{id:'new',label:'New Observation',tone:'active'},{id:'scan',label:'Scan Area'},{id:'verify',label:'Verify',tone:'success'},{id:'warning',label:'Review',tone:'warning'},{id:'danger',label:'Block',tone:'danger'}]}/><div style={{height:18}}/><div style={{display:'flex',gap:10,flexWrap:'wrap'}}><InstrumentButton tone="active">Primary</InstrumentButton><InstrumentButton tone="success" variant="secondary">Verified</InstrumentButton><InstrumentButton tone="warning" variant="secondary">Review</InstrumentButton><InstrumentButton tone="danger">Critical</InstrumentButton><InstrumentButton variant="ghost">Ghost</InstrumentButton><InstrumentButton disabled>Disabled</InstrumentButton></div></section>
      <section className="mw-page-surface"><h2>SEARCH + SEGMENTED RAIL</h2><ArchiveGate value={search} onChange={setSearch}/><div style={{height:14}}/><SegmentedRail value={segment} onChange={setSegment} items={[{id:'all',label:'ALL',count:15},{id:'verified',label:'VERIFIED',count:8},{id:'pending',label:'PENDING',count:4},{id:'anomalous',label:'ANOMALOUS',count:2},{id:'discarded',label:'DISCARDED',count:1}]}/></section>
      <section className="mw-page-surface"><h2>STATUS MATRIX</h2><StatusMatrix items={[{label:'SYSTEM',value:'100%',detail:'operational',tone:'success'},{label:'SIGNAL',value:'82%',detail:'strength',tone:'active'},{label:'NETWORK',value:'78%',detail:'nominal',tone:'warning'},{label:'THREATS',value:'05',detail:'critical',tone:'danger'},{label:'ARCHIVE',value:'SYNC',detail:'online',tone:'success'}]}/></section>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:16}}><FilterDock actions={<SignalBeacon label="ACTIVE"/>}>{<InspectorRows rows={[{label:'Period',value:'August 2026'},{label:'Scope',value:'Indonesia'},{label:'Dataset',value:'Repository'},{label:'Mode',value:'Evidence-first',tone:'success'}]}/>}</FilterDock><InspectorDock eyebrow="RELIABILITY" title="Source Profile"><ReliabilityPrism score={92}/><div style={{height:18}}/><ProgressRail label="CHAIN INTEGRITY" value={78} detail="corroboration state" tone="warning"/></InspectorDock><ObservationShard eyebrow="OBSERVATION SHARD" title="Asymmetric evidence object" tone="active">Use for high-value evidence or event focus instead of repeating generic cards.</ObservationShard></div>
    </div>
  </MoonWitnessProvider>
}
export const AllStates: Story = { render: () => <Lab/> }
export const Loading: Story = { render: () => <MoonWitnessProvider theme="cyan"><LoadingOrbit/></MoonWitnessProvider> }
export const Empty: Story = { render: () => <MoonWitnessProvider theme="neutral"><div className="mw-page-stage"><EmptySignal title="No candidate signals yet" detail="Discovery surfaces remain empty until source-backed candidates arrive." action={<InstrumentButton tone="active">Refresh Archive</InstrumentButton>}/></div></MoonWitnessProvider> }
