import React from "react";
import { shallow } from "enzyme";
import FilterableProductTable from "./FilterableProductTable";

describe("FilterableProductTable", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FilterableProductTable />);
    expect(wrapper).toMatchSnapshot();
  });
});
