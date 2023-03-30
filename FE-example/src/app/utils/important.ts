export const getToken = (id: string): string => {
  const data: string | null = localStorage.getItem(`token-${id}`);

  return data || '';
};

export const saveToken = (id: string, token: string) => {
  localStorage.setItem(`token-${id}`, token);
};

export const removeToken = (id: string): any => {
  localStorage.removeItem(`token-${id}`);
};

export const getLoginService = (id: string): string => {
  const data: string | null = localStorage.getItem(`service-${id}`);

  return data || '';
};

export const saveLoginService = (id: string, service: string) => {
  localStorage.setItem(`service-${id}`, service);
};

export const removeLoginService = (id: string): any => {
  localStorage.removeItem(`service-${id}`);
};
