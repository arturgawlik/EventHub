import { IEvent } from "../Interfaces/IEvent";

export class Event implements IEvent {
    name: string;
    addDate: Date;
    startDate: Date;
    endDate: Date;
    address: string;
    userId: string;
    arrives: number;


}
