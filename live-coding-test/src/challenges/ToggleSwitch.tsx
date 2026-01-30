// 2. Implement a Toggle Switch
// Create a toggle switch component between "On" and "Off" states.
import { useState } from 'react';
import Layout from '../shared/Layout';

export default function ToggleSwitch() {

    const [on, setOn] = useState(false);
    return (
      <Layout>
        <button type="button" className="btn-primary" onClick={() => setOn(!on)}>
          {on ? "ON" : "OFF"}
        </button>
      </Layout>
    );
}