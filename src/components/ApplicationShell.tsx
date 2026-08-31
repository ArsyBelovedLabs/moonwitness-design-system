import type { ReactNode } from 'react'
import './application-shell.css'
import { SignalBeacon, type Tone } from './Observatory'

export function ApplicationShell({ children, label = 'MOONWITNESS', eyebrow = 'CELESTIAL RESEARCH INSTRUMENT', status = 'SYSTEM / ONLINE', statusTone = 'success', topRail }: { children: ReactNode; label?: ReactNode; eyebrow?: ReactNode; status?: ReactNode; statusTone?: Tone; topRail?: ReactNode }) {
  return <div className="mw-application-shell">
    <div className="mw-application-shell__atmosphere" aria-hidden="true" />
    <div className="mw-application-shell__calibration" aria-hidden="true"><i/><i/><i/><i/></div>
    {topRail ? <div className="mw-application-shell__toprail"><div><small>{eyebrow}</small><strong>{label}</strong></div><div className="mw-application-shell__toprail-slot">{topRail}</div><SignalBeacon tone={statusTone} label={status}/></div> : null}
    <div className="mw-application-shell__content">{children}</div>
  </div>
}
