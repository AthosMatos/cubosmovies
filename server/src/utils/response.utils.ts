export interface DefaultResponse {
  status: number;
  message: string;
}

export const defaultResponse = (data: DefaultResponse) => {
  const { status, message } = data;
  return {
    status,
    message,
  };
};
