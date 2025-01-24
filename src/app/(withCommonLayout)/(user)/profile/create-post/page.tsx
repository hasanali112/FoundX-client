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
import { allDistict } from "@bangladeshi/bangladesh-address";

import FXInput from "@/src/components/Form/FXInput";
import FXDatePicker from "@/src/components/Form/FXDatePicker";
import dateToIso from "@/src/utils/dateToISO";
import FXSelect from "@/src/components/Form/FXSelect";
import { useGetCategoris } from "@/src/hooks/categories.hook";
import { ChangeEvent, useState } from "react";
import Image from "next/image";

const CreatePost = () => {
  const [imageFile, setImageFile] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);
  const {
    data: categories,
    isLoading: categoryLoading,
    isSuccess: categorySuccess,
  } = useGetCategoris();

  let categoryOptions: { key: string; label: string }[] = [];

  if (categories?.data && !categoryLoading) {
    categoryOptions = categories?.data
      ?.sort()
      .map((category: { _id: string; name: string }) => ({
        key: category._id,
        label: category.name,
      }));
  }

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

  const cityOptions = allDistict()
    .sort()
    .map((city: string) => ({
      key: city,
      label: city,
    }));

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    setImageFile((prev) => [...prev, file]);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreviews((prev) => [...prev, reader.result as string]);
      };

      reader.readAsDataURL(file);
    }
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
            <div className="min-w-fit flex-1">
              <FXSelect label="Select city" name="city" options={cityOptions} />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 py-2">
            <div className="min-w-fit flex-1">
              <FXSelect
                label="Select Category"
                name="category"
                options={categoryOptions}
                disabled={!categorySuccess}
              />
            </div>
            <div className="min-w-fit flex-1">
              <label
                className="bg-gray-500 w-full block h-full rounded-lg"
                htmlFor="image"
              >
                Upload Image
              </label>
              <input
                className="hidden"
                multiple
                type="file"
                id="image"
                onChange={(e) => handleImageChange(e)}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-end items-center gap-2 flex-wrap">
              {imagePreviews.length > 0 &&
                imagePreviews.map((imageDataUrl) => (
                  <div
                    key={imageDataUrl}
                    className="border border-dashed rounded-md p-1 size-20"
                  >
                    <Image
                      src={imageDataUrl}
                      alt="preview"
                      width={80}
                      height={80}
                      className="rounded-md h-full w-full object-center object-cover"
                    />
                  </div>
                ))}
            </div>
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
