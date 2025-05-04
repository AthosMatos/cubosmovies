export interface DefaultResponse {
  status: number;
  message: string;
  body?: any;
}

export const defaultResponse = (data: DefaultResponse) => {
  const { status, message, body } = data;
  return {
    status,
    message,
    body,
  };
};
