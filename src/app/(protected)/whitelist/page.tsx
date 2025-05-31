'use client';

import { useState } from 'react';
import { Page } from '@/components/PageLayout';
import { useRouter } from 'next/navigation';
import { Verify } from '@/components/Verify';
import Link from 'next/link';

export default function WhitelistForm() {
  const router = useRouter();
  const [verified, setVerified] = useState(false);

  return (
    <>
      <Page.Main className="min-h-screen flex flex-col items-center px-4 py-6 gap-4 text-center bg-orange-200">
        <div className="w-full max-w-sm bg-white rounded-xl shadow p-5 space-y-3 border border-orange-300">
          <h1 className="text-xl font-bold text-gray-800 text-center">Whitelist Application</h1>

          <form
            className="flex flex-col space-y-3 text-sm text-gray-700"
            onSubmit={(e) => {
              e.preventDefault();
              router.push('/thank-you');
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
              <span>I accept the terms and conditions</span>
            </label>

            <Verify />


            <div className="pt-2">
              <button
                type="button"
                onClick={() => router.push('/portal')}
                className="block w-full bg-green text-[#ffffff] text-center font-bold text-sm px-4 py-2.5 rounded-full shadow hover:opacity-90 transition"
              >
                Submit
              </button>
            </div>

          </form>
        </div>
      </Page.Main>
    </>
  );
}
