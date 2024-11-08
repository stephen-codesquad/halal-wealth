"use client";
import React, { useState } from "react";
import AuthContainer from "@/components/auth/Container";
import DefaultImage from "../../../../public/assets/images/DefaultImage.png";
import { useRouter } from "next/navigation";

const BVN = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState("BVN");
  const router = useRouter();

  const handleRoute = () => {
    if (!selected) {
      alert("Please select an option");
      return;
    }

    setIsLoading(true);

    if (selected === "BVN") {
      router.push("signup/BVN");
      console.log("bvn");
    } else if (selected === "AccountNumber") {
      router.push("signup/AccountNumber");
      console.log("account number");
    }
    setIsLoading(false);
  };

  return (
    <>
      <AuthContainer
        src={DefaultImage}
        title="Signup"
        text="Kindly select signup method"
        terms=""
        path="#"
        link=""
        underline=""
        btnText={"Continue"}
        altText=""
        customStyle="hidden"
        loading={isLoading}
        display="hidden"
        href=""
        onClick={handleRoute}
        altOnClick=""
      >
        <div className="w-full py-4">
          <div
            onClick={() => setSelected("BVN")}
            className={`px-3 py-6 mb-4 border rounded-lg cursor-pointer ${
              selected === "BVN" ? "bg-[#F5F1FE] border-[#D5C1FB]" : "bg-white"
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold">
                Bank Verification Number (BVN)
              </span>
              <span
                className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${
                  selected === "BVN" ? "border-[#8046F2]" : "border-gray-400"
                }`}
              >
                {selected === "BVN" && (
                  <span className="w-2 h-2 bg-[#8046F2] rounded-full"></span>
                )}
              </span>
            </div>
          </div>

          <div
            onClick={() => setSelected("AccountNumber")}
            className={`px-3 py-6 mb-4 border rounded-lg cursor-pointer ${
              selected === "AccountNumber"
                ? "bg-[#F5F1FE] border-[#D5C1FB]"
                : "bg-white"
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold">Account Number</span>
              <span
                className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${
                  selected === "AccountNumber"
                    ? "border-[#8046F2]"
                    : "border-gray-400"
                }`}
              >
                {selected === "AccountNumber" && (
                  <span className="w-2 h-2 bg-[#8046F2] rounded-full"></span>
                )}
              </span>
            </div>
          </div>
        </div>
      </AuthContainer>
    </>
  );
};

export default BVN;
