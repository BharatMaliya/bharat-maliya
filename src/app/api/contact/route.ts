import axios from "axios";
import {mailOptions, transporter} from "@/app/config/nodemailer";

// import nodemailer from "nodemailer";


export async function POST(request: Request) {

    try {
        const body = await request.json();

        await transporter.sendMail({
            ...mailOptions,
            subject: 'Contacted from portfolio ',
            text: `Hello World!`,
            html: `<div>
    <h3>${body.name}</h3>
    <a href="mailto:${body.email}" target="_blank">${body.email}</a>
    <p>${body.message}</p>
</div>`
        });
        return Response.json({'status': 'ok'}, {
            status: 200
        });
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return Response.json(error.response?.data || {}, {
                status: error.response?.status || 500
            });
        } else {
            return Response.json(error, {
                status: 500
            });
        }
    }
}