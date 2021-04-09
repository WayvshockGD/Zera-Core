import IModule from "../../interfaces/IModule";
import Bases from "./Bases";
declare class Module extends Bases implements IModule {
    name: string;
    disabled: boolean;
    description: string;
    constructor(module: any);
    execute(): void;
}
export default Module;
