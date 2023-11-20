'use client';

import { useSearchParams } from 'next/navigation';

import { SelectUserType } from '@/components/sign/select-user-type';
import { SignupForm } from '@/components/sign/signup-form';

export default function SignupPage() {
  const { has } = useSearchParams();

  const hasType = has('type');

  return (
    <>
      {!hasType && <SelectUserType />}
      {hasType && <SignupForm />}
    </>
  );
}
