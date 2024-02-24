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
      <button
        onMouseDown={() => guitar?.playSound("D4", "8")}
        onMouseUp={() => guitar?.stopSound("D4")}
        onMouseLeave={() => guitar?.stopSound("D4")}
        >Play D4</button>
      <button
        onMouseDown={() => guitar?.playSound("A4", "8")}
        onMouseUp={() => guitar?.stopSound("A4")}
        onMouseLeave={() => guitar?.stopSound("A4")}
        >Play A4</button>
      <button
        onMouseDown={() => guitar?.playSound("B4", "8")}
        onMouseUp={() => guitar?.stopSound("B4")}
        onMouseLeave={() => guitar?.stopSound("B4")}
        >Play B4</button>
    </main>
  );
}
