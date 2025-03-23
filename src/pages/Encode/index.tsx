import React from "react";
import styles from "./styles.module.css";
import { cn } from "@/lib/utils";
import UploadZone from "@/components/forms/UploadZone";

const Encode = () => {
  return (
    <div className={cn(styles["encode-page"])}>
      <div className={styles["encode-area-a"]}>A</div>
      <div className={styles["encode-area-b"]}>
        <UploadZone />{" "}
      </div>
      <div className={styles["encode-area-c"]}>C</div>
    </div>
  );
};

export default Encode;
