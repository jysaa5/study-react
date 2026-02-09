// 6. Build a Dropdown Menu
// Create a dropdown menu component that displays a list of items when clicked.

import Layout from '../shared/Layout';

function DropdownMenu({
  items,
  positionAnchor,
}: {
  items: string[];
  positionAnchor: string;
}) {
  return (
    <div
      id="mypopover"
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
}

export default function DropdownMenuApp() {
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
                popoverTarget="mypopover"
                className="dropdown-trigger btn-primary"
                style={{ anchorName: anchorName }}
                onMouseEnter={() => {
                  const popover = document.getElementById('mypopover');
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
      <DropdownMenu items={menuItems} positionAnchor="--anchor-default" />
    </Layout>
  );
}
