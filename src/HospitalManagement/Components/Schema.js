import * as Yup from "yup"

export const signupSchema= Yup.object({
    name:Yup.string().min(3).max(10).required("plz enter name"),
   
    password:Yup.string().min(5).max(15).matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .required('Please enter a valid password'),
   
  })

  export const signupSchema1= Yup.object({
    pass:Yup.string().min(5).max(15).matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .required('Please enter a valid password'),
   

  })