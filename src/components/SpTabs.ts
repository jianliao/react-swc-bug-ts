import React from "react";
import { createComponent } from "@lit-labs/react";
import '@spectrum-web-components/tabs/sp-tabs.js';
import '@spectrum-web-components/tabs/sp-tab.js';
import '@spectrum-web-components/tabs/sp-tab-panel.js';
import { Tabs, Tab, TabPanel } from '@spectrum-web-components/tabs';

export const SpTabs = createComponent(React, 'sp-tabs', Tabs, { change: 'change' }, 'SpTabs');
export const SpTab = createComponent(React, 'sp-tab', Tab, {}, 'SpTab');
export const SpTabPanel = createComponent(React, 'sp-tab-panel', TabPanel, {}, 'SpTabPanel');
