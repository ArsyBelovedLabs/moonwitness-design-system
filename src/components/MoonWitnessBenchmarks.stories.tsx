import type { Meta, StoryObj } from '@storybook/react-vite'
import { ApplicationShell } from './ApplicationShell'
import { MoonWitnessProvider } from './MoonWitnessProvider'
import { CausalityGuardrail, CommandDeck, EvidenceSpine, MapRift, MissionRail, ObservationShard, OrbitalCore, ReliabilityPrism, SignalBeacon, TemporalOrrery } from './Observatory'
import { ArchiveGate, ChronologyTrack, InspectorDock, InstrumentGrid, InstrumentHeader, MetricRail, RevelationLens } from './PagePrimitives'
import { CausalityLattice, EventPulse, SignalWave, StateVector, TruthAperture } from './DataVizPrimitives'
import { EvidenceRules, ProvenanceRail, SourceSeal, WitnessThread } from './EvidenceFlow'
import { ActionRail, InspectorRows, StatusMatrix } from './InteractionPrimitives'

const meta = {
  title: 'MoonWitness/Benchmark Screens',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Five individually inspectable golden screens calibrated against the curated reference plates in docs/showcase. The plates are visual direction only; the stories remain executable compositions of shared primitives.',
      },
    },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

type BenchmarkScreen = 'command' | 'evidence' | 'geo' | 'revelation'
const referenceFiles: Record<BenchmarkScreen, string> = {
  command: '02_command_center.png',
  evidence: '04_evidence_ledger.png',
  geo: '06_disaster_map.png',
  revelation: '05_chronology_track.png',
}

const page = (screen: BenchmarkScreen, children: React.ReactNode, theme: 'myth-fade'|'cyan'|'amber'|'emerald' = 'myth-fade') => (
  <MoonWitnessProvider theme={theme}>
    <ApplicationShell
      label="MOONWITNESS"
      eyebrow="CINEMATIC OBSERVATORY INSTRUMENT"
      status="REPOSITORY / GROUNDED"
      statusTone="success"
      topRail={<span style={{fontFamily:'ui-monospace,monospace',fontSize:9,letterSpacing:'.14em',color:'var(--mw-text-muted)'}}>OBSERVE · VERIFY · CLARIFY · ARCHIVE</span>}
    >
      <div className={`mw-page-stage mw-benchmark-stage mw-benchmark-stage--${screen}`}>
        <div className="mw-benchmark-stage__calibration" aria-label="Benchmark calibration">
          <span>GOLDEN FRAME / {screen.toUpperCase()} / 16:9 INSTRUMENT</span>
          <a href={`/showcase/${referenceFiles[screen]}`} target="_blank" rel="noreferrer">OPEN REFERENCE PLATE / {referenceFiles[screen]}</a>
        </div>
        {children}
      </div>
    </ApplicationShell>
  </MoonWitnessProvider>
)

const metrics = [
  { label:'OBSERVATIONS', value:'17', detail:'August 2026', tone:'active' as const },
  { label:'EVIDENCE', value:'15', detail:'linked sources', tone:'success' as const },
  { label:'REVIEW ISSUES', value:'12', detail:'practice-level', tone:'warning' as const },
  { label:'CAUSAL PROOF', value:'0–15', detail:'/100', tone:'neutral' as const },
]

export const CommandCenterBenchmark: Story = { render: () => page('command', <>
  <InstrumentHeader code="BENCHMARK / 01" title="Command Center" subtitle="One operational instrument: signal intake, evidence routing, chronology, map context and explicit causal guardrails." status={<SignalBeacon tone="success" label="SYSTEM / ONLINE"/>}/>
  <div className="mw-page-stage__body">
    <CommandDeck
      header={<div className="mw-benchmark-command-header"><span>COMMAND TIER / INTELLIGENCE ROUTING</span><ArchiveGate placeholder="Jump to evidence, source, map, review…" trailing={<span style={{fontSize:9,color:'var(--mw-accent-secondary)'}}>⌘ K</span>}/></div>}
      rail={<MissionRail activeId="evidence" items={[{id:'observe',label:'Observe',meta:'17 signals'},{id:'evidence',label:'Evidence',meta:'15 sources'},{id:'review',label:'Review',meta:'12 issues'},{id:'correlate',label:'Correlate',meta:'ΔT + km'},{id:'map',label:'Map',meta:'geo context'},{id:'archive',label:'Archive',meta:'bounded findings'}]}/>} 
      core={<div style={{display:'grid',gap:14}}>
        <OrbitalCore title="CORE" subtitle="evidence machine" activeId="evidence" nodes={[{id:'signal',label:'SIGNAL',value:'17'},{id:'evidence',label:'EVIDENCE',value:'15',tone:'active'},{id:'review',label:'REVIEW',value:'12',tone:'warning'},{id:'map',label:'MAP',value:'GEO'},{id:'time',label:'TIME',value:'ΔT'}]}/>
        <MetricRail items={metrics}/>
        <SignalWave label="LIVE SIGNAL INTAKE" detail="bounded observation stream" values={[3,5,4,8,5,7,6,9,7,8,6,10]}/>
      </div>}
      spine={<div style={{display:'grid',gap:14}}><EvidenceSpine steps={[{label:'CLAIM',detail:'captured',state:'complete'},{label:'SOURCE',detail:'linked',state:'complete'},{label:'CORROBORATE',detail:'cross-check',state:'complete'},{label:'REVIEW',detail:'active',state:'active'},{label:'ARCHIVE',detail:'bounded'}]}/><StatusMatrix items={[{label:'TRUST SCORE',value:'87%',detail:'calibrated',tone:'active'},{label:'LIVE INGEST',value:'98.7%',detail:'stream stable',tone:'success'},{label:'ALERTS',value:'23',detail:'requires review',tone:'warning'}]}/></div>}
      strip={<div style={{display:'grid',gap:12}}><TemporalOrrery activeIndex={4} points={['T-4','T-3','T-2','T-1','T0','T+1','T+2'].map(label=>({label}))}/><CausalityGuardrail/><ActionRail actions={[{id:'observe',label:'Observe',active:true,tone:'active'},{id:'verify',label:'Verify',tone:'success'},{id:'archive',label:'Archive'}]}/></div>}
    />
  </div>
</>) }

export const EvidenceCathedralBenchmark: Story = { render: () => page('evidence', <>
  <InstrumentHeader code="BENCHMARK / 02" title="Evidence Cathedral" subtitle="Source identity, claim scope, provenance and confidence stay independently inspectable." actions={<ArchiveGate label="EVIDENCE GATE" placeholder="Search source, publisher, record…"/>}/>
  <div className="mw-page-stage__body">
    <MetricRail items={metrics}/>
    <InstrumentGrid>
      <div className="span-4"><WitnessThread steps={[{id:'1',label:'SOURCE',detail:'identified',state:'complete',tone:'success'},{id:'2',label:'CLAIM',detail:'scoped',state:'complete'},{id:'3',label:'MATCH',detail:'corroborated',state:'complete'},{id:'4',label:'REVIEW',detail:'bounded analysis',state:'active',tone:'active'},{id:'5',label:'ARCHIVE',detail:'recorded'}]}/></div>
      <div className="span-5" style={{display:'grid',gap:14}}>
        <ObservationShard eyebrow="SOURCE / OFFICIAL" title="Primary evidence record" meta="publisher identified · scope bounded" tone="success">Evidence is stored with provenance and does not inherit claims from adjacent records.</ObservationShard>
        <ProvenanceRail items={[{id:'SRC-01',type:'OFFICIAL',title:'Primary reference',meta:'publisher + date',tone:'success',verified:true},{id:'SRC-02',type:'OBSERVATION',title:'Observation record',meta:'time + location',tone:'active',verified:true},{id:'SRC-03',type:'CONTEXT',title:'Media/context record',meta:'linked only',verified:false}]}/>
      </div>
      <div className="span-3"><InspectorDock eyebrow="SOURCE INTEGRITY" title="Reliability"><ReliabilityPrism score={92}/><div style={{height:14}}/><SourceSeal type="EVIDENCE CLASS" label="AUDITABLE" score="92/100" tone="success"/><div style={{height:14}}/><EvidenceRules rows={[{label:'Publisher',value:'identified',tone:'success'},{label:'Date',value:'resolved',tone:'success'},{label:'Claim scope',value:'bounded',tone:'active'},{label:'Causal carry-over',value:'none',tone:'warning'}]}/></InspectorDock></div>
      <div className="span-12"><CausalityGuardrail>Evidence proximity does not merge distinct claims or create causation.</CausalityGuardrail></div>
    </InstrumentGrid>
  </div>
</>) }

export const GeoIntelligenceBenchmark: Story = { render: () => page('geo', <>
  <InstrumentHeader code="BENCHMARK / 03" title="August 2026 — Disaster Map" subtitle="Disaster context and observation overlays share a map surface while causal interpretation remains a separate review field." status={<SignalBeacon tone="warning" label="NO CAUSAL ASSUMPTION"/>}/>
  <div className="mw-page-stage__body">
    <CausalityGuardrail>Proximity is a discovery measurement. It is not evidence of causation.</CausalityGuardrail>
    <InstrumentGrid>
      <div className="span-8"><MapRift title="DISASTER MAP / INDONESIA / AUGUST 2026" points={[{id:'a',x:23,y:43,tone:'danger',size:14},{id:'b',x:46,y:62,tone:'warning',size:11},{id:'c',x:69,y:55,tone:'danger',size:15},{id:'d',x:82,y:36,tone:'active',size:10}]}><div style={{position:'absolute',left:'8%',right:'8%',bottom:16,display:'flex',justifyContent:'space-between',fontFamily:'ui-monospace,monospace',fontSize:9,color:'var(--mw-text-muted)'}}><span>ΔT / TEMPORAL</span><span>HAVERSINE / km</span><span>CAUSAL FINDING / SEPARATE</span></div></MapRift></div>
      <div className="span-4"><InspectorDock eyebrow="MEASUREMENT" title="Context Register"><InspectorRows rows={[{label:'Temporal distance',value:'ΔT',tone:'active'},{label:'Geographic distance',value:'km',tone:'active'},{label:'Proximity score',value:'discovery',tone:'warning'},{label:'Causal verdict',value:'separate',tone:'success'}]}/><div style={{height:14}}/><StatusMatrix items={[{label:'GLOBAL ECLIPSES',value:'2',detail:'neither directly visible from Indonesia',tone:'warning'},{label:'OBSERVATIONS',value:'17',detail:'repository records',tone:'active'}]}/></InspectorDock></div>
      <div className="span-7 mw-page-surface"><h2>CAUSALITY LATTICE</h2><CausalityLattice nodes={[{id:'obs',x:12,y:28,label:'OBS',value:'17',tone:'active'},{id:'time',x:35,y:66,label:'ΔT',value:'time'},{id:'event',x:56,y:39,label:'EVENT',value:'context',tone:'warning'},{id:'distance',x:76,y:72,label:'DIST',value:'km'},{id:'review',x:88,y:22,label:'REVIEW',value:'0–15',tone:'success'}]} edges={[{from:'obs',to:'time',strength:.7},{from:'time',to:'event',strength:.55,dashed:true},{from:'event',to:'distance',strength:.6},{from:'distance',to:'review',strength:.45,dashed:true}]}/></div>
      <div className="span-5" style={{display:'grid',gap:14}}><SignalWave values={[2,5,3,7,4,8,5,9,6,4]} detail="observation intensity"/><StateVector items={[{label:'Temporal proximity',value:62,tone:'active'},{label:'Geographic proximity',value:48,tone:'warning'},{label:'Causal proof',value:15,tone:'success'}]}/></div>
    </InstrumentGrid>
  </div>
</>, 'amber') }

export const RevelationArchiveBenchmark: Story = { render: () => page('revelation', <>
  <InstrumentHeader code="BENCHMARK / 04" title="Four Revelation Lens" subtitle="Four textual portals remain visually and analytically distinct while sharing the same evidence-first interface language." status={<SignalBeacon tone="success" label="LENSES / SEPARATE"/>}/>
  <div className="mw-page-stage__body">
    <RevelationLens items={[{key:'Q',name:"Al-Qur'an",reference:'Qur’anic lens',focus:'Explicit reference and bounded comparison.',tone:'success'},{key:'I',name:'Injil / Gospel',reference:'Gospel lens',focus:'Complementary textual comparison.',tone:'active'},{key:'T',name:'Taurat / Torah',reference:'Torah lens',focus:'Complementary textual comparison.',tone:'warning'},{key:'Z',name:'Zabur / Psalms',reference:'Psalms lens',focus:'Complementary textual comparison.',tone:'neutral'}]}/>
    <InstrumentGrid>
      <div className="span-8 mw-page-surface"><h2>TEXTUAL WITNESS PATH</h2><ChronologyTrack points={[{id:'1',label:'REFERENCE',detail:'explicit source'},{id:'2',label:'CONTEXT',detail:'bounded scope'},{id:'3',label:'COMPARE',detail:'parallel / distinction',tone:'active'},{id:'4',label:'FINDING',detail:'evidence-bounded',tone:'success',active:true}]}/></div>
      <div className="span-4"><InspectorDock eyebrow="LENS CONTRACT" title="Comparison Rules"><EvidenceRules rows={[{label:'Lenses',value:'4 / separate',tone:'success'},{label:'References',value:'explicit',tone:'success'},{label:'Claims',value:'bounded',tone:'active'},{label:'Proximity',value:'not verdict',tone:'warning'}]}/><div style={{height:16}}/><EventPulse label="ARCHIVE STATE" value="AUDITABLE" detail="source-linked" tone="success"/></InspectorDock></div>
      <div className="span-12"><ActionRail actions={[{id:'observe',label:'Observe',active:true,tone:'active'},{id:'verify',label:'Verify',tone:'success'},{id:'clarify',label:'Clarify',tone:'warning'},{id:'archive',label:'Archive'}]}/></div>
    </InstrumentGrid>
  </div>
</>, 'emerald') }
