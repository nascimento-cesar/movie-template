import { useState } from "react";
import Form from "../form";
import Template from "../template";
import { Wrapper } from "./styles";

function Page() {
  const [items, setItems] = useState(formatItems());

  return (
    <Wrapper>
      <Form items={items} onSelect={setItems} />
      <Template items={items} />
    </Wrapper>
  );
}

function formatItems() {
  return listCategories().reduce((result, item, index) => {
    result[`input${index}`] = { label: item, value: undefined };
    return result;
  }, {});
}

function listCategories() {
  return [
    "Filme favorito da vida",
    "Melhor roteiro",
    "Vou assistir qualquer hora",
    "Grande impacto na minha vida",
    "Melhor filme acima de 3h",
    "Eu amo, mas todo mundo odeia",
    "Eu odeio, mas todo mundo ama",
    "Por que eu gosto disso???",
    "Trilha sonora extraordinária",
    "Fotografia maravilhosa",
    "Cura para um dia ruim",
    "Personagem favorito",
    "Trilogia favorita",
    "Grande surpresa",
    "Maior decepção",
    "Animação favorita",
    "Ator favorito",
    "Atriz favorita",
    "Diretor favorito",
    "Diretora favorita",
  ];
}

export default Page;
