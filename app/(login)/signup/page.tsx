'use client';

import { useSearchParams } from 'next/navigation';

import { SelectUserType } from '@/components/sign/select-user-type';

export default function SignupPage() {
  const { get, has } = useSearchParams();

  const type = get('type');
  const hasType = has('type');

  return (
    <>
      {!hasType && <SelectUserType />}
      {hasType && <div>{type}</div>}
    </>
  );
}
