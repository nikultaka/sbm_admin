import { Eggy } from '@s-r0/eggy-js';

async function ToastAlert({ title, msg, msgType }) {
    await Eggy({
        title: title,
        message: msg,
        type: msgType,
        position: "top-right"
    });
}



export default ToastAlert;