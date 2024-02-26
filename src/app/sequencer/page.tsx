'use client';

import { useEffect, useState, createContext, useContext } from 'react';

import GuitarService from '@/core/application/GuitarService';
import ToneSoundPlayer from '@/core/infrastructure/ToneSoundPlayer';

import { Keyboard } from '@/components/keyboard/patterns/Keyboard';

const InstrumentContext = createContext<GuitarService | null>(null);

export default function Sequencer() {
  const [instrument, setInstrument] = useState<GuitarService | null>(null);

  useEffect(() => {
    const toneSoundPlayer = new ToneSoundPlayer();
    const guitarService = new GuitarService(toneSoundPlayer);

    setInstrument(guitarService);
  }, []);

  return (
    <InstrumentContext.Provider value={instrument}>
      <Keyboard />
    </InstrumentContext.Provider>
  );
}

export function useInstrument() {
  const context = useContext(InstrumentContext);

  return context;
}
