import React from "react";
import { techLogos } from "@/components/ui/tech-logos";

export function TechIcon({ name }: { name: string }) {
  return (
    <div className="group flex flex-col items-center gap-3 py-6 transition-transform duration-500 hover:-translate-y-1">
      <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center shadow-lg group-hover:border-border-hover group-hover:bg-surface-hover group-hover:shadow-[0_10px_30px_rgba(124,58,237,0.15)] transition-all duration-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="relative z-10 transition-transform duration-500 group-hover:scale-110">
          {techLogos[name] || (
            <span className="text-foreground-muted text-sm font-bold font-mono group-hover:text-foreground">
              {name.slice(0, 2).toUpperCase()}
            </span>
          )}
        </span>
      </div>
      <span className="text-xs text-foreground-subtle font-medium">{name}</span>
    </div>
  );
}
