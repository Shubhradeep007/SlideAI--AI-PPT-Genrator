import { useState } from "react";

type HistoryItem = { updatedAt: number; code: string };

type Props = {
  slideIndex: number;
  history: HistoryItem[]; // newest first (we reversed in parent)
  onRestore: (chosenIndex: number) => void; // index in this history array
};

export default function RestoreMenu({ history, onRestore }: Props) {
  const [open, setOpen] = useState(false);

  if (!history || history.length === 0) {
    return (
      <button
        className="px-3 py-1.5 rounded-md border text-sm text-gray-500 cursor-not-allowed"
        disabled
      >
        No history
      </button>
    );
  }

  return (
    <div className="relative">
      <button
        className="px-3 py-1.5 rounded-md border text-sm bg-white hover:bg-gray-50"
        onClick={() => setOpen((o) => !o)}
      >
        Restore version ▾
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 rounded-lg border bg-white shadow-lg z-10">
          <ul className="max-h-72 overflow-auto py-1">
            {history.map((h, i) => (
              <li key={i}>
                <button
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 text-sm"
                  onClick={() => {
                    onRestore(i);
                    setOpen(false);
                  }}
                >
                  Version {history.length - i} —{" "}
                  {new Date(h.updatedAt).toLocaleTimeString()}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
