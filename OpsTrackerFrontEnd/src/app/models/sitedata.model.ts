import { ManPower } from "./manpower.model";
import { Material } from "./material.model";
import { Machine } from "./machine.model";
export class Sitedata {
    id: number;
    projectId: number;
    projectName: string;
    code: number;
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