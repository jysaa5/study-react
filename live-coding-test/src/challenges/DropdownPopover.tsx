// 6. Build a Dropdown Menu
// Create a dropdown menu component that displays a list of items when clicked.

import Layout from '../shared/Layout';

const DropdownContent = ({
  items,
  positionAnchor,
}: {
  items: string[];
  positionAnchor: string;
}) => {
  return (
    <div
      id="dropdownPopover"
      popover="auto"
      className="dropdown-menu"
      style={{ positionAnchor: positionAnchor }}
    >
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const DropdownPopover = () => {
  const menuItems = ['Profile', 'Settings', 'Logout'];
  const list = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango', 'Pineapple'];

  return (
    <Layout>
      <ul>
        {list.map((item, index) => {
          const anchorName = `--dropdown-anchor-${index}`;
          return (
            <li key={index} className="mb-2">
              <button
                popoverTarget="dropdownPopover"
                className="dropdown-trigger btn-primary"
                style={{ anchorName: anchorName }}
                onMouseEnter={() => {
                  const popover = document.getElementById('dropdownPopover');
                  if (popover) {
                    popover.hidePopover();
                    (
                      popover.style as CSSStyleDeclaration & {
                        positionAnchor: string;
                      }
                    ).positionAnchor = anchorName;
                  }
                }}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
      <DropdownContent items={menuItems} positionAnchor="--anchor-default" />
    </Layout>
  );
};

export default DropdownPopover;
