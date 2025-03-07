"use client";
import { Loader, RefreshCcw } from "lucide-react";
import SectionOneTwo from "./section1";
import styles from "./styles.module.css";
import { useComingSoonData } from "@/services/api/coming-soon";
import { Button } from "../ui/button";

const ComingSoon = () => {
  const { data, isLoading } = useComingSoonData();

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="animate-spin h-10 w-10 text-muted-foreground" />
      </div>
    );
  if (!data)
    return (
      <div className="flex justify-center items-center flex-col h-screen gap-4">
        <p>No data available</p>
        <Button onClick={() => window.location.reload()}>
          <RefreshCcw className="h-4 w-4" /> Refresh
        </Button>
      </div>
    );

  return (
    <main className={styles.main}>
      <SectionOneTwo data={data.sectionOneTwo} />
    </main>
  );
};

export default ComingSoon;
