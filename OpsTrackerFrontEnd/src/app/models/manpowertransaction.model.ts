export class ManPowerTransaction {
    id: number;
    submitDate: Date;
    planned: number;
    actual: number; 
    shortfall: number;
    continuedWithOt: number;
    continuedWithOutOt: number;
    newComer: number;
    shiftTime: string;
    projectId: number;
    siteId: number;
}