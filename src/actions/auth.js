import { types } from '../types/types';
import axios from 'axios'


export const startTextSend = (text) => {
    return (dispatch) => {

        axios.get(`http://localhost:9000/iecho?text=${text}`)
            .then(() => {
                dispatch(sendText(text));
            })
            .catch(e => {
                console.log('Error:', e);
            })

    }
}

export const sendText = (text) => ({
    type: types.sendText,
    payload: {
        text
    }
});

