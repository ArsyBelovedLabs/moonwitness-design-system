import type { HTMLAttributes, ReactNode } from 'react'
import '../styles/tokens.css'
import '../styles/system.css'
import '../styles/cinematic.css'
import '../styles/fidelity.css'

export type MoonWitnessTheme = 'crimson' | 'cyan' | 'amber' | 'emerald' | 'violet' | 'neutral' | 'myth-fade'

export type MoonWitnessProviderProps = HTMLAttributes<HTMLDivElement> & {
  theme?: MoonWitnessTheme
  children?: ReactNode
}

export function MoonWitnessProvider({ theme = 'crimson', children, className = '', ...props }: MoonWitnessProviderProps) {
  return (
    <div {...props} data-mw-theme={theme} className={`mw-system-root ${className}`.trim()}>
      <div className="mw-atmosphere" aria-hidden="true" />
      {children}
    </div>
  )
}
