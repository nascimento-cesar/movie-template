import Thumb from "../thumb";
import { Content, Wrapper } from "./styles";
import html2canvas from "html2canvas";

function Template(props) {
  return (
    <Wrapper>
      <button onClick={Download}>Download</button>
      <Content id="template">{renderItems(props)}</Content>
    </Wrapper>
  );
}

function Download() {
  return html2canvas(document.getElementById("template"), {
    allowTaint: true,
    useCORS: true,
    logging: true,
  }).then((canvas) => {
    const element = document.createElement("a");
    const fileName = `filmes.png`;
    const base64 = canvas.toDataURL();

    element.setAttribute("href", base64);
    element.setAttribute("download", fileName);
    element.style.display = "none";

    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  });
}

function renderItems(props) {
  return Object.keys(props.items)
    .filter((key) => !!props.items[key]?.value)
    .map((key) => {
      const item = props.items[key];

      return (
        <Thumb
          key={key}
          imageUrl={item.value?.imageUrl}
          imageCaption={item.label}
        />
      );
    });
}

export default Template;
