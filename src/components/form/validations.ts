import { Rule } from "antd/lib/form";

export const validation = {
  required: (message: string = "This field is required"): Rule => ({
    required: true,
    message,
  }),

  minLength: (
    min: number,
    message: string = `Minimum length is ${min} characters`
  ): Rule => ({
    min,
    message,
  }),

  maxLength: (
    max: number,
    message: string = `Maximum length is ${max} characters`
  ): Rule => ({
    max,
    message,
  }),

  password: (
    message: string = "Password must be at least 8 characters long and include at least one number and one special character"
  ): Rule => ({
    pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    message,
  }),

  // confirmPassword: (
  //   getFieldValue: (field: string) => string,
  //   message: string = "Passwords do not match"
  // ): Rule => ({
  //   validator: (_, value) => {
  //     if (!value || getFieldValue("password") === value) {
  //       return Promise.resolve();
  //     }
  //     return Promise.reject(new Error(message));
  //   },
  // }),

  onlyNumbers: (message: string = "Only numbers are allowed"): Rule => ({
    pattern: /^[0-9]+$/,
    message,
  }),

  noSpecialCharacters: (
    message: string = "Special characters are not allowed"
  ): Rule => ({
    pattern: /^[^-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]*$/,
    message,
  }),
};
