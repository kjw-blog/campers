import { MobileToggle } from './mobile-toggle';

export const HostHeader = ({ campId }: { campId: string }) => {
  return (
    <div className="text-md flex h-12 items-center border-b-2 border-neutral-200 px-3 font-semibold dark:border-neutral-800">
      <MobileToggle campId={campId} />
    </div>
  );
};
