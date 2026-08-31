import type { Meta, StoryObj } from '@storybook/react-vite'
import { ApplicationShell } from './ApplicationShell'
import { MoonWitnessProvider } from './MoonWitnessProvider'
import { CausalityGuardrail, EvidenceSpine, MapRift, MissionRail, ObservationShard, OrbitalCore, ReliabilityPrism, SignalBeacon, TemporalOrrery } from './Observatory'
import { ArchiveGate, ChronologyTrack, InspectorDock, InstrumentGrid, InstrumentHeader, MetricRail, RevelationLens } from './PagePrimitives'
import { CausalityLattice, EventPulse, SignalWave, StateVector, TruthAperture } from './DataVizPrimitives'
import { EvidenceRules, ProvenanceRail, SourceSeal, WitnessThread } from './EvidenceFlow'
import { ActionRail, EmptySignal, InspectorRows, InstrumentButton, LoadingOrbit, ProgressRail, SegmentedRail, StatusMatrix } from './InteractionPrimitives'

const meta = { title: 'MoonWitness/Product Pages', parameters: { layout: 'fullscreen' } } satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

const shell = (children: React.ReactNode, theme: 'myth-fade'|'cyan'|'amber'|'emerald'|'violet'|'neutral'='myth-fade') => (
  <MoonWitnessProvider theme={theme}>
    <ApplicationShell label="MOONWITNESS" eyebrow="EVIDENCE-FIRST OBSERVATORY" status="SYSTEM / ONLINE" statusTone="success" topRail={<span style={{font: '700 9px ui-monospace,monospace',letterSpacing:'.14em',color:'var(--mw-text-muted)'}}>OBSERVE · EVIDENCE · CORRELATE · VERIFY · ARCHIVE</span>}>
      <div className="mw-page-stage">{children}</div>
    </ApplicationShell>
  </MoonWitnessProvider>
)

const nav = (activeId:string) => <MissionRail activeId={activeId} items={[
  {id:'home',label:'Home',meta:'mission portal'},
  {id:'observatory',label:'Observatory',meta:'temporal geometry'},
  {id:'mythos',label:'Mythos Index',meta:'activity register'},
  {id:'ritual',label:'Ritual Watch',meta:'practice review'},
  {id:'revelation',label:'Revelation',meta:'four lenses'},
  {id:'map',label:'Disaster Map',meta:'geo context'},
  {id:'evidence',label:'Evidence',meta:'source ledger'},
  {id:'report',label:'Report',meta:'monthly archive'},
]}/>

const augustMetrics = [
  {label:'MYTHOS ACTIVITY',value:'90',detail:'/100',tone:'warning' as const},
  {label:'RITUAL ACTIVITY',value:'90',detail:'/100',tone:'warning' as const},
  {label:'MEDIA PROPAGATION',value:'95',detail:'/100',tone:'active' as const},
  {label:'CAUSAL PROOF',value:'0–15',detail:'/100',tone:'success' as const},
]

export const HomePortal: Story = { render: () => shell(<>
  <InstrumentHeader code="00 / HOME" title="Where Myth Fade to Legend" subtitle="A MoonWitness evidence-first research instrument for observation, source review, chronology, geography and bounded interpretation." status={<SignalBeacon tone="success" label="AUGUST / ARCHIVED"/>}/>
  <div className="mw-page-stage__body"><InstrumentGrid>
    <div className="span-3">{nav('home')}</div>
    <div className="span-6" style={{display:'grid',gap:14}}><OrbitalCore title="MYTH" subtitle="research instrument" activeId="evidence" nodes={[{id:'observe',label:'OBSERVE',value:'17'},{id:'evidence',label:'EVIDENCE',value:'15',tone:'success'},{id:'issues',label:'REVIEW',value:'12',tone:'warning'},{id:'map',label:'GEO',value:'Δ'},{id:'time',label:'TIME',value:'AUG'}]}/><MetricRail items={augustMetrics}/></div>
    <div className="span-3"><InspectorDock eyebrow="MISSION" title="Evidence First"><TruthAperture score={15} label="CAUSAL PROOF CEILING" detail="separate from proximity" tone="success"/><div style={{height:14}}/><EvidenceRules rows={[{label:'Observation',value:'recorded',tone:'active'},{label:'Source',value:'linked',tone:'success'},{label:'Proximity',value:'measured',tone:'warning'},{label:'Causality',value:'separate',tone:'success'}]}/></InspectorDock></div>
    <div className="span-12"><CausalityGuardrail/></div>
  </InstrumentGrid></div>
</>) }

export const MythosIndex: Story = { render: () => shell(<>
  <InstrumentHeader code="01 / MYTHOS" title="Mythos Index" subtitle="Activity scoring, observations and propagation patterns shown without converting temporal or geographic coincidence into causal proof." status={<SignalBeacon tone="warning" label="ACTIVITY / 90"/>}/>
  <div className="mw-page-stage__body"><InstrumentGrid>
    <div className="span-3">{nav('mythos')}</div>
    <div className="span-6" style={{display:'grid',gap:14}}><TruthAperture score={90} label="MYTHOS ACTIVITY" detail="August 2026" tone="warning"/><SignalWave values={[32,44,38,61,54,73,68,82,77,90]} label="PROPAGATION TRACE" detail="observation intensity" tone="active"/></div>
    <div className="span-3"><InspectorDock eyebrow="INDEX STATE" title="Activity Register"><StatusMatrix items={[{label:'OBSERVATIONS',value:'17',detail:'published',tone:'active'},{label:'EVIDENCE',value:'15',detail:'sources',tone:'success'},{label:'MEDIA',value:'95',detail:'/100',tone:'active'}]}/></InspectorDock></div>
    <div className="span-8"><ChronologyTrack points={[{id:'1',label:'Observation',date:'T-3',detail:'captured'},{id:'2',label:'Propagation',date:'T-2',detail:'context',tone:'active'},{id:'3',label:'Review',date:'T-1',detail:'practice scope',tone:'warning'},{id:'4',label:'Archive',date:'T0',detail:'bounded record',tone:'success',active:true}]}/></div>
    <div className="span-4"><ObservationShard eyebrow="INTERPRETATION BOUNDARY" title="Activity ≠ Causality" tone="success">Mythos activity is an observation/analytic signal. It is not a causal verdict about independent events.</ObservationShard></div>
  </InstrumentGrid></div>
</>) }

export const RitualWatch: Story = { render: () => shell(<>
  <InstrumentHeader code="02 / RITUAL" title="Ritual Watch" subtitle="Practice-level clarification and review. Severity applies to the recorded practice, never to a community or person by inference." status={<SignalBeacon tone="warning" label="PRACTICE LEVEL ONLY"/>}/>
  <div className="mw-page-stage__body"><InstrumentGrid>
    <div className="span-3">{nav('ritual')}</div>
    <div className="span-5" style={{display:'grid',gap:14}}><TruthAperture score={90} label="RITUAL ACTIVITY" detail="activity index" tone="warning"/><StateVector title="REVIEW VECTOR" items={[{label:'Context required',value:82,tone:'warning'},{label:'Source coverage',value:74,tone:'success'},{label:'Causal proof',value:15,tone:'success'}]}/></div>
    <div className="span-4"><InspectorDock eyebrow="REVIEW REGISTER" title="12 Practice Issues"><SegmentedRail value="watch" items={[{id:'low',label:'Low',count:'0–25'},{id:'watch',label:'Watch',count:'26–40'},{id:'high',label:'High',count:'41–70'},{id:'critical',label:'Critical',count:'71–100'}]}/><div style={{height:16}}/><ObservationShard eyebrow="SCOPE" title="Practice, not people" tone="success">No religion, ethnicity, person or community is classified from a practice-level severity score.</ObservationShard></InspectorDock></div>
    <div className="span-12"><CausalityGuardrail>Practice-level severity does not establish a judgment on a religion, ethnicity, person or community.</CausalityGuardrail></div>
  </InstrumentGrid></div>
</>) }

export const RevelationIndex: Story = { render: () => shell(<>
  <InstrumentHeader code="03 / REVELATION" title="Revelation Index" subtitle="Four distinct textual lenses with explicit references, comparison context and bounded findings." status={<SignalBeacon tone="success" label="FOUR LENSES / SEPARATE"/>}/>
  <div className="mw-page-stage__body"><InstrumentGrid>
    <div className="span-3">{nav('revelation')}</div>
    <div className="span-9"><RevelationLens items={[{key:'Q',name:"Al-Qur'an",reference:'Qur’anic lens',focus:'Explicit reference and bounded comparison.',tone:'success'},{key:'I',name:'Injil / Gospel',reference:'Gospel lens',focus:'Complementary textual comparison.',tone:'active'},{key:'T',name:'Taurat / Torah',reference:'Torah lens',focus:'Complementary textual comparison.',tone:'warning'},{key:'Z',name:'Zabur / Psalms',reference:'Psalms lens',focus:'Complementary textual comparison.',tone:'neutral'}]}/></div>
    <div className="span-8"><WitnessThread steps={[{id:'1',label:'REFERENCE',detail:'explicit',state:'complete',tone:'success'},{id:'2',label:'CONTEXT',detail:'bounded',state:'complete'},{id:'3',label:'COMPARE',detail:'parallel / distinction',state:'active',tone:'active'},{id:'4',label:'FINDING',detail:'source-linked',tone:'success'}]}/></div>
    <div className="span-4"><InspectorDock eyebrow="TEXTUAL CONTRACT" title="Comparison Discipline"><EvidenceRules rows={[{label:'Lens count',value:'4',tone:'success'},{label:'References',value:'explicit',tone:'success'},{label:'Claims',value:'bounded',tone:'active'},{label:'Inference',value:'not automatic',tone:'warning'}]}/></InspectorDock></div>
  </InstrumentGrid></div>
</>, 'emerald') }

export const MonthlyReport: Story = { render: () => shell(<>
  <InstrumentHeader code="04 / REPORT" title="August 2026 — Monthly Report" subtitle="Frozen reporting surface for observations, evidence, review issues, correlation findings and source-backed context." status={<SignalBeacon tone="success" label="REPORT / FROZEN"/>}/>
  <div className="mw-page-stage__body"><MetricRail items={augustMetrics}/><InstrumentGrid>
    <div className="span-3">{nav('report')}</div>
    <div className="span-6" style={{display:'grid',gap:14}}><ObservationShard eyebrow="EXECUTIVE SIGNAL" title="17 observations" meta="August 2026" tone="active">Observation count is published separately from causal proof and from disaster context.</ObservationShard><ObservationShard eyebrow="EVIDENCE REGISTER" title="15 sources" meta="linked provenance" tone="success">Source metadata remains independently auditable.</ObservationShard><ObservationShard eyebrow="REVIEW REGISTER" title="12 issues" meta="practice-level" tone="warning">Clarification scope remains bounded to recorded practices.</ObservationShard></div>
    <div className="span-3"><InspectorDock eyebrow="REPORT INTEGRITY" title="Frozen Dataset"><ProgressRail value={100} label="DATA QA" detail="August source-of-truth frozen" tone="success"/><div style={{height:14}}/><ReliabilityPrism score={92}/><div style={{height:14}}/><SourceSeal type="ARCHIVE" label="READ ONLY" score="AUG 2026" tone="success"/></InspectorDock></div>
    <div className="span-12"><CausalityGuardrail/></div>
  </InstrumentGrid></div>
</>) }

export const ArchiveLedger: Story = { render: () => shell(<>
  <InstrumentHeader code="05 / ARCHIVE" title="Archive Ledger" subtitle="Search, filter and inspect source-backed records without losing provenance or claim scope." actions={<ArchiveGate label="ARCHIVE GATE" placeholder="Search report, evidence, source, date…"/>}/>
  <div className="mw-page-stage__body"><InstrumentGrid>
    <div className="span-3">{nav('evidence')}</div>
    <div className="span-6"><ProvenanceRail items={[{id:'AUG-RPT',type:'REPORT',title:'August 2026 monthly report',meta:'frozen',tone:'success',verified:true},{id:'AUG-EVD',type:'EVIDENCE',title:'Evidence register',meta:'15 sources',tone:'success',verified:true},{id:'AUG-OBS',type:'OBSERVATION',title:'Observation register',meta:'17 records',tone:'active',verified:true},{id:'AUG-TAU',type:'REVIEW',title:'Practice-level review',meta:'12 issues',tone:'warning',verified:true}]}/></div>
    <div className="span-3"><InspectorDock eyebrow="LEDGER STATE" title="Selected Record"><InspectorRows rows={[{label:'Source state',value:'verified',tone:'success'},{label:'Write mode',value:'read-only',tone:'success'},{label:'Scope',value:'August 2026',tone:'active'},{label:'Causal merge',value:'disabled',tone:'warning'}]}/></InspectorDock></div>
    <div className="span-12"><ActionRail actions={[{id:'open',label:'Open',active:true,tone:'active'},{id:'verify',label:'Verify',tone:'success'},{id:'compare',label:'Compare'},{id:'export',label:'Export'}]}/></div>
  </InstrumentGrid></div>
</>) }

export const Methodology: Story = { render: () => shell(<>
  <InstrumentHeader code="06 / METHOD" title="Methodology & Guardrails" subtitle="How MoonWitness separates observations, measurements, interpretation and causal findings." status={<SignalBeacon tone="success" label="EVIDENCE-FIRST"/>}/>
  <div className="mw-page-stage__body"><InstrumentGrid>
    <div className="span-3">{nav('home')}</div>
    <div className="span-5"><ChronologyTrack points={[{id:'1',label:'OBSERVE',detail:'capture'},{id:'2',label:'SOURCE',detail:'link',tone:'success'},{id:'3',label:'MEASURE',detail:'ΔT / km',tone:'active'},{id:'4',label:'REVIEW',detail:'competing explanations',tone:'warning'},{id:'5',label:'FINDING',detail:'bounded',tone:'success',active:true}]}/></div>
    <div className="span-4"><InspectorDock eyebrow="CORE RULES" title="Research Contract"><EvidenceRules rows={[{label:'Temporal proximity',value:'measurement',tone:'active'},{label:'Geographic proximity',value:'measurement',tone:'active'},{label:'Causality',value:'separate finding',tone:'success'},{label:'Community verdict',value:'prohibited inference',tone:'warning'}]}/></InspectorDock></div>
    <div className="span-7 mw-page-surface"><h2>CAUSALITY LATTICE</h2><CausalityLattice nodes={[{id:'obs',x:12,y:42,label:'OBS',value:'record',tone:'active'},{id:'time',x:33,y:22,label:'ΔT',value:'time'},{id:'geo',x:41,y:72,label:'DIST',value:'km'},{id:'explain',x:68,y:48,label:'ALT',value:'explain',tone:'warning'},{id:'finding',x:88,y:35,label:'FINDING',value:'bounded',tone:'success'}]} edges={[{from:'obs',to:'time',strength:.7},{from:'obs',to:'geo',strength:.7},{from:'time',to:'explain',strength:.45,dashed:true},{from:'geo',to:'explain',strength:.45,dashed:true},{from:'explain',to:'finding',strength:.55}]}/></div>
    <div className="span-5"><CausalityGuardrail/></div>
  </InstrumentGrid></div>
</>, 'cyan') }

export const SystemStates: Story = { render: () => shell(<>
  <InstrumentHeader code="07 / STATES" title="System States" subtitle="Interaction, loading, empty, warning, error and success treatments use the same observatory language."/>
  <div className="mw-page-stage__body"><InstrumentGrid>
    <div className="span-4 mw-page-surface"><h2>ACTIONS</h2><div style={{display:'flex',gap:10,flexWrap:'wrap'}}><InstrumentButton tone="active">Primary</InstrumentButton><InstrumentButton tone="success" variant="secondary">Verified</InstrumentButton><InstrumentButton tone="warning" variant="secondary">Review</InstrumentButton><InstrumentButton disabled>Disabled</InstrumentButton></div></div>
    <div className="span-4 mw-page-surface"><h2>LOADING</h2><LoadingOrbit label="Synchronizing evidence…"/></div>
    <div className="span-4 mw-page-surface"><h2>EMPTY</h2><EmptySignal title="No candidate signal" detail="Adjust time window or archive filters." action={<InstrumentButton variant="ghost">Reset Gate</InstrumentButton>}/></div>
    <div className="span-6"><ObservationShard eyebrow="WARNING" title="Context required" tone="warning">This observation is not sufficient for a causal finding.</ObservationShard></div>
    <div className="span-6"><ObservationShard eyebrow="SUCCESS" title="Evidence verified" tone="success">Source identity, date and scope are resolved.</ObservationShard></div>
    <div className="span-12"><StatusMatrix items={[{label:'DEFAULT',value:'READY',tone:'neutral'},{label:'ACTIVE',value:'FOCUS',tone:'active'},{label:'SUCCESS',value:'VERIFIED',tone:'success'},{label:'WARNING',value:'REVIEW',tone:'warning'},{label:'ERROR',value:'BLOCKED',tone:'danger'}]}/></div>
  </InstrumentGrid></div>
</>, 'violet') }
