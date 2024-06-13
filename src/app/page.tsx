'use client';

import container from '@core/config/inversify.config';
import { Provider } from '@src/config/ioc.react';
import { Keyboard } from '@src/components/keyboard/patterns/Keyboard';
import { Stepboard } from '@src/components/keyboard/patterns/Stepboard';
import { Controls } from '@src/components/panelboard/patterns/Controls';
import { InstrumentSelector } from '@src/components/keyboard/patterns/InstrumentSelector';
import useEventNotifierInitialization from '@src/hooks/useEventNotifierInitialization';

export default function Sequencer() {
  useEventNotifierInitialization(container);

  return (
    <Provider container={container}>
      <InstrumentSelector />
      <Controls />
      <div className='flex'>
        <Keyboard />
        <Stepboard />
      </div>
    </Provider>
  );
}
