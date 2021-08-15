import { useEffect, useState } from "react";
import Thumb from "../thumb";
import { Label, Input, Option, SearchResults, Wrapper } from "./styles";
import { useDebouncedCallback } from "use-debounce";

function SearchInput(props) {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);
  const debounced = useDebouncedCallback((value, setOptions) => {
    if (!value) return;

    searchResults(value, setOptions);
  }, 300);

  useEffect(() => {
    debounced(value, setOptions);
  }, [value]);

  return (
    <Wrapper>
      <Label htmlFor={props.id}>{props.label}</Label>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      {options.length > 0 &&
        renderSuggestions(options, props.onSelect, setOptions)}
    </Wrapper>
  );
}

async function searchResults(searchText, setOptions) {
  return await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${searchText}&api_key=86058edd096face30e0ea69b495e6f87`
  )
    .then((response) => response.json())
    .then((data) => {
      const filteredData = data?.results?.filter((option) =>
        ["movie", "tv", "person"].includes(option.media_type)
      );

      const mappedData = (filteredData || []).slice(0, 6).map(mapSuggestion);

      setOptions(mappedData);
    });
}

function renderSuggestions(options, onSelect, setOptions) {
  return (
    <SearchResults>
      {options.map((option, index) => (
        <Option
          key={index}
          onClick={() => {
            setOptions([]);
            onSelect(option);
          }}
        >
          <Thumb
            imageCaption={option.imageCaption}
            imageUrl={option.imageUrl}
          />
        </Option>
      ))}
    </SearchResults>
  );
}

function mapSuggestion(suggestion) {
  let imageCaption = "";
  let imagePath = "";

  switch (suggestion.media_type) {
    case "person":
      imageCaption = suggestion.name;
      imagePath = suggestion.profile_path;
      break;
    case "tv":
      imageCaption = suggestion.title;
      imagePath = suggestion.poster_path;
      break;
    case "movie":
      imageCaption = suggestion.title;
      imagePath = suggestion.poster_path;
      break;
    default:
      break;
  }

  return {
    imageCaption: imageCaption,
    imageUrl: `https://image.tmdb.org/t/p/w300/${imagePath}`,
  };
}

export default SearchInput;
