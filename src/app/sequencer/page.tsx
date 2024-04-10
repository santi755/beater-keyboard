'use client';

import { useEffect, useState, createContext, useContext } from 'react';

import { useBoardStore } from '@src/store';

import InitializeBoard from '@core/contexts/board/application/InitializeBoard';
import InMemoryInstrumentRepository from '@core/contexts/instrument/infrastructure/InMemoryInstrumentRepository';
import Instrument, {
  InstrumentType,
} from '@core/contexts/instrument/domain/Instrument';

import { Keyboard } from '@src/components/keyboard/patterns/Keyboard';
import { Stepboard } from '@src/components/keyboard/patterns/Stepboard';
import container from '@src/config/inversify.config';
import CreateInstrument from '@core/contexts/instrument/application/CreateInstrument';
import { TYPES } from '@src/config/types';

const InstrumentContext = createContext<Instrument | null>(null);

export default function Sequencer() {
  const setBoard = useBoardStore((state) => state.setBoard);
  const [instrument, setInstrument] = useState<Instrument | null>(null);

  useEffect(() => {
    const createInstrument = container.get<CreateInstrument>(
      TYPES.CreateInstrument
    );
    const newInstrument = createInstrument.create(
      'Guitar',
      InstrumentType.GUITAR
    );
    setInstrument(newInstrument);

    const initializeBoard = new InitializeBoard();
    const boardInitialized = initializeBoard.execute();
    setBoard(boardInitialized);
  }, []);

  return (
    <InstrumentContext.Provider value={instrument}>
      <div className='flex'>
        <Keyboard />
        <Stepboard />
      </div>
    </InstrumentContext.Provider>
  );

  return <p>Testing inversify</p>;
}

export function useInstrument() {
  const context = useContext(InstrumentContext);

  return context;
}
