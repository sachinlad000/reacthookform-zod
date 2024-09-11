
import { FC } from "react"
import { InputErrorProps } from "./types"
import { ErrorMessage } from "@hookform/error-message"

export const InputErrorMessage : FC<InputErrorProps> = ({errors,name}) => {
    return(
        <ErrorMessage
            errors={errors}
            name={name}
            render={({message}) => <p>{message}</p> }
        />
    );
};