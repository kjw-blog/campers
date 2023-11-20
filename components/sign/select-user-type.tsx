import { UserType } from '@prisma/client';
import { SelectUserTypeDetail } from './select-user-type-detail';

export const SelectUserType = () => {
  return (
    <div className="flex w-[480px] min-w-[90%] items-center space-x-4 sm:min-w-0">
      <SelectUserTypeDetail type={UserType.GUEST} />
      <SelectUserTypeDetail type={UserType.HOST} />
    </div>
  );
};
