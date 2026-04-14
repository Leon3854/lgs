'use client';

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export default function Home() {
  const mutation = useMutation({
    mutationFn: (type: string) => {
      return axios.post('http://localhost:3001/scenarios/run', { type });
    },
    onSuccess: (data, variables) => {
      alert(`🛰️ Сигнал отправлен: Сценарий "${variables}" зафиксирован!`);
    },
    onError: () => {
      alert(`⚠️ Ошибка зафиксирована в системе мониторинга (Loki/Prometheus)`);
    }
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-100 text-slate-900">
      <h1 className="text-4xl font-bold mb-8">Signal Lab Control 🛸</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        <div className="p-6 bg-white rounded-xl shadow-sm border border-green-200">
          <h2 className="text-xl font-semibold mb-2">System Health</h2>
          <p className="text-sm text-slate-500 mb-4">Генерация успешных логов и метрик 200 OK</p>
          <button 
            onClick={() => mutation.mutate('success')}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            Запустить Success
          </button>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-sm border border-red-200">
          <h2 className="text-xl font-semibold mb-2">Critical Failure</h2>
          <p className="text-sm text-slate-500 mb-4">Имитация 500 ошибки для Loki и Grafana</p>
          <button 
            onClick={() => mutation.mutate('error')}
            className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
          >
            Запустить Error
          </button>
        </div>
      </div>
      
      <div className="mt-10 text-slate-400 text-xs uppercase tracking-widest">
        Observability Playground Active
      </div>
    </main>
  );
}