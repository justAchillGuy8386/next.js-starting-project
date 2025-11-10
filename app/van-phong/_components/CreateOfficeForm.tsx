"use client";

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {officeSchema, OfficeFormData} from '../office.schema';
import { createOfficeAction } from '../office.actions';

const inputStyle = "block w-full p-1 border border-gray-300 rounded mt-3";
const labelStyle = "font-medium block mt-5";
const errorStyle = "text-red-500 text-sm mt-1";

export default function CreateOfficeForm() {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset,
    } = useForm<OfficeFormData>({
        resolver: yupResolver(officeSchema)
    });

    const onSubmit = async (data: OfficeFormData) => {
        const result = await createOfficeAction(data);

        if (!result.success) {
            alert(result.error);
        } else {
            alert(result.message);
            reset();
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
            <h2 className="labelStyle">Tạo văn phòng mới</h2>
            <div>
                <label className={labelStyle}>Tên Văn phòng</label>
                <input 
                    {...register('name')}
                    className={inputStyle}
                    disabled={isSubmitting}
                />
                {errors.name && <p className={errorStyle}>{errors.name.message}</p>}
            </div>

            <div>
                <label className={labelStyle}>Địa chỉ</label>
                <input
                    {...register('address')}
                    className={inputStyle}
                    disabled={isSubmitting}
                />
                {errors.address && <p className={errorStyle}>{errors.address.message}</p>}
            </div>

            <div>
                <label className={labelStyle}>Số điện thoại</label>
                <input
                    {...register('phone')}
                    className={inputStyle}
                    disabled={isSubmitting}
                />
                {errors.phone && <p className={errorStyle}>{errors.phone.message}</p>}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white p-2 rounded mt-6 hover:bg-blue-600 disabled: bg-gray-400"   
            >
                {isSubmitting ? "Đang xử lý..." : "Tạo mới"}
            </button>
        </form>
    )
}