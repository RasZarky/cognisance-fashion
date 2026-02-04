import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { login } = useAuth();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === 'register') {
        // Mock register: accept and immediately log in
        if (!name.trim()) throw new Error('Please enter your name');
        // In a real app you'd call a register API here
      }

      await login(email.trim(), password);
      toast.success(mode === 'register' ? 'Registered and logged in!' : 'Logged in successfully!');
      const shopEl = document.getElementById('member-shop');
      if (shopEl) shopEl.scrollIntoView({ behavior: 'smooth' });
    } catch (err: any) {
      toast.error(err?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="login" ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-xl bg-white/60 rounded-3xl p-8 border border-white/60 shadow-2xl"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl text-purple-950">{mode === 'login' ? 'Member Login' : 'Register'}</h2>
            <button type="button" onClick={() => setMode(mode === 'login' ? 'register' : 'login')} className="text-sm text-purple-700/70 underline">
              {mode === 'login' ? 'Create account' : 'Have an account? Login'}
            </button>
          </div>
          <p className="text-purple-700/70 mb-6">{mode === 'login' ? 'Login to view the full collection and place orders.' : 'Create an account to access members-only listings.'}</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <div>
                <label className="block text-purple-900 mb-2">Full Name</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/80 border border-white/60 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20"
                    placeholder="Your full name"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-purple-900 mb-2">Email</label>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-purple-900/80" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/80 border border-white/60 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-purple-900 mb-2">Password</label>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-purple-900/80" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/80 border border-white/60 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20"
                  placeholder="Your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                Login
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => { setEmail('demo@user.com'); setPassword('password'); }}
                  className="text-sm text-purple-700/70 underline"
                >
                  Use demo credentials
                </button>
                {mode === 'register' ? null : (
                  <button type="button" onClick={() => { setMode('register'); }} className="text-sm text-purple-700/70">
                    Need an account?
                  </button>
                )}
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
