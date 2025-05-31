'use client';

import { useState } from 'react';
import { Page } from '@/components/PageLayout';
import { useRouter } from 'next/navigation';
import { Verify } from '@/components/Verify';

export default function WhitelistForm() {
  const router = useRouter();
  const [verified, setVerified] = useState(false);

  return (
    <>
      <Page.Main className="min-h-screen bg-orange-200 flex flex-col items-center px-4 py-6">
        <div className="w-full max-w-sm bg-white rounded-xl shadow p-4 space-y-4 border border-orange-300">
          <h1 className="text-xl font-bold text-gray-800 text-center">Whitelist Application</h1>

          <form
            className="flex flex-col space-y-3 text-sm text-gray-700"
            onSubmit={(e) => {
              e.preventDefault();
              router.push('/thank-you'); // puedes cambiar este path
            }}
          >
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 rounded border border-gray-300"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded border border-gray-300"
              required
            />
            <input
              type="text"
              placeholder="Telegram / Discord / Twitter"
              className="w-full p-2 rounded border border-gray-300"
            />
            <textarea
              placeholder="Personal Introduction"
              className="w-full p-2 rounded border border-gray-300"
              rows={2}
            />
            <textarea
              placeholder="How did you get into CoFood?"
              className="w-full p-2 rounded border border-gray-300"
              rows={2}
            />
            <textarea
              placeholder="What kind of activities would you like to organize?"
              className="w-full p-2 rounded border border-gray-300"
              rows={2}
            />
            <textarea
              placeholder="Do you have previous experience organizing events?"
              className="w-full p-2 rounded border border-gray-300"
              rows={2}
            />
            <label className="flex items-center gap-2">
              <input type="checkbox" required />
              I accept the terms and conditions
            </label>

            <Verify />

            <button
              type="submit"
              disabled={!verified}
              className="w-full bg-black text-white py-2 rounded-full font-semibold text-sm transition hover:opacity-90"
            >
              Submit Application
            </button>
          </form>
        </div>
      </Page.Main>
    </>
  );
}

