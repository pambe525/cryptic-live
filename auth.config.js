import Resend from "next-auth/providers/resend";

const authConfig = {
  providers: [
    Resend({
      id: "email",
      name: "Email",
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.AUTH_RESEND_FROM,
    }),
  ],
};

export default authConfig;