import NotesService from '@/core/contexts/stepboard/application/NotesService';
import JsonNoteProvider from '@/core/contexts/stepboard/infrastructure/JsonNoteProvider';

import { useStepboardCanvas } from '@/hooks/useStepboardCanvas';

export const Stepboard = () => {
  const noteProvider = new JsonNoteProvider();
  const notesService = new NotesService(noteProvider);

  const notes = notesService.getNotesAvailable();
  const { canvasRef, grid } = useStepboardCanvas({
    steps: 12,
    notes,
  });

  return (
    <>
      <canvas ref={canvasRef} width={800} height={384}></canvas>
    </>
  );
};
