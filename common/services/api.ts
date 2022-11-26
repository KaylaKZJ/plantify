export const api = (url: string, method: string, data: any) => {
  return new Request(url, {
    method: method,
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  });
};
