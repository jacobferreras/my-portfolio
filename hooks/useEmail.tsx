import React from "react";
import emailjs from "emailjs-com";
import { useState } from "react";

const useEmail = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send("service_qhic5ux", "template_308t0of", form, "cxQqofTxMS7FXjMVw")
      .then(() => {
        setShowModal(true);
        setForm({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => alert("Failed to send message."))
      .finally(() => setIsLoading(false));
  };

  handleChange;
  handleSubmit;

  return {
    form,
    showModal,
    isLoading,
    handleChange,
    handleSubmit,
    setShowModal,
  };
};

export default useEmail;
