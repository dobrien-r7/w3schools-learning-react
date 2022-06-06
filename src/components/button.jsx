const button = () => <Button context="primary" isActive className="btn--parent" >
  Button Dropdown
  <ButtonIcon/>
  {isActive &&
  <ButtonDropDown>
    <ButtonDropDownItem context="primary">Item 1</ButtonDropDownItem>
    <ButtonDropDownItem context="primary">Item 2</ButtonDropDownItem>
    <ButtonDropDownItem context="primary">Item 3</ButtonDropDownItem>
    <ButtonDropDownItem context="primary">Item 4</ButtonDropDownItem>
  </ButtonDropDown>
  }
</Button>
export default button