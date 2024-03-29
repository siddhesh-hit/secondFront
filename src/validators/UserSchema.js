import * as Yup from 'yup';
export const userRegisterValidation = async (data) => {
    let userRegisterSchema = Yup.object({
        full_name: Yup.string().min(6).required().label("Name"),
        email: Yup.string().min(6).email().required().label("Email"),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
            ).label("Password"),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        phone_number: Yup.string().min(10).max(10).required().label("Phone Number"),
        gender: Yup.string().required().label("Gender"),
        date_of_birth: Yup.date().typeError('Enter Date Of Birth')
            .max(new Date(), 'Date of birth cannot be in the future')
            .test('is-at-least-18', 'You must be at least 18 years old', function (value) {
                const eighteenYearsAgo = new Date();
                eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
                return value <= eighteenYearsAgo;
            })
            .required('Date Of Birth is required')
            .label("Date Of Birth"),
        designation: Yup.string().required().label("User Type")
    });
    let validationErrors = await userRegisterSchema.validate(data, { abortEarly: false }).catch((e) => e)
    if (validationErrors.errors && validationErrors.errors.length > 0) {
        return validationErrors.errors[0]
    } else {
        return null
    }
}
export const userLoginValidation = async (data) => {
    let userRegisterSchema = Yup.object({
        email: Yup.string().min(6).email().required().label("Email"),
        password: Yup.string()
            .required('Password is required').label("Password"),
    });
    let validationErrors = await userRegisterSchema.validate(data, { abortEarly: false }).catch((e) => e)
    if (validationErrors.errors && validationErrors.errors.length > 0) {
        return validationErrors.errors[0]
    } else {
        return null
    }
}
export const userForgetPasswordValidation = async (data) => {
    let userRegisterSchema = Yup.object({
        email: Yup.string().min(6).email().required().label("Email"),
    });
    let validationErrors = await userRegisterSchema.validate(data, { abortEarly: false }).catch((e) => e)
    if (validationErrors.errors && validationErrors.errors.length > 0) {
        return validationErrors.errors[0]
    } else {
        return null
    }
}
export const userResetPasswordValidation = async (data) => {
    let userRegisterSchema = Yup.object({
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
            ).label("Password"),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    });
    let validationErrors = await userRegisterSchema.validate(data, { abortEarly: false }).catch((e) => e)
    if (validationErrors.errors && validationErrors.errors.length > 0) {
        return validationErrors.errors[0]
    } else {
        return null
    }
}