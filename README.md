# camaleon-rabbitmq

<img src="https://avatars2.githubusercontent.com/u/33430559?s=200" alt="Logo" width=200px/>

[![npm](https://img.shields.io/npm/dt/camaleon-rabbitmq.svg?style=flat-square)](https://npmjs.com/package/camaleon-rabbitmq)

`camaleon-rabbitmq` is a [RabbitMQ](https://www.rabbitmq.com) abstraction written in TypeScript.

## Installing

You can install `camaleon-rabbitmq` with [npm](http://npmjs.org):

```
npm install camaleon-rabbitmq
```

## Using
Camaleon RabbitMQ gives you two basic Pub/Sub functionalities: Producers and Subscribers.

### Producers

```javascript
import { ExampleMessage } from './example.message';
import { IProducer, RabbitProducer } from 'camaleon-rabbitmq';

const brokerAddress = process.env.BROKER_ADDRESS;
const producer: IProducer = new RabbitProducer(brokerAddress);
const exchangeName = 'example-message';

const message = new ExampleMessage();
producer.produce<ExampleMessage>(exchangeName, message);

```
You can find more examples of producers at [this repository](https://github.com/raafvargas/rabbitmq-typescript).


### Subscribers

```javascript
import { ExampleHandler } from 'camaleon-rabbitmq';
import { ExampleMessage } from './example.message';
import { BrokerStartup, IHandler } from 'camaleon-rabbitmq';

const brokerAddress = process.env.BROKER_ADDRESS;
const exchangeName = 'example-message';
const broker = new BrokerStartup(
	brokerAddress, exchangeName, new ExampleHandler());

broker.Run();

```
You can find more examples of subscribers at [this repository](https://github.com/raafvargas/rabbitmq-typescript).