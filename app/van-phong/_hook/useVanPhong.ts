"use client";

import useSWR from "swr";
import axios from "axios";
import { useState } from "react";
import { useSWRConfig } from "swr";
import { createOfficeAction } from "../office.actions";
import { OfficeFormData } from "../office.schema";
import { off } from "process";

interface User {
    id: number;
    name: string;
    email: string;
    phone: string; 
}

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export const VANPHONG_CACHE_KEY = 'https://jsonplaceholder.typicode.com/users';

export function useVanPhong() { // HOOK LẤY DANH SÁCH VĂN PHÒNG
    const {
        data,
        error,
        isLoading
    } = useSWR<User[]>(VANPHONG_CACHE_KEY, fetcher)
    
    return {
        offices: data,
        isLoading,
        error
    }
}

export function useCreateVanPhong() {  // HOOK TẠO VĂN PHÒNG MỚI
    const {mutate} = useSWRConfig(); // lấy ham mutate từ SWR

    const [isPending, setIsPending] = useState(false);

    const trigger = async (data: OfficeFormData) => {
        setIsPending(true); // bắt đầu loading
        try {
            const result = await createOfficeAction(data);
            if (result.success) {
                mutate(VANPHONG_CACHE_KEY); // Bảo SWR fetch lại dữ liệu cho cache key này
                return result;
            } else {
                throw new Error(result.error); // Ném lỗi nếu server trả về lỗi
            }
        } catch (error) {
            console.error(error);
            return {
                success: false, error : (error as Error).message  
            }
        } finally {
            setIsPending(false); // tắt loading
        }
    }

    return {
        isPending,
        trigger
    };
}