export type MessageType = {
  user: "you" | "bot";
  dataType: "text" | "image" | "file" | "audio";
  text?: string;
  image?: string;
  audio?: string;
  file?: string;
  timestamp: Date;
};