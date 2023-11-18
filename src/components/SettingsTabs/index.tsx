'use client';

import * as Tabs from '@radix-ui/react-tabs';
import { useState } from 'react';
import { TabItem } from './TabItem';

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab1');

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem
          value="tab1"
          title="My Details"
          isSelect={currentTab === 'tab1'}
        />
        <TabItem
          value="tab2"
          title="Profile"
          isSelect={currentTab === 'tab2'}
        />
        <TabItem
          value="tab3"
          title="Password"
          isSelect={currentTab === 'tab3'}
        />
        <TabItem value="tab4" title="Team" isSelect={currentTab === 'tab4'} />
        <TabItem value="tab5" title="Plan" isSelect={currentTab === 'tab5'} />
        <TabItem
          value="tab6"
          title="Billing"
          isSelect={currentTab === 'tab6'}
        />
        <TabItem value="tab7" title="Email" isSelect={currentTab === 'tab7'} />
        <TabItem
          value="tab8"
          title="Notification"
          isSelect={currentTab === 'tab8'}
        />
        <TabItem
          value="tab9"
          title="Integrations"
          isSelect={currentTab === 'tab9'}
        />
        <TabItem value="tab10" title="API" isSelect={currentTab === 'tab10'} />
      </Tabs.List>
    </Tabs.Root>
  );
}
