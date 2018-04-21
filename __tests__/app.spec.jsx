import List from"../src/List.jsx";
import {shallow} from "enzyme";

test("presence of list", () => {
    const component = shallow(<List/>);
    expect(component.length).toBe(1);
});