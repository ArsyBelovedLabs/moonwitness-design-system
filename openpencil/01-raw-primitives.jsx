<Frame name="01 Raw Primitives" w={1440} h={900} bg="#040506" p={40} flex="col" gap={24}>
  <Frame w="fill" h="hug" flex="col" gap={8}>
    <Text size={11} weight="600" color="#8E949B">MOONWITNESS / RAW CONTRACT</Text>
    <Text size={32} weight="600" color="#F0EADF">Primitive Geometry</Text>
    <Text size={14} color="#8E949B">These shapes establish the visual grammar used by every page. They are not page-local inventions.</Text>
  </Frame>

  <Frame w="fill" h="fill" grid={true} columns="1fr 1fr 1fr" rows="1fr 1fr" gap={16}>
    <Frame p={20} bg="#090C0F" stroke="#2A3036" strokeWidth={1} flex="col" gap={14}>
      <Text size={11} weight="600" color="#8E949B">SURFACE / PANEL / DIVIDER</Text>
      <Frame w="fill" h={72} bg="#101419" stroke="#2A3036" strokeWidth={1}/>
      <Frame w="fill" h={1} bg="#2A3036"/>
      <Frame w="fill" h={72} bg="#090C0F" stroke="#D7281E" strokeWidth={1}/>
    </Frame>

    <Frame p={20} bg="#090C0F" stroke="#2A3036" strokeWidth={1} flex="col" gap={12}>
      <Text size={11} weight="600" color="#8E949B">BUTTON / TAB / CHIP</Text>
      <Frame w="fill" h="hug" flex="row" gap={8}>
        <Frame px={16} py={10} bg="#D7281E" rounded={4}><Text size={12} weight="600" color="#F0EADF">PRIMARY</Text></Frame>
        <Frame px={16} py={10} bg="#101419" stroke="#2A3036" strokeWidth={1} rounded={4}><Text size={12} weight="600" color="#F0EADF">SECONDARY</Text></Frame>
      </Frame>
      <Frame w="fill" h="hug" flex="row" gap={8}>
        <Frame px={12} py={8} bg="#101419" stroke="#D7281E" strokeWidth={1}><Text size={11} color="#F0EADF">ACTIVE TAB</Text></Frame>
        <Frame px={12} py={8} bg="#090C0F" stroke="#2A3036" strokeWidth={1}><Text size={11} color="#8E949B">TAB</Text></Frame>
      </Frame>
      <Frame px={10} py={5} bg="#101419" stroke="#2A3036" strokeWidth={1} rounded={8}><Text size={10} weight="600" color="#8E949B">FROZEN BASELINE</Text></Frame>
    </Frame>

    <Frame p={20} bg="#090C0F" stroke="#2A3036" strokeWidth={1} flex="col" gap={12}>
      <Text size={11} weight="600" color="#8E949B">INPUT / SEARCH</Text>
      <Frame w="fill" h={44} px={14} bg="#101419" stroke="#2A3036" strokeWidth={1} rounded={4} flex="row" items="center" gap={10}>
        <Text size={14} color="#D7281E">⌁</Text>
        <Text size={13} color="#8E949B">Search evidence, source, observation…</Text>
      </Frame>
      <Frame w="fill" h={44} px={14} bg="#101419" stroke="#D7281E" strokeWidth={2} rounded={4} flex="row" items="center">
        <Text size={13} color="#F0EADF">Focused input state</Text>
      </Frame>
    </Frame>

    <Frame p={20} bg="#090C0F" stroke="#2A3036" strokeWidth={1} flex="col" gap={12}>
      <Text size={11} weight="600" color="#8E949B">CALIBRATION / RETICLE / SCALE</Text>
      <Frame w="fill" h="fill" flex="row" justify="around" items="center">
        <Ellipse w={116} h={116} stroke="#2A3036" strokeWidth={1}/>
        <Frame w={116} h={116} bg="#040506" stroke="#D7281E" strokeWidth={1} flex="col" justify="center" items="center">
          <Line w={90} stroke="#2A3036" strokeWidth={1}/>
          <Line h={90} stroke="#2A3036" strokeWidth={1}/>
          <Ellipse w={14} h={14} stroke="#D7281E" strokeWidth={1}/>
        </Frame>
      </Frame>
    </Frame>

    <Frame p={20} bg="#090C0F" stroke="#2A3036" strokeWidth={1} flex="col" gap={12}>
      <Text size={11} weight="600" color="#8E949B">NODE / CONNECTOR / LEGEND</Text>
      <Frame w="fill" h="fill" flex="row" items="center" justify="between">
        <Frame w={64} h={64} bg="#101419" stroke="#D7281E" strokeWidth={1} rounded={32} flex="col" justify="center" items="center"><Text size={10} weight="600" color="#F0EADF">OBS</Text></Frame>
        <Line w={120} stroke="#2A3036" strokeWidth={1}/>
        <Frame w={64} h={64} bg="#101419" stroke="#6F9C7A" strokeWidth={1} rounded={32} flex="col" justify="center" items="center"><Text size={10} weight="600" color="#F0EADF">EVID</Text></Frame>
      </Frame>
      <Frame w="fill" h="hug" flex="row" gap={12}>
        <Ellipse w={8} h={8} bg="#D7281E"/><Text size={11} color="#8E949B">signal / focus</Text>
        <Ellipse w={8} h={8} bg="#6F9C7A"/><Text size={11} color="#8E949B">verified</Text>
      </Frame>
    </Frame>

    <Frame p={20} bg="#090C0F" stroke="#2A3036" strokeWidth={1} flex="col" gap={12}>
      <Text size={11} weight="600" color="#8E949B">STATUS / NON-COLOR SEMANTICS</Text>
      <Frame w="fill" h="fill" flex="col" gap={8}>
        <Frame w="fill" h={34} px={10} bg="#101419" stroke="#6F9C7A" strokeWidth={1} flex="row" justify="between" items="center"><Text size={11} color="#F0EADF">VERIFIED</Text><Text size={11} color="#6F9C7A">✓</Text></Frame>
        <Frame w="fill" h={34} px={10} bg="#101419" stroke="#B58A52" strokeWidth={1} flex="row" justify="between" items="center"><Text size={11} color="#F0EADF">PARTIAL</Text><Text size={11} color="#B58A52">△</Text></Frame>
        <Frame w="fill" h={34} px={10} bg="#101419" stroke="#B84D46" strokeWidth={1} flex="row" justify="between" items="center"><Text size={11} color="#F0EADF">ERROR</Text><Text size={11} color="#B84D46">!</Text></Frame>
      </Frame>
    </Frame>
  </Frame>
</Frame>
