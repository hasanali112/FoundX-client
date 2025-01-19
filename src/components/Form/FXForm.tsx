"use client";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface IFormConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

interface IPosps extends IFormConfig {
  children: React.ReactNode;
  onSubmit: SubmitHandler<any>;
}

const FXForm = ({ children, onSubmit, defaultValues, resolver }: IPosps) => {
  const formConfig: IFormConfig = {};

  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  const submitHandler = methods.handleSubmit;

  return (
    <FormProvider {...methods}>
      <form onSubmit={submitHandler(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default FXForm;
