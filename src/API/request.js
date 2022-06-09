import axios from "axios";

const request = ({ url, body, params, method }) => {
  const variables = {
    url,
    data: body,
    params,
    method,
  };
  const token = localStorage.getItem("t");
  const token_2 = localStorage.getItem("user");
  if (token) {
    variables.headers = {
      TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJEYXRhIFNjaWVuY2UgMDIiLCJIZXRIYW5TdHJpbmciOiIwNS8wOS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NjIzMzYwMDAwMDAiLCJuYmYiOjE2NDU2MzU2MDAsImV4cCI6MTY2MjQ4MzYwMH0.8S-EqdxqvVcyITZdLnF7yPG1DEA7beD2AGxdbZzftkE',
      Authorization: "Bearer " + token_2,
    };
  }

  return axios(variables);
};

export default request;
