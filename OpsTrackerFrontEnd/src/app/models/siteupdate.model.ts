import { Sitemanpowerdialog } from "./sitemanpowerdialog.model";
import { Sitematerialdialog } from "./sitematerialdialog.model";
import { Sitemachinedialog } from "./sitemachinedialog.model";


export class Siteupdate {
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
    manPowerDTO: Array<Sitemanpowerdialog>;
    materialDTO: Array<Sitematerialdialog>;
    machineDTO: Array<Sitemachinedialog>;

}