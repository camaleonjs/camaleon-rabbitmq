import { Message } from './message';

export interface IHandler<T extends Message> {
    name: string;
    handle(message: T): Promise<boolean>;
}
