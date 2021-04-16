import IModule from "../../interfaces/IModule";
import Bases from "./Bases";

class Module extends Bases implements IModule {
    name: string;
    disabled: boolean;
    description: string;
    commands: [];

    constructor(module: any) {
        super();

        this.name        = module || '';
        this.disabled    = module || false;
        this.description = module || '';
        this.commands = module || [];
    }
}

export default Module;