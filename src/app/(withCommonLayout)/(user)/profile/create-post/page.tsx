"use client";

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";

import FXInput from "@/src/components/Form/FXInput";
import FXDatePicker from "@/src/components/Form/FXDatePicker";
import dateToIso from "@/src/utils/dateToISO";

const CreatePost = () => {
  const methods = useForm();

  const { control, handleSubmit } = methods;

  const { append, fields, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const postData = {
      ...data,
      questions: data.questions.map(
        (question: { value: string }) => question.value
      ),
      dateFound: dateToIso(data.dateFound),
    };

    console.log(postData);
  };

  const handleFieldAppend = () => {
    append({ name: "questions" });
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap gap-2 py-2">
            <div className="min-w-fit flex-1">
              <FXInput label="Title" name="title" />
            </div>
            <div className="min-w-fit flex-1">
              <FXDatePicker label="Found Date" name="dateFound" />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 py-2">
            <div className="min-w-fit flex-1">
              <FXInput label="Location" name="location" />
            </div>
            <div className="min-w-fit flex-1"></div>
          </div>

          <Divider className="my-5" />

          <div className="flex items-center justify-between">
            <h1 className="text-xl">Owner Varification Questions</h1>
            <Button onPress={() => handleFieldAppend()}>Append</Button>
          </div>

          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center w-full">
              <FXInput name={`questions.${index}.value`} label="Question" />
              <Button onPress={() => remove(index)}>Remove</Button>
            </div>
          ))}

          <Divider className="my-5" />

          <Button type="submit">Post</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreatePost;
