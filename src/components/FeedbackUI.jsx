import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AlertCircle, CheckCircle2, Info, X, ShieldAlert } from 'lucide-react';

/** Shared toast notifications and accessible confirmation dialog. */
export function useFeedback() {
  const [toast, setToast] = useState(null);
  const [confirmation, setConfirmation] = useState(null);
  const resolverRef = useRef(null);
  const toastTimerRef = useRef(null);

  const notify = useCallback((message, type = 'success') => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToast({ message: String(message || 'Terjadi kesalahan.'), type });
    toastTimerRef.current = setTimeout(() => setToast(null), 4500);
  }, []);

  const confirmAction = useCallback((message, options = {}) => new Promise((resolve) => {
    resolverRef.current = resolve;
    setConfirmation({
      title: options.title || 'Konfirmasi tindakan',
      message,
      confirmLabel: options.confirmLabel || 'Ya, lanjutkan',
      danger: options.danger ?? true,
    });
  }), []);

  const closeConfirmation = (result) => {
    setConfirmation(null);
    if (resolverRef.current) resolverRef.current(result);
    resolverRef.current = null;
  };

  useEffect(() => () => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    if (resolverRef.current) resolverRef.current(false);
  }, []);

  const FeedbackUI = () => (
    <>
      {toast && (
        <div role="status" aria-live="polite" className="fixed right-4 top-4 z-[100] w-[min(92vw,420px)]">
          <div className={`flex items-start gap-3 rounded-xl border bg-white p-4 shadow-xl ${
            toast.type === 'error' ? 'border-red-200' : toast.type === 'info' ? 'border-sky-200' : 'border-emerald-200'
          }`}>
            {toast.type === 'error' ? <AlertCircle className="mt-0.5 shrink-0 text-red-600" size={21} /> :
              toast.type === 'info' ? <Info className="mt-0.5 shrink-0 text-sky-600" size={21} /> :
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={21} />}
            <p className={`flex-1 text-sm leading-5 ${toast.type === 'error' ? 'text-red-800' : 'text-slate-800'}`}>{toast.message}</p>
            <button type="button" onClick={() => setToast(null)} className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700" aria-label="Tutup notifikasi"><X size={16} /></button>
          </div>
        </div>
      )}
      {confirmation && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/45 p-4" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) closeConfirmation(false); }}>
          <section role="alertdialog" aria-modal="true" aria-labelledby="feedback-confirm-title" aria-describedby="feedback-confirm-message" className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-full ${confirmation.danger ? 'bg-red-50 text-red-600' : 'bg-sky-50 text-sky-600'}`}>
              {confirmation.danger ? <ShieldAlert size={23} /> : <Info size={23} />}
            </div>
            <h2 id="feedback-confirm-title" className="text-lg font-bold text-slate-900">{confirmation.title}</h2>
            <p id="feedback-confirm-message" className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-600">{confirmation.message}</p>
            <div className="mt-6 flex justify-end gap-3">
              <button type="button" onClick={() => closeConfirmation(false)} className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">Batal</button>
              <button type="button" autoFocus onClick={() => closeConfirmation(true)} className={`rounded-lg px-4 py-2.5 text-sm font-semibold text-white ${confirmation.danger ? 'bg-red-600 hover:bg-red-700' : 'bg-sky-600 hover:bg-sky-700'}`}>{confirmation.confirmLabel}</button>
            </div>
          </section>
        </div>
      )}
    </>
  );

  return { notify, confirmAction, FeedbackUI };
}
