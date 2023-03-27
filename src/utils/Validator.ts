export const validateEmailAndGetErrorMessage = (email: string): string => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (!email.length) {
        return `Please Enter E-mail`;
    } else if (!emailRegex.test(email)) {
        return `Please Enter a valid E-Mail`;
    } else {
        return "";
    }
}

export const validatePasswordAndGetErrorMessage = (password: string): string => {
    if (!password.length) {
        return `Please Enter Password`;
    } else if (password.length < 6) {
        return `Password must be at lease 6 charachters`;
    } else {
        return "";
    }
}

export const isEmptyAndGetErrorMessage = (text: string, textName?: string): string => {
    if (!text.length) {
        return `Please Enter ${textName}`;
    } else {
        return "";
    }
}

export const validateConfirmPasswordAndGetErrorMessage = (password: string, confirmPassword: string): string => {
    if (confirmPassword.length < 6) {
        return `Password must be at lease 6 charachters`;
    } else if (password != confirmPassword) {
        return `Password and Confirm Password are not the same`;
    } else {
        return "";
    }
}

export const validatePhoneNumberAndGetErrorMessage = (phoneNumber: string): string => {
    const isNumericRegex = /^[0-9]*$/g;
    
    if (!phoneNumber.length) {
        return `Please enter your phone number`;
    } else if (!isNumericRegex.test(phoneNumber) || phoneNumber.length < 10 || phoneNumber.length > 16) {
        return `Please Enter a valid phone number`;
    } else {
        return "";
    }
}

export const validateNameAndGetErrorMessage = (name: string): string => {
    return isEmptyAndGetErrorMessage(name, "Name");
}

export const validateTitleAndGetErrorMessage = (title: string): string => {
    return isEmptyAndGetErrorMessage(title, "Title");
}
