export type genericId = string | number;
export type FilePathSubmit = {
  id: genericId;
  filename: string;
  path: string;
  height: number;
  width: number;
  size: number;
  duration: number;
};

export type queueProcessFile = FilePathSubmit & {
  dateOfStart: string;
  dateOfEnd?: string | null;
  progress: number;
  isRunning: boolean;
  link?: string;
  remain?: string;
  estimate?: string;
  completed: boolean;
};
