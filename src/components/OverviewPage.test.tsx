import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, within } from "@testing-library/react";
import React from "react";
import { server } from "../mocks/server";
import OverviewPage from "./OverviewPage";

jest.mock("./posts/PostsList", () => (props) => (
    <div data-testid={"post-container"}>
        {props.posts.map((post, index) => (
            <div key={post.id}>
                <div data-testid={`post-${post.id}`}>
                    <button
                        data-testid={`button-up-${post.id}`}
                        onClick={() => props.handleClick(index, "up")}
                    >
                        Up
                    </button>
                    <button
                        data-testid={`button-down-${post.id}`}
                        onClick={() => props.handleClick(index, "down")}
                    >
                        Down
                    </button>
                </div>
            </div>
        ))}
    </div>
));

jest.mock("./actions/ActionsList", () => (props) => (
    <div>
        {props.actions.map((action, index) => (
            <div key={action.id}>
                <div data-testid={`action-${index}`}>
                    {action.text}
                    <button
                        data-testid={`button-timetravel-${index}`}
                        onClick={() => props.handleTimeTravel(index)}
                    >
                        Timetravel
                    </button>
                </div>
            </div>
        ))}
    </div>
));

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Up button should move post up in the list and create corresponding action", async () => {
    render(<OverviewPage />);

    const post2 = await screen.findByTestId("post-2");
    const post1 = screen.getByTestId("post-1");

    fireEvent.click(screen.getByTestId("button-up-2"));

    expect(screen.getByTestId("action-0")).toHaveTextContent(
        "Moved post 2 from index 1 to 0"
    );

    const postsContainer = screen.getByTestId("post-container");
    const allPosts = within(postsContainer).getAllByTestId(/post-\d+/);

    const indexPost1 = allPosts.findIndex((post) => post === post1);
    const indexPost2 = allPosts.findIndex((post) => post === post2);

    expect(indexPost1).toBe(1);
    expect(indexPost2).toBe(0);
});

test("Down button should move post down in the list and create corresponding action", async () => {
    render(<OverviewPage />);

    const post2 = await screen.findByTestId("post-2");
    const post3 = screen.getByTestId("post-3");

    fireEvent.click(screen.getByTestId("button-down-2"));

    expect(screen.getByTestId("action-0")).toHaveTextContent(
        "Moved post 2 from index 1 to 2"
    );

    const postsContainer = screen.getByTestId("post-container");
    const allPosts = within(postsContainer).getAllByTestId(/post-\d+/);

    const indexPost3 = allPosts.findIndex((post) => post === post3);
    const indexPost2 = allPosts.findIndex((post) => post === post2);

    expect(indexPost3).toBe(1);
    expect(indexPost2).toBe(2);
});

test("Timetravel button is working correctly: reverses its corresponding action and actions on top", async () => {
    render(<OverviewPage />);

    const post2 = await screen.findByTestId("post-2");
    const post1 = screen.getByTestId("post-1");

    fireEvent.click(screen.getByTestId("button-up-2"));

    expect(screen.getByTestId("action-0")).toHaveTextContent(
        "Moved post 2 from index 1 to 0"
    );

    fireEvent.click(screen.getByTestId("button-down-1"));

    expect(screen.getByTestId("action-0")).toHaveTextContent(
        "Moved post 1 from index 1 to 2"
    );

    fireEvent.click(screen.getByTestId("button-timetravel-0"));

    const postsContainer = screen.getByTestId("post-container");
    const allPosts = within(postsContainer).getAllByTestId(/post-\d+/);

    const indexPost1 = allPosts.findIndex((post) => post === post1);
    const indexPost2 = allPosts.findIndex((post) => post === post2);

    expect(indexPost1).toBe(0);
    expect(indexPost2).toBe(1);
});
