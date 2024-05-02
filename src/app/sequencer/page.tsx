'use client';

import { useEffect, useState, createContext, useContext } from 'react';

import { useBoardStore } from '@src/store';

import InitializeBoard from '@core/contexts/board/application/InitializeBoard';
import Instrument, {
  InstrumentType,
} from '@core/contexts/instrument/domain/Instrument';

import { Keyboard } from '@src/components/keyboard/patterns/Keyboard';
import { Stepboard } from '@src/components/keyboard/patterns/Stepboard';

import { InstrumentSelector } from '@src/components/keyboard/patterns/InstrumentSelector';

export default function Sequencer() {
  /*
  const setBoard = useBoardStore((state) => state.setBoard);
*/

  useEffect(() => {
    /*
    const initializeBoard = new InitializeBoard();
    const boardInitialized = initializeBoard.execute();
    setBoard(boardInitialized);
    */
  }, []);

  return (
    <div>
      <p>Listado dinamico select</p>
      <InstrumentSelector />
      {/*
    <InstrumentContext.Provider value={instrument}>
      <div className='flex'>
        <Keyboard />
        <Stepboard />
      </div>
    </InstrumentContext.Provider>
    */}
    </div>
  );
}
