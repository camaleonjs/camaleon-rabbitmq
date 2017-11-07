import { Message } from './message';
import { IHandler } from './handler.interface';
import { ISubscriber } from './subscriber.interface';
import { RabbitSubscriber } from './rabbit-subscriber.interface';

export class BrokerStartup<T extends Message> {
    private subscriber: ISubscriber<T>;

    constructor(
        private address: string, private queue: string, private handler: IHandler<T>) {
    }

    async Run(): Promise<any> {
        this.subscriber = new RabbitSubscriber<T>(this.address);
        await this.subscriber.subscribe(this.queue, this.handler);
    }
}
