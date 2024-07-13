import React, { useState } from "react";
import { useForm } from "react-hook-form";

function HookForm() {
  const [data, setData] = useState({ title: "", subtitle: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data, "data");
    setData(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input label="Title" {...register("title", { required: true })} />
        <br />
        {errors.title && <span>This title field is required</span>}
        <br />

        <input
          label="Sub Title"
          {...register("subtitle", { required: true })}
        />
        <br />
        {errors.subtitle && <span>This subtitle field is required</span>}
        <br />

        <input type="submit" />
      </form>

      <h2>{data.title}</h2>
      <h2>{data.subtitle}</h2>
    </>
  );
}

export default HookForm;
