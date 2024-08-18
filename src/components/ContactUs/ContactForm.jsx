import React, { useState } from "react";
import { IoPlayForwardSharp } from "react-icons/io5";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import ReactJsAlert from "reactjs-alert";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

<Toaster position="bottom-right" reverseOrder={false} />;

const validationSchema = Yup.object({
  name: Yup.string().required("Your Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email Address is required"),
  phone: Yup.string()
    .matches(
      /^\d{1,11}$/,
      "Phone Number must be a number and not more than 11 digits"
    )
    .required("Phone Number is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const ContactForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };
  const [status, setStatus] = useState(false);
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Simulate form submission
      // console.log("Form data submitted:", values);
      //   setStatus(true);
      //   setType("success");
      //   setTitle("This is a success alert");

      // Show success message
      Swal.fire({
        icon: "success",
        title: "Message sent successfully",
        showConfirmButton: false,
        timer: 1500,
      });

      //   toast.promise(saveSettings(settings), {
      //     loading: "Saving...",
      //     success: <b>Settings saved!</b>,
      //     error: <b>Could not save.</b>,
      //   });

      resetForm();
      navigate("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error.message);
      Swal.fire({
        title: "Failed",
        text: error.message,
        icon: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full py-20 horizontal-padding">
      <div className="w-full text-center flex flex-col items-center justify-center gap-10">
        <div className="w-full flex items-center justify-center gap-2">
          <IoPlayForwardSharp className="green-text text-lg" />
          <h1 className="green-text font-medium text-sm uppercase">
            get in touch
          </h1>
        </div>
        {/* <ReactJsAlert
          status={status} // true or false
          type={type} // success, warning, error, info
          title={title}
          quotes={true}
          quote="This is a dummy design that shows an example of reactjs-alert"
          Close={() => setStatus(false)}
        /> */}

        <h2 className="text-3xl lg:text-5xl font-semibold">
          Reach Out Drop us a Line Here
        </h2>
      </div>

      <div className="w-full mx-auto lg:w-3/4 mt-14">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="w-full">
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex flex-col items-start gap-6">
                  <div className="w-full flex flex-col items-start gap-1">
                    <Field
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full p-4 border outline-none bg-transparent rounded-lg text-size"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-xs text-red-600"
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-1">
                    <Field
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      className="w-full p-4 border outline-none bg-transparent rounded-lg text-size"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-xs text-red-600"
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-1">
                    <Field
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      className="w-full p-4 border outline-none bg-transparent rounded-lg text-size"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-xs text-red-600"
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-1">
                    <Field
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="w-full p-4 border outline-none bg-transparent rounded-lg text-size"
                    />
                    <ErrorMessage
                      name="subject"
                      component="div"
                      className="text-xs text-red-600"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col items-start gap-1">
                  <Field
                    as="textarea"
                    name="message"
                    id="message"
                    placeholder="Message..."
                    className="w-full h-40 lg:h-full p-4 bg-transparent border rounded-lg outline-none text-size"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-xs text-red-600"
                  />
                </div>
              </div>
              <div className="w-full flex justify-center mt-10">
                <button
                  type="submit"
                  className="bg-[#00bf63] text-white px-7 py-4 rounded-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
