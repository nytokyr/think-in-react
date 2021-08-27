import React from "react";
import { shallow } from "enzyme";
import ConfirmDialog from "./ConfirmDialog";

describe("ConfirmDialog", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ConfirmDialog />);
    expect(wrapper).toMatchSnapshot();
  });
});
