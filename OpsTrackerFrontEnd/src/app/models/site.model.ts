import { ManPower } from "./manpower.model";
import { Material } from "./material.model";
import { Machine } from "./machine.model";

export class Site {
    id: number;
    projectId: number;
    projectName: string;
    name: string;
    address: string;
    contractType: string;
    regionalManagerId: number;
    seniorManagerId: number;
    asstSeniorManagerId: number;
    siteInchargeId: number;
    manPowerDTO: Array<ManPower>;
    materialDTO: Array<Material>;
    machineDTO: Array<Machine>;

}