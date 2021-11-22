import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SidenavHeader() {
  return (
    <div className="mx-auto mt-3 w-44 h-20 bg-body flex items-center justify-center mb-6 sticky top-0 z-10">
      <Link href="/admin">
        <img className="overflow-hidden cursor-pointer" src="/img/logo-left.png" width='100%' alt="Admin logo" />
      </Link>
    </div>
  );
}
