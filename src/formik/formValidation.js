import * as Yup from "yup";
const phoneRegExp =
  /^(?:(?:\+|00)([1-9]\d{0,3})[ \-]*)?(?:\(?([0-9]{2,4})\)?[ \-]*)?([0-9]{3,4})[ \-]*([0-9]{3,4})$/;

export const userProfileValidation = Yup.object({
  firstName: Yup.string()
    .min(2, "Must 2 characters or more")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Must 2 characters or more")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  country: Yup.string()
    .min(2, "Must 2 characters or more")
    .required("Required"),
  zip: Yup.string().min(4, "Must 4 characters or more").required("Required"),
  address: Yup.string()
    .min(4, "Must 4 characters or more")
    .required("Required"),
  city: Yup.string().min(2, "Must 2 characters or more").required("Required"),
  num: Yup.string()
    .matches(phoneRegExp, "wrong phone number")
    .required("Required"),
});

export const contactusValidation = Yup.object({
  name: Yup.string().min(2, "Must 2 characters or more").required("Required"),
  subject: Yup.string()
    .min(2, "Must 2 characters or more")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  message: Yup.string()
    .min(2, "Must 2 characters or more")
    .required("Required"),
});
