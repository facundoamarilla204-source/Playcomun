import React from "react";
import { techLogos } from "@/components/ui/tech-logos";

export function TechIcon({ name }: { name: string }) {
  return (
    <div className="group flex flex-col items-center gap-3 py-6 transition-transform duration-500 hover:-translate-y-1">
      <div className="w-16 h-16 rounded-md bg-surface border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-surface-elevated transition-all duration-300 relative overflow-hidden">
        <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
          {techLogos[name] || (
            <span className="text-foreground-muted text-sm font-medium font-mono group-hover:text-foreground">
              {name.slice(0, 2).toUpperCase()}
            </span>
          )}
        </span>
      </div>
      <span className="text-xs text-foreground-subtle font-medium">{name}</span>
    </div>
  );
}
