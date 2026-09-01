import type { Meta, StoryObj } from '@storybook/react-vite'
import { ApplicationShell } from './ApplicationShell'
import { MoonWitnessProvider } from './MoonWitnessProvider'
import { CausalityGuardrail, SignalBeacon } from './Observatory'
import { InspectorDock, InstrumentHeader } from './PagePrimitives'
import { EvidenceRules } from './EvidenceFlow'
import { InspectorRows, StatusMatrix } from './InteractionPrimitives'

const meta = {
  title: 'MoonWitness/Shared States',
  parameters: { layout: 'fullscreen', docs: { description: { component: 'Showcase-only state specimens for loading, empty, error, partial/offline, warning/degraded and reversible inspector/drawer behavior. Status must never rely on color alone.' } } },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

function StateFrame({name,tone='active',summary,children}:{name:string,tone?:'active'|'success'|'warning'|'danger'|'neutral',summary:string,children?:React.ReactNode}) {
  return <MoonWitnessProvider theme="myth-fade"><ApplicationShell label="MOONWITNESS" eyebrow="SHARED STATE SPECIMEN" status="FROZEN BASELINE / AUGUST 2026" statusTone="active"><div className="mw-page-stage"><InstrumentHeader code="SHARED" title={name} subtitle="Explicit state · keyboard-readable · non-color semantics" status={<SignalBeacon tone={tone} label={name.toUpperCase()}/>}/><div className="mw-page-stage__body"><div className="mw-page-surface" style={{minHeight:420,display:'grid',placeItems:'center',padding:32}}><div style={{maxWidth:680,width:'100%',display:'grid',gap:18}}><h2 style={{margin:0}}>{summary}</h2>{children ?? <StatusMatrix items={[{label:'STATE',value:name.toUpperCase(),tone},{label:'DATASET',value:'AUGUST 2026',tone:'active'},{label:'RECOVERY',value:'REVERSIBLE'}]}/>}</div></div></div></div></ApplicationShell></MoonWitnessProvider>
}

export const Loading: Story = { render:()=> <StateFrame name="Loading" summary="Fetching bounded evidence…"><StatusMatrix items={[{label:'REQUEST',value:'IN PROGRESS',tone:'active'},{label:'PREVIOUS CONTEXT',value:'PRESERVED',tone:'success'},{label:'CANCEL / RETURN',value:'AVAILABLE'}]}/></StateFrame> }
export const Empty: Story = { render:()=> <StateFrame name="Empty" tone="neutral" summary="No records match this bounded filter."><EvidenceRules rows={[{label:'Filter',value:'preserved',tone:'success'},{label:'Dataset',value:'unchanged',tone:'success'},{label:'Recovery',value:'clear filter',tone:'active'}]}/></StateFrame> }
export const Error: Story = { render:()=> <StateFrame name="Error" tone="danger" summary="Evidence surface is unavailable."><EvidenceRules rows={[{label:'Error state',value:'explicit',tone:'danger'},{label:'Context',value:'preserved',tone:'success'},{label:'Retry',value:'available',tone:'active'}]}/></StateFrame> }
export const PartialOffline: Story = { render:()=> <StateFrame name="Partial / Offline" tone="warning" summary="Partial data is shown from the last bounded state."><CausalityGuardrail>Partial or offline data must not be presented as complete evidence.</CausalityGuardrail></StateFrame> }
export const WarningDegraded: Story = { render:()=> <StateFrame name="Warning / Degraded" tone="warning" summary="Source posture is degraded but still inspectable."><StatusMatrix items={[{label:'SOURCE POSTURE',value:'DEGRADED',tone:'warning'},{label:'VISIBLE EVIDENCE',value:'BOUNDED',tone:'active'},{label:'PROVENANCE',value:'PRESERVED',tone:'success'}]}/></StateFrame> }
export const InspectorDrawer: Story = { render:()=> <StateFrame name="Inspector / Drawer" summary="Parent task context remains visible and reversible."><InspectorDock eyebrow="INSPECTOR" title="Evidence Context"><InspectorRows rows={[{label:'Parent surface',value:'preserved',tone:'success'},{label:'Return path',value:'explicit',tone:'success'},{label:'Mobile',value:'sheet / drawer',tone:'active'},{label:'Keyboard',value:'focus-contained',tone:'active'}]}/></InspectorDock></StateFrame> }
