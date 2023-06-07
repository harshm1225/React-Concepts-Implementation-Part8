import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "./App";

const server = setupServer(
  rest.get("https://random-data-api.com/api/v2/users", (req, res, ctx) => {
    return res(
      ctx.json({
        first_name: "Harshal",
        last_name: "Mahajan",
        date_of_birth: "2003-01-07",
        gender: "Male",
        email: "harshalmahajan173@gmail.com",
      })
    );
  })
);
beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close;
});

test("Should render API data successfully", async () => {
  render(<App />);
  expect(await screen.findByText("Harshal")).toBeVisible();
  expect(await screen.findByText("Mahajan")).toBeVisible();
  expect(await screen.findByText("harshalmahajan173@gmail.com"));
  expect(await screen.findByText("2003-01-07"));
  expect(await screen.findByText("Male"));
});
