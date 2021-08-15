import SearchInput from "../search-input";
import { Wrapper } from "./styles";

function Form(props) {
  return (
    <Wrapper>
      {Object.keys(props.items).map((key) => {
        return (
          <SearchInput
            key={key}
            id={key}
            label={props.items[key]?.label}
            onSelect={(selectedValue) => onSelect(props, key, selectedValue)}
            value={props.items[key]?.value}
          />
        );
      })}
    </Wrapper>
  );
}

function onSelect(props, key, value) {
  let updatedItem = {};
  updatedItem[key] = { ...props.items[key], value: value };

  return props.onSelect({ ...props.items, ...updatedItem });
}

export default Form;
