import { langListString } from "@/lib/problems";
import { createContext, ReactNode, useEffect, useState } from "react";

interface AppContextType {
  lightMode: boolean;
  setLightMode: React.Dispatch<React.SetStateAction<boolean>>;
  ads: boolean | null;
  setAds: React.Dispatch<React.SetStateAction<boolean | null>>;
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
  const [ads, setAds] = useState<boolean | null>(
    localStorage.getItem("settings-ads") === "true" ||
      localStorage.getItem("settings-ads") === "false"
      ? localStorage.getItem("settings-ads") === "true"
      : null
  );
  const [problemType, setProblemType] = useState(() => {
    const stored = localStorage.getItem("settings-problemType");
    if (stored && langListString.includes(stored)) {
      return stored as LangSettingType;
    } else return "all";
  });
  useEffect(() => {
    if (lightMode) document.body.classList.add("light");
    else document.body.classList.remove("light");
    localStorage.setItem("settings-lightMode", lightMode ? "true" : "false");
  }, [lightMode]);
  useEffect(() => {
    console.log(`Setting problem type to ${problemType}`);
    localStorage.setItem("settings-problemType", problemType);
  }, [problemType]);
  useEffect(() => {
    if (ads === null) localStorage.removeItem("ads");
    else localStorage.setItem("settings-ads", ads ? "true" : "false");
  }, [ads]);

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
