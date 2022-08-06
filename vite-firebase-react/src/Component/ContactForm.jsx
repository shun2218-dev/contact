import { grey } from "@mui/material/colors";
import React, { Suspense, useState } from "react";
import MenuBar from "./Basic/MenuBar";
import Complete from "./Complete";
import Form from "./Form";
import LinearIndeterminate from "./Loading";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    detail: "",
  });
  const [isConfirm, setIsConfirm] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const color = grey[900];
  console.log(submit);
  return (
    <>
      <MenuBar color={color} menuTitle="お問い合わせフォーム" />
      {!submit ? (
        <Form
          setIsSubmitSuccessful={setIsSubmitSuccessful}
          isConfirm={isConfirm}
          setIsConfirm={setIsConfirm}
          setSubmit={setSubmit}
          data={data}
          setData={setData}
        />
      ) : (
        <Complete
          setIsSubmitSuccessful={setIsSubmitSuccessful}
          setIsConfirm={setIsConfirm}
          setSubmit={setSubmit}
          data={data}
        />
      )}
    </>
  );
};

export default ContactForm;
