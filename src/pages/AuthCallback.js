import React, { useEffect } from "react";
import { useBedrockPassport } from "@bedrock_org/passport";

function AuthCallback() {
  const { loginCallback } = useBedrockPassport();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const refreshToken = params.get("refreshToken");
    if (token && refreshToken) {
      loginCallback(token, refreshToken).then((success) => {
        if (success) window.location.href = "/";
      });
    }
  }, [loginCallback]);

  return <div>Signing in...</div>;
}

export default AuthCallback;
