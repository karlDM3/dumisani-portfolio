import { ReactNode } from 'react';

interface TerminalProps {
  title: string;
  command?: string;
  children: ReactNode;
  className?: string;
}

export default function Terminal({ title, command, children, className = "" }: TerminalProps) {
  return (
    <div className={`terminal border border-[var(--neon-green)] shadow-[0_0_10px_rgba(0,255,65,0.7)] rounded-md ${className}`} 
         style={{ backgroundColor: 'rgba(30, 30, 30, 0.85)' }}>
      <div className="terminal-header bg-[var(--dark-tertiary)] py-1 px-3 rounded-t-md flex justify-between">
        <div className="terminal-title font-[var(--font-code)] text-xs text-gray-400">{title}</div>
        <div className="terminal-controls flex">
          <span className="inline-block w-3 h-3 rounded-full bg-[#FF5F56] mr-1"></span>
          <span className="inline-block w-3 h-3 rounded-full bg-[#FFBD2E] mr-1"></span>
          <span className="inline-block w-3 h-3 rounded-full bg-[#27C93F]"></span>
        </div>
      </div>
      <div className="p-6">
        {command && (
          <p className="font-[var(--font-code)] text-sm text-gray-400 mb-2">$ {command}</p>
        )}
        <div className="font-[var(--font-code)]">
          {children}
        </div>
      </div>
    </div>
  );
}
