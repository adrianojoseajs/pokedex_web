/* .App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
} */

import styled from 'styled-components';

export const Container = styled.div`
  background: #f8f8f8;
`;

export const Logo = styled.img`
  width: 200px;
  margin-left: 35px;
  margin-top: 20px;
`;

export const Topo = styled.header`
  background-color: white;
  padding: 10px 10px 10px 10px;
`;


export const Search = styled.div`
`;

export const Input = styled.input`
  display: block;
  margin: 40px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 30px;
  border-color: black;
  width: 90%;

  color: #0062B0;
  box-shadow: 0 0 0 0;
  border: 1;
  outline: 0;
  border-color: #FFCC00;
  border-style: solid;
  border-width: 2px;
  padding: 10px 10px 10px 10px;

  font-size: 30px;
`;

export const Button = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  display: block;

  width: 30%;
  font-size: 24px;

  background: white;
  border-style: solid;
  border-color: #0062B0;
  border-radius: 30px;

  color: #0062B0;

  text-align: center;

  &:hover {
      background-color: #0062B0;
      color: white;
    }
`;

export const Cards = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 30%;
  height: 400px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  margin: 10px;
  border-style: solid;
  border-color: #0062B0;
  border: 1;

  display: inline-block;
  vertical-align: top;
  
  &:hover {
    transition: 0.5s;
    transform: translateY(-10px);
  }
`;

export const Row = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  margin-top: 30px;

  @media (min-width: 700px) {
      width: 200px;
}
  @media (max-width: 700px) {
      width: 90%;
}
`;

export const Name = styled.div`

// colocar nome para baixo
  font-size: 32px;
  font-weight: bold;
  color: #0062B0;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10px;

  &:hover {
      color: #008cff;
    }

  @media (min-width: 700px) {
      font-size: 20px;
}
  @media (max-width: 700px) {
      font-size: 90%;
}
`;

export const Type = styled.div`

// colocar tipo para baixo
  font-size: 26px;
  font-weight: bold;
  color: #FFCC00;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10px;

  /* &:hover {
      color: #ffd83c;
    } */

  @media (min-width: 700px) {
      font-size: 20px;
}
  @media (max-width: 700px) {
      font-size: 90%;
}
`;

export const Rodape = styled.div`
  background: white;
  text-align: center;
  margin: 50px 0px 50px;
  padding-top: 50px;
  font-size: 18px;
`;

export const View = styled.div`

`;

export const Text = styled.div`

`;

export const Navigation = styled.div`

`;

export const A = styled.div`

`;