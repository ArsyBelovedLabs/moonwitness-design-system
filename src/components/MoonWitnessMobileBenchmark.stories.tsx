import type { Meta, StoryObj } from '@storybook/react-vite'
import { MoonWitnessProvider } from './MoonWitnessProvider'
import { InstrumentHeader, MetricRail } from './PagePrimitives'
import { MapRift, SignalBeacon } from './Observatory'
import { TruthAperture } from './DataVizPrimitives'

const meta = {
  title: 'MoonWitness/Benchmark Screens/Mobile Instrument',
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'mobile1' },
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

export const MobileInstrumentGolden: Story = {
  render: () => (
    <MoonWitnessProvider theme="myth-fade" style={{ minHeight: '100vh', padding: '34px 12px' }}>
      <div className="mw-mobile-instrument">
        <div className="mw-mobile-instrument__screen">
          <InstrumentHeader
            code="MOBILE / 01"
            title="Observatory"
            subtitle="Re-hierarchized field instrument. Evidence first; context stays bounded."
            status={<SignalBeacon tone="success" label="LIVE" />}
          />
          <MetricRail items={metrics} />
          <div style={{ padding: 14, display: 'grid', gap: 12 }}>
            <TruthAperture label="TRUTH INTEGRITY" value={87} detail="repository-grounded" tone="active" />
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
          </div>
          <div className="mw-mobile-instrument__dock">
            <button className="is-active" type="button">Observe</button>
            <button type="button">Evidence</button>
            <button type="button">Map</button>
            <button type="button">Archive</button>
          </div>
        </div>
      </div>
    </MoonWitnessProvider>
  ),
}
