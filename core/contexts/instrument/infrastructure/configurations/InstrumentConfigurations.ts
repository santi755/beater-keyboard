type ToneConfig = {
  oscillatorType: string;
  envelope: {
    attack: number;
    decay: number;
    sustain: number;
    release: number;
  };
};

const instrumentConfigurations = new Map<string, ToneConfig>();

instrumentConfigurations.set('piano', {
  oscillatorType: 'sine',
  envelope: {
    attack: 0.1,
    decay: 0.2,
    sustain: 0.5,
    release: 1.0,
  },
});

instrumentConfigurations.set('guitar', {
  oscillatorType: 'triangle',
  envelope: {
    attack: 0.2,
    decay: 0.4,
    sustain: 0.6,
    release: 0.8,
  },
});

export default instrumentConfigurations;
