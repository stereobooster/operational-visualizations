declare class EventEmitter {
    private subscribers;
    on(eventName: string, callback: any): void;
    removeListener(eventName: string, callback: any): void;
    removeAllListeners(eventName: string): void;
    emit(eventName: string, eventData?: any): void;
    removeAll(): void;
}
export default EventEmitter;
//# sourceMappingURL=event_bus.d.ts.map