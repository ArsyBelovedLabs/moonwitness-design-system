import type { Meta, StoryObj } from '@storybook/react-vite'
import { MoonWitnessProvider } from './MoonWitnessProvider'
import {
  CausalityGuardrail,
  EvidenceSpine,
  MapRift,
  MissionRail,
  ObservationShard,
  OrbitalCore,
  ReliabilityPrism,
  SignalBeacon,
} from './Observatory'
import {
  ArchiveGate,
  ChronologyTrack,
  InspectorDock,
  InstrumentGrid,
  InstrumentHeader,
  MetricRail,
  RevelationLens,
} from './PagePrimitives'
import { CausalityLattice, StateVector, TruthAperture } from './DataVizPrimitives'
import {
  EmptySignal,
  FilterDock,
  InspectorRows,
  InstrumentButton,
  LoadingOrbit,
  ProgressRail,
  SegmentedRail,
  StatusMatrix,
} from './InteractionPrimitives'

const meta = {
  title: 'MoonWitness/02 Master Pages',
  parameters: { layout: 'fullscreen' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

type Theme = 'myth-fade'|'cyan'|'amber'|'emerald'|'violet'|'neutral'

const stage = (children: React.ReactNode, theme: Theme = 'myth-fade') => (
  <MoonWitnessProvider theme={theme}>
    <div className="mw-page-stage">{children}</div>
  </MoonWitnessProvider>
)

const publicItems = [
  { id:'report', label:'Monthly Report', meta:'observatory home' },
  { id:'spread', label:'Spread Map', meta:'observation geography' },
  { id:'disaster', label:'Disaster Map', meta:'independent events' },
  { id:'correlation', label:'Correlation', meta:'ΔT + distance' },
  { id:'review', label:'Practice Review', meta:'practice-level only' },
  { id:'evidence', label:'Evidence', meta:'source + provenance' },
  { id:'revelation', label:'Four Revelation Lens', meta:'four source channels' },
  { id:'pipeline', label:'Candidate Pipeline', meta:'evidence-gated' },
]

const ccItems = [
  { id:'overview', label:'Overview', meta:'system posture' },
  { id:'runs', label:'Research Runs', meta:'run boundary' },
  { id:'operations', label:'Operations', meta:'health + availability' },
  { id:'settings', label:'Settings', meta:'environment boundary' },
]

const frozenMetrics = [
  { label:'MYTHOS ACTIVITY', value:'90', detail:'/100', tone:'active' as const },
  { label:'RITUAL ACTIVITY', value:'90', detail:'/100', tone:'active' as const },
  { label:'MEDIA PROPAGATION', value:'95', detail:'/100', tone:'warning' as const },
  { label:'CAUSAL PROOF', value:'0–15', detail:'/100', tone:'neutral' as const },
  { label:'OBSERVATIONS', value:'17', detail:'published', tone:'active' as const },
  { label:'EVIDENCE SOURCES', value:'15', detail:'grounded', tone:'success' as const },
  { label:'CAUSALITY FINDINGS', value:'7', detail:'reviewed', tone:'warning' as const },
  { label:'REVIEW ISSUES', value:'12', detail:'practice-level', tone:'warning' as const },
]

const detailRows = (rows: Array<[string,string]>) => (
  <InspectorRows rows={rows.map(([label,value]) => ({ label, value }))}/>
)

const publicShell = (
  active: string,
  header: React.ReactNode,
  body: React.ReactNode,
  theme: Theme = 'myth-fade',
) => stage(<>
  {header}
  <div className="mw-page-stage__body">
    <InstrumentGrid>
      <div className="span-3"><MissionRail items={publicItems} activeId={active}/></div>
      <div className="span-9">{body}</div>
    </InstrumentGrid>
  </div>
</>, theme)

const ccShell = (
  active: string,
  header: React.ReactNode,
  body: React.ReactNode,
) => stage(<>
  {header}
  <div className="mw-page-stage__body">
    <InstrumentGrid>
      <div className="span-3"><MissionRail items={ccItems} activeId={active}/></div>
      <div className="span-9">{body}</div>
    </InstrumentGrid>
  </div>
</>)

export const ObservatoryHome: Story = { render: () => publicShell(
  'report',
  <InstrumentHeader
    code="PUBLIC ENTRY / REPORT / 2026-08"
    title="Where Myth Fade to Legend"
    subtitle="Counter-Mythos Observatory · August 2026 repository-grounded landing experience. This is the Monthly Report home state, not a ninth route."
    status={<SignalBeacon tone="success" label="FROZEN BASELINE"/>}
  />,
  <div style={{display:'grid',gap:18}}>
    <MetricRail items={frozenMetrics}/>
    <InstrumentGrid>
      <div className="span-8">
        <OrbitalCore
          title="AUG 2026"
          subtitle="research state"
          activeId="evidence"
          nodes={[
            {id:'obs',label:'OBS',value:'17',tone:'active'},
            {id:'evidence',label:'EVIDENCE',value:'15',tone:'success'},
            {id:'cause',label:'CAUSALITY',value:'7',tone:'warning'},
            {id:'review',label:'REVIEW',value:'12',tone:'warning'},
            {id:'media',label:'MEDIA',value:'95'},
          ]}
        />
      </div>
      <div className="span-4">
        <InspectorDock eyebrow="DATASET STATE" title="Observatory Home">
          {detailRows([
            ['Time window','August 2026'],
            ['Mode','Frozen historical baseline'],
            ['Public surfaces','8 current tasks'],
            ['Primary trust path','Evidence → source → provenance'],
          ])}
        </InspectorDock>
      </div>
    </InstrumentGrid>
    <CausalityGuardrail/>
  </div>
) }

export const MonthlyReport: Story = { render: () => publicShell(
  'report',
  <InstrumentHeader
    code="01 / MONTHLY REPORT"
    title="August 2026 — Monthly Report"
    subtitle="Frozen historical report. Overview and observation evidence remain visually distinct from live operational state."
    status={<SignalBeacon tone="success" label="FROZEN BASELINE"/>}
    actions={<ArchiveGate label="REPORT SEARCH" placeholder="Find observation, source, finding…"/>}
  />,
  <div style={{display:'grid',gap:18}}>
    <SegmentedRail value="overview" items={[
      {id:'overview',label:'Overview'},
      {id:'observations',label:'Observations',count:17},
      {id:'events',label:'Findings',count:7},
      {id:'evidence',label:'Evidence',count:15},
      {id:'review',label:'Review',count:12},
    ]}/>
    <MetricRail items={frozenMetrics}/>
    <InstrumentGrid>
      <div className="span-8 mw-page-surface">
        <h2>MONTH TEMPORAL SIGNATURE</h2>
        <ChronologyTrack points={[
          {id:'1',label:'OPEN',date:'01 AUG',detail:'baseline starts'},
          {id:'2',label:'OBSERVATION',date:'MID',detail:'evidence captured',tone:'active'},
          {id:'3',label:'CORRELATION',date:'ΔT',detail:'proximity measured',tone:'warning'},
          {id:'4',label:'REVIEW',date:'END',detail:'findings bounded',tone:'success',active:true},
        ]}/>
      </div>
      <div className="span-4"><InspectorDock eyebrow="REPORT CONTRACT" title="Grounding">{detailRows([
        ['Observations','17'],['Evidence sources','15'],['Causality findings','7'],['Practice review issues','12']
      ])}</InspectorDock></div>
    </InstrumentGrid>
    <CausalityGuardrail/>
  </div>
) }

export const ObservationLedger: Story = { render: () => publicShell(
  'report',
  <InstrumentHeader
    code="01A / REPORT / OBSERVATIONS"
    title="Observation Ledger"
    subtitle="Contextual report surface: selecting an observation opens detail without creating a new top-level route."
    actions={<ArchiveGate label="OBSERVATION FILTER" placeholder="Search observation, date, location…"/>}
  />,
  <InstrumentGrid>
    <div className="span-8" style={{display:'grid',gap:12}}>
      <ObservationShard eyebrow="OBS-017 / VERIFIED SOURCE" title="Observation record" meta="August 2026 · repository-grounded" tone="active">Temporal, geographic and source context remain explicit; interpretation stays separate.</ObservationShard>
      <ObservationShard eyebrow="OBS-016 / CONTEXT" title="Observation record" meta="source attached" tone="success">Source metadata and analytic use remain independently inspectable.</ObservationShard>
      <ObservationShard eyebrow="OBS-015 / REVIEW" title="Observation record" meta="requires context" tone="warning">Selection preserves current month, filters and scroll position.</ObservationShard>
    </div>
    <div className="span-4">
      <InspectorDock eyebrow="SELECTED OBJECT" title="Observation Inspector">
        {detailRows([
          ['Object','OBS-017'],['Dataset','August 2026'],['Evidence','linked'],['Provenance','available'],['Return path','ledger state preserved']
        ])}
      </InspectorDock>
    </div>
  </InstrumentGrid>
) }

export const SpreadMap: Story = { render: () => publicShell(
  'spread',
  <InstrumentHeader
    code="02 / SPREAD MAP"
    title="Observation Spread Map"
    subtitle="Geography of observations and propagation. This is not the Disaster Map and does not imply causal relationships."
    status={<SignalBeacon label="OBSERVATION GEOGRAPHY"/>}
  />,
  <div style={{display:'grid',gap:16}}>
    <FilterDock label="MAP LAYERS"><SegmentedRail value="observation" items={[
      {id:'observation',label:'Observation',count:17},
      {id:'media',label:'Media'},
      {id:'narrative',label:'Narrative'},
      {id:'time',label:'Time'},
    ]}/></FilterDock>
    <InstrumentGrid>
      <div className="span-9"><MapRift title="SPREAD MAP / INDONESIA / AUGUST 2026" points={[
        {id:'a',x:18,y:48,label:'observation',tone:'active',size:12},
        {id:'b',x:33,y:53,label:'observation',tone:'success',size:9},
        {id:'c',x:52,y:61,label:'observation',tone:'active',size:14},
        {id:'d',x:69,y:55,label:'observation',tone:'warning',size:10},
        {id:'e',x:81,y:62,label:'observation',tone:'active',size:8},
      ]}/></div>
      <div className="span-3"><InspectorDock eyebrow="MAP SELECTION" title="Observation Context">{detailRows([
        ['Selected layer','Observation'],['Time window','August 2026'],['Viewport','preserved on close'],['Event dataset','not loaded here']
      ])}</InspectorDock></div>
    </InstrumentGrid>
    <CausalityGuardrail/>
  </div>
) }

export const DisasterMap: Story = { render: () => publicShell(
  'disaster',
  <InstrumentHeader
    code="03 / DISASTER MAP"
    title="Disaster Map"
    subtitle="Independent disaster dataset with temporal/geographic comparison available only as contextual measurement."
    status={<SignalBeacon tone="warning" label="INDEPENDENT DATASET"/>}
  />,
  <div style={{display:'grid',gap:16}}>
    <InstrumentGrid>
      <div className="span-9"><MapRift title="DISASTER MAP / INDONESIA / AUGUST 2026" points={[
        {id:'a',x:26,y:43,label:'event',tone:'danger',size:14},
        {id:'b',x:54,y:58,label:'event',tone:'warning',size:12},
        {id:'c',x:74,y:65,label:'event',tone:'danger',size:13},
      ]}/></div>
      <div className="span-3"><InspectorDock eyebrow="EVENT OBJECT" title="Independent Event">{detailRows([
        ['Dataset','Disaster events'],['Distance','Haversine km'],['Temporal relation','ΔT'],['Causal review','separate field']
      ])}</InspectorDock></div>
    </InstrumentGrid>
    <CausalityGuardrail/>
  </div>
) }

export const Correlation: Story = { render: () => publicShell(
  'correlation',
  <InstrumentHeader
    code="04 / CORRELATION"
    title="Correlation Engine"
    subtitle="Temporal and geographic proximity are discovery measurements; reviewed causality is a separate evidence-bounded field."
    status={<SignalBeacon tone="warning" label="PROXIMITY ≠ CAUSALITY"/>}
  />,
  <div style={{display:'grid',gap:18}}>
    <ChronologyTrack points={[
      {id:'obs',label:'Observation',date:'T-48h',detail:'source captured'},
      {id:'media',label:'Propagation',date:'T-24h',detail:'context',tone:'active'},
      {id:'event',label:'Independent event',date:'T0',detail:'separate dataset',tone:'warning',active:true},
      {id:'review',label:'Causal review',date:'T+1',detail:'evidence-bounded',tone:'success'},
    ]}/>
    <InstrumentGrid>
      <div className="span-8 mw-page-surface"><CausalityLattice nodes={[
        {id:'obs',x:18,y:30,label:'OBSERVATION',value:'17',tone:'active'},
        {id:'media',x:42,y:18,label:'MEDIA',value:'95'},
        {id:'event',x:56,y:58,label:'EVENT',value:'CTX',tone:'warning'},
        {id:'distance',x:32,y:74,label:'DISTANCE',value:'km'},
        {id:'review',x:80,y:36,label:'REVIEW',value:'0–15',tone:'success'},
      ]} edges={[
        {from:'obs',to:'media',strength:.8},
        {from:'obs',to:'event',strength:.35,dashed:true},
        {from:'event',to:'distance',strength:.7},
        {from:'event',to:'review',strength:.45,dashed:true},
      ]}/></div>
      <div className="span-4"><InspectorDock eyebrow="FINDING STATE" title="Causality Review"><StatusMatrix items={[
        {label:'OBSERVED',value:'YES',tone:'success'},
        {label:'CORRELATED',value:'MEASURED',tone:'active'},
        {label:'PLAUSIBLE',value:'REVIEW'},
        {label:'UNRESOLVED',value:'OPEN',tone:'warning'},
        {label:'UNSUPPORTED',value:'EXPLICIT'},
      ]}/></InspectorDock></div>
    </InstrumentGrid>
    <CausalityGuardrail/>
  </div>,
  'amber'
) }

export const PracticeReview: Story = { render: () => publicShell(
  'review',
  <InstrumentHeader
    code="05 / PRACTICE REVIEW"
    title="Practice-Level Review"
    subtitle="Review severity applies to practices and evidence only. It never classifies a religion, ethnicity, community or person."
    status={<SignalBeacon tone="warning" label="PRACTICE-LEVEL REVIEW ONLY"/>}
  />,
  <div style={{display:'grid',gap:18}}>
    <MetricRail items={[
      {label:'REVIEW ISSUES',value:'12',detail:'current frozen register',tone:'warning'},
      {label:'SCOPE',value:'PRACTICE',detail:'never person/community'},
      {label:'EVIDENCE',value:'15',detail:'sources',tone:'success'},
      {label:'STATE',value:'AUDIT',detail:'clarification'},
    ]}/>
    <InstrumentGrid>
      <div className="span-7"><StateVector title="REVIEW MATRIX" items={[
        {label:'Evidence coverage',value:82,tone:'success'},
        {label:'Context completeness',value:64,tone:'active'},
        {label:'Uncertainty',value:38,tone:'warning'},
        {label:'Practice severity',value:44,tone:'warning'},
      ]}/></div>
      <div className="span-5"><InspectorDock eyebrow="REVIEW OBJECT" title="Selected Practice">{detailRows([
        ['Review scope','practice only'],['Evidence','linked'],['Revelation references','contextual when present'],['Ultimate/person judgment','forbidden']
      ])}</InspectorDock></div>
    </InstrumentGrid>
    <CausalityGuardrail>Practice-level review does not establish a judgment on a religion, ethnicity, person or community.</CausalityGuardrail>
  </div>
) }

export const EvidenceLedger: Story = { render: () => publicShell(
  'evidence',
  <InstrumentHeader
    code="06 / EVIDENCE"
    title="Evidence Ledger"
    subtitle="Evidence-first traversal: observation/result → evidence object → source + provenance → bounded analytic use."
    actions={<ArchiveGate label="EVIDENCE SEARCH" placeholder="Search source, publisher, observation…"/>}
  />,
  <InstrumentGrid>
    <div className="span-3"><EvidenceSpine steps={[
      {label:'OBSERVATION',detail:'selected',state:'complete'},
      {label:'EVIDENCE',detail:'object',state:'active'},
      {label:'SOURCE',detail:'resolved',state:'complete'},
      {label:'PROVENANCE',detail:'available',state:'complete'},
      {label:'ANALYTIC USE',detail:'bounded'},
    ]}/></div>
    <div className="span-5" style={{display:'grid',gap:12}}>
      <ObservationShard eyebrow="OFFICIAL SOURCE" title="Evidence object" meta="source identity resolved" tone="success">Source identity, claim scope and analytic use remain separate fields.</ObservationShard>
      <ObservationShard eyebrow="MEDIA SOURCE" title="Evidence object" meta="contextual" tone="active">Reliability is not the same value as causal or practice-review score.</ObservationShard>
    </div>
    <div className="span-4"><InspectorDock eyebrow="PROVENANCE" title="Source Reliability"><ReliabilityPrism score={92}/>{detailRows([
      ['Publisher','identified'],['URL','linked'],['Date','resolved'],['Scope','bounded']
    ])}</InspectorDock></div>
  </InstrumentGrid>
) }

export const FourRevelationLens: Story = { render: () => publicShell(
  'revelation',
  <InstrumentHeader
    code="07 / REVELATION"
    title="Four Revelation Lens"
    subtitle="Exactly four independent textual channels. Detail keeps the all-four orientation visible and does not create a fifth lens."
  />,
  <div style={{display:'grid',gap:18}}>
    <RevelationLens items={[
      {key:'Q',name:"Al-Qur'an",reference:'Qur’an lens',focus:'Independent textual reference.',tone:'success'},
      {key:'I',name:'Injil / Gospel',reference:'Gospel lens',focus:'Independent textual reference.',tone:'active'},
      {key:'T',name:'Taurat / Torah',reference:'Torah lens',focus:'Independent textual reference.',tone:'warning'},
      {key:'Z',name:'Zabur / Psalms',reference:'Psalms lens',focus:'Independent textual reference.',tone:'neutral'},
    ]}/>
    <InstrumentGrid>
      <div className="span-8"><ChronologyTrack points={[
        {id:'text',label:'Text',detail:'explicit reference'},
        {id:'context',label:'Context',detail:'bounded scope'},
        {id:'compare',label:'Comparison',detail:'parallel view'},
        {id:'finding',label:'Finding',detail:'evidence-bounded',tone:'success',active:true},
      ]}/></div>
      <div className="span-4"><InspectorDock eyebrow="LENS CONTRACT" title="Selected Lens">{detailRows([
        ['Lens count','exactly four'],['Current lens',"Al-Qur'an"],['Other lenses','remain visible'],['Merged authority surface','not allowed']
      ])}</InspectorDock></div>
    </InstrumentGrid>
  </div>,
  'emerald'
) }

export const CandidatePipeline: Story = { render: () => publicShell(
  'pipeline',
  <InstrumentHeader
    code="08 / CANDIDATE PIPELINE"
    title="Candidate Pipeline"
    subtitle="Automation may discover candidates; evidence verification and analysis gate any later promotion or publication."
    status={<SignalBeacon label="EVIDENCE-GATED"/>}
  />,
  <div style={{display:'grid',gap:18}}>
    <ChronologyTrack points={[
      {id:'1',label:'DISCOVERED',detail:'machine candidate',tone:'active',active:true},
      {id:'2',label:'SOURCE CHECK',detail:'publisher / URL'},
      {id:'3',label:'VERIFIED',detail:'evidence pass',tone:'success'},
      {id:'4',label:'ANALYZED',detail:'context + scope'},
      {id:'5',label:'PUBLISHED',detail:'explicit approval'},
    ]}/>
    <InstrumentGrid>
      <div className="span-8"><FilterDock label="PIPELINE FILTERS"><SegmentedRail value="all" items={[
        {id:'all',label:'All'}, {id:'discovered',label:'Discovered'}, {id:'verified',label:'Verified'}, {id:'analyzed',label:'Analyzed'}
      ]}/></FilterDock><div style={{height:14}}/><StatusMatrix items={[
        {label:'CANDIDATE 001',value:'DISCOVERED',tone:'active'},
        {label:'CANDIDATE 002',value:'SOURCE CHECK',tone:'warning'},
        {label:'CANDIDATE 003',value:'VERIFIED',tone:'success'},
        {label:'CANDIDATE 004',value:'ANALYZED'},
      ]}/></div>
      <div className="span-4"><InspectorDock eyebrow="AUTOMATION BOUNDARY" title="Candidate Detail">{detailRows([
        ['Discovery','allowed'],['Source verification','required'],['Analysis','required'],['Publication','explicit approval']
      ])}</InspectorDock></div>
    </InstrumentGrid>
  </div>,
  'violet'
) }

export const CommandCenterOverview: Story = { render: () => ccShell(
  'overview',
  <InstrumentHeader
    code="COMMAND CENTER / 01"
    title="Overview"
    subtitle="Current deployable boundary shell. Top-level navigation is exactly Overview, Research Runs, Operations and Settings."
    status={<SignalBeacon tone="success" label="BOUNDARY SHELL"/>}
  />,
  <InstrumentGrid>
    <div className="span-7"><OrbitalCore title="CC" subtitle="system posture" activeId="runs" nodes={[
      {id:'runs',label:'RUNS',value:'READY',tone:'active'},
      {id:'ops',label:'OPS',value:'ONLINE',tone:'success'},
      {id:'api',label:'API',value:'BOUNDARY'},
      {id:'settings',label:'ENV',value:'CONFIG'},
    ]}/></div>
    <div className="span-5"><InspectorDock eyebrow="CURRENT CONTRACT" title="Command Center">{detailRows([
      ['Top-level routes','4'],['Engine menus','not exposed'],['Object drill-down','contextual'],['Application maturity','HOLD / shell implemented']
    ])}</InspectorDock></div>
  </InstrumentGrid>
) }

export const CommandCenterResearchRuns: Story = { render: () => ccShell(
  'runs',
  <InstrumentHeader code="COMMAND CENTER / 02" title="Research Runs" subtitle="Research Run list/queue boundary. Deeper workflow/job/evidence detail belongs to selected run context, not top-level navigation."/>,
  <div style={{display:'grid',gap:18}}>
    <StatusMatrix items={[
      {label:'RUN-026',value:'RUNNING',tone:'active',detail:'current'},
      {label:'RUN-025',value:'COMPLETED',tone:'success',detail:'archived'},
      {label:'RUN-024',value:'FAILED',tone:'danger',detail:'inspect'},
      {label:'RUN-023',value:'CANCELLED',tone:'neutral',detail:'closed'},
    ]}/>
    <InstrumentGrid>
      <div className="span-7"><ChronologyTrack points={[
        {id:'created',label:'CREATED',detail:'run object'},
        {id:'queued',label:'QUEUED',detail:'await execution'},
        {id:'running',label:'RUNNING',detail:'active',tone:'active',active:true},
        {id:'completed',label:'COMPLETED',detail:'terminal',tone:'success'},
      ]}/></div>
      <div className="span-5"><InspectorDock eyebrow="SELECTED RUN" title="RUN-026">{detailRows([
        ['State','RUNNING'],['Workflow','contextual drill-down'],['Jobs','contextual drill-down'],['Evidence','attached to result/execution'],['Return path','run list preserved']
      ])}</InspectorDock></div>
    </InstrumentGrid>
  </div>
) }

export const CommandCenterOperations: Story = { render: () => ccShell(
  'operations',
  <InstrumentHeader code="COMMAND CENTER / 03" title="Operations" subtitle="Health and operational posture only. Do not fabricate a full SRE console where current capability does not expose one." status={<SignalBeacon tone="success" label="OPERATIONAL"/>}/>,
  <div style={{display:'grid',gap:18}}>
    <StatusMatrix items={[
      {label:'API BOUNDARY',value:'OPERATIONAL',tone:'success'},
      {label:'RUNTIME',value:'AVAILABLE',tone:'success'},
      {label:'WORKER',value:'CAPABILITY',tone:'active'},
      {label:'SOURCE HEALTH',value:'CHECKED',tone:'neutral'},
    ]}/>
    <InstrumentGrid>
      <div className="span-7"><TruthAperture score={88} label="SYSTEM POSTURE" detail="boundary-level health" tone="success"/></div>
      <div className="span-5"><InspectorDock eyebrow="OPERATIONS CONTRACT" title="Boundary Health">{detailRows([
        ['Scope','application boundary'],['Private DB access','forbidden'],['Raw infrastructure controls','not invented'],['Failure state','explicit + recoverable']
      ])}</InspectorDock></div>
    </InstrumentGrid>
  </div>
) }

export const CommandCenterSettings: Story = { render: () => ccShell(
  'settings',
  <InstrumentHeader code="COMMAND CENTER / 04" title="Settings" subtitle="Environment/API-origin boundary settings. This is not the experimental Theme Lab page."/>,
  <InstrumentGrid>
    <div className="span-7"><FilterDock label="ENVIRONMENT BOUNDARY"><div style={{display:'grid',gap:12}}>
      <ArchiveGate label="API ORIGIN" value="https://api.moonwitness.example"/>
      <SegmentedRail value="system" items={[{id:'system',label:'System'},{id:'light',label:'Light'},{id:'dark',label:'Dark'}]}/>
      <ProgressRail label="INTERFACE DENSITY" value={62} detail="visual preference only"/>
    </div></FilterDock></div>
    <div className="span-5"><InspectorDock eyebrow="SETTINGS CONTRACT" title="Application Settings">{detailRows([
      ['API origin','application boundary'],['Theme','visual preference'],['Architecture controls','not exposed'],['Secrets','never rendered']
    ])}</InspectorDock></div>
  </InstrumentGrid>
) }

export const SharedStates: Story = { render: () => stage(<>
  <InstrumentHeader code="SHARED / STATES" title="Loading, Empty, Partial, Offline, Error" subtitle="Reusable state language. State must not rely on color alone and must preserve available read-only context where safe."/>
  <div className="mw-page-stage__body"><InstrumentGrid>
    <div className="span-4 mw-page-surface"><LoadingOrbit label="Synchronizing evidence index…"/></div>
    <div className="span-4 mw-page-surface"><EmptySignal title="No observations match these filters" detail="Clear or change the current report filters." action={<InstrumentButton variant="secondary">Clear filters</InstrumentButton>}/></div>
    <div className="span-4"><StatusMatrix items={[
      {label:'PARTIAL',value:'READ-ONLY',tone:'warning',detail:'available data preserved'},
      {label:'OFFLINE',value:'RETRY',tone:'danger',detail:'network unavailable'},
      {label:'ERROR',value:'RECOVER',tone:'danger',detail:'explicit action required'},
    ]}/></div>
  </InstrumentGrid></div>
</>) }

export const MobileRecomposition: Story = { render: () => stage(<>
  <InstrumentHeader code="SHARED / MOBILE" title="Mobile Instrument Recomposition" subtitle="Mobile is a handheld scientific instrument, not a proportionally shrunken desktop composition." status={<SignalBeacon tone="success" label="390 PX CONTRACT"/>}/>
  <div className="mw-page-stage__body">
    <div className="mw-mobile-instrument">
      <div className="mw-mobile-instrument__screen">
        <InstrumentHeader code="AUG 2026" title="Observatory" subtitle="Current task stays visible." status={<SignalBeacon tone="success" label="FROZEN"/>}/>
        <MetricRail items={frozenMetrics.slice(4)}/>
        <div className="mw-mobile-instrument__body">
          <TruthAperture score={87} label="EVIDENCE POSTURE" detail="repository-grounded"/>
          <ObservationShard eyebrow="SELECTED OBJECT" title="Observation" meta="bottom-sheet detail">Inspector becomes a bottom sheet/full-height detail with explicit back/close and focus return.</ObservationShard>
          <CausalityGuardrail/>
        </div>
      </div>
    </div>
  </div>
</>) }
