import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: "https://loving-ewe-64.clerk.accounts.dev",
      applicationID: "convex",
    },
  ],
} satisfies AuthConfig;
