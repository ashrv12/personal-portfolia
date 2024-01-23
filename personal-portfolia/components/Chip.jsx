import React from "react";

export function Chip({ label }) {
  return (
    <div class="bg-slate-200 dark:bg-slate-100 dark:text-slate-600 text-slate-700 rounded-xl px-4 flex justify-center">
      {label}
    </div>
  );
}
