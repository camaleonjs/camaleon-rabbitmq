import { Message } from './message';
import { IHandler } from './handler.interface';
export declare class BrokerStartup<T extends Message> {
    private address;
    private queue;
    private handler;
    private subscriber;
    constructor(address: string, queue: string, handler: IHandler<T>);
    Run(): Promise<any>;
}
