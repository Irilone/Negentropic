
export const api = {
  handleError: (error: Error) => {
    console.error('API Error:', error);
    throw error;
  }
};
