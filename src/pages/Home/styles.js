import styled from 'styled-components';

export const Container = styled.div`
  background: white;
`;

export const Logo = styled.img`
  width: 300px;
`;

export const Topo = styled.header`
  background-color: white;
  padding-bottom: 20px;
  padding-top: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Search = styled.div`
  margin-right: 15%;
  margin-left: 10%;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.input`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 10%;
  /* margin-right: 10%; */
  border-radius: 30px 0px 0px 30px;
  border-color: black;
  width: 80%;
  height: 30px;

  color: #0062B0;
  box-shadow: 0 0 0 0;
  border: 1;
  outline: 0;
  border-color: #FFCC00;
  border-style: solid;
  border-width: 2px;
  border-right: none;
  padding: 10px 10px 10px 10px;

  font-size: 30px;
`;

export const Divbtn = styled.div`
  align-items: row;
`;

export const Buttonsearch = styled.button`
  margin-left: auto;
  margin-right: 20%;
  margin-top: 40px;
  margin-bottom: 40px;
  border-radius: 0px 30px 30px 0px;
  display: block;
  height: 54px;

  font-size: 24px;

  background: white;
  border-style: solid;
  border-color: #0062B0;

  color: #0062B0;

  text-align: center;

  &:hover {
    background-color: #0062B0;
    color: white;
    }
  @media (min-width: 700px) {
    width: 6em;
}
  @media (max-width: 700px) {
    width: 100%;
}
`;

// export const Buttonmais = styled.button`
//   margin-left: auto;
//   margin-right: auto;
//   margin-bottom: 20px;
//   border-radius: 30px;
//   display: block;
//   height: 50px;

//   width: 6em;
//   font-size: 24px;

//   background: white;
//   border-style: solid;
//   border-color: #0062B0;

//   color: #0062B0;

//   text-align: center;

//   &:hover {
//       background-color: #0062B0;
//       color: white;
//     }
    
// `;

// export const Cards = styled.div`
//   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
//   transition: 0.3s;
//   width: 400px;
//   height: 400px;
//   background: white;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 5%;
//   margin: 10px;

//   display: inline-block;
//   vertical-align: top;
  
//   &:hover {
//     transition: 0.5s;
//     transform: translateY(-5px);
//   }
// `;

export const Row = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  margin-top: 30px;

  @media (min-width: 700px) {
      width: 210px;
}
  @media (max-width: 700px) {
      width: 50%;
}
`;

// export const Name = styled.div`

// // colocar nome para baixo
//   font-size: 32px;
//   font-weight: bold;
//   color: #0062B0;
//   margin-right: auto;
//   margin-left: auto;
//   margin-bottom: 10px;

//   &:hover {
//       color: #008cff;
//     }

//   @media (min-width: 700px) {
//       font-size: 20px;
// }
//   @media (max-width: 700px) {
//       font-size: 90%;
// }
// `;

// export const Type = styled.div`

// // colocar tipo para baixo
//   font-size: 26px;
//   font-weight: bold;
//   color: #FFCC00;
//   margin-right: auto;
//   margin-left: auto;
//   margin-bottom: 10px;

//   /* &:hover {
//       color: #ffd83c;
//     } */

//   @media (min-width: 700px) {
//       font-size: 20px;
// }
//   @media (max-width: 700px) {
//       font-size: 90%;
// }
// `;

// export const Rodape = styled.div`
//   background: white;
//   text-align: center;
//   padding-top: 50px;
//   margin: 5px;
//   font-size: 18px;

// `;

export const View = styled.div`
`;

export const Text = styled.div`

`;

export const Navigation = styled.div`

`;

export const A = styled.div`

`;

export const Header = styled.div`

`;

// ------------------------ Estilização das páginas individuais dos pokémons ------------------------ //

// export const Corpo = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   flex-direction: row;
//   align-items: center;
//   margin: 20px;
// `;
// export const Body = styled.div`
// `;
// export const Imgpokemon = styled.img`
//   width: 400px;
// `;
// export const Nome = styled.div`
//   font-size: 80px;
//   font-weight: bold;
//   color: #0062B0;
// `;
// export const Tipo = styled.div`
//   font-size: 70px;
//   font-weight: bold;
//   color: #FFCC00;
// `;
// export const Altura = styled.div`
//   font-size: 70px;
//   color: #FFCC00;
// `;
// export const Peso = styled.div`
//   font-size: 70px;
//   color: #FFCC00;
// `;