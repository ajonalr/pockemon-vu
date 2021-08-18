import pockemonApi from "../api/pockemonApi";

const getPockemon = () => {

   const pockemonArr = Array.from(Array(650));
   return pockemonArr.map(
      (_, index) => {
         return index + 1;
      }
   )

}

const getPockemonOptions = async () => {
   // esto es para mesclar el arreglo de pockemonArr
   const mixPocke = getPockemon().sort(() => Math.random() - 0.5)
   // el splice el para solo obtener los indices de un array
   const pockemons = await getPockemonName(mixPocke.splice(1, 4))
   return pockemons;
}

// destructuracion de array [a,b,c,d]
const getPockemonName = async ([a, b, c, d] = []) => {

   // const resp = await pockemonApi.get(`/1`)
   // console.log(resp.data.name);

   const promisesArr = [
      pockemonApi.get(`/${a}`),
      pockemonApi.get(`/${b}`),
      pockemonApi.get(`/${c}`),
      pockemonApi.get(`/${d}`),
   ];


   const [p1, p2, p3, p4] = await Promise.all(
      promisesArr
   );

   return [
      {  name: p1.data.name, id: p1.data.id},
      {  name: p2.data.name, id: p2.data.id},
      {  name: p3.data.name, id: p3.data.id},
      {  name: p4.data.name, id: p4.data.id},
   ]

}

export default getPockemonOptions


