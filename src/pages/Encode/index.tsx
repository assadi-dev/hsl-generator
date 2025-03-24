import styles from "./styles.module.css";
import { cn } from "@/lib/utils";
import UploadZone from "@/components/forms/UploadZone";
import { openFileDialog } from "./helper";
import PreviewValidFiles from "./PreviewValidFiles";
import FileToProcessingQueue from "./FileToProcessingQueue";

const Encode = () => {
  return (
    <div className={cn(styles["encode-page"], "py-2")}>
      <div className={cn(styles["encode-area-a"], "min-h-[18vh] max-h-[25vh]")}>
        <UploadZone
          onClick={openFileDialog}
          className="h-full"
        />
      </div>
      <div className={(cn(styles["encode-area-b"]), "h-[calc(100%-6vh)] ")}>
        <PreviewValidFiles />
      </div>
      <div
        className={cn(
          styles["encode-area-c"],
          "text-center  !w-[42vw] xl:!w-[38vw] h-[calc(100%-8.5vh)]"
        )}
      >
        <FileToProcessingQueue />
      </div>
    </div>
  );
};

export default Encode;
