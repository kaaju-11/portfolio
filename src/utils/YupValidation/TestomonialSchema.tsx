import * as Yup from 'yup'

export const CONTACTUS_VALIDATION_SCHEMA = Yup.object().shape({
  username: Yup.string().trim().required('Name is mandatory.'),
    message: Yup.string().trim().required('Message is mandatory.')
  })