export interface ReactVMErrorMessage {
  message: string;
  error?: {
    message?: string;
    stack?: string;
  };
}
