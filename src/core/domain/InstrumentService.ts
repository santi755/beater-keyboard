export default interface InstrumentService {
    playSound(note: string, duration?: string): void;
    stopSound(note: string): void;
}