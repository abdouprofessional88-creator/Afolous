import React from 'react';

/* AFOULLOUS chicken logo — black & white, recreated as vector to preserve identity.
   Replace paths in /public/logo.svg later with the official file when provided. */
export default function Logo({ size = 44, dark = false, withWord = true }) {
  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      <span
        className="rounded-full flex items-center justify-center shrink-0 border-2 overflow-hidden"
        style={{
          width: size, height: size,
          background: dark ? '#fff' : '#111',
          borderColor: dark ? 'rgba(255,255,255,.25)' : '#111',
        }}
        aria-hidden
      >
        <svg viewBox="0 0 64 64" width={size * 0.78} height={size * 0.78}>
          {/* comb */}
          <path d="M30 8c-2 0-3.5 1.6-3.5 3.5C24.6 11 23 12.4 23 14.4c0 2 1.6 3.4 3.4 3.4L26 22l4-2 1 3 3-3c3.5-.4 6-3.3 6-6.8 0-1.2-1-2.2-2.2-2.2-1.4-1.7-4.3-3-7.8-3z" fill={dark ? '#111' : '#fff'} />
          {/* head + beak */}
          <circle cx="33" cy="26" r="9" fill={dark ? '#111' : '#fff'} />
          <path d="M41 24l7 3-7 3z" fill="#E0301E" />
          <circle cx="35.5" cy="24" r="1.8" fill={dark ? '#fff' : '#111'} />
          {/* wattle */}
          <path d="M31 34c0 3-2 5-4 5s-3-2-2-4c1 1 2 1 3 0-.5 1 3-.5 3-1z" fill="#E0301E" />
          {/* body: crispy wing lines */}
          <path d="M18 38c6-4 20-5 28 1 5 4 4 11-2 14-7 3.5-19 2.5-24-3-3-3.4-4-8.6-2-12z" fill={dark ? '#111' : '#fff'} />
          <path d="M24 42c4-2 12-2.5 17 0M24 46.5c4-2 11-2.3 15.5-.5" stroke={dark ? '#fff' : '#111'} strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
      {withWord && (
        <span className="leading-none">
          <span className={`block font-black tracking-[0.18em] text-[15px] ${dark ? 'text-white' : 'text-ink-950'}`}>AFOULLOUS</span>
          <span className={`block text-[12px] font-bold mt-1 ${dark ? 'text-white/60' : 'text-ink-900/55'}`}>أفولوس · دجاج مقرمش</span>
        </span>
      )}
    </span>
  );
}
