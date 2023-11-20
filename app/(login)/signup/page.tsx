'use client';

import { useSearchParams } from 'next/navigation';

import { GuestForm } from '@/components/sign/guest-form';
import { HostForm } from '@/components/sign/host-form';
import { SelectUserType } from '@/components/sign/select-user-type';

export default function SignupPage() {
  const { get, has } = useSearchParams();

  const type = get('type');
  const hasType = has('type');

  return (
    <>
      {!hasType && <SelectUserType />}
      {hasType && type === 'guest' && <GuestForm />}
      {hasType && type === 'host' && <HostForm />}
    </>
  );
}
