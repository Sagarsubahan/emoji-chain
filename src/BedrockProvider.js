import React from "react";
import { BedrockPassportProvider } from "@bedrock_org/passport";
import "@bedrock_org/passport/dist/style.css";

const BedrockProvider = ({ children }) => (
  <BedrockPassportProvider
    baseUrl="https://api.bedrockpassport.com"
    authCallbackUrl="https://emoji-chain-l1awjdctw-subahan-ciccadas-projects.vercel.app/auth/callback"
    tenantId="orange-wiiv944tz5"
    subscriptionKey="c37becf8c06040a880d560e9c009051a"
  >
    {children}
  </BedrockPassportProvider>
);

export default BedrockProvider;
