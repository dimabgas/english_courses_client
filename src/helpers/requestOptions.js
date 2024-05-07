export const optionsForRequest = (method, body) => ({
  method,
  headers: { "Content-Type": "application/json" },
  body: body ? JSON.stringify(body) : null,
  credentials: "include",
});
