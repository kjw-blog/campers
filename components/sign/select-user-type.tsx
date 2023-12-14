import { UserType } from '@prisma/client';
import { SelectUserTypeDetail } from './select-user-type-detail';

export const SelectUserType = () => {
  return (
    <div className="flex w-[480px] max-w-[95%] grid-cols-2 items-center gap-2 sm:min-w-0 md:gap-4">
      <SelectUserTypeDetail type={UserType.GUEST} />
      <SelectUserTypeDetail type={UserType.HOST} />
    </div>
  );
};
