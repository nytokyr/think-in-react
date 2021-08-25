import React from "react";
import { shallow } from "enzyme";
import ProductTable from "./ProductTable";

describe("ProductTable", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ProductTable />);
    expect(wrapper).toMatchSnapshot();
  });
});
