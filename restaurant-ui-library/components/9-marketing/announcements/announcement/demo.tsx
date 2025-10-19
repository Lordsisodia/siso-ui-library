'use client';

import { ArrowUpRightIcon } from 'lucide-react';

import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from './announcement';

const Example = () => (
  <div className="flex h-screen w-full items-center justify-center gap-4">
    <Announcement>
      <AnnouncementTitle>
        New feature added
        <ArrowUpRightIcon size={16} className="shrink-0 text-muted-foreground" />
      </AnnouncementTitle>
    </Announcement>
  </div>
);

export { Example };
