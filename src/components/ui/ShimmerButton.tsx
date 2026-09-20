import React from 'react';

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  shimmerColor?: string;
}

export const ShimmerButton: React.FC<ShimmerButtonProps> = ({
  children,
  className = '',
  shimmerColor = 'rgba(255, 255, 255, 0.35)',
  ...props
}) => {
  return (
    <button
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-teal-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-700/25 transition-all duration-300 hover:bg-teal-700 hover:shadow-teal-700/40 hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${className}`}
      {...props}
    >
      {/* Moving Shimmer Beam */}
      <div
        className="pointer-events-none absolute -inset-full top-0 block h-full -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${shimmerColor}, transparent)`,
          width: '50%',
        }}
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};
