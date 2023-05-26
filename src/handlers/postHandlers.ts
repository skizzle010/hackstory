import axios from 'axios';
import Cookies from 'js-cookie';

const postHandlers = async (
    URL: string,
    formData: object,
    protect: boolean,
    type: string = 'application/json'
) => {
    const headers = {
        'Content-Type': type,
        Authorization: '',
    };
    if (protect) headers.Authorization = `Bearer ${Cookies.get('token')}`;
    const response: any = {
        status: 0,
        data: {},
    };

    await axios
        .post(URL, formData, { headers })
        .then((res) => {
            response.status = 1;
            response.data = res.data;
        })
        .catch((err) => {
            response.status = 0;
            response.data = err.response.data;
        });
    return response;
};

export default postHandlers;