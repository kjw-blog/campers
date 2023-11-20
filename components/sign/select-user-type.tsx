import { UserType } from '@prisma/client';
import { SelectUserTypeDetail } from './select-user-type-detail';

export const SelectUserType = () => {
  return (
    <div className="flex items-center space-x-4">
      <SelectUserTypeDetail type={UserType.GUEST} />
      <SelectUserTypeDetail type={UserType.HOST} />
    </div>
  );
};
