export const NO_QUEUE_FOUND = (name?: string) =>
  name
    ? `No Queue was found with the given name (${name}). Check your configuration.`
    : 'No Queue was found. Check your configuration.';
export const NO_QUEUE_EVENTS_FOUND = (name?: string) =>
  name
    ? `No QueueEvents was found with the given name (${name}). Check your configuration.`
    : 'No QueueEvents was found. Check your configuration.';
