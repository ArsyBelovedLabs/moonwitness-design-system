<Frame name="02 Domain Instruments" w={1440} h={900} bg="#040506" p={40} flex="col" gap={24}>
  <Frame w="fill" h="hug" flex="col" gap={8}>
    <Text size={11} weight="600" color="#8E949B">MOONWITNESS / DOMAIN INSTRUMENTS</Text>
    <Text size={32} weight="600" color="#F0EADF">Research Instrument Library</Text>
    <Text size={14} color="#8E949B">One dominant instrument per viewport. Pages compose these instruments; they do not redraw their geometry.</Text>
  </Frame>

  <Frame w="fill" h="fill" grid={true} columns="1.2fr 1fr" rows="1fr 1fr" gap={16}>
    <Frame p={24} bg="#090C0F" stroke="#2A3036" strokeWidth={1} flex="col" gap={12}>
      <Text size={11} weight="600" color="#8E949B">INSTRUMENT / RESEARCH STATE CORE</Text>
      <Frame w="fill" h="fill" justify="center" items="center">
        <Ellipse w={270} h={270} stroke="#2A3036" strokeWidth={1}/>
        <Ellipse w={200} h={200} stroke="#2A3036" strokeWidth={1}/>
        <Ellipse w={124} h={124} bg="#101419" stroke="#D7281E" strokeWidth={1}/>
        <Text size={22} weight="600" color="#F0EADF">AUG 2026</Text>
      </Frame>
    </Frame>

    <Frame p={24} bg="#090C0F" stroke="#2A3036" strokeWidth={1} flex="col" gap={14}>
      <Text size={11} weight="600" color="#8E949B">INSTRUMENT / EVIDENCE TRAVERSAL</Text>
      <Frame w="fill" h="fill" flex="col" gap={10}>
        <Frame w="fill" h={54} px={14} bg="#101419" stroke="#6F9C7A" strokeWidth={1} flex="row" justify="between" items="center"><Text size={12} color="#F0EADF">OBSERVATION</Text><Text size={11} color="#6F9C7A">COMPLETE</Text></Frame>
        <Frame w="fill" h={54} px={14} bg="#101419" stroke="#D7281E" strokeWidth={1} flex="row" justify="between" items="center"><Text size={12} color="#F0EADF">EVIDENCE OBJECT</Text><Text size={11} color="#D7281E">ACTIVE</Text></Frame>
        <Frame w="fill" h={54} px={14} bg="#101419" stroke="#2A3036" strokeWidth={1} flex="row" justify="between" items="center"><Text size={12} color="#F0EADF">SOURCE + PROVENANCE</Text><Text size={11} color="#8E949B">NEXT</Text></Frame>
      </Frame>
    </Frame>

    <Frame p={24} bg="#090C0F" stroke="#2A3036" strokeWidth={1} flex="col" gap={12}>
      <Text size={11} weight="600" color="#8E949B">INSTRUMENT / MAP RIFT</Text>
      <Frame w="fill" h="fill" bg="#040506" stroke="#2A3036" strokeWidth={1} overflow="hidden">
        <Line w="fill" stroke="#2A3036" strokeWidth={1}/>
        <Line h="fill" stroke="#2A3036" strokeWidth={1}/>
        <Ellipse w={16} h={16} bg="#D7281E"/>
        <Ellipse w={11} h={11} bg="#6D97A0"/>
        <Ellipse w={13} h={13} bg="#B58A52"/>
        <Frame w="hug" h="hug" px={10} py={6} bg="#101419" stroke="#2A3036" strokeWidth={1}><Text size={10} color="#8E949B">ΔT / KM / LAYER</Text></Frame>
      </Frame>
    </Frame>

    <Frame p={24} bg="#090C0F" stroke="#2A3036" strokeWidth={1} flex="col" gap={12}>
      <Text size={11} weight="600" color="#8E949B">INSTRUMENT / CAUSALITY LATTICE</Text>
      <Frame w="fill" h="fill" bg="#040506" stroke="#2A3036" strokeWidth={1}>
        <Frame w={76} h={52} bg="#101419" stroke="#6D97A0" strokeWidth={1} flex="col" justify="center" items="center"><Text size={10} color="#F0EADF">OBS</Text></Frame>
        <Frame w={76} h={52} bg="#101419" stroke="#B58A52" strokeWidth={1} flex="col" justify="center" items="center"><Text size={10} color="#F0EADF">EVENT</Text></Frame>
        <Frame w={76} h={52} bg="#101419" stroke="#6F9C7A" strokeWidth={1} flex="col" justify="center" items="center"><Text size={10} color="#F0EADF">REVIEW</Text></Frame>
        <Line w={180} stroke="#2A3036" strokeWidth={1}/>
        <Line w={160} stroke="#2A3036" strokeWidth={1}/>
      </Frame>
    </Frame>
  </Frame>
</Frame>
