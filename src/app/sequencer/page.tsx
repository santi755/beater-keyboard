'use client';

import { useEffect, useState, createContext, useContext } from 'react';

import { useBoardStore } from '@src/store';

import InitializeBoard from '@core/contexts/board/application/InitializeBoard';
import Instrument, {
  InstrumentType,
} from '@core/contexts/instrument/domain/Instrument';

import { Keyboard } from '@src/components/keyboard/patterns/Keyboard';
import { Stepboard } from '@src/components/keyboard/patterns/Stepboard';
import container from '@src/config/inversify.config';
import { TYPES } from '@src/config/types';
import ListAvailableInstruments from '@core/contexts/instrument/application/ListAvailableInstrument';
import GetSelectedInstrument from '@core/contexts/instrument/application/GetSelectedInstrument';
import SelectInstrument from '@core/contexts/instrument/application/SelectInstrument';

export default function Sequencer() {
  /*
  const setBoard = useBoardStore((state) => state.setBoard);
*/
  const [instruments, setInstruments] = useState<Instrument[] | []>([]);
  const [selectedInstrument, setSelectedInstrument] =
    useState<Instrument | null>(null);

  const listAvailableInstruments = container.get<ListAvailableInstruments>(
    TYPES.ListAvailableInstruments
  );

  const selectInstrument = container.get<SelectInstrument>(
    TYPES.SelectInstrument
  );

  const getSelectedInstrument = container.get<GetSelectedInstrument>(
    TYPES.GetSelectedInstrument
  );

  useEffect(() => {
    listAvailableInstruments.execute().then((instruments) => {
      setInstruments(instruments);
    });

    selectInstrument.execute(instruments[0]);

    getSelectedInstrument.execute().then((instrument) => {
      setSelectedInstrument(instrument);
    });
    /*
    const initializeBoard = new InitializeBoard();
    const boardInitialized = initializeBoard.execute();
    setBoard(boardInitialized);
    */
  }, []);

  return (
    <div>
      <p>Listado de instrumentos. Click para seleccionar uno:</p>
      <ul>
        {instruments.map((instrument, index) => (
          <li key={index} onClick={() => selectInstrument.execute(instrument)}>
            {instrument.id.value} - {instrument.name}
          </li>
        ))}
      </ul>

      <p>Instrumento seleccionado:</p>
      <p>{selectedInstrument?.name}</p>
      {/*
    <InstrumentContext.Provider value={instrument}>
      <div className='flex'>
        <Keyboard />
        <Stepboard />
      </div>
    </InstrumentContext.Provider>
    */}
    </div>
  );
}
