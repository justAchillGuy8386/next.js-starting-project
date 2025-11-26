'use server';

import axios from 'axios';
import { OfficeFormData } from "./office.schema";
import { title } from 'process';


interface ApiResponse {
    id: number;
    title: string;
    body: string;
    userID: number;
}

export async function createOfficeAction(data: OfficeFormData) {
    try {
        const postData = {
            title: data.name, // tên vp -> name
            body: data.address, // body -> address
            userID: 1, // bắt buộc api
            phone: data.phone, // sẽ được api trả về
        };

        const response = await axios.post<ApiResponse>(
            'http://jsonplaceholder.typicode.com/posts',
            postData
        );

        console.log("SERVER ACTION: Phản hồi từ Backend thật:", response.data);

        return {
            success: true,
            message: `Đã tạo văn phòng ${data.name} thành công! (ID: ${response.data.id})`
        };
    
    } catch (error) {
        console.error("SERVER ACTION: Lỗi khi gọi API thật:", error);

        if (axios.isAxiosError(error)) {
            return {
                succcess: false,
                error: `Lỗi từ server: ${error.message}`
            };
        }

        return {
            success: false,
            message: "Đã có lỗi xảy ra."
        }
    }
}