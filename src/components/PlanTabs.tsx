"use client";

import React, { useState } from "react";

const PlanTabs = () => {
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  return (
    <div className="inline-flex w-fit rounded-xl bg-[#191B20] p-1">
      <button
        onClick={() => setActiveTab("today")}
        className={`rounded-lg px-4 py-2 text-sm cursor-pointer font-medium transition-colors ${
          activeTab === "today"
            ? "bg-[#0D0F12] text-[#C2F800]"
            : "text-gray-400 hover:text-white"
        }`}
      >
        {`Today's Plan`}
      </button>

      <button
        onClick={() => setActiveTab("saved")}
        className={`rounded-lg px-4 py-2 text-sm cursor-pointer font-medium transition-colors ${
          activeTab === "saved"
            ? "bg-[#0D0F12] text-[#C2F800]"
            : "text-gray-400 hover:text-white"
        }`}
      >
        Saved
      </button>
    </div>
  );
};

export default PlanTabs;