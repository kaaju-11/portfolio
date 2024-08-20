// import React from "react";
// import { Controller, useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import Popup from "Components/Popup";
// import {
//   ButtonWrapper,
//   ContactFormText,
//   EditProfileHeading,
//   ErrorMessageWrapper,
//   FormWrapper,
//   Input,
//   InputEditWrapper,
//   InputText,
//   InputWrapperContainer,
//   PopupFormWrapper,
//   Textarea,
//   UploadFileContentTitle,
//   UploadFileTitle,
// } from "style/Testomonial";
// import CrossIcon from "assets/svg/CrossIcon";
// import { CONTACTUS_VALIDATION_SCHEMA } from "utils/YupValidation/TestomonialSchema";
// import { FButton, SButton } from "style/Home";
// interface FormValues {
//   unsername: string;
//   message: string;
// }
// interface AddProductModalProps {
//   closeModal: () => void;
// }
// const TestomonialModal: React.FC<AddProductModalProps> = ({ closeModal }) => {
//   const {
//     handleSubmit,
//     control,
//     reset,
//     formState: { errors },
//   } = useForm<FormValues>({
//     mode: "onSubmit",
//     reValidateMode: "onChange",
//     resolver: yupResolver(CONTACTUS_VALIDATION_SCHEMA),
//     defaultValues: {
//       unsername: "",
//       message: "",
//     },
//   });

//   const onSubmit = async (values: any) => {};
//   const handleModalClose = () => {
//     closeModal();
//   };

//   return (
//     <Popup>
//       <PopupFormWrapper>
//         <EditProfileHeading>
//           <UploadFileContentTitle>
//             <UploadFileTitle>Bid History</UploadFileTitle>
//           </UploadFileContentTitle>
//           <span
//             onClick={() => {
//               handleModalClose();
//               reset();
//             }}
//           >
//             <CrossIcon />
//           </span>
//         </EditProfileHeading>
//         <ContactFormText>
//           <FormWrapper onSubmit={handleSubmit(onSubmit)}>
//             <InputEditWrapper
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "20px",
//               }}
//             >
//               <InputWrapperContainer>
//                 <InputText>User Name</InputText>
//                 <Controller
//                   name="unsername"
//                   control={control}
//                   render={({ field }) => (
//                     <Input
//                       {...field}
//                       type="text"
//                       maxLength={50}
//                       placeholder="Enter Your Name"
//                     />
//                   )}
//                 />
//                 <ErrorMessageWrapper style={{ paddingTop: "5px" }}>
//                   {errors.unsername ? (
//                     <span>{errors?.unsername?.message}</span>
//                   ) : (
//                     <span></span>
//                   )}
//                 </ErrorMessageWrapper>
//               </InputWrapperContainer>
//               <InputWrapperContainer className="textarea-height">
//                 <InputText>Leave A Message</InputText>
//                 <Controller
//                   name="message"
//                   control={control} // Ensure you have 'control' from useForm
//                   defaultValue=""
//                   render={({ field }) => (
//                     <Textarea
//                       {...field}
//                       placeholder="How can we help "
//                       maxLength={600}
//                     />
//                   )}
//                 />

//                 <ErrorMessageWrapper>
//                   {errors.message ? (
//                     <span>{errors?.message?.message}</span>
//                   ) : (
//                     <span></span>
//                   )}
//                 </ErrorMessageWrapper>
//               </InputWrapperContainer>
//             </InputEditWrapper>

//             <ButtonWrapper>
//               <SButton type="submit" className="submit-button">
//                 Submit
//               </SButton>
//               <FButton
//                 onClick={() => {
//                   handleModalClose();
//                   reset();
//                 }}
//               >
//                 Cancel
//               </FButton>
//             </ButtonWrapper>
//           </FormWrapper>
//         </ContactFormText>
//       </PopupFormWrapper>
//     </Popup>
//   );
// };

// export default TestomonialModal;

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CONTACTUS_VALIDATION_SCHEMA } from "utils/YupValidation/TestomonialSchema"; // Adjust as needed
import Popup from "Components/Popup";
import {
  FormWrapper,
  EditProfileHeading,
  Input,
  InputEditWrapper,
  InputWrapperContainer,
  InputText,
  Textarea,
  ErrorMessageWrapper,
  ButtonWrapper,
  UploadFileContentTitle,
  UploadFileTitle,
} from "style/Testomonial";
import CrossIcon from "assets/svg/CrossIcon";
import { FButton, SButton } from "style/Home";

interface FormValues {
  username: string;
  message: string;
}

interface AddProductModalProps {
  closeModal: () => void;
  addTestimonial: (testimonial: FormValues) => void; // Ensure correct type
}

const TestomonialModal: React.FC<AddProductModalProps> = ({
  closeModal,
  addTestimonial,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    mode: "onSubmit",
    resolver: yupResolver(CONTACTUS_VALIDATION_SCHEMA), // Ensure validation matches form values
    defaultValues: {
      username: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    addTestimonial(data); // Pass correct type to parent
    reset(); // Reset form
    closeModal(); // Close modal
  };

  const handleModalClose = () => {
    reset();
    closeModal();
  };

  return (
    <Popup>
      <EditProfileHeading>
        <UploadFileContentTitle>
          <UploadFileTitle>Testimonial</UploadFileTitle>
        </UploadFileContentTitle>
        <span onClick={handleModalClose}>
          <CrossIcon />
        </span>
      </EditProfileHeading>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <InputEditWrapper
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <InputWrapperContainer>
            <InputText>Username</InputText>
            <Controller
              name="username" // Ensure correct field name
              control={control}
              render={({ field }) => (
                <Input {...field} type="text" placeholder="Enter Your Name" />
              )}
            />
            <ErrorMessageWrapper>
              {errors.username && <span>{errors.username.message}</span>}
            </ErrorMessageWrapper>
          </InputWrapperContainer>

          <InputWrapperContainer className="textarea-height">
            <InputText>Message</InputText>
            <Controller
              name="message" // Ensure correct field name
              control={control}
              render={({ field }) => (
                <Textarea
                  {...field}
                  placeholder="Your message"
                  maxLength={600}
                />
              )}
            />
            <ErrorMessageWrapper>
              {errors.message && <span>{errors.message.message}</span>}
            </ErrorMessageWrapper>
          </InputWrapperContainer>
        </InputEditWrapper>

        <ButtonWrapper>
          <SButton type="submit">Submit</SButton>
          <FButton onClick={handleModalClose}>Cancel</FButton>
        </ButtonWrapper>
      </FormWrapper>
    </Popup>
  );
};

export default TestomonialModal;
