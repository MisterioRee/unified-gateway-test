import {
  AGO,
  CREATED,
  DELETE,
  EDIT,
  FORK,
  GIST_INITIAL_STATE,
  STAR,
  TEST_DATE,
  TEST_DESCRIPTION,
  TEST_FILE_NAME,
  TEST_GIST_ID,
  TEST_USERNAME_INPUT,
} from "constants/index";
import { render, screen, waitFor } from "@testing-library/react";
import React, { useContext, useEffect } from "react";
import GistHeader from "./GistHeader";
import avatar from "assets/logos/img_avatar.png";
import { getTimeCreated } from "utilities/utilityFunctions";
import { GistContext, GistProvider } from "context/gists";
import { setLoggedInState } from "context/gists/actions";
import MockContainer from "__mocks__/MockContainer";
import { starOneGist, unStarOneGist, checkGistStar } from "api/gist.service";
import { MockContext } from "__mocks__/MockProvider";

let avatarElement: any,
  userName: any,
  fileName: any,
  gistDescription: any,
  createdAgo: any,
  starIcon: any,
  forkIcon: any,
  deletIcon: any,
  editIcon: any;

const dateTime: string = getTimeCreated(TEST_DATE);
const dateString = `Created ${dateTime} Ago`;

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    statusCode: 200,
    json: () => Promise.resolve({ starred: true, forked: true }),
  })
);

const MockGistHeader: React.FC<{ logged_in?: boolean }> = ({ logged_in }) => {
  const [, dispatch] = useContext(GistContext);
  useEffect(() => {
    dispatch(setLoggedInState(logged_in));
  }, []);

  return (
    <GistHeader
      username={TEST_USERNAME_INPUT}
      created_at={TEST_DATE}
      avatar={avatar}
      filename={TEST_FILE_NAME}
      description={TEST_DESCRIPTION}
      id={TEST_GIST_ID}
    />
  );
};

const env = process.env;

beforeEach(() => {
  fetch.mockClear();
  jest.resetModules();
  process.env = { ...env, USERNAME: "Usama-Taj" };

  const { getByRole, getByText, findByText } = render(
    <MockContainer>
      <MockGistHeader logged_in={true} />
    </MockContainer>
  );

  avatarElement = screen.getByRole("img", {
    name: /user/i,
  });

  userName = screen.getByRole("link", {
    name: new RegExp(TEST_USERNAME_INPUT, "i"),
  });

  fileName = screen.getByRole("link", {
    name: new RegExp(TEST_FILE_NAME, "i"),
  });

  createdAgo = screen.getByText(
    `${CREATED} ${getTimeCreated(TEST_DATE)} ${AGO}`
  );

  gistDescription = screen.getByText(TEST_DESCRIPTION);

  // Icons
  starIcon = screen.getByText(STAR);
  forkIcon = screen.getByText(FORK);
  // editIcon = await screen.findByText(EDIT);
  // deletIcon = await screen.findByText(DELETE);
});

describe("GistHeader", () => {
  describe("Gist Header for Logged In User", () => {
    it("checks rendered elements inside the GistHeader component", () => {
      expect(avatarElement).toBeInTheDocument();
      expect(userName).toBeInTheDocument();
      expect(fileName).toBeInTheDocument();
      expect(createdAgo).toBeInTheDocument();
      expect(gistDescription).toBeInTheDocument();
      // Icons
      expect(starIcon).toBeInTheDocument();
      expect(forkIcon).toBeInTheDocument();
      // await waitFor(() => expect(editIcon).toBeInTheDocument());
      // await waitFor(() => expect(deletIcon).toBeInTheDocument());
    });
  });

  describe("Gist Header for Non Logged In User", () => {
    it("checks rendered elements inside the GistHeader component", () => {
      expect(avatarElement).toBeInTheDocument();
      expect(userName).toBeInTheDocument();
      expect(fileName).toBeInTheDocument();
      expect(createdAgo).toBeInTheDocument();
      expect(gistDescription).toBeInTheDocument();
      // Icons
      expect(starIcon).toBeInTheDocument();
      expect(forkIcon).toBeInTheDocument();
    });
  });
});

// Part 3
afterEach(() => {
  process.env = env;
  jest.restoreAllMocks();
});
