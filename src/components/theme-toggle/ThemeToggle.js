"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";

import clsx from "clsx";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="relative box-border flex cursor-pointer items-center"
      onClick={toggleTheme}
    >
      <Sun className="absolute top-1/2 left-1 h-[1.2rem] w-[1.2rem] -translate-y-1/2" />
      <Switch
        className="bg-secondary"
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
        aria-label="Toggle dark mode"
      />

      <Moon
        className={clsx(
          "absolute top-1/2 right-1 h-[1.2rem] w-[1.2rem] -translate-y-1/2",
          { ["hidden"]: theme === "dark" },
        )}
      />
    </div>
  );
}
