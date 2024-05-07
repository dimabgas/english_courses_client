export const VALID_EMAIL = {
  required: {
    value: true,
    message: "This field is required",
  },
  minLength: {
    value: 3,
    message: "Too short",
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: "Invalid email address.",
  },
};

export const VALID_FIRST_NAME = {
  required: {
    value: true,
    message: "This field is required",
  },
  minLength: {
    value: 2,
    message: "Too short",
  },
  pattern: {
    value: /^[a-zA-Z]+$/,
    message: "You can use only letters",
  },
};

export const VALID_SECOND_NAME = {
  required: {
    value: true,
    message: "This field is required",
  },
  minLength: {
    value: 3,
    message: "Too short",
  },
  pattern: {
    value: /^[a-zA-Z]+$/,
    message: "You can use only letters",
  },
};

export const VALID_PASSWORD = {
  required: {
    value: true,
    message: "This field is required",
  },
  maxLength: {
    value: 16,
    message: "Password can't be longer than 16 characters",
  },
  minLength: {
    value: 6,
    message: "Password must be at least 6 characters",
  },
};

export const VALID_LINK = {
  required: {
    value: true,
    message: "This field is required",
  },
  minLength: {
    value: 3,
    message: "Too short",
  },
  pattern: {
    value: /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/,
    message: "This is not a link",
  },
};

export const VALID_TITLE = {
  required: {
    value: true,
    message: "This field is required",
  },
  minLength: {
    value: 3,
    message: "Too short",
  },
};
