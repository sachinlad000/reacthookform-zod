import { FieldErrors } from "react-hook-form";
import { EmployeeFormType } from "../../models/Employee";


type employeeFieldName = |"firstName";

export interface InputErrorProps{
    name : employeeFieldName;
    errors : FieldErrors<EmployeeFormType>;
}

export interface InputProps extends InputErrorProps{
    label : string;
    type?: "text";
    placeholder : string;
}


