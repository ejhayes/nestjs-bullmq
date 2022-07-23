import { Job, WorkerListener, QueueEventsListener } from 'bullmq';
import {
  BullQueueAdvancedProcessor,
  BullQueueAdvancedSeparateProcessor,
} from './interfaces/bull.interfaces';

// @see https://stackoverflow.com/a/49725198
export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> &
      Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];

export type BullQueueProcessor =
  | BullQueueProcessorCallback
  | BullQueueAdvancedProcessor
  | BullQueueSeparateProcessor
  | BullQueueAdvancedSeparateProcessor;

export type BullQueueProcessorCallback = (job: Job) => Promise<any>;

export type BullQueueSeparateProcessor = string;

export type BullQueueEvent = keyof WorkerListener | keyof QueueEventsListener;

export type BullQueueEventOptions = RequireOnlyOne<
  {
    eventName: BullQueueEvent;
    name?: string;
    id?: string;
  },
  'id' | 'name'
>;

export type QueueEventDecoratorOptions = RequireOnlyOne<
  { id?: string; name?: string },
  'id' | 'name'
>;
