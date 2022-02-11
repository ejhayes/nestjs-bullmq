import { FactoryProvider } from '@nestjs/common';
import { QueueEvents } from 'bullmq';
import * as bullProviders from '../bull.providers';
import { BullModuleOptions } from '../interfaces/bull-module-options.interface';

describe('Providers', () => {
  describe('createQueueProviders', () => {
    it("should use top-level queue name if it's not specified in factory options", async () => {
      const moduleOptions: BullModuleOptions = { name: 'top-level-queue-name' };
      const factoryModuleOptions: BullModuleOptions = {
        connection: { port: 6380 },
      };
      const provider = bullProviders.createQueueProviders([
        moduleOptions,
      ])[0] as FactoryProvider;

      let queue = provider.useFactory(factoryModuleOptions);
      expect(queue.name).toEqual(moduleOptions.name);
      await queue.close();

      factoryModuleOptions.name = 'low-level-queue-name';
      queue = provider.useFactory(factoryModuleOptions);
      expect(queue.name).toEqual(factoryModuleOptions.name);
      await queue.close();
    });
  });
  describe('createQueueEventsProviders', () => {
    it("should use top-level queue name if it's not specified in factory options", async () => {
      const moduleOptions: BullModuleOptions = { name: 'top-level-queue-name' };
      const factoryModuleOptions: BullModuleOptions = {
        connection: { port: 6380 },
      };

      const provider = bullProviders.createQueueProviders([
        moduleOptions,
      ])[0] as FactoryProvider;

      const eventsProvider = bullProviders.createQueueEventsProviders([
        moduleOptions,
      ])[0] as FactoryProvider;

      let queue = provider.useFactory(factoryModuleOptions);

      let events: QueueEvents = eventsProvider.useFactory(factoryModuleOptions);

      expect(events.name).toEqual(moduleOptions.name);

      await queue.close();

      factoryModuleOptions.name = 'low-level-queue-name';
      queue = provider.useFactory(factoryModuleOptions);
      events = eventsProvider.useFactory(factoryModuleOptions);
      expect(events.name).toEqual(factoryModuleOptions.name);

      await queue.close();
    });
  });
});
