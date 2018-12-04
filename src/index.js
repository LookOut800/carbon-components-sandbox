import React from "react";
import { render } from "react-dom";
import { Button, Table } from "carbon-components-react";

const App = () => (
  <div>
    <Button>Hello world</Button>
    <Table>foo</Table>
  </div>
);

render(<App />, document.getElementById("root"));
