import { rest } from "msw";

export const handlers = [
  // Handles a POST /login request
  // rest.post('/login', null),
  // Handles a GET /user request
  rest.get("http://localhost:5001/v1/resources", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        rows: [
          {
            name: "afam",
            url: "https://mswjs.io/docs/getting-started/mocks/rest-api",
            description: "Guide to testing rest APIs with MSW",
            likes: 0,
          },
        ],
      })
    );
  }),
];
