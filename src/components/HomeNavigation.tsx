import React from 'react';

export type HomeTab = 'home-1' | 'home-2' | 'home-3' | 'home-4' | 'home-5';

interface HomeItem {
  id: HomeTab;
  label: string;
  href: string;
}

export const HOME_TABS: HomeItem[] = [
  { id: 'home-1', label: 'Home 1', href: 'https://smpiki.vercel.app/' },
  { id: 'home-2', label: 'Home 2', href: 'https://smpnyar.vercel.app/' },
  { id: 'home-3', label: 'Home 3', href: 'https://smplain-eight.vercel.app/' },
  { id: 'home-4', label: 'Home 4', href: 'https://smp-vmdd.vercel.app/' },
  { id: 'home-5', label: 'Home 5', href: 'https://smpn-xurx.vercel.app/' },
];

interface HomeNavigationProps {
  activeTab: HomeTab;
  onSelectTab: (tab: HomeTab) => void;
  className?: string;
}

export const HomeNavigation: React.FC<HomeNavigationProps> = ({
  activeTab,
  onSelectTab,
  className = '',
}) => {
  return (
    <div className={`w-full max-w-3xl mx-auto ${className}`}>
      <nav
        aria-label="Navigasi Home SMP Negeri 6 Jember"
        className="grid grid-cols-2 sm:grid-cols-5 gap-3 p-2.5 rounded-2xl bg-blue-950/60 backdrop-blur-md border border-white/15 shadow-xl shadow-blue-950/40"
      >
        {HOME_TABS.map((item) => {
          const isActive = activeTab === item.id;

          return (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onSelectTab(item.id)}
              className={`flex items-center justify-center py-4 px-3 rounded-xl font-bold transition-all duration-200 select-none cursor-pointer whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                isActive
                  ? 'bg-white text-blue-950 shadow-lg shadow-black/20 scale-[1.03] ring-2 ring-yellow-400'
                  : 'bg-blue-900/50 hover:bg-white/15 text-white/90 hover:text-white border border-white/10 hover:border-white/30'
              }`}
            >
              <span className="text-base sm:text-lg font-bold tracking-wide">
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  );
};
