import { NextApiRequest, NextApiResponse } from "next";
import { handleAuth, handleLogin, handleLogout, handleCallback, handleProfile } from "@auth0/nextjs-auth0";

export default handleAuth({
  async login(req: NextApiRequest, res: NextApiResponse) {
    try {
      await handleLogin(req, res, {
        returnTo: "/main",
      });
    } catch (error : any ) {
      console.error(error);
      res.status(error.status || 500).end(error.message);
    }
  },

  async logout(req: NextApiRequest, res: NextApiResponse) {
    try {
      await handleLogout(req, res);
    } catch (error : any) {
      console.error(error);
      res.status(error.status || 500).end(error.message);
    }
  },

  async callback(req: NextApiRequest, res: NextApiResponse) {
    try {
      await handleCallback(req, res, { redirectUri: "http://localhost:3000" });
    } catch (error : any ) {
      console.error(error);
      res.status(error.status || 500).end(error.message);
    }
  },

  async me(req: NextApiRequest, res: NextApiResponse) {
    try {
      await handleProfile(req, res);
    } catch (error : any) {
      console.error(error);
      res.status(error.status || 500).end(error.message);
    }
  },
});
