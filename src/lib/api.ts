import axios from "axios";
import {contactBodyTypes} from "@/common/types";

export const sendContactForm = async (data: contactBodyTypes) => {
    try {
        const response = await axios.post('/api/contact', data, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        throw new Error('Failed to send message');
    }
};
