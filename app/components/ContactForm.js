"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sendEmail = (formData) => {
    setIsSubmitting(true);
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
        setIsSubmitting(false);
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
            tabIndex={6}
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
            tabIndex={7}
            type="email"
            aria-label="email form field"
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
            tabIndex={8}
            rows={4}
            placeholder="Type your message"
            className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register("message", { required: true })}
          ></textarea>
        </div>
        <div>
          {isSubmitting ? (
            <button
              role="button"
              aria-label="Message from contact form is sending"
              className="bg-lime-400  text-white font-semibold py-3 px-8 rounded-md focus:outline-none focus:shadow-outline flex items-center"
              disabled
            >
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Loading...
            </button>
          ) : (
            <button
              tabIndex={9}
              role="button"
              aria-label="Submit Message For Contacting LGS"
              className="hover:shadow-form hover:bg-lime-400 rounded-md bg-violet-600 py-3 px-8 text-base font-semibold text-white outline-none"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </>
  );
}
