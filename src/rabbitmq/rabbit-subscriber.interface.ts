import * as amqp from 'amqplib';
import { Message } from 'amqplib';
import * as broker from '../message';
import { IHandler } from '../handler.interface';
import { ISubscriber } from '../subscriber.interface';

export class RabbitSubscriber<T extends broker.Message> implements ISubscriber<T> {
    constructor(private address: string) {
    }

    async subscribe(queue: string, handler: IHandler<T>): Promise<any> {
        const connection = await amqp.connect(this.address);
        const channel = await connection.createChannel();
        await channel.prefetch(1);
        await channel.assertQueue(handler.name);
        await channel.assertExchange(queue, 'direct', { durable: true });
        await channel.bindQueue(handler.name, queue, '');
        await channel.consume(handler.name, async message => {
            const body = <T>JSON.parse(message.content.toString());
            if (body && await handler.handle(body)) {
                channel.ack(message);
            }
        });
    }
}
