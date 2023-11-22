import { Plus, Sun, User } from 'lucide-react';

export const NavigationSidebar = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-camp-heavy py-4">
      <button className="group flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white shadow-md transition hover:bg-[#79CF9F]">
        <Plus className="stroke-camp-heavy group-hover:stroke-white" />
      </button>
      <div className="my-2 h-[2px] w-[48px] bg-zinc-600" />
      <div className="flex-1"></div>
      <div className="mt-auto flex flex-col items-center justify-center">
        <Sun />
        <User />
      </div>
    </div>
  );
};
