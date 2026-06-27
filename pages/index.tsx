import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/markets')
      .then(r => r.json())
      .then(data => setMarkets(data.markets || []));
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Head><title>GhanaPredict - Predict. Win. Repeat.</title></Head>
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-400">GhanaPredict</h1>
        <div className="flex gap-4">
          <button className="text-gray-300 hover:text-white">Markets</button>
          <button className="bg-green-500 hover:bg-green-400 text-black font-bold px-4 py-2 rounded-lg">Connect Wallet</button>
        </div>
      </nav>
      <main className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-2">Prediction Markets</h2>
        <p className="text-gray-400 mb-8">Bet on real Ghana events. Win real money.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {markets.length === 0 && (
            <p className="text-gray-500">No markets yet. Admin will add soon.</p>
          )}
          {markets.map((m: any) => (
            <div key={m._id} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-green-500 transition">
              <span className="text-xs text-green-400 uppercase">{m.category}</span>
              <h3 className="text-lg font-semibold mt-2 mb-4">{m.title}</h3>
              <div className="flex justify-between text-sm text-gray-400">
                <span>Pool: GHS {m.totalPool}</span>
                <span className="capitalize">{m.status}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
