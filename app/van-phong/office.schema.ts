import * as yup from 'yup';

export const officeSchema = yup.object().shape({
    name: yup.string()
        .required("Tên văn phòng là bắt buộc")
        .min(3, "Tên văn phòng phải dài hơn 3 kí tự"),
    address: yup.string()
        .required("Địa chỉ là bắt buộc")
        .max(255, "Địa chỉ không được vượt quá 255 kí tự"),
    phone: yup.string()
        .required("Số điện thoại là bắt buộc")
        .matches(/^[0-9]{10}$/, "Số điện thoại phải đúng 10 số"),
});

export type OfficeFormData = yup.InferType<typeof officeSchema>;