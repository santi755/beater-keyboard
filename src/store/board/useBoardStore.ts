import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import BoardService from '@/core/contexts/board/application/BoardService';
import CanvasGridBuilder from '@/core/contexts/board/infrastructure/CanvasGridBuilder';
import Board from '@/core/contexts/board/domain/Board';

type BoardState = {
  board: Board | null;
  initializeStepboard: () => void;
};

export const useBoardStore = create(
  persist(
    (set, get) => ({
      board: null,
      initializeStepboard: () => {
        const canvasGridBuilder = new CanvasGridBuilder();
        const boardService = new BoardService(canvasGridBuilder);
        const board = boardService.initializeBoard();
        return set({ board });
      },
    }),
    {
      name: 'board-store',
    }
  )
);
