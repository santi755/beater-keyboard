import { NoteButton } from "@/components/keyboard/atoms/NoteButton";

import Guitar from "@/core/domain/Guitar";

const guitar = Guitar.create("Guitar");

// https://nextjs.org/docs/pages/building-your-application/rendering/client-side-rendering
// Try to render the page on the client side
export default function Sequalizer() {
  return (
    <main>
      <h1 className="text-3xl font-bold">Sequalizer!</h1>
      <button onClick={() => guitar.play("C4", "8")}>Play C4</button>
      <NoteButton />
    </main>
  );
}
