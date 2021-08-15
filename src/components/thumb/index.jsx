import { Caption, Frame, Wrapper } from "./styles";

function Thumb(props) {
  return (
    <Wrapper>
      <Frame>
        <img alt={props.imageCaption} src={props.imageUrl} />
      </Frame>
      <Caption>{props.imageCaption}</Caption>
    </Wrapper>
  );
}

export default Thumb;
