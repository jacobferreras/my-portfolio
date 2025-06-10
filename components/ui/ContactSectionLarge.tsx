import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Fieldset from "../common/Fieldset";
import "bootstrap-icons/font/bootstrap-icons.css";

const ContactSectionLarge = () => {
  return (
    <div>
      <section
        id="contact"
        className="flex flex-col xl:justify-center px-4 py-14 xl:items-center min-h-200 z-10 relative gap-12 mb-8"
      >
        <div className="flex flex-col justify-center">
          <div>
            <motion.h1
              className="text-4xl text-base-content font-bold underline decoration-blue-600 decoration-4 flex mb-8"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Get in Touch
            </motion.h1>
          </div>

          <div className="mb-8">
            <motion.p
              className="text-lg text-base-content  max-w-2xl text-justify font-normal"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Have a question or want to work together? Feel free to drop me a
              message. I&apos;d love to hear from you!
            </motion.p>
          </div>

          <div className="flex flex-col md:flex-row md:gap-32 justify-start">
            <div className="flex flex-col">
              <div>
                <motion.h2
                  className="text-xl text-base-content font-bold flex mb-4"
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Contact Information
                </motion.h2>
              </div>
              <div>
                <motion.p
                  className="text-lg text-base-content max-w-2xl text-justify font-light"
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Fill up the form
                  <span className="hidden md:inline">
                    <br />
                  </span>
                  and I&apos;ll get back to you
                  <span className="hidden md:inline">
                    <br />
                  </span>
                  as soon as possible.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col gap-2 pt-4 mb-4"
              >
                <h1 className="text-lg text-base-content font-bold">
                  <i className="bi bi-envelope mr-2"></i>Email
                </h1>
                <p className="">jacobferreras24@gmail.com</p>

                <h1 className="text-lg text-base-content font-bold">
                  <i className="bi bi-telephone mr-2"></i>Phone
                </h1>
                <p className="">+63 953 378 5109</p>

                <h1 className="text-lg text-base-content font-bold">
                  <i className="bi bi-geo-alt mr-2"></i>Location
                </h1>
                <p className="">+63 953 378 5109</p>
              </motion.div>

              <div>
                <motion.h2
                  className="text-xl text-base-content font-bold flex mb-4"
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Connect with me
                </motion.h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-row gap-4 mb-4"
              >
                <Link
                  href="https://github.com/jacobferreras"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github text-3xl hover:text-blue-500"></i>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/jacob-ferreras-516a81273/ "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin text-3xl hover:text-blue-500"></i>
                </Link>
                <Link
                  href="https://www.instagram.com/itsme_jacobzxc/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-instagram text-3xl hover:text-blue-500"></i>
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Fieldset />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSectionLarge;
