'use client';

import { useEffect, useState, createContext, useContext } from 'react';

import { useBoardStore } from '@src/store';

import InitializeBoard from '@core/contexts/board/application/InitializeBoard';
import CreateInstrument from '@core/contexts/instrument/application/CreateInstrument';
import InMemoryInstrumentRepository from '@core/contexts/instrument/infrastructure/InMemoryInstrumentRepository';
import Instrument, {
  InstrumentType,
} from '@core/contexts/instrument/domain/Instrument';

import { Keyboard } from '@src/components/keyboard/patterns/Keyboard';
import { Stepboard } from '@src/components/keyboard/patterns/Stepboard';

const InstrumentContext = createContext<Instrument | null>(null);

export default function Sequencer() {
  const board = useBoardStore((state) => state.board);
  const setBoard = useBoardStore((state) => state.setBoard);

  const inMemoryInstrumentRepository = new InMemoryInstrumentRepository();
  const createInstrument = new CreateInstrument(inMemoryInstrumentRepository);
  const [instrument, setInstrument] = useState<Instrument>(
    createInstrument.create('Guitar', InstrumentType.GUITAR)
  );

  useEffect(() => {
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
}

export function useInstrument() {
  const context = useContext(InstrumentContext);

  return context;
}
