'use client';

import { useEffect, useState } from 'react';

import GuitarService from '@/core/application/GuitarService';
import ToneSoundPlayer from '@/core/infrastructure/ToneSoundPlayer';

import { KeyboardOctave } from '@/components/keyboard/patterns/KeyboardOctave';

export default function Sequencer() {
  const [guitar, setGuitar] = useState<GuitarService | null>(null);

  useEffect(() => {
    const toneSoundPlayer = new ToneSoundPlayer();
    const guitarService = new GuitarService(toneSoundPlayer);

    setGuitar(guitarService);
  }, []);

  return (
    <main>
      <KeyboardOctave
        onMouseDown={(note: string) => guitar?.playSound(note, '2')}
        onMouseUp={(note: string) => guitar?.stopSound(note)}
        onMouseLeave={(note: string) => guitar?.stopSound(note)}
        octave={4}
      />
    </main>
  );
}
