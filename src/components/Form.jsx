import React from "react";
import { useForm } from "react-hook-form";

function HookForm({}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data, "data");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input label="Title" {...register("title", { required: true })} />
      <br />
      {errors.title && <span>This title field is required</span>}
      <br />

      <input label="Sub Title" {...register("subtitle", { required: true })} />
      <br />
      {errors.subtitle && <span>This subtitle field is required</span>}
      <br />

      <input type="submit" />
    </form>
  );
}

export default HookForm;
