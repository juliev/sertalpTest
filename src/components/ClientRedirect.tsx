'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ClientRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Only redirect if we're at the root path
    if (window.location.pathname === '/') {
      router.replace('/en');
    }
  }, [router]);

  return null;
}
