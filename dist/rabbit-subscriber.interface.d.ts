import * as broker from './message';
import { IHandler } from './handler.interface';
import { ISubscriber } from './subscriber.interface';
export declare class RabbitSubscriber<T extends broker.Message> implements ISubscriber<T> {
    private address;
    constructor(address: string);
    subscribe(queue: string, handler: IHandler<T>): Promise<any>;
}
