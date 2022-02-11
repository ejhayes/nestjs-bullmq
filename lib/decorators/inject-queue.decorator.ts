import { Inject } from '@nestjs/common';
import { getQueueEventsToken, getQueueToken } from '../utils';

export const InjectQueue = (name?: string): ParameterDecorator =>
  Inject(getQueueToken(name));

export const InjectQueueEvents = (name?: string): ParameterDecorator =>
  Inject(getQueueEventsToken(name));
