import { zodResolver } from "@hookform/resolvers/zod";
import { EmployeeFormSchma, EmployeeFormType } from "../../models/Employee";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { FC } from "react";
import { SubmitInput } from "../input/submitInput";
import { Input } from "../input/input";

export const EmployeeForm: FC = () => {
  const methods = useForm<EmployeeFormType>({
    resolver: zodResolver(EmployeeFormSchma),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<EmployeeFormType> = (data) => {
    console.log(data);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                type="text"
                label="first name"
                placeholder="Enter your First name"
                name = "firstName"
                errors={errors}
            />

            <SubmitInput/>
        </form>
      </FormProvider>
    </>
  );
};
