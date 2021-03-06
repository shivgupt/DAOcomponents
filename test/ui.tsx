import React = require("react");
import { create } from "react-test-renderer";
import DAO from "../src/components/DAO";

test("Test...", () => {
  const tree = create(
    <DAO address="Visitor" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
