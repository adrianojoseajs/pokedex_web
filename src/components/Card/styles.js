import styled from 'styled-components';

export const Buttonmais = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border-radius: 30px;
  display: block;
  height: 50px;

  width: 6em;
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
    
`;

export const Cards = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 400px;
  height: 400px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin: 10px;

  display: inline-block;
  vertical-align: top;
  
  &:hover {
    transition: 0.5s;
    transform: translateY(-5px);
  }
`;

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