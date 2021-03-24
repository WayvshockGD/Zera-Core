import Eris from "eris";

class Pinner {

    public _pinMessage(message: Eris.Message) {
        try {
            message.pin();
        } catch (error) {
            console.log(error);
        }
    }

    public _unPinMessage(message: Eris.Message) {
        try {
            message.unpin();
        } catch (error) {
            console.log(error);
        }
    }
}

export default Pinner;