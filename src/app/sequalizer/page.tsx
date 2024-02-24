'use client';

import { useEffect, useState } from "react";

import { NoteButton } from "@/components/keyboard/atoms/NoteButton";

import Guitar from "@/core/domain/Guitar";
import GuitarService from "@/core/application/GuitarService";
import ToneSoundPlayer from "@/core/infrastructure/ToneSoundPlayer";

export default function Sequalizer() {

  useEffect(() => {
    const guitarInstance = Guitar.create("Acoustic");
    setGuitar(guitarInstance);

  const toneSoundPlayer = new ToneSoundPlayer();
  const guitarService = new GuitarService(toneSoundPlayer);
  }, []);

  return (
    <main>
      <h1 className="text-3xl font-bold">Sequalizer!</h1>
      <button
        onMouseDown={() => guitarService.playSound("C4", "8")}
        onMouseUp={() => guitarService.stopSound("C4")}
        >Play C4</button>
      <NoteButton />
    </main>
  );
}
