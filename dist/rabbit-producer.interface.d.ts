import { Message } from './message';
import { IProducer } from './producer.interface';
export declare class RabbitProducer implements IProducer {
    private address;
    constructor(address: string);
    produce<T extends Message>(queue: string, message: T): Promise<any>;
}
