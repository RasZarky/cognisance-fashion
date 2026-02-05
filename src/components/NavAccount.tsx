import React from 'react';
import { useAuth } from '../context/AuthContext';

interface NavAccountProps {
  scrollToSection: (id: string) => void;
  onAction?: () => void;
  isMobile?: boolean;
}

export default function NavAccount({ scrollToSection, onAction, isMobile }: NavAccountProps) {
  const { loggedIn, user, logout } = useAuth();

  if (loggedIn) {
    return (
      <div className={`flex gap-4 ${isMobile ? 'flex-col items-stretch' : 'items-center'}`}>
        <button
          onClick={() => { onAction?.(); }}
          className={`text-purple-900/80 hover:text-purple-900 transition-colors capitalize ${isMobile ? 'w-full text-center py-3 rounded-xl bg-white/60' : ''}`}
        >
          Account
        </button>
        <button
          onClick={async () => { await logout?.(); onAction?.(); }}
          className={`px-4 py-2 bg-white/60 rounded-full text-sm text-purple-900 hover:shadow-md ${isMobile ? 'w-full text-center rounded-xl' : ''}`}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => { scrollToSection('login'); onAction?.(); }}
      className={`text-purple-900/80 hover:text-purple-900 transition-colors capitalize ${isMobile ? 'w-full text-center py-3 rounded-xl bg-white/60' : ''}`}
    >
      Login
    </button>
  );
}
