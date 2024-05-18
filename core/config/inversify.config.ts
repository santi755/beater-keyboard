import 'reflect-metadata';
import { Container } from 'inversify';
import { configureBoard } from '@core/config/dependencies/board.config';
import { configureInstrument } from '@core/config/dependencies/instrument.config';
import { configureEvent } from '@core/config/dependencies/event.config';

const container = new Container();

configureBoard(container);
configureInstrument(container);
configureEvent(container);

export default container;
