import Eris from "eris";
declare class Pinner {
    _pinMessage(message: Eris.Message): void;
    _unPinMessage(message: Eris.Message): void;
}
declare const _default: Pinner;
export default _default;
