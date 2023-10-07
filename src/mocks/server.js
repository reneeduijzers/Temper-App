import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
    rest.get("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
        return res(
            ctx.json([
                { id: 1, title: "Post 1" },
                { id: 2, title: "Post 2" },
                { id: 3, title: "Post 3" },
                { id: 4, title: "Post 4" },
                { id: 5, title: "Post 5" },
            ])
        );
    })
);

export { server };
