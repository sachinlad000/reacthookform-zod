import { InputProps } from "./types";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { InputErrorMessage } from "./inputErrorMessage";

export const Input: FC<InputProps> = ({
  label,
  type,
  name,
  errors,
  placeholder,
}) => {
  const { register } = useFormContext();
  return (
    <div>
      <div>
        <label htmlFor={name} className="form__label">
          {label}
        </label>
        <input
          type={type}
          {...register(name)}
          placeholder={placeholder}
          className={`form__input ${
            Object.prototype.hasOwnProperty.call(errors, name) &&
            "border-red-500"
          } `}
        />
      </div>
      <InputErrorMessage name={name} errors={errors} />
    </div>
  );
};
