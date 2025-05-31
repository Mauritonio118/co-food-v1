'use client';

import { useState } from 'react';
import { Page } from '@/components/PageLayout';

export default function Portal() {
  const [balance, setBalance] = useState<number>(300);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [amount, setAmount] = useState('');

  const handleConfirm = () => {
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0 && value <= balance) {
      setBalance(prev => +(prev - value).toFixed(2));
    }
    setAmount('');
    setShowWithdraw(false);
  };

  const BTN_SOLID = 'w-full bg-black text-[#ffffff] text-center font-bold text-sm px-4 py-2.5 rounded-full shadow transition-colors';

  return (
    <Page.Main className="min-h-screen flex flex-col items-center px-4 py-5 gap-4 bg-orange-200">
      {/* Caja chica */}
      <section className="w-full max-w-sm bg-white rounded-xl shadow p-5 space-y-3 border border-orange-300">
        <h2 className="text-lg font-bold text-gray-800 text-center">Petty Cash</h2>
        <div className="flex flex-col items-center space-y-1">
          <p className="text-sm text-gray-600">Available Balance</p>
          <p className="text-2xl font-extrabold text-gray-900">${balance.toFixed(2)} USDC</p>
        </div>

        {!showWithdraw && (
          <button onClick={() => setShowWithdraw(true)} className={BTN_SOLID}>
            Withdraw
          </button>
        )}

        {showWithdraw && (
          <div className="space-y-2">
            <input
              type="number"
              step="0.01"
              min="0"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              placeholder="Amount to withdraw"
              className="w-full p-2 rounded border border-gray-300 text-sm"
            />
            <div className="flex gap-2">
              <button onClick={handleConfirm} className={BTN_SOLID}>
                Confirm
              </button>
              <button
                onClick={() => { setAmount(''); setShowWithdraw(false); }}
                className="flex-1 border border-black text-black font-bold text-sm px-4 py-2.5 rounded-full shadow transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Reporte de evento */}
      <section className="w-full max-w-sm bg-white rounded-xl shadow p-5 space-y-3 border border-orange-300">
        <h2 className="text-lg font-bold text-gray-800 text-center">Submit Event Report</h2>
        <form
          className="flex flex-col space-y-3 text-sm text-gray-700"
          onSubmit={e => {
            e.preventDefault();
            alert('Report submitted (demo)');
          }}
        >
          <input type="text" placeholder="Event Name" required className="p-2 rounded border border-gray-300" />
          <input type="date" required className="p-2 rounded border border-gray-300" />
          <input type="text" placeholder="Place" required className="p-2 rounded border border-gray-300" />
          <textarea placeholder="Brief Description" rows={2} className="p-2 rounded border border-gray-300" />
          <input type="number" min="0" placeholder="Estimated Attendees" className="p-2 rounded border border-gray-300" />
          <textarea placeholder="Links (one per line)" rows={2} className="p-2 rounded border border-gray-300" />

          <label className="text-gray-600">Upload Photos</label>
          <input type="file" multiple className="text-xs" />

          <label className="text-gray-600">Expense Receipts</label>
          <input type="file" multiple className="text-xs" />

          <input type="number" step="0.01" min="0" placeholder="Total Expenses (USDC)" className="p-2 rounded border border-gray-300" />

          <button type="submit" className={BTN_SOLID}>
            Submit Report
          </button>
        </form>
      </section>
    </Page.Main>
  );
}
