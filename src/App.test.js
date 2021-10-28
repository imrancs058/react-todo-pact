import { render, screen, act } from '@testing-library/react';
import App from './App';
import { mount } from 'enzyme';
var wrapper;
beforeEach(()=>{
  wrapper=mount(<App/>);
})
describe("Test Cases for todo module",()=>{

  test('TODO input field, Add button,Display TODO list element exists', () => {
    expect(wrapper.find("#add-todo-txt").length).toEqual(1);
    expect(wrapper.find("#add-todo-btn").length).toEqual(1);
    expect(wrapper.find("#add-todo-list").length).toEqual(1);
  });
  test("Render button named Add",()=>{
    expect(wrapper.find("#add-todo-btn").text()).toBe("Add")
  })
})
