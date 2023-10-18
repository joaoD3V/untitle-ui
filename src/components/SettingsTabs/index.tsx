'use client';
// Usar em todos os lugares que precisam do client side
// Hooks, useState, useEffect...
// Quando tem algum event listener, onClick, onSubmitt...

import * as Tabs from '@radix-ui/react-tabs';
import { TabItem } from './TabItem';
import { useState } from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab-1');

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
            <TabItem
              value="tab-1"
              title="My details"
              isSelected={currentTab === 'tab-1'}
            />
            <TabItem
              value="tab-2"
              title="Profile"
              isSelected={currentTab === 'tab-2'}
            />
            <TabItem
              value="tab-3"
              title="Password"
              isSelected={currentTab === 'tab-3'}
            />
            <TabItem
              value="tab-4"
              title="Team"
              isSelected={currentTab === 'tab-4'}
            />
            <TabItem
              value="tab-5"
              title="Plan"
              isSelected={currentTab === 'tab-5'}
            />
            <TabItem
              value="tab-6"
              title="Billing"
              isSelected={currentTab === 'tab-6'}
            />
            <TabItem
              value="tab-7"
              title="Email"
              isSelected={currentTab === 'tab-7'}
            />
            <TabItem
              value="tab-8"
              title="Notifications"
              isSelected={currentTab === 'tab-8'}
            />
            <TabItem
              value="tab-9"
              title="Integrations"
              isSelected={currentTab === 'tab-9'}
            />
            <TabItem
              value="tab-10"
              title="API"
              isSelected={currentTab === 'tab-10'}
            />
          </Tabs.List>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  );
}
