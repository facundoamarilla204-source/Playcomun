import React from "react";

export function ServiceCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="group relative rounded-[1.5rem] p-[1px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(124,58,237,0.15)] z-10 hover:z-20">
      <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-border-hover/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative rounded-[calc(1.5rem-1px)] bg-surface p-8 h-full shadow-lg">
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ${color}`}
        >
          {icon}
        </div>
        <h3 className="text-lg font-bold mb-3">{title}</h3>
        <p className="text-foreground-muted text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
