'use client';

import { useEffect, useState, createContext, useContext } from 'react';

import { useBoardStore } from '@/store';

import GuitarService from '@/core/contexts/instrument/application/GuitarService';
import ToneSoundPlayer from '@/core/contexts/instrument/infrastructure/ToneSoundPlayer';

import BoardService from '@/core/contexts/board/application/BoardService';
import CanvasGridDrawer from '@/core/contexts/board/infrastructure/CanvasGridDrawer';

import { Keyboard } from '@/components/keyboard/patterns/Keyboard';
import { Stepboard } from '@/components/keyboard/patterns/Stepboard';

const InstrumentContext = createContext<GuitarService | null>(null);

export default function Sequencer() {
  const board = useBoardStore((state) => state.board);
  const setBoard = useBoardStore((state) => state.setBoard);
  const [instrument, setInstrument] = useState<GuitarService | null>(null);

  useEffect(() => {
    const toneSoundPlayer = new ToneSoundPlayer();
    const guitarService = new GuitarService(toneSoundPlayer);

    setInstrument(guitarService);

    const canvasGridDrawer = new CanvasGridDrawer();
    const boardService = new BoardService(canvasGridDrawer);
    const boardInitialized = boardService.initializeBoard();

    setBoard(boardInitialized);
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
