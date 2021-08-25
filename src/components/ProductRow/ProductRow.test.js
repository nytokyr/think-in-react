import React from "react";
import { shallow } from "enzyme";
import ProductRow from "./ProductRow";

describe("ProductRow", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ProductRow />);
    expect(wrapper).toMatchSnapshot();
  });
});
