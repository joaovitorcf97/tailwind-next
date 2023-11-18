import { Cog, LifeBuoy } from 'lucide-react';
import { NavItem } from './NavItem';

export function UsedSpaceWidget() {
  return (
    <div className="mt-auto flex flex-col gap-6">
      <nav className="space-y-0.5">
        <NavItem title="Support" icon={LifeBuoy} />
        <NavItem title="Settings" icon={Cog} />
      </nav>

      <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5">
        <div className="space-y-1">
          <span className="text-sm/5 font-medium text-violet-700">
            Used Space
          </span>
          <p className="text-sm/5 font-medium text-violet-500">
            LoPariatur modi itaque, molestias cupiditate molestiae quos in quas
            dolores ab.
          </p>
        </div>

        <div className="h-2 rounded-full bg-violet-100">
          <div className="h-2 w-4/5 rounded-full bg-violet-600"></div>
        </div>

        <div className="space-x-3">
          <button
            type="button"
            className="text-sm font-medium text-violet-500 hover:text-violet-700"
          >
            Dismiss
          </button>
          <button
            type="button"
            className="text-sm font-medium text-violet-700  hover:text-violet-900"
          >
            Upgrade plan
          </button>
        </div>
      </div>
    </div>
  );
}
