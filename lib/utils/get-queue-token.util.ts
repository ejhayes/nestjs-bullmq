export function getQueueToken(name?: string): string {
  return name ? `BullQueue_${name}` : 'BullQueue_default';
}
export function getQueueEventsToken(name?: string): string {
  return name ? `BullQueueEvents_${name}` : 'BullQueueEvents_default';
}
