import 'reflect-metadata';
import { Container } from 'inversify';
import { configureBoard } from '@core/config/dependencies/board.config';
import { configureInstrument } from '@core/config/dependencies/instrument.config';

const container = new Container();

configureBoard(container);
configureInstrument(container);

export default container;
