export type MessageType = {
  user: "you" | "bot";
  dataType: "text" | "image" | "file" | "audio";
  text?: string;
  image?: string;
  audio?: string;
  file?: string;
  timestamp: Date;
};

export type emailFormType = {
  error?: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
    other?: string;
  },
  success?: boolean;
}