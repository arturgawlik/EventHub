import { IEvent } from "../Interfaces/IEvent";

export class Event implements IEvent {
    name: string;
    description: string;
    addDate: string;
    startDate: string;
    endDate: string;
    address: string;
    userId: string;
    arrives: number;
}
