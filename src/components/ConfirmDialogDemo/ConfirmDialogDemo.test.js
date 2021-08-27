import React from "react";
import { shallow } from "enzyme";
import ConfirmDialogDemo from "./ConfirmDialogDemo";

describe("ConfirmDialogDemo", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ConfirmDialogDemo />);
    expect(wrapper).toMatchSnapshot();
  });
});
