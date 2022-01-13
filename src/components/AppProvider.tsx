import { langListString } from "@/lib/problems";
import { createContext, ReactNode, useEffect, useState } from "react";

interface AppContextType {
  lightMode: boolean;
  setLightMode: React.Dispatch<React.SetStateAction<boolean>>;
  ads: boolean;
  setAds: React.Dispatch<React.SetStateAction<boolean>>;
  problemType: LangSettingType;
  setProblemType: React.Dispatch<React.SetStateAction<LangSettingType>>;
}

export const defaultValues: AppContextType = {
  lightMode: false,
  ads: false,
  problemType: "all",
  setLightMode: () => {},
  setAds: () => {},
  setProblemType: () => {}
};

export const AppContext = createContext<AppContextType>(defaultValues);

export default function AppProvider({ children }: { children: ReactNode }) {
  const [lightMode, setLightMode] = useState(
    localStorage.getItem("settings-lightMode") === "true"
  );
  const [ads, setAds] = useState(
    localStorage.getItem("settings-ads") === "true"
  );
  const [problemType, setProblemType] = useState(() => {
    const stored = localStorage.getItem("settings-problemType");
    if (stored && langListString.includes(stored)) {
      return stored as LangSettingType;
    } else return "all";
  });
  useEffect(() => {
    localStorage.setItem("settings-ads", ads ? "true" : "false");
  }, [ads]);
  useEffect(() => {
    if (lightMode) document.body.classList.add("light");
    else document.body.classList.remove("light");
    localStorage.setItem("settings-lightMode", lightMode ? "true" : "false");
  }, [lightMode]);
  useEffect(() => {
    console.log(`Setting problem type to ${problemType}`);
    localStorage.setItem("settings-problemType", problemType);
  }, [problemType]);

  const value = {
    lightMode,
    setLightMode,
    ads,
    setAds,
    problemType,
    setProblemType
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
