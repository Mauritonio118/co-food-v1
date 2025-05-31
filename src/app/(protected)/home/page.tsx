import { auth } from '@/auth';
import { Page } from '@/components/PageLayout';
import Link from 'next/link';

export default async function Home() {
  const session = await auth();

  return (
    <>
      <Page.Main className="min-h-screen flex flex-col items-center px-4 py-6 gap-5 text-center bg-orange-200">
        <div className="space-y-1">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">CoFood</h1>
          <p className="text-sm text-gray-700 leading-snug max-w-xs mx-auto">
            Fueling communities with food, sustainably.
          </p>
        </div>

        <div className="w-full max-w-sm bg-white rounded-xl shadow p-4 text-left space-y-2 border border-orange-300">
          <h2 className="text-base font-semibold text-gray-800">Treasury Overview</h2>
          <ul className="text-sm text-gray-700 space-y-0.5">
            <li><strong>Principal:</strong> $1,000,000</li>
            <li><strong>Yields:</strong> $53,500 available</li>
            <li><strong>Expenses:</strong> $12,750 (6 months)</li>
            <li><strong>Next Distribution:</strong> Jul 15, 2025</li>
          </ul>
        </div>

        <div className="w-full max-w-sm pt-2">
          <Link
            href="/whitelist"
            className="block w-full bg-black text-white text-center font-semibold text-sm px-4 py-2.5 rounded-full shadow hover:opacity-90 transition"
          >
            Apply to Whitelist
          </Link>
        </div>

        <div className="w-full max-w-sm bg-white rounded-xl shadow p-4 text-left space-y-2 border border-orange-300">
          <h2 className="text-base font-semibold text-gray-800">How it works</h2>
          <ol className="list-decimal list-inside text-sm text-gray-700 space-y-0.5">
            <li>Apply to the whitelist</li>
            <li>Receive petty cash</li>
            <li>Organize an event</li>
            <li>Upload report</li>
            <li>Get reimbursed</li>
          </ol>
        </div>
      </Page.Main>
    </>
  );
}



