import React, { useState } from "react";
import { useBedrockPassport, LoginPanel } from "@bedrock_org/passport";

const SignInButton = () => {
  const [showModal, setShowModal] = useState(false);
  const { isLoggedIn, user, signOut } = useBedrockPassport();

  return (
    <div>
      {!isLoggedIn ? (
        <>
          <button
            onClick={() => setShowModal(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition duration-150"
            style={{
              minWidth: 100,
              minHeight: 40,
              fontSize: 18,
              marginRight: 8,
            }}
          >
            🍊 Sign In
          </button>
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
              <div className="bg-[#181f2a] rounded-2xl p-6 shadow-2xl relative">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl"
                  aria-label="Close"
                >
                  ×
                </button>
                <LoginPanel
                  title="Sign in to"
                  logo="https://irp.cdn-website.com/e81c109a/dms3rep/multi/orange-web3-logo-v2a-20241018.svg"
                  logoAlt="Orange Web3"
                  walletButtonText="Connect Wallet"
                  showConnectWallet={true}
                  separatorText="OR"
                  features={{
                    enableWalletConnect: true,
                    enableAppleLogin: true,
                    enableGoogleLogin: true,
                    enableEmailLogin: true,
                  }}
                  titleClass="text-xl font-bold"
                  logoClass="ml-2 md:h-8 h-6"
                  panelClass="container p-2 md:p-8 rounded-2xl max-w-[480px] bg-[#232b3a]"
                  buttonClass="hover:border-orange-500"
                  separatorTextClass="bg-[#232b3a] text-gray-500"
                  separatorClass="bg-[#232b3a]"
                  linkRowClass="justify-center"
                  headerClass="justify-center"
                />
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center gap-3">
          {user && user.picture && (
            <img
              src={user.picture}
              alt={user.name || "User"}
              className="w-8 h-8 rounded-full border-2 border-orange-500"
            />
          )}
          <span className="text-white">{(user && user.name) || "User"}</span>
          <button
            onClick={signOut}
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default SignInButton;
