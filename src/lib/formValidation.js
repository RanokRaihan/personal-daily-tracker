export const validateName = (name) => {
  if (name.trim().length === 0) {
    return {
      status: true,
      msg: "Please Enter your full name",
    };
  } else {
    return {
      status: false,
      msg: "",
    };
  }
};
export const validateEmail = (email) => {
  const matchEmail = email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  if (matchEmail) {
    return {
      status: false,
      msg: "",
    };
  } else {
    return {
      status: true,
      msg: "Please Enter a valid email address",
    };
  }
};
export const validatePassword = (password) => {
  if (password.length < 8) {
    return {
      status: true,
      msg: "at least 8 character",
    };
  } else {
    return {
      status: false,
      msg: "",
    };
  }
};
export const matchPassword = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    return {
      status: true,
      msg: "password does not match",
    };
  } else {
    return {
      status: false,
      msg: "",
    };
  }
};
