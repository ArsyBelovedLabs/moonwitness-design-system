<Frame name="03 UX Flow" w={1440} h={900} bg="#040506" p={40} flex="col" gap={24}>
  <Frame w="fill" h="hug" flex="col" gap={8}>
    <Text size={11} weight="600" color="#8E949B">MOONWITNESS / UX EXECUTION CONTROL</Text>
    <Text size={32} weight="600" color="#F0EADF">Task → Object → Evidence → Return</Text>
    <Text size={14} color="#8E949B">Capabilities power screens. Applications own navigation. Objects own drill-down. Evidence owns trust.</Text>
  </Frame>

  <Frame w="fill" h="hug" flex="row" gap={12}>
    <Frame w="fill" h={116} p={16} bg="#090C0F" stroke="#D7281E" strokeWidth={1} flex="col" gap={8}>
      <Text size={10} weight="600" color="#D7281E">01 / ENTRY</Text>
      <Text size={15} weight="600" color="#F0EADF">Authorized task surface</Text>
      <Text size={12} color="#8E949B">Monthly Report / Spread / Disaster / Correlation / Review / Evidence / Lens / Pipeline</Text>
    </Frame>
    <Frame w="fill" h={116} p={16} bg="#090C0F" stroke="#2A3036" strokeWidth={1} flex="col" gap={8}>
      <Text size={10} weight="600" color="#8E949B">02 / SELECT</Text>
      <Text size={15} weight="600" color="#F0EADF">Primary object</Text>
      <Text size={12} color="#8E949B">Observation, evidence item, event, review issue, candidate or Research Run.</Text>
    </Frame>
    <Frame w="fill" h={116} p={16} bg="#090C0F" stroke="#2A3036" strokeWidth={1} flex="col" gap={8}>
      <Text size={10} weight="600" color="#8E949B">03 / INSPECT</Text>
      <Text size={15} weight="600" color="#F0EADF">Contextual detail</Text>
      <Text size={12} color="#8E949B">Desktop inspector / bounded drawer; mobile bottom sheet or full-height detail.</Text>
    </Frame>
    <Frame w="fill" h={116} p={16} bg="#090C0F" stroke="#6F9C7A" strokeWidth={1} flex="col" gap={8}>
      <Text size={10} weight="600" color="#6F9C7A">04 / TRUST</Text>
      <Text size={15} weight="600" color="#F0EADF">Evidence + provenance</Text>
      <Text size={12} color="#8E949B">Finding → evidence object → source + provenance → bounded analytic use.</Text>
    </Frame>
    <Frame w="fill" h={116} p={16} bg="#090C0F" stroke="#2A3036" strokeWidth={1} flex="col" gap={8}>
      <Text size={10} weight="600" color="#8E949B">05 / RETURN</Text>
      <Text size={15} weight="600" color="#F0EADF">Parent state restored</Text>
      <Text size={12} color="#8E949B">Filters, selection, viewport, month and route context remain meaningful.</Text>
    </Frame>
  </Frame>

  <Frame w="fill" h="fill" grid={true} columns="1fr 1fr" gap={16}>
    <Frame p={22} bg="#090C0F" stroke="#2A3036" strokeWidth={1} flex="col" gap={14}>
      <Text size={11} weight="600" color="#8E949B">PUBLIC ENTRY</Text>
      <Text size={20} weight="600" color="#F0EADF">Observatory Home Experience</Text>
      <Text size={13} color="#8E949B">No ninth Home route. Default entry resolves to the Monthly Report landing state.</Text>
      <Frame w="fill" h="hug" py={12} px={14} bg="#101419" stroke="#D7281E" strokeWidth={1}><Text size={12} color="#F0EADF">PUBLIC ENTRY → REPORT / 2026-08 → FROZEN BASELINE</Text></Frame>
      <Frame w="fill" h="hug" py={12} px={14} bg="#101419" stroke="#2A3036" strokeWidth={1}><Text size={12} color="#F0EADF">Choose one of 8 current public tasks</Text></Frame>
      <Frame w="fill" h="hug" py={12} px={14} bg="#101419" stroke="#2A3036" strokeWidth={1}><Text size={12} color="#F0EADF">Select object → inspector → evidence/provenance → return</Text></Frame>
    </Frame>

    <Frame p={22} bg="#090C0F" stroke="#2A3036" strokeWidth={1} flex="col" gap={14}>
      <Text size={11} weight="600" color="#8E949B">READINESS GATE</Text>
      <Text size={20} weight="600" color="#F0EADF">Before any golden screen</Text>
      <Frame w="fill" h="hug" py={12} px={14} bg="#101419" stroke="#6F9C7A" strokeWidth={1}><Text size={12} color="#F0EADF">COMPONENT_SYSTEM_READY</Text></Frame>
      <Frame w="fill" h="hug" py={12} px={14} bg="#101419" stroke="#6F9C7A" strokeWidth={1}><Text size={12} color="#F0EADF">UX_FLOW_READY</Text></Frame>
      <Frame w="fill" h="hug" py={12} px={14} bg="#101419" stroke="#B58A52" strokeWidth={1}><Text size={12} color="#F0EADF">RESPONSIVE REVIEW</Text></Frame>
      <Frame w="fill" h="hug" py={12} px={14} bg="#101419" stroke="#D7281E" strokeWidth={1}><Text size={12} color="#F0EADF">1 SCREEN = 1 EXPORT</Text></Frame>
    </Frame>
  </Frame>

  <Frame w="fill" h="hug" p={16} bg="#101419" stroke="#D7281E" strokeWidth={1} flex="row" justify="between" items="center">
    <Text size={10} weight="600" color="#D7281E">CAUSALITY GUARDRAIL</Text>
    <Text size={13} weight="600" color="#F0EADF">Temporal/geographic proximity does not establish causation.</Text>
  </Frame>
</Frame>
