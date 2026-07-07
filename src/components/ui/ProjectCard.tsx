"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectCard({
  name,
  description,
  status,
  statusColor,
  tags,
  url,
  delay = 0,
}: {
  name: string;
  description: string;
  status: string;
  statusColor: string;
  tags: string[];
  url?: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="group relative rounded-[2rem] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] z-10 hover:z-20">
        {/* Outer Shell (Double Bezel) */}
        <div className="p-[1px] rounded-[2rem] bg-gradient-to-b from-border-hover/40 to-transparent shadow-[0_0_20px_rgba(124,58,237,0.0)] group-hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] transition-shadow duration-700">
          <div className="rounded-[calc(2rem-1px)] bg-surface overflow-hidden">
            {/* Image Area */}
            <div className="relative h-56 md:h-72 bg-surface-elevated overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-indigo/10 to-electric/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-4/5 h-4/5 rounded-xl bg-surface-hover/90 border border-border/50 flex flex-col shadow-2xl backdrop-blur-sm overflow-hidden">
                  <div className="h-6 border-b border-border/50 bg-background/50 flex items-center px-3 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-error/80" />
                    <div className="w-2 h-2 rounded-full bg-warning/80" />
                    <div className="w-2 h-2 rounded-full bg-success/80" />
                  </div>
                  <div className="flex-1 relative overflow-hidden bg-background">
                    {url && url !== "#" ? (
                      <iframe
                        src={url}
                        className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none border-none"
                        title={`${name} preview`}
                        tabIndex={-1}
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-foreground-subtle text-xs font-mono uppercase tracking-wider">
                          {name} Preview
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Content */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`px-3 py-1 text-[11px] font-semibold font-mono uppercase tracking-wider rounded-full ${statusColor}`}
                >
                  {status}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{name}</h3>
              <p className="text-foreground-muted text-sm mb-6 leading-relaxed">
                {description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono text-foreground-subtle bg-surface-elevated rounded-full border border-border/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button variant="outline" size="sm" href={url || "#"}>
                Ver proyecto
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 13L13 1M13 1H5M13 1V9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
