import type { Meta, StoryObj } from '@storybook/react-vite'
import spriteMarkup from '../../openpencil/icons/moonwitness-core-icons.svg?raw'
import { MoonWitnessProvider } from './MoonWitnessProvider'

const meta = {
  title: 'MoonWitness/00 Icon System',
  parameters: { layout: 'fullscreen' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

type IconSpec = { name: string; label: string; family: string }

const icons: IconSpec[] = [
  { name: 'observation', label: 'Observation', family: 'evidence' },
  { name: 'evidence', label: 'Evidence', family: 'evidence' },
  { name: 'source', label: 'Source', family: 'evidence' },
  { name: 'provenance', label: 'Provenance', family: 'evidence' },
  { name: 'witness', label: 'Witness', family: 'evidence' },
  { name: 'search', label: 'Search', family: 'research' },
  { name: 'inspect', label: 'Inspect', family: 'research' },
  { name: 'compare', label: 'Compare', family: 'research' },
  { name: 'run', label: 'Run', family: 'operations' },
  { name: 'pause', label: 'Pause', family: 'operations' },
  { name: 'stop', label: 'Stop', family: 'operations' },
  { name: 'orbit', label: 'Orbit', family: 'celestial' },
  { name: 'moon', label: 'Moon', family: 'celestial' },
  { name: 'sun', label: 'Sun', family: 'celestial' },
  { name: 'eclipse', label: 'Eclipse', family: 'celestial' },
  { name: 'azimuth', label: 'Azimuth', family: 'celestial' },
  { name: 'altitude', label: 'Altitude', family: 'celestial' },
  { name: 'chronology', label: 'Chronology', family: 'temporal' },
  { name: 'coordinate', label: 'Coordinate', family: 'geo' },
  { name: 'epicenter', label: 'Epicenter', family: 'geo' },
  { name: 'trace', label: 'Trace', family: 'relation' },
  { name: 'radius', label: 'Radius', family: 'geo' },
  { name: 'correlation', label: 'Correlation', family: 'relation' },
  { name: 'verified', label: 'Verified', family: 'epistemic' },
  { name: 'partial', label: 'Partial', family: 'epistemic' },
  { name: 'unsupported', label: 'Unsupported', family: 'epistemic' },
  { name: 'unresolved', label: 'Unresolved', family: 'epistemic' },
]

const families = [...new Set(icons.map((icon) => icon.family))]

const shell: React.CSSProperties = {
  minHeight: '100vh',
  padding: 28,
  background: 'var(--mw-surface-void, #040506)',
  color: 'var(--mw-text-primary, #f0eadf)',
}

const panel: React.CSSProperties = {
  border: '1px solid rgba(240,234,223,.14)',
  background: 'linear-gradient(145deg,rgba(16,20,25,.92),rgba(5,7,9,.96))',
  padding: 18,
}

const eyebrow: React.CSSProperties = {
  margin: 0,
  font: '800 9px ui-monospace,SFMono-Regular,Menlo,monospace',
  letterSpacing: '.14em',
  textTransform: 'uppercase',
  color: 'var(--mw-accent-secondary, #c2a46c)',
}

const SpriteDefinitions = () => (
  <span
    aria-hidden="true"
    style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden', pointerEvents: 'none' }}
    dangerouslySetInnerHTML={{ __html: spriteMarkup }}
  />
)

const MirrorIcon = ({ name, size }: { name: string; size: number }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="square"
    strokeLinejoin="miter"
  >
    <use href={`#mw-icon-${name}`} />
  </svg>
)

const Provenance = () => (
  <div style={{ ...panel, display: 'grid', gap: 8 }}>
    <p style={eyebrow}>GENERATED MIRROR / NON-CANONICAL</p>
    <strong>Canonical owner: moonwitness-frontend-platform</strong>
    <code style={{ fontSize: 10, color: 'var(--mw-text-muted, #a9a39a)' }}>main@cbfe458fa65810ef370d036fa106d86059c6aff3</code>
    <p style={{ margin: 0, maxWidth: 860, fontSize: 11, lineHeight: 1.6, color: 'var(--mw-text-muted, #a9a39a)' }}>
      Storybook and OpenPencil inspect the exact canonical SVG symbol sheet. Geometry is not authored or forked in this repository.
    </p>
  </div>
)

export const CoreMatrix: Story = {
  render: () => (
    <MoonWitnessProvider theme="myth-fade">
      <main style={shell}>
        <SpriteDefinitions />
        <header style={{ display: 'grid', gap: 8, marginBottom: 22 }}>
          <p style={eyebrow}>MOONWITNESS / ICON SYSTEM / BATCH 01</p>
          <h1 style={{ margin: 0, fontSize: 30, fontWeight: 620 }}>27 canonical instrument icons</h1>
          <p style={{ margin: 0, maxWidth: 860, color: 'var(--mw-text-muted, #a9a39a)', lineHeight: 1.6 }}>
            24×24 canonical geometry, reviewed at 16 / 24 / 32. LINE · NODE · RING · TRACE · TICK · APERTURE anatomy remains available for semantic response work.
          </p>
        </header>
        <Provenance />
        <div style={{ display: 'grid', gap: 22, marginTop: 22 }}>
          {families.map((family) => (
            <section key={family} style={panel} aria-labelledby={`family-${family}`}>
              <p style={eyebrow}>{family}</p>
              <h2 id={`family-${family}`} style={{ margin: '5px 0 14px', fontSize: 17 }}>{family.toUpperCase()}</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 10 }}>
                {icons.filter((icon) => icon.family === family).map((icon) => (
                  <div key={icon.name} style={{ border: '1px solid rgba(240,234,223,.08)', padding: 12, minHeight: 112, display: 'grid', gap: 10, alignContent: 'space-between' }}>
                    <div style={{ display: 'flex', gap: 14, alignItems: 'center', minHeight: 38 }}>
                      {[16, 24, 32].map((size) => <MirrorIcon key={size} name={icon.name} size={size} />)}
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: 11 }}>{icon.label}</strong>
                      <code style={{ fontSize: 9, color: 'var(--mw-text-muted, #a9a39a)' }}>{icon.name}</code>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </MoonWitnessProvider>
  ),
}

export const EpistemicGrayscale: Story = {
  render: () => (
    <MoonWitnessProvider theme="myth-fade">
      <main style={shell}>
        <SpriteDefinitions />
        <header style={{ display: 'grid', gap: 8, marginBottom: 22 }}>
          <p style={eyebrow}>EPISTEMIC / GRAYSCALE LEGIBILITY</p>
          <h1 style={{ margin: 0, fontSize: 30, fontWeight: 620 }}>Status must survive without color</h1>
          <p style={{ margin: 0, maxWidth: 820, color: 'var(--mw-text-muted, #a9a39a)', lineHeight: 1.6 }}>
            Geometry and text carry state semantics. Color is supplemental; audio or motion can never be the only carrier of meaning.
          </p>
        </header>
        <div style={{ ...panel, display: 'grid', gridTemplateColumns: 'repeat(4,minmax(130px,1fr))', gap: 12, filter: 'grayscale(1)' }}>
          {icons.filter((icon) => icon.family === 'epistemic').map((icon) => (
            <div key={icon.name} style={{ border: '1px solid rgba(240,234,223,.14)', minHeight: 150, padding: 16, display: 'grid', placeItems: 'center', textAlign: 'center', gap: 10 }}>
              <MirrorIcon name={icon.name} size={48} />
              <div>
                <strong style={{ display: 'block', fontSize: 13 }}>{icon.label}</strong>
                <small style={{ color: 'var(--mw-text-muted, #a9a39a)' }}>geometry + explicit text</small>
              </div>
            </div>
          ))}
        </div>
      </main>
    </MoonWitnessProvider>
  ),
}
