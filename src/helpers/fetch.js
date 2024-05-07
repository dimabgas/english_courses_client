import { userAuthenticatedError } from "@/actions/user/isAuthenticated";
import { store } from "@/store";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const customFetch = (method = "GET", url, body = false) => {
  const options = {
    method,
    headers,
  };
  if (body) options.body = JSON.stringify(body);

  return fetch(url, options)
    .then((response) => {
      if (response.status === 401) {
        store.dispatch(userAuthenticatedError());
        throw new Error("You are not authenticate");
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

const useFetch = {
  get(url) {
    return customFetch("get", url);
  },

  post(url, body) {
    return customFetch("post", url, body);
  },

  put(url, body) {
    return customFetch("put", url, body);
  },

  delete(url) {
    return customFetch("delete", url);
  },
};

export default useFetch;
