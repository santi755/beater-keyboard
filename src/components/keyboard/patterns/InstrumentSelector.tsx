'use client';

import { useEffect, useState } from 'react';
import { TYPES } from '@core/config/types';
import { useInjection } from '@src/config/ioc.react';

import ListAvailableInstruments from '@core/contexts/instrument/application/ListAvailableInstrument';
import GetSelectedInstrument from '@core/contexts/instrument/application/GetSelectedInstrument';
import SelectInstrument from '@core/contexts/instrument/application/SelectInstrument';

import Instrument from '@core/contexts/instrument/domain/Instrument';

import { Select } from '@src/components/common/Select';
import InitializeInstruments from '@core/contexts/instrument/application/InitializeInstruments';

export const InstrumentSelector = () => {
  const [instruments, setInstruments] = useState<Instrument[] | []>([]);
  const [selectedInstrument, setSelectedInstrument] =
    useState<Instrument | null>(null);

  const initializeInstruments = useInjection<InitializeInstruments>(
    TYPES.InitializeInstruments
  );
  const listAvailableInstruments = useInjection<ListAvailableInstruments>(
    TYPES.ListAvailableInstruments
  );
  const selectInstrument = useInjection<SelectInstrument>(
    TYPES.SelectInstrument
  );
  const getSelectedInstrument = useInjection<GetSelectedInstrument>(
    TYPES.GetSelectedInstrument
  );

  useEffect(() => {
    async function initialize() {
      await initializeInstruments.execute();
      const instruments = await listAvailableInstruments.execute();
      setInstruments(instruments);
    }

    initialize();
  }, []);

  const localSelectItem = async (instrument: Instrument) => {
    selectInstrument.execute(instrument);
    const selected = await getSelectedInstrument.execute();
    setSelectedInstrument(selected);
  };

  const instrumentOptions = [
    { value: '', label: 'Selecciona un instrumento' },
    ...instruments.map((instrument) => ({
      value: instrument.id.value,
      label: instrument.name,
    })),
  ];

  return (
    <div>
      <Select
        options={instrumentOptions}
        onChange={(value) => {
          const instrument = instruments.find(
            (instrument) => instrument.id.value === value
          );
          if (instrument) {
            localSelectItem(instrument);
          }
        }}
      />

      <p>Instrumento seleccionado: </p>
      <p>{selectedInstrument?.name}</p>
    </div>
  );
};
