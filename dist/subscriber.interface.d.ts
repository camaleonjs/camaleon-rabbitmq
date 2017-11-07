import { Message } from './message';
import { IHandler } from './handler.interface';
export interface ISubscriber<T extends Message> {
    subscribe(queue: string, hander: IHandler<T>): Promise<any>;
}
