import type { Meta, StoryObj } from '@storybook/react-vite'
import { InstrumentPanel } from './InstrumentPanel'

const meta = {
  title: 'Primitives/InstrumentPanel',
  component: InstrumentPanel,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof InstrumentPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Crimson: Story = {
  render: () => (
    <div style={{ width: 760 }}>
      <InstrumentPanel eyebrow="Observatory / 01" title="Primary Instrument" status={<span>ONLINE</span>}>
        <p style={{ color: 'var(--mw-text-muted)' }}>Reusable MoonWitness instrument surface with semantic theme tokens.</p>
      </InstrumentPanel>
    </div>
  ),
}

export const CyanTheme: Story = {
  render: () => (
    <div data-mw-theme="cyan" style={{ width: 760 }}>
      <InstrumentPanel eyebrow="Command / 02" title="Signal Instrument" status={<span>READY</span>}>
        <p style={{ color: 'var(--mw-text-muted)' }}>Same component, different accent theme.</p>
      </InstrumentPanel>
    </div>
  ),
}
