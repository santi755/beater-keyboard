'use client';

import { useEffect, useState, createContext, useContext } from 'react';

import { useBoardStore } from '@/store';

import GuitarService from '@/core/contexts/instrument/application/GuitarService';
import ToneSoundPlayer from '@/core/contexts/instrument/infrastructure/ToneSoundPlayer';

import BoardService from '@/core/contexts/board/application/BoardService';
import CanvasGridBuilder from '@/core/contexts/board/infrastructure/CanvasGridBuilder';

import { Keyboard } from '@/components/keyboard/patterns/Keyboard';
import { Stepboard } from '@/components/keyboard/patterns/Stepboard';

const InstrumentContext = createContext<GuitarService | null>(null);

export default function Sequencer() {
  const board = useBoardStore((state) => state.board);
  const setBoard = useBoardStore((state) => state.setBoard);

  useEffect(() => {
    const canvasGridBuilder = new CanvasGridBuilder();
    const boardService = new BoardService(canvasGridBuilder);
    const boardInitialized = boardService.initializeBoard();

    setBoard(boardInitialized);
  }, []);

  const [instrument, setInstrument] = useState<GuitarService | null>(null);

  useEffect(() => {
    const toneSoundPlayer = new ToneSoundPlayer();
    const guitarService = new GuitarService(toneSoundPlayer);

    setInstrument(guitarService);
  }, []);

  return (
    <InstrumentContext.Provider value={instrument}>
      {JSON.stringify(board)}
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
