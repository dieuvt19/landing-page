'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  return (
    <>
      <Link href="/dashboard">Dashboard</Link>;
      <div style={{ marginTop: '8px' }}>
        <button type="button" onClick={() => router.push('/dashboard')}>
          Dashboard
        </button>
      </div>
    </>
  );
}
