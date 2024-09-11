import {z} from 'zod'


export const EmployeeFormSchma = z.object({
    firstName : z.string().trim().min(1,{message :"First Name is required"})
});

export type EmployeeFormType = z.infer<typeof EmployeeFormSchma>;