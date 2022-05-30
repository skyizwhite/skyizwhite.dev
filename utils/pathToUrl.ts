const pathToUrl = (path: string) => {
  if (!process.env.baseUrl) {
    throw Error('Environment variable "baseUrl" is not defined.');
  }

  return `${process.env.baseUrl}${path === '/' ? '' : path}`;
};

export default pathToUrl;
