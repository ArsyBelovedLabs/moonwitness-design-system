import type { Meta, StoryObj } from '@storybook/react-vite'
import { MoonWitnessProvider } from './MoonWitnessProvider'
import { InstrumentHeader, MetricRail } from './PagePrimitives'
import { MapRift, ObservationShard, SignalBeacon } from './Observatory'
import { TruthAperture } from './DataVizPrimitives'
import { ProvenanceRail, WitnessThread } from './EvidenceFlow'

const meta = {
  title: 'MoonWitness/Benchmark Screens/Mobile Instrument',
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        component: 'A recomposed mobile instrument benchmark. The narrow mode changes hierarchy and navigation instead of shrinking the desktop composition.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const metrics = [
  { label: 'OBS', value: '17', detail: 'signals', tone: 'active' as const },
  { label: 'EVID', value: '15', detail: 'sources', tone: 'success' as const },
  { label: 'REVIEW', value: '12', detail: 'issues', tone: 'warning' as const },
  { label: 'CAUSE', value: '0–15', detail: '/100', tone: 'neutral' as const },
]

type MobileMode = 'observe' | 'evidence' | 'map' | 'archive'
const mobileModes: Array<{ id: MobileMode; label: string }> = [
  { id: 'observe', label: 'Observe' },
  { id: 'evidence', label: 'Evidence' },
  { id: 'map', label: 'Map' },
  { id: 'archive', label: 'Archive' },
]

function MobileInstrumentFrame({ activeMode, children }: { activeMode: MobileMode; children: React.ReactNode }) {
  return <MoonWitnessProvider theme="myth-fade" style={{ minHeight: '100vh', padding: '34px 12px' }}>
    <div className="mw-mobile-instrument">
      <div className="mw-mobile-instrument__screen">
        <div className="mw-mobile-instrument__statusline"><span>FIELD UNIT / {String(mobileModes.findIndex(mode => mode.id === activeMode) + 1).padStart(2, '0')}</span><span>ONE-HAND MODE</span></div>
        <InstrumentHeader
          code={`MOBILE / ${String(mobileModes.findIndex(mode => mode.id === activeMode) + 1).padStart(2, '0')}`}
          title={mobileModes.find(mode => mode.id === activeMode)?.label || 'Observatory'}
          subtitle="Re-hierarchized field instrument. Evidence first; context stays bounded."
          status={<SignalBeacon tone="success" label="LIVE" />}
        />
        <MetricRail items={metrics} />
        <div className="mw-mobile-instrument__body">{children}</div>
        <nav className="mw-mobile-instrument__dock" aria-label="Mobile instrument navigation">
          {mobileModes.map(mode => <button key={mode.id} className={mode.id === activeMode ? 'is-active' : ''} aria-current={mode.id === activeMode ? 'page' : undefined} type="button">{mode.label}</button>)}
        </nav>
      </div>
    </div>
  </MoonWitnessProvider>
}

export const MobileInstrumentGolden: Story = {
  render: () => <MobileInstrumentFrame activeMode="observe">
    <TruthAperture label="TRUTH INTEGRITY" score={87} detail="repository-grounded" tone="active" />
    <MapRift
      title="FIELD / GEO CONTEXT"
      points={[
        { id: 'a', x: 24, y: 46, tone: 'danger', size: 12 },
        { id: 'b', x: 51, y: 62, tone: 'warning', size: 10 },
        { id: 'c', x: 73, y: 38, tone: 'active', size: 9 },
      ]}
    >
      <div style={{ position: 'absolute', left: 14, right: 14, bottom: 13, display: 'flex', justifyContent: 'space-between', font: '700 7px ui-monospace,monospace', letterSpacing: '.12em', color: 'var(--mw-text-muted)' }}>
        <span>ΔT</span><span>DIST / KM</span><span>CONTEXT</span>
      </div>
    </MapRift>
    <div className="mw-causality-guardrail">
      <span>GUARDRAIL</span>
      <strong>Temporal/geographic proximity does not establish causation.</strong>
    </div>
  </MobileInstrumentFrame>,
}

export const MobileEvidenceMode: Story = {
  render: () => <MobileInstrumentFrame activeMode="evidence">
    <ObservationShard eyebrow="EVIDENCE / OFFICIAL" title="Source chain" meta="identity · scope · provenance" tone="success">Evidence is inspectable before interpretation enters the instrument.</ObservationShard>
    <WitnessThread steps={[{ id: 'source', label: 'SOURCE', detail: 'identified', state: 'complete', tone: 'success' }, { id: 'claim', label: 'CLAIM', detail: 'bounded', state: 'complete', tone: 'active' }, { id: 'review', label: 'REVIEW', detail: 'human check', state: 'active', tone: 'warning' }]} />
    <ProvenanceRail items={[{ id: 'SRC-01', type: 'OFFICIAL', title: 'Primary reference', meta: 'verified', tone: 'success', verified: true }, { id: 'SRC-02', type: 'OBSERVATION', title: 'Field record', meta: 'linked only', tone: 'active', verified: true }]} />
    <div className="mw-causality-guardrail"><span>GUARDRAIL</span><strong>Source identity does not become a causal claim.</strong></div>
  </MobileInstrumentFrame>,
}
