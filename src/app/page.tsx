'use client';

import { useEffect } from 'react';

import { useBoardStore } from '@src/store';

import InitializeBoard from '@core/contexts/board/application/InitializeBoard';
import Instrument, {
  InstrumentType,
} from '@core/contexts/instrument/domain/Instrument';

import { Keyboard } from '@src/components/keyboard/patterns/Keyboard';
import { Stepboard } from '@src/components/keyboard/patterns/Stepboard';

import { InstrumentSelector } from '@src/components/keyboard/patterns/InstrumentSelector';

import container from '@core/config/inversify.config';
import { Provider } from '@src/config/ioc.react';

export default function Sequencer() {
  return (
    <Provider container={container}>
      <InstrumentSelector />

      <div className='flex'>
        <Keyboard />
        <Stepboard />
      </div>
    </Provider>
  );
}
