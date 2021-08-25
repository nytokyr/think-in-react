import React from "react";
import { shallow } from "enzyme";
import ProductCategoryRow from "./ProductCategoryRow";

describe("ProductCategoryRow", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ProductCategoryRow />);
    expect(wrapper).toMatchSnapshot();
  });
});
