import React from 'react';

export type BadgeProps = {
  size?: '';
  children: React.ReactNode;
  color: 'red' | 'sky' | 'emerald' | 'amber' | 'rose' | 'blue' | 'slate';
};

export const Badge = (props: BadgeProps) => {
  const color = {
    red: 'bg-red-100 text-red-800',
    sky: 'bg-sky-100 text-sky-800',
    emerald: 'bg-emerald-100 text-emerald-800',
    amber: 'bg-amber-100 text-amber-800',
    rose: 'bg-rose-100 text-rose-800',
    blue: 'bg-blue-100 text-blue-800',
    slate: 'bg-slate-100 text-slate-800',
  };

  return (
    <div
      className={`${
        color[props.color]
      } inline-flex rounded-full px-2.5 py-1 text-center text-xs font-medium`}
    >
      {props.children}
    </div>
  );
};
