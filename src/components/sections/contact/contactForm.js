import React from "react";
import axios from "axios";

import {
  ContactContainer,
  StyledTextArea,
  StyledForm,
  StyledFormWrapper,
  StyledInput,
  StyledButton,
  ContactH1,
  ContactWrapper,
  GRSend,
} from "../../StyledElements/contactForm.styledElements";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  async function onSubmit(values) {
   
    let config = {
      method: "post",
      url: "http://localhost:8000/api/server",
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response = await axios(config);
      if (response.status === 200) {
        reset();
      }
    } catch (err) {
      alert(err);
    }
  }

  return (
    <>
      <ContactContainer id="Contact">
        <ContactWrapper>
          <ContactH1>Contact</ContactH1>
          <StyledFormWrapper>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="name">Full name</label>
              <StyledInput
                type="text"
                {...register("name", { required: true })}
                placeholder="Enter your full name here."
              ></StyledInput>
              <p style={{ color: "red" }}>
                {errors.name?.type === "required" && "Full name is required"}
              </p>
              <label htmlFor="email">Email</label>
              <StyledInput
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                })}
                placeholder="your-email@gmail.com"
              ></StyledInput>
              <p style={{ color: "red" }}>
                {errors.email?.type === "required" && "Enter a valid Email"}
              </p>
              <label htmlFor="message">Message</label>
              <StyledTextArea
                type="textarea"
                {...register("textarea", { required: true })}
              ></StyledTextArea>
              <p style={{ color: "red" }}>
                {errors.textarea?.type === "required" &&
                  "Please Provide Details!"}
              </p>
              <StyledButton type="submit">
                {" "}
                Send Message <GRSend />{" "}
              </StyledButton>
            </StyledForm>
          </StyledFormWrapper>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default ContactForm;
