import type { Meta, StoryObj } from '@storybook/react-vite'
import { MoonWitnessProvider } from './MoonWitnessProvider'
import { CausalityGuardrail, CommandDeck, EvidenceSpine, MissionRail, ObservationShard, OrbitalCore, ReliabilityPrism, SignalBeacon, TemporalOrrery } from './Observatory'

const meta = {
  title: 'MoonWitness/Full Showcase',
  parameters: { layout: 'fullscreen' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

const missions = [
  { id: 'observe', label: 'Observe' },
  { id: 'evidence', label: 'Evidence' },
  { id: 'correlate', label: 'Correlate' },
  { id: 'map', label: 'Map' },
  { id: 'verify', label: 'Verify' },
  { id: 'archive', label: 'Archive' },
]
const nodes = [
  { id: 'signal', label: 'SIGNAL', value: '17' },
  { id: 'claim', label: 'CLAIM', value: '12' },
  { id: 'map', label: 'MAP', value: '08', tone: 'active' as const },
  { id: 'source', label: 'SOURCE', value: '15', tone: 'success' as const },
  { id: 'time', label: 'TIME', value: 'ΔT' },
]

function Showcase() {
  return <MoonWitnessProvider theme="myth-fade" style={{ minHeight: '100vh', padding: 30 }}>
    <CommandDeck
      header={<><div><div style={{ fontSize: 11, letterSpacing: '.16em', color: 'var(--mw-accent-secondary)' }}>MOONWITNESS DESIGN SYSTEM</div><h1 style={{ margin: '6px 0 0', fontSize: 26 }}>Cinematic Observatory Interface</h1></div><SignalBeacon tone="success" label="SYSTEM / ONLINE" /></>}
      rail={<MissionRail items={missions} activeId="evidence" />}
      core={<div style={{ display: 'grid', gap: 14 }}><OrbitalCore title="CORE" subtitle="evidence machine" nodes={nodes} activeId="map" /><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}><ObservationShard eyebrow="TRUTH INTEGRITY" title="87%" tone="active">Measured state, not decorative certainty.</ObservationShard><ReliabilityPrism score={92} /></div></div>}
      spine={<EvidenceSpine steps={[{label:'CLAIM',detail:'captured',state:'complete'},{label:'SOURCE',detail:'linked',state:'complete'},{label:'MATCH',detail:'corroborated',state:'complete'},{label:'REVIEW',detail:'under review',state:'active'},{label:'ARCHIVE',detail:'locked'}]} />}
      strip={<div style={{ display: 'grid', gap: 12 }}><TemporalOrrery activeIndex={4} points={[1,2,3,4,5,6,7].map(v=>({label:`T + 0${v-1}`}))}/><CausalityGuardrail /></div>}
    />
  </MoonWitnessProvider>
}

export const MythFade: Story = { render: () => <Showcase /> }
export const Cyan: Story = { render: () => <MoonWitnessProvider theme="cyan" style={{ minHeight:'100vh', padding:30 }}><Showcase /></MoonWitnessProvider> }
