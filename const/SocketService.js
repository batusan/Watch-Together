import io from "socket.io-client";

export let userData;
const server = "localhost:3000";

export const client = io(server, {
  rejectUnauthorized: true,
  secure: false,
});

export const setUserData = (data) => {
  console.log(data);
  userData = data;
};
