'use client';

import { useEffect, useState, createContext, useContext } from 'react';

import GuitarService from '@/core/instrument/application/GuitarService';
import ToneSoundPlayer from '@/core/instrument/infrastructure/ToneSoundPlayer';

import { Keyboard } from '@/components/keyboard/patterns/Keyboard';
import { Stepboard } from '@/components/keyboard/patterns/Stepboard';

const InstrumentContext = createContext<GuitarService | null>(null);

export default function Sequencer() {
  const [instrument, setInstrument] = useState<GuitarService | null>(null);

  if (typeof window !== 'undefined') {
    console.log('página sequencer pageasd.tsx');
  }
  useEffect(() => {
    const toneSoundPlayer = new ToneSoundPlayer();
    const guitarService = new GuitarService(toneSoundPlayer);

    setInstrument(guitarService);
  }, []);

  return (
    <InstrumentContext.Provider value={instrument}>
      <div className='flex'>
        <Keyboard />
        <Stepboard />
      </div>
    </InstrumentContext.Provider>
  );
}

export function useInstrument() {
  const context = useContext(InstrumentContext);

  return context;
}
