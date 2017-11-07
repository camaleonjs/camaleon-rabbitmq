import * as amqp from 'amqplib';
import { Message } from './message';
import { IProducer } from './producer.interface';

export class RabbitProducer implements IProducer {
    constructor(private address: string) {
    }

    async produce<T extends Message>(queue: string, message: T): Promise<any> {
        const connection = await amqp.connect(this.address);
        const channel = await connection.createChannel();
        const json = JSON.stringify(message);

        await channel.assertExchange(queue, 'direct', {
            durable: true
        });

        channel.publish(queue, '', new Buffer(json));
        await channel.close();
        await connection.close();
    }
}
