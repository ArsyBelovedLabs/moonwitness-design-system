import type { Meta, StoryObj } from '@storybook/react-vite'
import { MoonWitnessProvider } from './MoonWitnessProvider'
import { CausalityGuardrail, CommandDeck, EvidenceSpine, MapRift, MissionRail, ObservationShard, OrbitalCore, ReliabilityPrism, SignalBeacon, TemporalOrrery } from './Observatory'
import { ArchiveGate, ChronologyTrack, InspectorDock, InstrumentGrid, InstrumentHeader, MetricRail, RevelationLens } from './PagePrimitives'

const meta = { title: 'MoonWitness/Pages', parameters: { layout: 'fullscreen' } } satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

const stage = (children: React.ReactNode, theme: 'myth-fade'|'cyan'|'amber'|'emerald'|'violet'|'neutral' = 'myth-fade') => <MoonWitnessProvider theme={theme}><div className="mw-page-stage">{children}</div></MoonWitnessProvider>
const metrics = [
  { label:'OBSERVATIONS', value:'17', detail:'published', tone:'active' as const },
  { label:'EVIDENCE', value:'15', detail:'sources', tone:'success' as const },
  { label:'REVIEW ISSUES', value:'12', detail:'practice-level', tone:'warning' as const },
  { label:'CAUSAL PROOF', value:'0–15', detail:'/100', tone:'neutral' as const },
]
const micro = (rows: Array<[string,string]>) => <div className="mw-micro-list">{rows.map(([a,b])=><div className="mw-micro-row" key={a}><i/><strong>{a}</strong><small>{b}</small></div>)}</div>

export const CommandCenter: Story = { render: () => stage(<>
  <InstrumentHeader code="01 / COMMAND" title="MoonWitness Command Center" subtitle="Mission overview, signal triage, evidence routing and guardrail-aware operational control." status={<SignalBeacon tone="success" label="SYSTEM / ONLINE"/>}/>
  <div className="mw-page-stage__body"><CommandDeck
    header={<ArchiveGate placeholder="Jump to mission, evidence, source…"/>}
    rail={<MissionRail activeId="observe" items={[{id:'observe',label:'Observe',meta:'live signals'},{id:'evidence',label:'Evidence',meta:'verification'},{id:'correlate',label:'Correlate',meta:'ΔT + distance'},{id:'map',label:'Map',meta:'geo layer'},{id:'archive',label:'Archive',meta:'immutable ledger'}]}/>} 
    core={<div style={{display:'grid',gap:14}}><OrbitalCore title="CORE" subtitle="evidence machine" activeId="evidence" nodes={[{id:'signal',label:'SIGNAL',value:'17'},{id:'evidence',label:'EVIDENCE',value:'15',tone:'active'},{id:'review',label:'REVIEW',value:'12',tone:'warning'},{id:'map',label:'MAP',value:'GEO'},{id:'time',label:'TIME',value:'ΔT'}]}/><MetricRail items={metrics}/></div>}
    spine={<EvidenceSpine steps={[{label:'CLAIM',detail:'captured',state:'complete'},{label:'SOURCE',detail:'linked',state:'complete'},{label:'CORROBORATE',detail:'cross-check',state:'complete'},{label:'REVIEW',detail:'active',state:'active'},{label:'ARCHIVE',detail:'locked'}]}/>} 
    strip={<CausalityGuardrail/>}
  /></div>
</>) }

export const Observatory: Story = { render: () => stage(<>
  <InstrumentHeader code="02 / OBSERVATORY" title="Celestial Observatory" subtitle="One monumental instrument per viewport: temporal geometry, signals, confidence and observation context." status={<SignalBeacon label="OBSERVATION WINDOW / ACTIVE"/>}/>
  <div className="mw-page-stage__body"><MetricRail items={[{label:'WINDOW',value:'AUG 2026',detail:'monthly archive'},{label:'GLOBAL ECLIPSES',value:'2',detail:'neither directly visible from Indonesia',tone:'warning'},{label:'SIGNALS',value:'17',detail:'observations',tone:'active'},{label:'EVIDENCE',value:'15',detail:'linked sources',tone:'success'}]}/>
  <InstrumentGrid><div className="span-8"><OrbitalCore title="OBS" subtitle="temporal geometry" activeId="time" nodes={[{id:'sun',label:'SUN',value:'position'},{id:'moon',label:'MOON',value:'position',tone:'active'},{id:'time',label:'TIME',value:'ΔT',tone:'active'},{id:'geo',label:'LOCATION',value:'ID'},{id:'source',label:'SOURCE',value:'15',tone:'success'}]}/></div><div className="span-4"><InspectorDock eyebrow="SIGNAL INTELLIGENCE" title="Observation State">{micro([['Temporal window','bounded'],['Geographic layer','repository-owned'],['Source confidence','auditable'],['Causal claim','separate']])}</InspectorDock></div><div className="span-12 mw-page-surface"><h2>TEMPORAL ORRERY</h2><TemporalOrrery activeIndex={4} points={['T-4','T-3','T-2','T-1','T0','T+1','T+2'].map(label=>({label}))}/></div></InstrumentGrid></div>
</>, 'cyan') }

export const EvidenceLedger: Story = { render: () => stage(<>
  <InstrumentHeader code="03 / EVIDENCE" title="Evidence Ledger" subtitle="Source → claim → corroboration → review → archive. Source identity stays separate from the claim it documents." actions={<ArchiveGate placeholder="Search source, title, publisher…"/>}/>
  <div className="mw-page-stage__body"><MetricRail items={metrics}/><InstrumentGrid>
    <div className="span-4"><EvidenceSpine steps={[{label:'SOURCE',detail:'primary / official',state:'complete'},{label:'CLAIM',detail:'scoped',state:'complete'},{label:'MATCH',detail:'cross-source',state:'complete'},{label:'REVIEW',detail:'human / analytic',state:'active'},{label:'ARCHIVE',detail:'pending'}]}/></div>
    <div className="span-5" style={{display:'grid',gap:12}}><ObservationShard eyebrow="EVIDENCE / OFFICIAL" title="BMKG celestial reference" meta="source class · official" tone="success">Verified source metadata, provenance and bounded claim scope.</ObservationShard><ObservationShard eyebrow="EVIDENCE / MEDIA" title="Observation record" meta="source class · media" tone="active">Observation evidence remains distinct from theological or causal interpretation.</ObservationShard></div>
    <div className="span-3"><InspectorDock eyebrow="PROVENANCE" title="Source Reliability"><ReliabilityPrism score={92}/><div style={{height:14}}/>{micro([['Publisher','identified'],['Date','resolved'],['URL','linked'],['Scope','bounded']])}</InspectorDock></div>
  </InstrumentGrid></div>
</>) }

export const DisasterMap: Story = { render: () => stage(<>
  <InstrumentHeader code="04 / GEO" title="August 2026 — Disaster Map" subtitle="Disaster events remain independently sourced. Mythos/ritual observations are contextual overlays only." status={<SignalBeacon tone="warning" label="NO CAUSAL ASSUMPTION"/>}/>
  <div className="mw-page-stage__body"><CausalityGuardrail/><InstrumentGrid><div className="span-9"><MapRift title="INDONESIA / DISASTER LAYER" points={[{id:'a',x:29,y:47,label:'event',tone:'danger',size:15},{id:'b',x:55,y:60,label:'event',tone:'warning',size:12},{id:'c',x:72,y:68,label:'event',tone:'danger',size:14},{id:'d',x:19,y:38,label:'event',tone:'active',size:10}]}/></div><div className="span-3"><InspectorDock eyebrow="EVENT REGISTER" title="Independent Context">{micro([['Wildfire','natural/human mechanisms'],['Earthquake','geophysical'],['Flood','hydrometeorological'],['Observation overlay','faint / contextual']])}</InspectorDock></div><div className="span-12"><MetricRail items={[{label:'MEASURE',value:'ΔT',detail:'temporal distance'},{label:'MEASURE',value:'km',detail:'Haversine distance'},{label:'PROXIMITY',value:'≠',detail:'causality',tone:'warning'},{label:'REVIEW',value:'SEPARATE',detail:'causal finding',tone:'success'}]}/></div></InstrumentGrid></div>
</>) }

export const CorrelationEngine: Story = { render: () => stage(<>
  <InstrumentHeader code="05 / CORRELATION" title="Correlation & Chronology Engine" subtitle="Discovery geometry measures proximity; reviewed causality remains a separate analytical field." status={<SignalBeacon tone="warning" label="PROXIMITY ≠ CAUSALITY"/>}/>
  <div className="mw-page-stage__body"><ChronologyTrack points={[{id:'1',label:'Observation',date:'T-48h',detail:'source captured'},{id:'2',label:'Media propagation',date:'T-24h',detail:'context',tone:'active'},{id:'3',label:'Event',date:'T0',detail:'independent dataset',tone:'warning',active:true},{id:'4',label:'Distance',date:'ΔT / km',detail:'measurement only'},{id:'5',label:'Review',date:'T+1',detail:'causal finding',tone:'success'}]}/><InstrumentGrid><div className="span-7 mw-page-surface"><h2>CAUSALITY LATTICE</h2><OrbitalCore title="Δ" subtitle="relation space" activeId="event" nodes={[{id:'obs',label:'OBS',value:'17'},{id:'media',label:'MEDIA',value:'95'},{id:'event',label:'EVENT',value:'CTX',tone:'warning'},{id:'distance',label:'DIST',value:'km'},{id:'review',label:'REVIEW',value:'0–15',tone:'success'}]}/></div><div className="span-5"><InspectorDock eyebrow="REVIEW CONTRACT" title="Finding Discipline">{micro([['Temporal proximity','measured'],['Geographic proximity','measured'],['Competing explanation','required'],['Causal score','independent'],['Verdict','evidence-bounded']])}</InspectorDock></div></InstrumentGrid><CausalityGuardrail/></div>
</>, 'amber') }

export const TauhidReview: Story = { render: () => stage(<>
  <InstrumentHeader code="06 / REVIEW" title="Practice-Level Review" subtitle="Severity flags practices for clarification. It does not classify religions, ethnicities, communities or people." status={<SignalBeacon tone="warning" label="SCOPE / PRACTICE ONLY"/>}/>
  <div className="mw-page-stage__body"><MetricRail items={[{label:'REVIEW ISSUES',value:'12',detail:'TAU register',tone:'warning'},{label:'SCOPE',value:'PRACTICE',detail:'not community'},{label:'EVIDENCE',value:'15',detail:'sources',tone:'success'},{label:'STATUS',value:'AUDIT',detail:'clarification'}]}/><InstrumentGrid><div className="span-4"><ObservationShard eyebrow="LOW" title="0–25" tone="success">Low review severity.</ObservationShard></div><div className="span-4"><ObservationShard eyebrow="WATCH" title="26–40" tone="warning">Requires contextual clarification.</ObservationShard></div><div className="span-4"><ObservationShard eyebrow="HIGH / CRITICAL" title="41–100" tone="danger">Review the practice and evidence, never infer a community-level verdict.</ObservationShard></div><div className="span-12"><CausalityGuardrail>Practice-level severity does not establish a judgment on a religion, ethnicity, person or community.</CausalityGuardrail></div></InstrumentGrid></div>
</>) }

export const FourRevelationLens: Story = { render: () => stage(<>
  <InstrumentHeader code="07 / REVELATION" title="Four Revelation Lens" subtitle="Four distinct textual lenses presented as separate portals, not merged into a single authority surface."/>
  <div className="mw-page-stage__body"><RevelationLens items={[{key:'Q',name:"Al-Qur'an",reference:'Muhaimin lens',focus:'Core comparison and textual reference.',tone:'success'},{key:'I',name:'Injil / Gospel',reference:'Gospel lens',focus:'Complementary textual comparison.',tone:'active'},{key:'T',name:'Taurat / Torah',reference:'Torah lens',focus:'Complementary textual comparison.',tone:'warning'},{key:'Z',name:'Zabur / Psalms',reference:'Psalms lens',focus:'Complementary textual comparison.',tone:'neutral'}]}/><InstrumentGrid><div className="span-8 mw-page-surface"><h2>WITNESS THREAD</h2><ChronologyTrack points={[{id:'1',label:'Text',detail:'reference'},{id:'2',label:'Context',detail:'scope'},{id:'3',label:'Comparison',detail:'parallel'},{id:'4',label:'Finding',detail:'bounded',active:true,tone:'success'}]}/></div><div className="span-4"><InspectorDock eyebrow="LENS CONTRACT" title="Comparison Rules">{micro([['Four lenses','separate'],['References','explicit'],['Claims','bounded'],['Verdict','not inferred from proximity']])}</InspectorDock></div></InstrumentGrid></div>
</>, 'emerald') }

export const CandidatePipeline: Story = { render: () => stage(<>
  <InstrumentHeader code="08 / PIPELINE" title="Candidate Pipeline" subtitle="Automation may discover candidates; publication requires source checking, verification and analysis." status={<SignalBeacon label="COLLECTING"/>}/>
  <div className="mw-page-stage__body"><ChronologyTrack points={[{id:'1',label:'DISCOVERED',detail:'machine candidate',active:true,tone:'active'},{id:'2',label:'SOURCE CHECK',detail:'publisher / URL'},{id:'3',label:'VERIFIED',detail:'evidence pass',tone:'success'},{id:'4',label:'ANALYZED',detail:'context + scope'},{id:'5',label:'PUBLISHED',detail:'explicit approval'}]}/><InstrumentGrid><div className="span-8"><ArchiveGate placeholder="Filter candidate signals…"/><div style={{height:14}}/>{micro([['Candidate 001','DISCOVERED'],['Candidate 002','SOURCE CHECK'],['Candidate 003','VERIFIED'],['Candidate 004','ANALYZED']])}</div><div className="span-4"><InspectorDock eyebrow="AUTOMATION BOUNDARY" title="Publication Gate">{micro([['Discovery','allowed'],['Source verification','required'],['Analysis','required'],['Publication','explicit']])}</InspectorDock></div></InstrumentGrid></div>
</>, 'violet') }

export const MobileInstrumentMode: Story = { render: () => stage(<>
  <InstrumentHeader code="MOBILE / INSTRUMENT" title="Mobile Instrument Mode" subtitle="Single-hand access, radial hierarchy and bottom-sheet inspection instead of shrinking desktop card grids."/>
  <div className="mw-page-stage__body"><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:18}}>{[
    ['OBSERVATORY','Orbital focus'],['EVIDENCE','Source chain'],['DISASTER MAP','Map Rift'],['REVELATION','Four Lens']
  ].map(([title,sub],i)=><div key={title} style={{maxWidth:330,minHeight:620,margin:'0 auto',width:'100%',padding:14,border:'1px solid var(--mw-accent-secondary)',borderRadius:34,background:'#06080b',boxShadow:'0 24px 70px rgba(0,0,0,.45)'}}><SignalBeacon tone={i===2?'warning':'active'} label={title}/><div style={{height:18}}/><OrbitalCore title={String(i+1).padStart(2,'0')} subtitle={sub} nodes={[{id:'a',label:'A',value:'•'},{id:'b',label:'B',value:'•',tone:'active'},{id:'c',label:'C',value:'•'}]}/><div style={{height:12}}/><ArchiveGate label="QUICK GATE" placeholder="Search…"/><div style={{height:12}}/><CausalityGuardrail/></div>)}</div></div>
</>) }

export const ThemeLab: Story = { render: () => <div style={{display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',minHeight:'100vh'}}>{(['myth-fade','cyan','amber','emerald','violet','neutral'] as const).map(theme=><MoonWitnessProvider key={theme} theme={theme} style={{padding:20,minHeight:360}}><SignalBeacon label={theme}/><div style={{height:14}}/><ObservationShard eyebrow="THEME TOKEN" title={theme.toUpperCase()} tone="active">Same component geometry. Different semantic accent family.</ObservationShard><div style={{height:12}}/><ReliabilityPrism score={88}/></MoonWitnessProvider>)}</div> }
