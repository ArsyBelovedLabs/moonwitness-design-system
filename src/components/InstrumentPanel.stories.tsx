import type { Meta, StoryObj } from '@storybook/react-vite'
import { InstrumentPanel } from './InstrumentPanel'

const meta = {
  title: 'Primitives/InstrumentPanel',
  component: InstrumentPanel,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    title: 'Primary Instrument',
  },
} satisfies Meta<typeof InstrumentPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Crimson: Story = {
  args: {
    eyebrow: 'Observatory / 01',
    title: 'Primary Instrument',
    status: 'ONLINE',
  },
  render: args => (
    <div style={{ width: 760 }}>
      <InstrumentPanel {...args}>
        <p style={{ color: 'var(--mw-text-muted)' }}>Reusable MoonWitness instrument surface with semantic theme tokens.</p>
      </InstrumentPanel>
    </div>
  ),
}

export const CyanTheme: Story = {
  args: {
    eyebrow: 'Command / 02',
    title: 'Signal Instrument',
    status: 'READY',
  },
  render: args => (
    <div data-mw-theme="cyan" style={{ width: 760 }}>
      <InstrumentPanel {...args}>
        <p style={{ color: 'var(--mw-text-muted)' }}>Same component, different accent theme.</p>
      </InstrumentPanel>
    </div>
  ),
}
