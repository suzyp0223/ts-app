import { rest } from "msw";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/posts/1/comments", async (req, res, ctx) => {
    return res(
      ctx.statue(403),
      ctx.json({ errorMessage: "Data not found" })
      // ctx.json({
      //   id: "2222",
      //   firstName: "John",
      //   lastName: "Maverick",
      // })
    );
  }),
];
