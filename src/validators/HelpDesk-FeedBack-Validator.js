import * as Yup from 'yup';
export const FeedBackValidation = async (data) => {
    let FeedbackSchema = Yup.object({
        full_name: Yup.string().min(6).required().label("Name"),
        email: Yup.string().min(6).email().required().label("Email"),
        subject: Yup.string().required().label("Subject"),
        feedback: Yup.string().required().label("feedback"),
    });
    let validationErrors = await FeedbackSchema.validate(data, { abortEarly: false }).catch((e) => e)
    if (validationErrors.errors && validationErrors.errors.length > 0) {
        return validationErrors.errors[0]
    } else {
        return null
    }
}
export const HelpDeskValidation = async (data) => {
    let HelpDeskSchema = Yup.object({
        full_name: Yup.string().min(6).required().label("Name"),
        email: Yup.string().min(6).email().required().label("Email"),
        phone_number: Yup.string().min(10, 'Phone number must be at least 10 characters').max(10, 'Phone number must not exceed 10 characters').required('Phone number is required').label('Phone No'),
        address: Yup.string().required().label("Address"),
        feedback: Yup.string().required().label("Message"),
    });
    let validationErrors = await HelpDeskSchema.validate(data, { abortEarly: false }).catch((e) => e)
    if (validationErrors.errors && validationErrors.errors.length > 0) {
        return validationErrors.errors[0]
    } else {
        return null
    }
}