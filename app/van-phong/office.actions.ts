'use server';

import axios from 'axios';
import { OfficeFormData } from "./office.schema";


interface ApiResponse {
    id: number;
    name: string;
    address: string;
    phone: string;
}

export async function createOfficeAction(data: OfficeFormData) {
    try {
        const response = await axios.post<ApiResponse>(
            'http://jsonplaceholder.typicode.com/posts',
            data
        );

        console.log("SERVER ACTION: Phản hồi từ Backend thật:", response.data);

        if (data.name.toLowerCase() === 'test') {
            return {
                success: false,
                error: "Tên 'test' không được phép."
            };
        }
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