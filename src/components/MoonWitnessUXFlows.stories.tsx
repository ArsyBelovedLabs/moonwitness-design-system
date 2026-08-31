import type { Meta, StoryObj } from '@storybook/react-vite'
import { MoonWitnessProvider } from './MoonWitnessProvider'
import {
  CausalityGuardrail,
  EvidenceSpine,
  MapRift,
  MissionRail,
  ObservationShard,
  SignalBeacon,
} from './Observatory'
import {
  ArchiveGate,
  ChronologyTrack,
  InspectorDock,
  InstrumentHeader,
  MetricRail,
  RevelationLens,
} from './PagePrimitives'
import { CausalityLattice } from './DataVizPrimitives'
import { ProvenanceRail, WitnessThread } from './EvidenceFlow'
import {
  EmptySignal,
  InstrumentButton,
  LoadingOrbit,
  SegmentedRail,
  StatusMatrix,
} from './InteractionPrimitives'

const meta = {
  title: 'MoonWitness/01 UX Flow Workbench',
  parameters: { layout: 'fullscreen' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

type FlowTone = 'neutral' | 'active' | 'success' | 'warning' | 'danger'

type FlowStep = {
  code: string
  title: string
  detail: string
  tone?: FlowTone
  optional?: boolean
}

const stage = (title: string, subtitle: string, children: React.ReactNode, theme: 'myth-fade'|'cyan'|'amber'|'emerald'|'violet' = 'myth-fade') => (
  <MoonWitnessProvider theme={theme}>
    <div className="mw-page-stage">
      <InstrumentHeader
        code="UX FLOW / EXECUTION CONTROL"
        title={title}
        subtitle={subtitle}
        status={<SignalBeacon tone="success" label="FLOW / BLUEPRINT ALIGNED"/>}
      />
      <div className="mw-page-stage__body">{children}</div>
    </div>
  </MoonWitnessProvider>
)

const flowGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
  gap: 12,
  alignItems: 'stretch',
}

const flowStepStyle: React.CSSProperties = {
  position: 'relative',
  minHeight: 142,
  padding: '16px 16px 18px',
  border: '1px solid color-mix(in srgb,var(--mw-tone,var(--mw-accent-secondary)) 28%,transparent)',
  background: 'linear-gradient(145deg,rgba(12,16,20,.94),rgba(4,7,9,.96))',
  overflow: 'hidden',
}

const Flow = ({ steps }: { steps: FlowStep[] }) => (
  <div style={flowGridStyle}>
    {steps.map((step, index) => (
      <article key={`${step.code}-${index}`} className={`mw-tone-${step.tone || 'neutral'}`} style={flowStepStyle}>
        <div style={{display:'flex',justifyContent:'space-between',gap:10,alignItems:'center'}}>
          <span style={{font:'800 8px ui-monospace,SFMono-Regular,Menlo,monospace',letterSpacing:'.14em',color:'var(--mw-tone,var(--mw-accent-secondary))'}}>{step.code}</span>
          {step.optional ? <small style={{font:'700 7px ui-monospace,SFMono-Regular,Menlo,monospace',color:'var(--mw-text-muted)'}}>OPTIONAL</small> : null}
        </div>
        <strong style={{display:'block',marginTop:14,fontSize:15,lineHeight:1.15}}>{step.title}</strong>
        <p style={{margin:'8px 0 0',fontSize:10,lineHeight:1.5,color:'var(--mw-text-muted)'}}>{step.detail}</p>
        {index < steps.length - 1 ? <b aria-hidden="true" style={{position:'absolute',right:8,bottom:7,fontSize:16,color:'var(--mw-accent-secondary)'}}>→</b> : null}
      </article>
    ))}
  </div>
)

const sectionStyle: React.CSSProperties = {
  display: 'grid',
  gap: 14,
  padding: 18,
  border: '1px solid color-mix(in srgb,var(--mw-accent-secondary) 18%,transparent)',
  background: 'linear-gradient(145deg,rgba(9,13,16,.9),rgba(4,6,8,.94))',
}

const Section = ({ eyebrow, title, note, children }: { eyebrow: string; title: string; note?: string; children: React.ReactNode }) => (
  <section style={sectionStyle}>
    <header>
      <span style={{font:'800 8px ui-monospace,SFMono-Regular,Menlo,monospace',letterSpacing:'.14em',color:'var(--mw-accent-secondary)'}}>{eyebrow}</span>
      <h2 style={{margin:'5px 0 0',fontSize:18}}>{title}</h2>
      {note ? <p style={{margin:'6px 0 0',color:'var(--mw-text-muted)',fontSize:10,lineHeight:1.5}}>{note}</p> : null}
    </header>
    {children}
  </section>
)

const BackContract = () => (
  <WitnessThread steps={[
    { id:'detail', label:'DETAIL / INSPECTOR', detail:'selected object', state:'complete', tone:'active' },
    { id:'back', label:'CLOSE / BACK', detail:'explicit return', state:'active', tone:'warning' },
    { id:'parent', label:'PARENT TASK', detail:'filters + selection retained', state:'idle', tone:'success' },
  ]}/>
)

export const PublicEntryHome: Story = {
  render: () => stage(
    'Public Entry / Observatory Home Experience',
    'The public Web has no ninth Home route. The first-view experience is the default Monthly Report landing state.',
    <>
      <MetricRail items={[
        {label:'ENTRY',value:'REPORT',detail:'default task',tone:'active'},
        {label:'DEFAULT',value:'2026-08',detail:'frozen baseline'},
        {label:'TOP-LEVEL TASKS',value:'8',detail:'current public routes',tone:'success'},
        {label:'HOME ROUTE',value:'NONE',detail:'do not invent',tone:'warning'},
      ]}/>
      <Section eyebrow="UX-MYTH-00" title="Default task flow" note="The landing view must answer dataset, state, dominant research posture, available next tasks, and guardrail context before the user drills deeper.">
        <Flow steps={[
          {code:'01',title:'Public Entry',detail:'Open the Counter-Mythos Observatory.',tone:'active'},
          {code:'02',title:'Resolve Dataset',detail:'Requested month or default August 2026.',tone:'neutral'},
          {code:'03',title:'Dataset State',detail:'Show FROZEN BASELINE / repository-grounded state.',tone:'success'},
          {code:'04',title:'Monthly Report',detail:'Observatory landing and dominant primary instrument.',tone:'active'},
          {code:'05',title:'Choose Task',detail:'Report, Spread Map, Disaster Map, Correlation, Review, Evidence, Four Revelation Lens, or Candidate Pipeline.',tone:'warning'},
        ]}/>
      </Section>
      <CausalityGuardrail/>
    </>,
  )
}

export const PublicTaskNavigation: Story = {
  render: () => stage(
    'Public Task Navigation',
    'Top-level navigation changes task context. Capability/repository names are not product navigation.',
    <div style={{display:'grid',gridTemplateColumns:'260px minmax(0,1fr)',gap:18}}>
      <MissionRail activeId="report" items={[
        {id:'report',label:'Monthly Report',meta:'default entry'},
        {id:'spread',label:'Spread Map',meta:'observation geography'},
        {id:'disaster',label:'Disaster Map',meta:'independent events'},
        {id:'correlation',label:'Correlation',meta:'proximity + review'},
        {id:'review',label:'Practice Review',meta:'practice-level only'},
        {id:'evidence',label:'Evidence',meta:'source ledger'},
        {id:'revelation',label:'Four Revelation Lens',meta:'exactly four'},
        {id:'pipeline',label:'Candidate Pipeline',meta:'candidate state'},
      ]}/>
      <Section eyebrow="NAVIGATION CONTRACT" title="One task → one primary instrument">
        <Flow steps={[
          {code:'TASK',title:'Select top-level task',detail:'Route-level context changes.',tone:'active'},
          {code:'FOCUS',title:'Primary instrument',detail:'One dominant task surface per viewport.',tone:'success'},
          {code:'OBJECT',title:'Select object',detail:'Observation, evidence, event, relation, review issue, lens, or candidate.',tone:'active'},
          {code:'DETAIL',title:'Contextual drill-down',detail:'Inspector/drawer/workspace; do not inflate global nav.',tone:'warning'},
          {code:'RETURN',title:'Back to task',detail:'Preserve useful parent filters and selection.',tone:'success'},
        ]}/>
      </Section>
    </div>,
    'cyan',
  )
}

export const EvidenceJourney: Story = {
  render: () => stage(
    'Observation → Evidence → Provenance',
    'Evidence owns trust. Source reliability, review severity and causality remain separate concepts.',
    <>
      <Flow steps={[
        {code:'01',title:'Observation / Finding',detail:'Selected from Report, Map, Review, Correlation or Pipeline.',tone:'active'},
        {code:'02',title:'Context Inspector',detail:'Bounded object detail without losing parent task.',tone:'neutral'},
        {code:'03',title:'Evidence Object',detail:'What source material supports this published object?',tone:'success'},
        {code:'04',title:'Source + Provenance',detail:'Publisher, date, type, grade, analytic use and lineage.',tone:'success'},
        {code:'05',title:'External Source',detail:'Open only by explicit user action.',tone:'warning',optional:true},
        {code:'06',title:'Return',detail:'Close/back restores parent task context.',tone:'active'},
      ]}/>
      <div style={{display:'grid',gridTemplateColumns:'minmax(240px,.7fr) minmax(0,1.3fr)',gap:18}}>
        <EvidenceSpine steps={[
          {label:'OBJECT',detail:'selected',state:'complete'},
          {label:'EVIDENCE',detail:'linked',state:'complete'},
          {label:'SOURCE',detail:'identified',state:'complete'},
          {label:'PROVENANCE',detail:'auditable',state:'active'},
          {label:'RETURN',detail:'parent context'},
        ]}/>
        <ProvenanceRail items={[
          {id:'SRC-01',type:'OFFICIAL',title:'Primary source',meta:'publisher + date',tone:'success',verified:true},
          {id:'OBS-01',type:'OBSERVATION',title:'Bounded observation record',meta:'linked analytic use',tone:'active',verified:true},
          {id:'REV-01',type:'REVIEW',title:'Reviewed context',meta:'separate from source reliability',tone:'warning',verified:true},
        ]}/>
      </div>
      <BackContract/>
    </>,
    'emerald',
  )
}

export const GeoCorrelationJourney: Story = {
  render: () => stage(
    'Geo → Correlation → Evidence',
    'Spread Map and Disaster Map are independent tasks. Disaster facts, proximity measurements and causal findings remain separate objects.',
    <>
      <div style={{display:'grid',gridTemplateColumns:'1.2fr .8fr',gap:18}}>
        <MapRift title="GEO TASK / CONTEXT" points={[
          {id:'obs',x:24,y:48,label:'Observation',tone:'active',size:11},
          {id:'event',x:68,y:58,label:'Independent event',tone:'danger',size:15},
        ]}/>
        <InspectorDock eyebrow="SELECTION MODEL" title="Selected Geo Object">
          <Flow steps={[
            {code:'A',title:'Event fact',detail:'Independently sourced.',tone:'danger'},
            {code:'B',title:'ΔT / km',detail:'Measured proximity.',tone:'warning'},
            {code:'C',title:'Causal finding',detail:'Reviewed separately.',tone:'success'},
          ]}/>
        </InspectorDock>
      </div>
      <ChronologyTrack points={[
        {id:'1',label:'Observation',detail:'published source'},
        {id:'2',label:'Event',detail:'independent context',tone:'warning'},
        {id:'3',label:'Measure',detail:'ΔT / km',active:true,tone:'active'},
        {id:'4',label:'Review',detail:'causal finding',tone:'success'},
        {id:'5',label:'Evidence',detail:'source + provenance'},
      ]}/>
      <CausalityLattice nodes={[
        {id:'obs',x:14,y:40,label:'OBS',value:'context',tone:'active'},
        {id:'event',x:42,y:68,label:'EVENT',value:'fact',tone:'warning'},
        {id:'prox',x:68,y:35,label:'PROX',value:'ΔT / km'},
        {id:'review',x:86,y:64,label:'REVIEW',value:'separate',tone:'success'},
      ]} edges={[
        {from:'obs',to:'event',strength:.35,dashed:true},
        {from:'event',to:'prox',strength:.7},
        {from:'prox',to:'review',strength:.5,dashed:true},
      ]}/>
      <CausalityGuardrail/>
    </>,
    'amber',
  )
}

export const ReviewRevelationPipeline: Story = {
  render: () => stage(
    'Review + Four Revelation + Candidate Flow',
    'Practice review remains practice-level, Four Revelation remains exactly four, and candidate visuals must use actual application states.',
    <>
      <Section eyebrow="UX-MYTH-05" title="Practice-Level Review">
        <Flow steps={[
          {code:'01',title:'Issue Register',detail:'Practice-level severity only.',tone:'warning'},
          {code:'02',title:'Issue Detail',detail:'Practice + context.',tone:'active'},
          {code:'03',title:'Evidence',detail:'Supporting source material.',tone:'success'},
          {code:'04',title:'Relevant Text',detail:'Four Revelation references only when provided.',tone:'neutral',optional:true},
          {code:'05',title:'Resolution Note',detail:'Return to same review filter/state.',tone:'success'},
        ]}/>
      </Section>
      <CausalityGuardrail>Practice-level severity does not establish a judgment on a religion, ethnicity, person or community.</CausalityGuardrail>
      <RevelationLens items={[
        {key:'Q',name:"Al-Qur'an",focus:'All-four orientation remains visible.',tone:'success'},
        {key:'I',name:'Injil / Gospel',focus:'Selected detail does not create a fifth lens.',tone:'active'},
        {key:'T',name:'Taurat / Torah',focus:'Explicit reference context.',tone:'warning'},
        {key:'Z',name:'Zabur / Psalms',focus:'Return to all-four orientation.'},
      ]}/>
      <Section eyebrow="UX-MYTH-08" title="Candidate Pipeline">
        <Flow steps={[
          {code:'01',title:'Candidate Register',detail:'Use actual stored/emitted state.',tone:'active'},
          {code:'02',title:'Candidate Detail',detail:'Signal/context inspector.',tone:'neutral'},
          {code:'03',title:'Source / Evidence',detail:'Evidence-gated review.',tone:'success'},
          {code:'04',title:'Analysis Context',detail:'Only when actually available.',tone:'warning',optional:true},
          {code:'05',title:'Publication State',detail:'Never imply automatic publication.',tone:'danger',optional:true},
          {code:'06',title:'Return',detail:'Pipeline filter/state retained.',tone:'success'},
        ]}/>
      </Section>
    </>,
    'violet',
  )
}

export const CommandCenterResearchRun: Story = {
  render: () => stage(
    'Command Center / Research Run Object Workspace',
    'Current top-level navigation stays Overview, Research Runs, Operations, Settings. Workflow, Job, Analysis, Evidence and Provenance are contextual child objects.',
    <>
      <div style={{display:'grid',gridTemplateColumns:'250px minmax(0,1fr)',gap:18}}>
        <MissionRail activeId="runs" items={[
          {id:'overview',label:'Overview'},
          {id:'runs',label:'Research Runs',meta:'object workspace'},
          {id:'operations',label:'Operations'},
          {id:'settings',label:'Settings'},
        ]}/>
        <Section eyebrow="UX-CC-01" title="Object-first drill-down">
          <Flow steps={[
            {code:'01',title:'Research Runs',detail:'List / queue boundary.',tone:'active'},
            {code:'02',title:'Research Run',detail:'Selected run workspace.',tone:'success'},
            {code:'03',title:'Workflow',detail:'Contextual run object.',tone:'neutral'},
            {code:'04',title:'Job',detail:'Execution / retry state.',tone:'warning'},
            {code:'05',title:'Evidence',detail:'Result support.',tone:'success'},
            {code:'06',title:'Provenance',detail:'Auditable lineage.',tone:'success'},
          ]}/>
        </Section>
      </div>
      <Section eyebrow="LOCKED STATE MACHINE" title="Research Run states">
        <ChronologyTrack points={[
          {id:'created',label:'CREATED',detail:'mutable'},
          {id:'queued',label:'QUEUED',detail:'mutable',tone:'active'},
          {id:'running',label:'RUNNING',detail:'mutable',active:true,tone:'warning'},
          {id:'completed',label:'COMPLETED',detail:'terminal',tone:'success'},
        ]}/>
        <StatusMatrix items={[
          {label:'COMPLETED',value:'TERMINAL',tone:'success',detail:'no resume'},
          {label:'FAILED',value:'TERMINAL',tone:'danger',detail:'no resume'},
          {label:'CANCELLED',value:'TERMINAL',tone:'warning',detail:'no resume'},
          {label:'JOB RETRY',value:'RETRYING → RUNNING',tone:'active',detail:'canonical job transition'},
        ]}/>
      </Section>
      <BackContract/>
    </>,
    'cyan',
  )
}

export const StateAndRecoveryFlow: Story = {
  render: () => stage(
    'State + Recovery + Back Contract',
    'Task surfaces keep the same information architecture while content moves through loading, content, empty, partial/offline and error states.',
    <>
      <Flow steps={[
        {code:'00',title:'Initial',detail:'Task route/surface resolved.'},
        {code:'01',title:'Loading',detail:'Name what is synchronizing.',tone:'active'},
        {code:'02A',title:'Success / Content',detail:'Primary instrument available.',tone:'success'},
        {code:'02B',title:'Empty',detail:'No records / no filter results / no published data.',tone:'neutral',optional:true},
        {code:'02C',title:'Partial / Offline',detail:'Preserve available read-only context when safe.',tone:'warning',optional:true},
        {code:'02D',title:'Error',detail:'Explain failure and recovery action when available.',tone:'danger',optional:true},
      ]}/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:18}}>
        <section className="mw-page-surface"><LoadingOrbit label="Synchronizing evidence ledger…"/></section>
        <section className="mw-page-surface"><EmptySignal title="No published candidates" detail="The selected period contains no candidate records."/></section>
        <InspectorDock eyebrow="RECOVERY" title="Partial / Offline">
          <StatusMatrix items={[
            {label:'CACHE',value:'AVAILABLE',tone:'success'},
            {label:'LIVE',value:'OFFLINE',tone:'warning'},
            {label:'ACTION',value:'RETRY',tone:'active'},
          ]}/>
        </InspectorDock>
      </div>
      <BackContract/>
    </>,
  )
}

export const ResponsiveInteraction: Story = {
  render: () => stage(
    'Desktop → Mobile Interaction Recomposition',
    'Mobile does not shrink desktop geometry. It preserves current task, object selection, evidence path and back behavior with a different composition.',
    <div style={{display:'grid',gridTemplateColumns:'1.2fr .8fr',gap:18}}>
      <Section eyebrow="DESKTOP / WIDE" title="Persistent task + inspector">
        <Flow steps={[
          {code:'NAV',title:'Task navigation',detail:'Stable route/task rail.',tone:'active'},
          {code:'MAIN',title:'Primary instrument',detail:'Dominant workspace.',tone:'success'},
          {code:'DETAIL',title:'Right inspector',detail:'Object/evidence context.',tone:'warning'},
          {code:'BACK',title:'Close / return',detail:'Parent state preserved.',tone:'success'},
        ]}/>
      </Section>
      <Section eyebrow="MOBILE / NARROW" title="Recomposed task flow">
        <Flow steps={[
          {code:'HEAD',title:'Compact header',detail:'Current task + back visible.',tone:'active'},
          {code:'MAIN',title:'Primary instrument',detail:'Single-column task focus.',tone:'success'},
          {code:'SHEET',title:'Bottom/full detail',detail:'Inspector becomes sheet.',tone:'warning'},
          {code:'RETURN',title:'Dismiss detail',detail:'Focus + task state restored.',tone:'success'},
        ]}/>
      </Section>
    </div>,
    'emerald',
  )
}

export const UXReadinessGate: Story = {
  render: () => stage(
    'UX Readiness Gate',
    'A page is not ready for Figma/showcase generation merely because its components exist. Both component readiness and UX-flow readiness must pass.',
    <>
      <Flow steps={[
        {code:'GATE A',title:'Component Readiness',detail:'Tokens → primitives → components → instruments → template.',tone:'success'},
        {code:'GATE B',title:'UX Flow Readiness',detail:'Task → object → detail → evidence → return → states → responsive/accessibility.',tone:'warning'},
        {code:'PAGE',title:'Application Composition',detail:'Authorized route/surface only.',tone:'active'},
        {code:'RESP',title:'Responsive Review',detail:'Desktop and mobile task parity.',tone:'active'},
        {code:'IMAGE',title:'Golden Showcase',detail:'One screen per image; cannot redefine the masters.',tone:'success'},
      ]}/>
      <Section eyebrow="BLOCKED_BY_UX_FLOW" title="14 questions before page generation">
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:12}}>
          {[
            'Primary user task defined',
            'Authorized entry route/surface known',
            'Dominant primary instrument chosen',
            'Selectable object identified',
            'Contextual detail location defined',
            'Return/back path defined',
            'Filters and selection preservation defined',
            'Loading/empty/partial/offline/error states defined',
            'FROZEN/LIVE/CANDIDATE state explicit',
            'Evidence/source/provenance traversal defined',
            'Causality/practice guardrail placement defined',
            'Mobile recomposition defined',
            'Keyboard/focus behavior defined',
            'No fake capability/route/state/metric/nav invented',
          ].map((item,index)=><div key={item} style={{display:'grid',gridTemplateColumns:'28px 1fr',gap:9,alignItems:'center',padding:'10px 12px',border:'1px solid rgba(255,255,255,.07)'}}><span style={{font:'800 8px ui-monospace,SFMono-Regular,Menlo,monospace',color:'var(--mw-accent-secondary)'}}>{String(index+1).padStart(2,'0')}</span><strong style={{fontSize:10}}>{item}</strong></div>)}
        </div>
      </Section>
      <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
        <InstrumentButton tone="success" variant="secondary">COMPONENT READY</InstrumentButton>
        <InstrumentButton tone="warning" variant="secondary">UX FLOW REQUIRED</InstrumentButton>
        <InstrumentButton disabled>GENERATE PAGE / BLOCKED</InstrumentButton>
      </div>
    </>,
    'amber',
  )
}
