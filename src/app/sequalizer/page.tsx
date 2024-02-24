'use client';

import { useEffect, useState } from "react";

import { NoteButton } from "@/components/keyboard/atoms/NoteButton";

import GuitarService from "@/core/application/GuitarService";
import ToneSoundPlayer from "@/core/infrastructure/ToneSoundPlayer";

export default function Sequalizer() {
  const [guitar, setGuitar] = useState<GuitarService | null>(null);

  useEffect(() => {
    const toneSoundPlayer = new ToneSoundPlayer();
    const guitarService = new GuitarService(toneSoundPlayer);

    setGuitar(guitarService);
  }, []);

  return (
    <main>
      <h1 className="text-3xl font-bold">Sequalizer!</h1>
      <button
        onMouseDown={() => guitar?.playSound("C4", "8")}
        onMouseUp={() => guitar?.stopSound("C4")}
        onMouseLeave={() => guitar?.stopSound("C4")}
        >Play C4</button>
      <NoteButton />
    </main>
  );
}
