import React from "react";

export function Chip({ label }) {
  return (
    <div class="bg-slate-200 text-slate-700 rounded-xl px-2 w-28 flex justify-center">
      {label}
    </div>
  );
}
