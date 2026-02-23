// 7. Implement a Tabs Component
// Create a tabs component where each tab displays different content when selected.

import { useState } from 'react';
import Layout from '../shared/Layout';

const Tabs = () => {
  const tabs = [
    { id: 'tab1', label: 'Tab 1', content: 'Content for Tab 1' },
    { id: 'tab2', label: 'Tab 2', content: 'Content for Tab 2' },
    { id: 'tab3', label: 'Tab 3', content: 'Content for Tab 3' },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <Layout>
      <div className="tabs">
        <div className="tabs-list">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={
                'btn-primary' + (activeTab === tab.id ? ' active' : '')
              }
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tabs-content">
          <div className="tab-panel">
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tabs;
