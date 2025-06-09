import React from "react";

const Fieldset = () => {
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-auto md:w-100 lg:w-166 xl:w-228  border p-4">
      <label className="label">Name</label>
      <input type="name" className="input w-auto" placeholder="Name" />

      <label className="label">Email</label>
      <input type="email" className="input w-auto" placeholder="Email" />

      <label className="label">Subject</label>
      <input type="subject" className="input w-auto" placeholder="Subject" />

      <label className="label">Message</label>
      <textarea className="input w-auto h-30" placeholder="Message" />

      <button className="btn btn-neutral mt-4">Send Message</button>
    </fieldset>
  );
};

export default Fieldset;
