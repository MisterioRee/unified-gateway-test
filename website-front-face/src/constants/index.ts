import { InitialStateTypes } from 'types';

export const WHITE = '#FFF';
export const GREEN = '#58743A';
export const DARK_GREEN = '#4e6635';
export const BLACK = '#000';
export const GREY = '#9B9B9B';
export const RED = '#FF0000';
export const BLUE = '#58a6ff';

// Language Text
export const LOGIN = 'Login';
export const LOGOUT = 'Logout';
export const SEARCH_NAME = 'Search Name...';

export const HOME = 'Home';
export const SERVICE_REQUEST_FORM = 'Service Request Form';
export const ABOUT_US = 'About Us';
export const CONTACT_US = 'Contact Us';
export const DASHBOARD = 'Dashboard';
// Navbar Menu
export const ADD_GIST = 'Add Gist';
export const STARRED_GISTS = 'Starred Gists';
export const YOUR_GISTS = 'Your Gists';
export const PUBLIC_GISTS = 'Public Gists';
export const YOUR_GITHUB_PROFILE = 'Your Github Profile';
// Login Form
export const USERNAME = 'Username';
export const PASSWORD = 'Password';
// Gist Form
export const REMOVE = 'Remove';
export const ADD_FILE = 'Add File';
export const CREATE_GIST = 'Create Gist';
export const UPDATE_GIST = 'Update Gist';
export const FILE_END = 'File End';
// Gist Form Placeholders
export const DESCRIPTION = 'Description';
export const ENTER_FILE_NAME = 'Enter File Name...';
export const ENTER_FILE_CONTENT = 'Enter File Content...';
export const PUBLIC = 'Public';
export const PRIVATE = 'Private';
// Gist View
export const DELETE = 'Delete';
export const FORK = 'Fork';
export const STAR = 'Star';
export const EDIT = 'Edit';
// Gist List Table
export const NAME = 'Name';
export const DATE = 'Date';
export const TIME = 'Time';
export const KEYWORD = 'Keyword';
export const NOTEBOOK_NAME = 'Notebook Name';
// Gist Grid View
export const CREATED = 'Created';
export const AGO = 'Ago';
// GistList Footer
export const NEXT = 'Next';
export const PREVIOUS = 'Pevious';
// Profile View
export const VIEW_GITHUB_PROFILE = 'View GitHub Profile';
//Validation Messages
export const REQUIRED = 'Field is Required';

/**
 * UI Testing Constants
 */
export const TEST_USERNAME_INPUT = 'Usama Taj';
export const TEST_PASSWORD_INPUT = '1234';
export const TEST_FILE_NAME = 'filename.txt';
export const TEST_FILE_CONTENT = 'Some Sample Content';
export const TEST_DESCRIPTION = 'Some Description';
export const TEST_GIST_ID = 'abc123';
export const TEST_DATE = '2022-08-23T11:06:04.373Z';

// Gist Reducer Initial State
export const GIST_INITIAL_STATE: InitialStateTypes = {
  gists_list: [],
  profile_gists: [],
  selected_gist: {},
  page_number: 1,
  gist_loading: true,
  profile_gists_loading: true,
  logged_in: false,
};

// SAMPLE API RESPONSE

export const GET_GIST_API_RESPONSE = {
  url: 'https://api.github.com/gists/3fbbf6de8aea23f6d39a3c194941d21d',
  id: '3fbbf6de8aea23f6d39a3c194941d21d',
  html_url: 'https://gist.github.com/3fbbf6de8aea23f6d39a3c194941d21d',
  files: {
    [TEST_FILE_NAME]: {
      filename: 'Some Gist File.txt',
      type: 'text/plain',
      language: 'Text',
      content: TEST_FILE_CONTENT,
    },
  },
  public: false,
  created_at: '2022-08-24T05:03:32Z',
  updated_at: '2022-08-24T05:03:32Z',
  description: TEST_DESCRIPTION,
  comments: 0,
  owner: {
    login: 'Usama-Taj',
    avatar_url: 'https://avatars.githubusercontent.com/u/53395083?v=4',
    url: 'https://api.github.com/users/Usama-Taj',
    html_url: 'https://github.com/Usama-Taj',
  },
  forks: [],
};
