import Eris from "eris";
declare class Embedder {
    modEmbed(message: Eris.Message, text: {
        title: string;
        desc: string;
    }): Promise<Eris.Message<Eris.TextableChannel>>;
    LogEmbed(message: Eris.Message, text: {
        title: string;
        desc: string;
    }): Promise<Eris.Message<Eris.TextableChannel>>;
}
declare const _default: Embedder;
export default _default;
