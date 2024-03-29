'use client';

import { useEffect, useState, createContext, useContext } from 'react';

import useStore from '@/store/useStore';
import { useBoardStore } from '@/store/board/useBoardStore';

import GuitarService from '@/core/contexts/instrument/application/GuitarService';
import ToneSoundPlayer from '@/core/contexts/instrument/infrastructure/ToneSoundPlayer';

import { Keyboard } from '@/components/keyboard/patterns/Keyboard';
import { Stepboard } from '@/components/keyboard/patterns/Stepboard';

const InstrumentContext = createContext<GuitarService | null>(null);

export default function Sequencer() {
  const initializeStepboard = useStore(
    useBoardStore,
    (state) => state.initializeStepboard
  );
  console.log(initializeStepboard);

  const [instrument, setInstrument] = useState<GuitarService | null>(null);

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
