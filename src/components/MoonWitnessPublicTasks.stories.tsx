import type { Meta, StoryObj } from '@storybook/react-vite'
import { ApplicationShell } from './ApplicationShell'
import { MoonWitnessProvider } from './MoonWitnessProvider'
import { CausalityGuardrail, MapRift, MissionRail, SignalBeacon } from './Observatory'
import { ArchiveGate, InspectorDock, InstrumentGrid, InstrumentHeader, MetricRail, RevelationLens } from './PagePrimitives'
import { CausalityLattice, StateVector } from './DataVizPrimitives'
import { EvidenceRules, ProvenanceRail, WitnessThread } from './EvidenceFlow'
import { InspectorRows, StatusMatrix } from './InteractionPrimitives'

const meta = {
  title: 'MoonWitness/Public Task Surfaces',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Executable showcase-only task stories for the eight frozen public surfaces. Reusable production ownership remains moonwitness-frontend-platform; these stories must not introduce routes, metrics, states, or geometry.' } },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

const tasks = [
  ['monthly-report','Monthly Report','MYTH-01'],
  ['spread-map','Spread Map','MYTH-04'],
  ['disaster-map','Disaster Map','MYTH-05'],
  ['correlation','Correlation Engine','MYTH-06'],
  ['practice-review','Practice-Level Review','MYTH-08'],
  ['evidence','Evidence','MYTH-09'],
  ['four-revelation','Four Revelation Lens','MYTH-11'],
  ['candidate-pipeline','Candidate Pipeline','MYTH-13'],
] as const

const railItems = tasks.map(([id,label]) => ({ id, label }))
const guardrail = <CausalityGuardrail>Temporal/geographic proximity does not establish causation.</CausalityGuardrail>

function TaskFrame({active,title,code,children,inspector}:{active:string,title:string,code:string,children:React.ReactNode,inspector?:React.ReactNode}) {
  return <MoonWitnessProvider theme="myth-fade"><ApplicationShell label="MOONWITNESS" eyebrow="PUBLIC RESEARCH INSTRUMENT" status="FROZEN BASELINE / AUGUST 2026" statusTone="active" topRail={<span style={{fontFamily:'ui-monospace,monospace',fontSize:9,letterSpacing:'.14em'}}>EVIDENCE-FIRST · TASK-FIRST · FROZEN</span>}><div className="mw-page-stage"><InstrumentHeader code={code} title={title} subtitle="August 2026 historical dataset · explicit state · reversible drill-down" status={<SignalBeacon tone="active" label="FROZEN BASELINE"/>}/><div className="mw-page-stage__body"><div style={{display:'grid',gridTemplateColumns:'180px minmax(0,1fr) 320px',gap:16}}><MissionRail activeId={active} items={railItems}/><main>{children}</main><aside>{inspector ?? <InspectorDock eyebrow="CONTEXT" title="Evidence Inspector"><InspectorRows rows={[{label:'Dataset',value:code,tone:'active'},{label:'Window',value:'August 2026'},{label:'State',value:'FROZEN',tone:'active'},{label:'Ownership',value:'frontend-platform',tone:'success'}]}/></InspectorDock>}</aside></div></div></div></ApplicationShell></MoonWitnessProvider>
}

const metrics=[{label:'OBSERVATIONS',value:'17',detail:'August 2026',tone:'active' as const},{label:'EVIDENCE',value:'15',detail:'linked sources',tone:'success' as const},{label:'REVIEW ISSUES',value:'12',detail:'practice-level',tone:'warning' as const},{label:'CAUSAL PROOF',value:'0–15',detail:'/100',tone:'neutral' as const}]

export const MonthlyReport: Story = { render:()=> <TaskFrame active="monthly-report" title="August 2026 Monthly Report" code="MYTH-01"><MetricRail items={metrics}/><div style={{height:16}}/><InstrumentGrid><div className="span-7 mw-page-surface"><h2>RESEARCH STATE</h2><p>The default public entry summarizes the frozen dataset, dominant research posture and next authorized tasks without inventing a separate Home route.</p></div><div className="span-5"><StatusMatrix items={[{label:'DATASET',value:'AUGUST 2026',tone:'active'},{label:'STATE',value:'FROZEN BASELINE',tone:'success'},{label:'TOP-LEVEL TASKS',value:'8',tone:'active'}]}/></div><div className="span-12">{guardrail}</div></InstrumentGrid></TaskFrame> }

export const SpreadMap: Story = { render:()=> <TaskFrame active="spread-map" title="Spread Map" code="MYTH-04"><MapRift title="OBSERVATION SPREAD / DATA LAYER" points={[{id:'a',x:18,y:44,tone:'active',size:11},{id:'b',x:42,y:61,tone:'warning',size:13},{id:'c',x:67,y:39,tone:'success',size:10},{id:'d',x:82,y:58,tone:'active',size:12}]}/><div style={{height:14}}/>{guardrail}</TaskFrame> }

export const DisasterMap: Story = { render:()=> <TaskFrame active="disaster-map" title="Disaster Map" code="MYTH-05"><MapRift title="DISASTER CONTEXT / DATA LAYER" points={[{id:'a',x:24,y:53,tone:'danger',size:15},{id:'b',x:56,y:38,tone:'warning',size:12},{id:'c',x:76,y:66,tone:'danger',size:14}]}/><div style={{height:14}}/>{guardrail}</TaskFrame> }

export const CorrelationEngine: Story = { render:()=> <TaskFrame active="correlation" title="Correlation Engine" code="MYTH-06"><CausalityLattice nodes={[{id:'obs',x:10,y:30,label:'OBS',value:'17',tone:'active'},{id:'time',x:34,y:66,label:'ΔT',value:'time'},{id:'geo',x:62,y:42,label:'GEO',value:'km',tone:'warning'},{id:'review',x:88,y:28,label:'REVIEW',value:'bounded',tone:'success'}]} edges={[{from:'obs',to:'time',strength:.7},{from:'time',to:'geo',strength:.5,dashed:true},{from:'geo',to:'review',strength:.45,dashed:true}]}/><div style={{height:14}}/>{guardrail}</TaskFrame> }

export const PracticeLevelReview: Story = { render:()=> <TaskFrame active="practice-review" title="Practice-Level Review" code="MYTH-08" inspector={<InspectorDock eyebrow="SCOPE" title="Review Contract"><EvidenceRules rows={[{label:'Unit of review',value:'practice',tone:'success'},{label:'Person judgment',value:'forbidden',tone:'warning'},{label:'Faith judgment',value:'forbidden',tone:'warning'},{label:'Evidence scope',value:'bounded',tone:'active'}]}/></InspectorDock>}><CausalityGuardrail>Practice-level review only. No person or faith judgment.</CausalityGuardrail><div style={{height:16}}/><StatusMatrix items={[{label:'PRACTICE A',value:'SUPPORTED',tone:'success'},{label:'PRACTICE B',value:'REVIEW',tone:'warning'},{label:'PRACTICE C',value:'PARTIAL',tone:'active'}]}/></TaskFrame> }

export const Evidence: Story = { render:()=> <TaskFrame active="evidence" title="Evidence" code="MYTH-09"><ArchiveGate label="EVIDENCE SEARCH" placeholder="Search source, publisher, record…"/><div style={{height:16}}/><ProvenanceRail items={[{id:'E-01',type:'OFFICIAL',title:'Primary reference',meta:'publisher + date',tone:'success',verified:true},{id:'E-02',type:'OBSERVATION',title:'Observation record',meta:'time + location',tone:'active',verified:true},{id:'E-03',type:'CONTEXT',title:'Context record',meta:'linked only',tone:'warning',verified:false}]}/></TaskFrame> }

export const FourRevelationLens: Story = { render:()=> <TaskFrame active="four-revelation" title="Four Revelation Lens" code="MYTH-11"><RevelationLens items={[{key:'Q',name:"Al-Qur'an",reference:'Qur’anic lens',focus:'Explicit reference and bounded comparison.',tone:'success'},{key:'I',name:'Injil / Gospel',reference:'Gospel lens',focus:'Complementary textual comparison.',tone:'active'},{key:'T',name:'Taurat / Torah',reference:'Torah lens',focus:'Complementary textual comparison.',tone:'warning'},{key:'Z',name:'Zabur / Psalms',reference:'Psalms lens',focus:'Complementary textual comparison.',tone:'neutral'}]}/><div style={{height:16}}/><CausalityGuardrail>Exactly four separate revelation lenses; comparison does not merge textual authority.</CausalityGuardrail></TaskFrame> }

export const CandidatePipeline: Story = { render:()=> <TaskFrame active="candidate-pipeline" title="Candidate Pipeline" code="MYTH-13"><WitnessThread steps={[{id:'1',label:'CANDIDATE',detail:'captured',state:'complete',tone:'active'},{id:'2',label:'EVIDENCE',detail:'linked',state:'complete',tone:'success'},{id:'3',label:'REVIEW',detail:'bounded',state:'active',tone:'warning'},{id:'4',label:'ARCHIVE',detail:'pending'}]}/><div style={{height:16}}/><StateVector items={[{label:'Source completeness',value:72,tone:'active'},{label:'Review confidence',value:54,tone:'warning'},{label:'Archived',value:24,tone:'success'}]}/></TaskFrame> }
