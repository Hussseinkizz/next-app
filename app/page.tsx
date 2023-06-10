"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const [userName, setUserName] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getFormData = (data: any) => {
    let userInput = data.username;
    setUserName(userInput);
  };

  return (
    <section className="grid w-full place-items-center p-8">
      <form className="form">
        <input {...register("username")} type="text" placeholder="your name" />
        <button
          type="submit"
          onClick={handleSubmit(getFormData)}
          className="mt-4 flex bg-blue-500 px-4 py-2 text-white"
        >
          Sign up
        </button>
      </form>
      <h1 className="mt-8 flex w-full font-bold">UserName: {userName} </h1>
    </section>
  );
}
