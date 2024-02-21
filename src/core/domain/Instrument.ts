// Instrument interface to create drum, keyboard, and other instruments
// We will use tone.js to create the instruments
export default interface Instrument {
    name: string;
    play: (note: string, duration: string) => void;
}