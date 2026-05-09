import { motion, AnimatePresence } from "motion/react";
import { 
  Flame, 
  Star, 
  Trophy, 
  Search, 
  MoreHorizontal, 
  Facebook, 
  Youtube, 
  CircleDot, 
  Mail,
  Gamepad2,
  Sword,
  Target,
  Clock,
  Sparkles,
  TrendingUp,
  X,
  ChevronRight,
  Maximize2,
  ExternalLink
} from "lucide-react";
import { useState } from "react";

interface Game {
  id: string;
  name: string;
  thumb: string;
  url: string;
}

const CATEGORIES = [
  { name: "Adventure", icon: <Sword className="w-4 h-4" /> },
  { name: "Arcade", icon: <Gamepad2 className="w-4 h-4" /> },
  { name: "Idle", icon: <Clock className="w-4 h-4" /> },
  { name: "Running", icon: <Target className="w-4 h-4" /> },
  { name: "Strategy", icon: <Sparkles className="w-4 h-4" /> },
  { name: "Action", icon: <TrendingUp className="w-4 h-4" /> },
  { name: "Multiplayer", icon: <CircleDot className="w-4 h-4" /> },
];

const GAMES: Game[] = [
  {
    id: "andy-leyley",
    name: "The Coffin Of Andy And Leyley Episode 1",
    thumb: "https://i.scdn.co/image/ab67656300005f1f117aafabf5883177e9f8f79a",
    url: "https://kdata1.com/2023/03/the-coffin-of-andy-and-leyley/"
  },
  {
    id: "escape-road-3",
    name: "Escape Road 3",
    thumb: "https://scratchgamesonline.io/data/image/game/escape-road-3/escape-road-3.png",
    url: "/escape-road-3.html"
  },
  {
    id: "ddlc",
    name: "Doki Doki Literature Club!",
    thumb: "https://www.pngkey.com/png/full/308-3088612_default-ddlc-burned-ddlc-icon.png",
    url: "/ddlc.html"
  }
];

function GameCard({ game, onPlay }: { game: Game, onPlay: (game: Game) => void, key?: any }) {
  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onPlay(game)}
      className="group relative aspect-square bg-neutral-900 rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-purple-500/50 transition-colors shadow-2xl"
    >
      <img 
        src={game.thumb} 
        alt={game.name}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      
      <div className="absolute inset-x-0 bottom-0 p-6">
        <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-[10px] font-black tracking-widest text-purple-500 uppercase">Featured</span>
        </div>
        <h3 className="text-sm font-display font-black tracking-tighter uppercase leading-tight group-hover:text-purple-500 transition-colors">
          {game.name}
        </h3>
      </div>

      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
        <div className="bg-purple-500 rounded-xl p-2 shadow-2xl">
          <ChevronRight className="w-4 h-4 text-white" />
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [search, setSearch] = useState("");
  const [activeGame, setActiveGame] = useState<Game | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-white selection:bg-purple-500 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl font-display font-black tracking-tighter text-white uppercase italic">
                MAAD<span className="text-purple-500">MATH</span>
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-6">
              {[
                { name: "Trending", icon: <Flame className="w-4 h-4" /> },
                { name: "Latest", icon: <Star className="w-4 h-4" /> },
                { name: "Features", icon: <Trophy className="w-4 h-4" /> }
              ].map((item) => (
                <a key={item.name} href="#" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors">
                  {item.icon} {item.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex-grow max-w-md relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 group-focus-within:text-purple-500 transition-colors" />
            <input 
              type="text" 
              placeholder={`Search ${GAMES.length} unblocked games...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-11 bg-neutral-900 border border-white/5 rounded-2xl pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all font-medium"
            />
          </div>
        </div>
      </header>

      {/* Category Bar */}
      <div className="bg-neutral-900/50 border-b border-white/5 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
          {CATEGORIES.map((cat) => (
            <button key={cat.name} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-800 border border-white/5 text-[10px] font-black uppercase tracking-widest whitespace-nowrap hover:bg-neutral-700 transition-colors">
              {cat.icon} {cat.name}
            </button>
          ))}
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-800 border border-white/5 text-[10px] font-black uppercase tracking-widest hover:bg-neutral-700 transition-colors ml-auto">
            <MoreHorizontal className="w-4 h-4" /> MORE
          </button>
        </div>
      </div>

      <main className="max-w-7xl w-full mx-auto px-4 py-8 flex flex-col gap-12 flex-grow">
        <AnimatePresence mode="wait">
          {!activeGame ? (
            <motion.div 
              key="catalog"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-12"
            >
              {/* Banner Area */}
              <section className="relative h-72 sm:h-96 rounded-3xl overflow-hidden bg-neutral-900 border border-white/5 p-8 sm:p-12 flex flex-col justify-center shadow-2xl">
                <div className="relative z-10 max-w-2xl">
                  <h1 className="text-4xl sm:text-7xl font-display font-black tracking-tight mb-4 leading-none uppercase italic">
                    SOLVE <br /> 
                    <span className="text-purple-500">YOUR LIMITS</span>
                  </h1>
                  <p className="text-neutral-400 text-sm sm:text-base font-medium leading-relaxed mb-8 max-w-lg">
                    Experience the most intense mathematical challenges and browser-based games. Optimized for speed, precision, and power.
                  </p>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setActiveGame(GAMES[0])}
                      className="bg-purple-500 text-white px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-purple-600 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-purple-500/20"
                    >
                      Featured Game
                    </button>
                  </div>
                </div>
                {/* Decorative background */}
                <div className="absolute top-0 right-0 h-full w-2/3 bg-gradient-to-l from-purple-500/10 to-transparent pointer-events-none" />
                <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-purple-500 opacity-10 blur-[120px]" />
                <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block">
                    <Gamepad2 className="w-64 h-64 text-white rotate-12" />
                </div>
              </section>

              {/* Game Grid */}
              <section>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-purple-500 rounded-full" />
                    <h2 className="text-xl font-display font-black tracking-tight uppercase italic flex items-center gap-3">
                      LATEST ADDITIONS <span className="text-neutral-700 select-none">/</span> <span className="text-purple-500/50">001</span>
                    </h2>
                  </div>
                  <a href="#" className="text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-white transition-colors flex items-center gap-2">
                    View Archive <ChevronRight className="w-3 h-3" />
                  </a>
                </div>
                
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {GAMES.map((game) => (
                    <GameCard key={game.id} game={game} onPlay={setActiveGame} />
                  ))}
                </div>
              </section>

              {/* Information Section */}
              <section className="grid lg:grid-cols-3 gap-8 py-12 border-t border-white/5">
                <div className="lg:col-span-2 space-y-6">
                  <h3 className="text-2xl font-display font-black tracking-tight uppercase italic">What is MAADMATH?</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      MAADMATH is a high-performance content delivery platform designed for those who push boundaries. We host unblocked interactive experiences using advanced web technologies.
                    </p>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      Every module is optimized for peak execution. Leveraging WebGL and low-latency rendering, our platform ensures a superior experience on any device.
                    </p>
                  </div>
                </div>
                <div className="bg-neutral-900 border border-white/5 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
                  <div className="relative z-10">
                    <h3 className="text-sm font-black uppercase tracking-widest mb-6 flex items-center gap-3">
                      <Target className="w-4 h-4 text-purple-500" /> Platform Stats
                    </h3>
                    <div className="space-y-4">
                      {[
                        { label: "Active Games", value: `${GAMES.length}+` },
                        { label: "Daily Players", value: "12.4K" },
                        { label: "Source Code", value: "Public" }
                      ].map(stat => (
                        <div key={stat.label} className="flex justify-between items-center bg-neutral-800/50 p-4 rounded-xl">
                          <span className="text-[10px] font-bold text-neutral-500 uppercase">{stat.label}</span>
                          <span className="text-xs font-black text-purple-500">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-125 transition-transform duration-1000">
                    <Maximize2 className="w-32 h-32" />
                  </div>
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div 
               key="player"
               initial={{ opacity: 0, scale: 0.98 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.95 }}
               className="flex flex-col gap-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <button 
                    onClick={() => setActiveGame(null)}
                    className="p-3 bg-neutral-900 hover:bg-neutral-800 rounded-xl border border-white/5 transition-colors group"
                  >
                    <ChevronRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                  </button>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.5)]" />
                      <span className="text-[10px] font-black tracking-widest text-purple-500 uppercase">Live Session</span>
                    </div>
                    <h2 className="text-xl font-display font-black tracking-tight uppercase italic">{activeGame.name}</h2>
                  </div>
                </div>
                <div className="flex gap-3">
                    <button 
                      onClick={() => {
                        const win = window.open('about:blank', '_blank');
                        if (win && activeGame) {
                          win.document.write(`
                            <!DOCTYPE html>
                            <html>
                              <head>
                                <title>about:blank</title>
                                <style>
                                  body, html { margin: 0; padding: 0; height: 100%; overflow: hidden; background-color: black; }
                                  iframe { width: 100%; height: 100%; border: none; }
                                </style>
                              </head>
                              <body>
                                <iframe src="${activeGame.url}" allowfullscreen="true" referrerpolicy="no-referrer"></iframe>
                              </body>
                            </html>
                          `);
                          win.document.close();
                        }
                      }}
                      className="px-4 py-2 bg-neutral-900 border border-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-purple-500 transition-all flex items-center gap-2"
                    >
                        <ExternalLink className="w-3 h-3 text-white" /> Open in about:blank
                    </button>
                    <button className="px-4 py-2 border border-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">Report</button>
                    <button className="px-4 py-2 bg-neutral-900 border border-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-neutral-800 transition-all flex items-center gap-2">
                        <Maximize2 className="w-3 h-3" /> Fullscreen
                    </button>
                </div>
              </div>

              <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-black border border-white/5 shadow-2xl">
                <iframe 
                  src={activeGame.url} 
                  className="w-full h-full border-none shadow-inner"
                  title={activeGame.name}
                  allowFullScreen
                  referrerPolicy="no-referrer"
                />
              </div>


            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-neutral-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex flex-col gap-6">
              <span className="text-xl font-display font-black tracking-tighter text-white uppercase italic">
                MAAD<span className="text-purple-500">MATH</span>
              </span>
              <p className="text-[10px] font-medium text-neutral-500 leading-loose uppercase tracking-wider">
                Advanced gaming and logic infrastructure. Solve, execute, and prevail.
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-purple-500">Navigation</h4>
              <div className="flex flex-col gap-4">
                <a href="#" className="flex items-center gap-3 text-xs text-neutral-400 hover:text-purple-500 transition-colors uppercase font-bold tracking-tight">
                  <Flame className="w-4 h-4 opacity-40" /> Trending
                </a>
                <a href="#" className="flex items-center gap-3 text-xs text-neutral-400 hover:text-purple-500 transition-colors uppercase font-bold tracking-tight">
                  <Star className="w-4 h-4 opacity-40" /> New Releases
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-purple-500">Support</h4>
              <div className="flex flex-col gap-4">
                <a href="mailto:emamnipu@gmail.com" className="flex items-center gap-3 text-xs text-neutral-400 hover:text-white transition-colors font-bold lowercase">
                  <Mail className="w-4 h-4 opacity-40" /> emamnipu@gmail.com
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-purple-500">Legal</h4>
              <nav className="flex flex-col gap-4">
                {["Privacy Policy", "Terms of Service", "DMCA"].map(link => (
                  <a key={link} href="#" className="text-xs text-neutral-500 hover:text-white transition-colors uppercase font-bold tracking-tight">{link}</a>
                ))}
              </nav>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/5 text-center text-[8px] text-neutral-700 font-black uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} MAADMATH CORE SYSTEMS. OPERATIONAL SECURE.
          </div>
        </div>
      </footer>
    </div>
  );
}
