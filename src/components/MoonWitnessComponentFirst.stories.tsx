import type { Meta, StoryObj } from '@storybook/react-vite'
import { MoonWitnessProvider } from './MoonWitnessProvider'
import { CausalityGuardrail, EvidenceSpine, MapRift, MissionRail, ObservationShard, OrbitalCore, ReliabilityPrism, TemporalOrrery } from './Observatory'
import { ArchiveGate, ChronologyTrack, InspectorDock, InstrumentHeader, MetricRail, RevelationLens } from './PagePrimitives'
import { CausalityLattice, TruthAperture } from './DataVizPrimitives'
import { ProvenanceRail, WitnessThread } from './EvidenceFlow'
import { ActionRail, EmptySignal, InstrumentButton, LoadingOrbit, SegmentedRail, StatusMatrix } from './InteractionPrimitives'

const meta = {
  title: 'MoonWitness/00 Component First Workspace',
  parameters: { layout: 'fullscreen' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

type Readiness = 'READY' | 'MIRROR' | 'BLOCKED'

const panelStyle: React.CSSProperties = {
  border: '1px solid color-mix(in srgb,var(--mw-accent-secondary) 22%,transparent)',
  background: 'linear-gradient(145deg,rgba(12,16,20,.9),rgba(5,8,10,.94))',
  padding: 18,
  minWidth: 0,
}

const eyebrow: React.CSSProperties = {
  margin: 0,
  font: '800 8px ui-monospace,SFMono-Regular,Menlo,monospace',
  letterSpacing: '.14em',
  color: 'var(--mw-accent-secondary)',
  textTransform: 'uppercase',
}

const titleStyle: React.CSSProperties = { margin: '6px 0 0', fontSize: 22 }
const noteStyle: React.CSSProperties = { margin: '8px 0 0', color: 'var(--mw-text-muted)', fontSize: 11, lineHeight: 1.55 }

const Stage = ({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) => (
  <MoonWitnessProvider theme="myth-fade">
    <div className="mw-page-stage">
      <InstrumentHeader code="COMPONENT-FIRST / WORKBENCH" title={title} subtitle={subtitle}/>
      <div className="mw-page-stage__body">{children}</div>
    </div>
  </MoonWitnessProvider>
)

const Section = ({ code, title, note, children }: { code: string; title: string; note: string; children: React.ReactNode }) => (
  <section style={panelStyle}>
    <p style={eyebrow}>{code}</p>
    <h2 style={titleStyle}>{title}</h2>
    <p style={noteStyle}>{note}</p>
    <div style={{ marginTop: 16 }}>{children}</div>
  </section>
)

const ReadinessBadge = ({ value }: { value: Readiness }) => {
  const tone = value === 'READY' ? 'success' : value === 'MIRROR' ? 'active' : 'warning'
  return <span className={`mw-signal-beacon mw-tone-${tone}`}><i/>{value}</span>
}

const token = (name: string, value: string, swatch: string) => (
  <div key={name} style={{ display:'grid',gridTemplateColumns:'36px 1fr',alignItems:'center',gap:10,padding:'8px 0',borderBottom:'1px solid rgba(255,255,255,.05)' }}>
    <span style={{ width:30,height:30,border:'1px solid rgba(255,255,255,.12)',background:swatch }}/>
    <div><strong style={{display:'block',fontSize:10}}>{name}</strong><small style={{color:'var(--mw-text-muted)',fontFamily:'ui-monospace,monospace'}}>{value}</small></div>
  </div>
)

const row = (layer:string, canonical:string, mirror:string, status:Readiness) => (
  <div key={`${layer}-${canonical}`} style={{display:'grid',gridTemplateColumns:'130px minmax(190px,1fr) minmax(190px,1fr) 90px',gap:10,padding:'9px 0',alignItems:'center',borderBottom:'1px solid rgba(255,255,255,.055)'}}>
    <strong style={{fontSize:9,color:'var(--mw-accent-secondary)'}}>{layer}</strong>
    <code style={{fontSize:9}}>{canonical}</code>
    <span style={{fontSize:9,color:'var(--mw-text-muted)'}}>{mirror}</span>
    <ReadinessBadge value={status}/>
  </div>
)

export const ConstitutionAndTokens: Story = {
  render: () => <Stage title="00–01 / Constitution + Tokens" subtitle="Freeze the visual language before screens. Figma may mirror this specification; the production token implementation remains in moonwitness-frontend-platform.">
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:18}}>
      <Section code="PHASE 0" title="Visual Constitution" note="One visual language for every MoonWitness application. Generated pages are downstream and may not override these rules.">
        <div style={{display:'grid',gap:9,fontSize:11}}>
          {['OBSIDIAN / CARBON — primary canvas','SMOKED GLASS — secondary surface','IVORY — primary typography','CRIMSON — restrained signal/focus','WARM METALLIC — secondary physical detail only','HAIRLINE / CALIBRATION — structural geometry','ONE DOMINANT INSTRUMENT — per viewport','NO SaaS CARD SOUP / NO GAME HUD / NO STEAMPUNK DOMINANCE'].map(item=><div key={item} style={{padding:'8px 10px',borderLeft:'2px solid var(--mw-accent-primary)',background:'rgba(255,255,255,.018)'}}>{item}</div>)}
        </div>
      </Section>
      <Section code="PHASE 1" title="Semantic Token Specimens" note="Representative semantic values. Exact production values come from the canonical frontend-platform token contract.">
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0 18px'}}>
          <div>{token('surface/void','#040608','#040608')}{token('surface/base','#0b0f13','#0b0f13')}{token('surface/raised','#10171e','#10171e')}{token('text/primary','ivory','#f3efe5')}</div>
          <div>{token('signal/crimson','restrained','#b62f35')}{token('signal/amber','secondary','#c2a46c')}{token('status/success','semantic','#70b596')}{token('status/error','semantic','#d8615b')}</div>
        </div>
      </Section>
    </div>
  </Stage>
}

export const RawPrimitiveContract: Story = {
  render: () => <Stage title="02 / Raw Primitive Contract" subtitle="The public showcase mirrors the primitive contract. Canonical executable masters live in moonwitness-frontend-platform/src/primitives.ts.">
    <Section code="PHASE 2 / CONTRACT MAP" title="Raw primitives — no page-local redraws" note="This table is intentionally a contract mirror instead of a second implementation owner.">
      <div style={{overflowX:'auto'}}>
        <div style={{minWidth:760}}>
          {row('LAYOUT','Raw/Surface · Panel · Divider','InstrumentPanel / page surfaces','MIRROR')}
          {row('LAYOUT','Raw/Stack · Inline · ScrollRegion','Storybook composition helpers','MIRROR')}
          {row('TEXT','Raw/Label · Telemetry · Coordinate','Page primitive typography','MIRROR')}
          {row('INPUT','Raw/Button · IconButton','InstrumentButton / ActionRail','MIRROR')}
          {row('INPUT','Raw/SearchInput','ArchiveGate','MIRROR')}
          {row('INPUT','Raw/Segment · Tab · Chip','SegmentedRail','MIRROR')}
          {row('STATUS','Raw/StatusDot · Badge · SignalMark','SignalBeacon / StatusMatrix','MIRROR')}
          {row('STATUS','Raw/ProgressTrack','ProgressRail','MIRROR')}
          {row('INSTRUMENT','Raw/CalibrationRing · Reticle','Orbital / aperture geometry','MIRROR')}
          {row('INSTRUMENT','Raw/Node · Connector · Scale','Lattice / chronology geometry','MIRROR')}
          {row('INSTRUMENT','Raw/LegendItem','Map / evidence legends','MIRROR')}
        </div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:12,marginTop:16}}>
        <div className="mw-page-surface"><h2>CONTROL</h2><div style={{display:'flex',gap:8,flexWrap:'wrap'}}><InstrumentButton tone="active">Primary</InstrumentButton><InstrumentButton variant="secondary">Secondary</InstrumentButton><InstrumentButton disabled>Disabled</InstrumentButton></div></div>
        <div className="mw-page-surface"><h2>SEARCH / SEGMENT</h2><ArchiveGate placeholder="Search canonical evidence…"/><div style={{height:10}}/><SegmentedRail value="verified" items={[{id:'all',label:'All'},{id:'verified',label:'Verified',count:15}]}/></div>
        <div className="mw-page-surface"><h2>STATE</h2><StatusMatrix items={[{label:'READY',value:'YES',tone:'success'},{label:'REVIEW',value:'OPEN',tone:'warning'}]}/></div>
      </div>
    </Section>
  </Stage>
}

export const ComponentsAndVariants: Story = {
  render: () => <Stage title="03–04 / Components + Variants" subtitle="Mature component families are reviewed here before they can participate in page templates.">
    <div style={{display:'grid',gridTemplateColumns:'280px minmax(0,1fr)',gap:18}}>
      <Section code="SHELL / NAV" title="Navigation Masters" note="Applications own their route items, but reuse one navigation geometry.">
        <MissionRail activeId="evidence" items={[{id:'overview',label:'Overview'},{id:'observe',label:'Observe'},{id:'evidence',label:'Evidence'},{id:'review',label:'Review'}]}/>
      </Section>
      <div style={{display:'grid',gap:18}}>
        <Section code="EVIDENCE" title="Evidence + Provenance" note="Source identity, reliability and provenance stay explicit and independently inspectable.">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1.3fr',gap:14}}>
            <EvidenceSpine steps={[{label:'SOURCE',state:'complete'},{label:'CLAIM',state:'complete'},{label:'REVIEW',state:'active'},{label:'ARCHIVE'}]}/>
            <div style={{display:'grid',gap:12}}><WitnessThread steps={[{id:'1',label:'SOURCE',state:'complete',tone:'success'},{id:'2',label:'EVIDENCE',state:'complete'},{id:'3',label:'REVIEW',state:'active',tone:'active'}]}/><ProvenanceRail items={[{id:'SRC-01',type:'OFFICIAL',title:'Primary evidence',meta:'verified',verified:true,tone:'success'}]}/></div>
          </div>
        </Section>
        <Section code="STATES" title="Feedback Variants" note="The same state language must survive desktop, mobile, light/high-contrast and reduced-motion modes.">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}><LoadingOrbit/><EmptySignal detail="No records in this bounded context."/></div>
        </Section>
      </div>
    </div>
  </Stage>
}

export const DomainInstruments: Story = {
  render: () => <Stage title="05 / Domain Instruments" subtitle="Reusable compositions bridge components and pages. They are not routes and they do not own business logic.">
    <div style={{display:'grid',gap:18}}>
      <Section code="INSTRUMENT / RESEARCH STATE" title="Research State Core" note="Orbital composition can become the dominant instrument without turning every page into a celestial dashboard.">
        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr',gap:14}}><OrbitalCore title="STATE" subtitle="bounded research" activeId="evidence" nodes={[{id:'obs',label:'OBS',value:'17'},{id:'evidence',label:'EVIDENCE',value:'15',tone:'active'},{id:'review',label:'REVIEW',value:'12',tone:'warning'},{id:'time',label:'TIME',value:'ΔT'}]}/><InspectorDock title="INSTRUMENT CONTRACT">One dominant instrument. Context remains subordinate.</InspectorDock></div>
      </Section>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:18}}>
        <Section code="INSTRUMENT / CORRELATION" title="Correlation Lattice" note="Temporal/geographic proximity and reviewed causality remain visually distinct."><CausalityLattice nodes={[{id:'a',x:18,y:35,label:'OBS',value:'17'},{id:'b',x:49,y:62,label:'ΔT',value:'TIME'},{id:'c',x:76,y:37,label:'REVIEW',value:'0–15',tone:'success'}]} edges={[{from:'a',to:'b',strength:.7},{from:'b',to:'c',strength:.35,dashed:true}]}/><div style={{height:10}}/><CausalityGuardrail/></Section>
        <Section code="INSTRUMENT / FOUR LENS" title="Four Revelation Lens" note="Exactly four canonical product channels. A detail state never creates a fifth lens."><RevelationLens items={[{key:'Q',name:"Al-Qur'an",tone:'success'},{key:'I',name:'Injil / Gospel',tone:'active'},{key:'T',name:'Taurat / Torah',tone:'warning'},{key:'Z',name:'Zabur / Psalms'}]}/></Section>
      </div>
      <Section code="INSTRUMENT / MAP" title="Map Instrument Family" note="Spread and Disaster share map geometry but remain independent data concepts."><MapRift title="MAP INSTRUMENT / CONTRACT" points={[{id:'a',x:24,y:45,tone:'active'},{id:'b',x:53,y:61,tone:'warning'},{id:'c',x:74,y:39,tone:'danger'}]}/></Section>
    </div>
  </Stage>
}

export const TemplateSkeletons: Story = {
  render: () => <Stage title="06 / Page Template Skeletons" subtitle="Templates define slots and hierarchy only. Routes and product data remain application-owned.">
    <div style={{display:'grid',gap:18}}>
      {[
        ['Template/ObservatoryPage','NAV · HEADER · DOMINANT INSTRUMENT · SECONDARY · OPTIONAL INSPECTOR'],
        ['Template/LedgerPage','NAV · HEADER · LEDGER/EVIDENCE INSTRUMENT · INSPECTOR'],
        ['Template/MapPage','NAV · HEADER · LAYER DOCK · MAP · TIMELINE · INSPECTOR'],
        ['Template/AnalysisPage','NAV · HEADER · ANALYSIS INSTRUMENT · FINDINGS · INSPECTOR'],
        ['Template/PipelinePage','NAV · HEADER · PIPELINE · STAGE SUMMARY · INSPECTOR'],
        ['Template/OperationsPage','NAV · HEADER · SYSTEM POSTURE · ALERTS'],
        ['Template/SettingsPage','NAV · HEADER · SETTINGS GROUPS'],
        ['Template/MobileInstrumentPage','HEADER · SINGLE INSTRUMENT · SHEET/INSPECTOR · MOBILE NAV'],
      ].map(([name,slots])=><div key={name} style={{...panelStyle,display:'grid',gridTemplateColumns:'240px 1fr auto',gap:14,alignItems:'center'}}><code style={{fontSize:10,color:'var(--mw-accent-secondary)'}}>{name}</code><span style={{fontSize:9,color:'var(--mw-text-muted)'}}>{slots}</span><ReadinessBadge value="READY"/></div>)}
    </div>
  </Stage>
}

export const ReadinessGate: Story = {
  render: () => <Stage title="07 / Component-System Readiness Gate" subtitle="Page work resumes only after this gate is green. Images remain last-stage references.">
    <div style={{display:'grid',gridTemplateColumns:'1.15fr .85fr',gap:18}}>
      <Section code="GATE" title="Executable Foundation" note="The canonical frontend-platform now contains tokens, raw primitives, mature components, domain instruments and reusable templates. Storybook mirrors them for visual review.">
        <div style={{display:'grid',gap:8}}>
          {[
            ['Visual constitution','READY'],['Semantic tokens','READY'],['Raw primitive contract','READY'],['Mature components','READY'],['Domain instrument layer','READY'],['Page template layer','READY'],['Storybook visual mirror','READY'],['Figma visual mirror','BLOCKED'],['Application pages','BLOCKED'],['Generated showcase images','BLOCKED'],
          ].map(([label,value])=><div key={label} style={{display:'flex',justifyContent:'space-between',gap:12,alignItems:'center',padding:'9px 0',borderBottom:'1px solid rgba(255,255,255,.055)'}}><strong style={{fontSize:10}}>{label}</strong><ReadinessBadge value={value === 'READY' ? 'READY' : 'BLOCKED'}/></div>)}
        </div>
      </Section>
      <Section code="RULE" title="What happens next" note="Do not generate Home yet. First visually approve this component workbench and reconcile any Storybook/Figma differences back into the reusable masters.">
        <div style={{display:'grid',gap:12}}>
          <TruthAperture score={85} label="COMPONENT READINESS" detail="visual review pending" tone="active"/>
          <MetricRail items={[{label:'CODE FOUNDATION',value:'READY',tone:'success'},{label:'VISUAL REVIEW',value:'NEXT',tone:'warning'},{label:'PAGE GEN',value:'BLOCKED'}]}/>
        </div>
      </Section>
    </div>
  </Stage>
}
