"use client"
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import AuthContainer from "@/components/auth/Container";
import DefaultImage from "../../../../public/assets/images/DefaultImage.png";
import { DefaultInput, IconInput } from "@/components/reusable/input/Input";
import { HideIcon, ShowIcon } from "../../../../public/assets/icons";

const newPassword = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <AuthContainer
      src={DefaultImage}
      title="Create a new password"
      text="Create a new password and keep it safe"
      terms=""
      path="#"
      link=""
      underline=""
      btnText="Continue"
      altText=""
      customStyle="hidden"
      display=""
      href=""
    >
      <IconInput
        value="password"
        size="lg"
        CustomStyle="mb-4"
        type={show ? "text" : "password"}
        icon={""}
        handleClick={handleClick}
        RighIcon={show ? <HideIcon /> : <ShowIcon />}
        label="Enter new password"
      />

      <IconInput
        value="password"
        size="lg"
        CustomStyle=""
        type={show ? "text" : "password"}
        icon={""}
        handleClick={handleClick}
        RighIcon={show ? <HideIcon /> : <ShowIcon />}
        label="Confirm new password"
      />
    </AuthContainer>
  );
};

export default newPassword;