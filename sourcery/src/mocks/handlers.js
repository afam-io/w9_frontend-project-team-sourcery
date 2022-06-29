import { rest } from "msw";

export const appDataOnLoad = {
  rows: [
    {
      name: "afam",
      url: "https://mswjs.io/docs/getting-started/mocks/rest-api",
      description: "Guide to testing rest APIs with MSW",
      likes: 0,
    },
  ],
};

export const inputPostResponse = {
  success: true,
  payload: [
    {
      id: 2,
      name: "Tim",
      url: "https://www.youtube.com/watch?v=oMv2eAGWtZU",
      description: "MSW with react testing library video",
      likes: 0,
    },
  ],
};

export const handlers = [
  // Handles a POST /login request
  // rest.post('/login', null),
  // Handles a GET /user request
  rest.get("http://localhost:5001/v1/resources", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(appDataOnLoad));
  }),
  rest.post("http://localhost:5001/v1/resources", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(inputPostResponse));
  }),
];

// { success: true, payload: data }
