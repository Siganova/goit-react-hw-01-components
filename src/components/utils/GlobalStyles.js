import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
h2,
p {
  margin-top: 0;
  margin-bottom: 0;
}
ul {
    margin-bottom: 0;
  margin-top: 0;
  padding-left: 0;
  list-style: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
body {
    padding: 25px 0;
    background-color: #e8edeb;
}
`;