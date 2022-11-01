export const mockPost = jest.fn().mockReturnValue({
  data: {},
  callback: jest.fn(),
});

export const mockGet = jest.fn().mockReturnValue({
  data: {},
  callback: jest.fn(),
});

export const mockPut = jest.fn().mockReturnValue({
  data: {},
  callback: jest.fn(),
});

export const mockDelete = jest.fn().mockReturnValue({
  data: {},
  callback: jest.fn(),
});

export const mockPatch = jest.fn().mockReturnValue({
  data: {},
  callback: jest.fn(),
});

const mockAxios = jest.fn().mockReturnValue({
  post: mockPost,
  get: mockGet,
  put: mockPut,
  patch: mockPatch,
  delete: mockDelete,
});

jest.mock("../config/HttpClient/index.ts", () => ({
  __esModule: true,
  default: mockAxios,
}));
