import { Radio, Button, Form, Input, message, Space } from "antd";
import { useState } from "react";
import type { RadioChangeEvent } from "antd";
import SearchInput from "../organisms/SearchInput";

const Pokedex: React.FC = () => {
  //for radio button
  const [value, setValue] = useState<string>("");

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h2>Search by:</h2>
      <Radio.Group
        defaultValue="name"
        buttonStyle="solid"
        onChange={onChange}
        style={{
          marginBottom: 50,
        }}
      >
        <Radio.Button value="name">Name</Radio.Button>
        <Radio.Button value="type">Type</Radio.Button>
        <Radio.Button value="ability">Ability</Radio.Button>
        <Radio.Button value="move">Move</Radio.Button>
      </Radio.Group>
      <SearchInput />
    </>
  );
};

export default Pokedex;
