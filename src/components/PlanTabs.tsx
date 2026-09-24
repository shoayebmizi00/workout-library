"use client";

import React, { useState } from "react";

type PlanTab = "today" | "saved";

const PlanTabs = ({
  activeTab,
  onTabChange,
}: {
  activeTab?: PlanTab;
  onTabChange?: (tab: PlanTab) => void;
}) => {
  const [internalTab, setInternalTab] = useState<PlanTab>("today");
  const currentTab = activeTab ?? internalTab;

  const handleTabChange = (tab: PlanTab) => {
    if (onTabChange) {
      onTabChange(tab);
    }
    setInternalTab(tab);
  };

  return (
    <div className="inline-flex w-fit rounded-xl bg-[#191B20] p-1">
      <button
        onClick={() => handleTabChange("today")}
        className={`rounded-lg px-4 py-2 text-sm cursor-pointer font-medium transition-colors ${
          currentTab === "today"
            ? "bg-[#0D0F12] text-[#C2F800]"
            : "text-gray-400 hover:text-white"
        }`}
      >
        {`Today's Plan`}
      </button>

      <button
        onClick={() => handleTabChange("saved")}
        className={`rounded-lg px-4 py-2 text-sm cursor-pointer font-medium transition-colors ${
          currentTab === "saved"
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