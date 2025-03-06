"use client";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();
  const sendEmail = (formData) => {
    const apiEndpoint = "/api/email";
    reset();
    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        toast(response.message, {
          style: {
            backgroundColor: "#A3E635",
            fontSize: "20px",
          },
        });
      })
      .catch((err) => {
        toast(err);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit(sendEmail)}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-black"
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register("name", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-black"
          >
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@domain.com"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register("email", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-3 block text-base font-medium text-black"
          >
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Type your message"
            className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register("message", { required: true })}
          ></textarea>
        </div>
        <div>
          <button className="hover:shadow-form hover:bg-lime-400 rounded-md bg-[#A89AE2] py-3 px-8 text-base font-semibold text-white outline-none">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
