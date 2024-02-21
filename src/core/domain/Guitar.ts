import * as Tone from "tone";

import Instrument from "./Instrument";

// This entity will be used to represent a guitar in the application
// It will implement the Instrument interface
export default class Guitar implements Instrument {
    constructor(public name: string, public toneConfig: any) {}

    static create(name: string): Guitar {
        const toneConfig = new Tone.PolySynth(Tone.Synth, {
            oscillator: {
                type: 'fmsquare',
                modulationType: 'sawtooth',
                modulationIndex: 3,
                harmonicity: 3.4
            },
            envelope: {
                attack: 0.001,
                decay: 0.1,
                sustain: 0.1,
                release: 0.1
            }
        }).toDestination();

        return new Guitar(name, toneConfig);
    }

    play(note: string, duration: string): void {
        console.log(`Playing the ${this.name} guitar!`);
    }
}