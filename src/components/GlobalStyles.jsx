import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
      position: relative;
  margin: 0;
  font-family: "MontserratMedium", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

main {
  flex-grow: 1;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

section {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
  padding-bottom: 50px;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
ul {
  list-style: none;
   text-decoration: none;
  margin: 0;
  padding-left: 0;
}
a {
  text-decoration: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
}
button {
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
  }
}`;
