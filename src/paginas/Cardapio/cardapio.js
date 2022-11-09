import Cards from "../../components/Cards/Cards.js";
import Input from "../../components/Input/Input.js";
import { useState } from "react";
import React from "react";

const Cardapio = () => {

    const [valor, setValor] = useState('')

    return (        
        <main>
        <Input value={valor} onInput={setValor} tipo="text" label="Nome" placeholder="Procure um lanche"/>
        <p>{valor}</p>
        <Cards nome1="X-Bacon" ingredientes1="Pão, 1 fatia de queijo cheddar, Hamburguer, alface, tomate e bacon crocante" 
               nome2="X-Franco" ingredientes2="Pão, 2 fatias de queijo cheddar, presunto, frango desfiado, alface e tomate" 
               nome3="X-Calabresa" ingredientes3="Pão, 2 fatias de queijo cheddar, porção de calabresa, alface, tomate e bacon"/>

        <Cards nome1="Bauru" ingredientes1="Pão, 2 fatias de queijo mussarela, 2 fatias de presunto, alface e tomate" 
               nome2="Misto" ingredientes2="Pão, 1 fatai de queijo e 1 fatia de presunto" 
               nome3="Burguer duplo" ingredientes3="Pão, 2 hamburgueres, 2 fatias de queijo mussarela, 2 fatias de presunto, alface e tomate"/>

        <Cards nome1="..." ingredientes1="Pão..." 
               nome2="..." ingredientes2="Pão..." 
               nome3="..." ingredientes3="Pão..."/>       
      </main>
    )
};

export default Cardapio;