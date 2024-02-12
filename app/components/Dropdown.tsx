"use client";
import { FC } from "react";
import { Checkbox, Dropdown as FlowbiteDropdown } from "flowbite-react";

type DropdownProps = {};

type DropdownItemProps = {};

export const Dropdown: FC<DropdownProps> = () => {
  return (
    <FlowbiteDropdown label="FlowbiteDropdown button">
      <FlowbiteDropdown.Item>
        <Checkbox />
      </FlowbiteDropdown.Item>
      <FlowbiteDropdown.Item>Settings</FlowbiteDropdown.Item>
      <FlowbiteDropdown.Item>Earnings</FlowbiteDropdown.Item>
      <FlowbiteDropdown.Item>Sign out</FlowbiteDropdown.Item>
    </FlowbiteDropdown>
  );
};
