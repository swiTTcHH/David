import { useState } from "react";

type Product = {
  id: string;
  name: string;
  sku: string;
  stock: number;
  minStock: number;
  price: number;
};

const initialProducts: Product[] = [
  { id: "1", name: "Premium Wireless Headphones", sku: "HD-WL-09", stock: 12, minStock: 5, price: 149 },
  { id: "2", name: "Ergonomic Mechanical Keyboard", sku: "KB-ME-88", stock: 3, minStock: 5, price: 119 }, // low stock
  { id: "3", name: "Ultra-wide 4K Monitor", sku: "MN-UW-34", stock: 8, minStock: 2, price: 449 },
  { id: "4", name: "USB-C Multi-Port Hub", sku: "HB-UC-06", stock: 2, minStock: 5, price: 49 },  // low stock
  { id: "5", name: "Smart Fitness Watch V2", sku: "WT-SM-02", stock: 25, minStock: 10, price: 199 }
];

export default function Projects() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [search, setSearch] = useState("");

  const updateStock = (id: string, delta: number) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const newStock = Math.max(0, p.stock + delta);
          return { ...p, stock: newStock };
        }
        return p;
      })
    );
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.sku.toLowerCase().includes(search.toLowerCase())
  );

  const lowStockCount = products.filter((p) => p.stock <= p.minStock).length;
  const totalStockVal = products.reduce((acc, p) => acc + p.stock * p.price, 0);

  return (
    <section id="projects" className="border-t border-ink py-16">
      {/* Heading */}
      <div className="flex items-end gap-4 mb-10">
        <h2 className="text-4xl font-bold tracking-tight">
          Featured <span className="text-accent3 font-black">Projects</span>
        </h2>
        <span className="text-muted text-sm mb-1">
          Recent Mobile &amp; Web Apps
        </span>
      </div>

      {/* Main Project Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Project Description (Left) */}
        <div className="lg:col-span-6 flex flex-col justify-between border-2 border-ink bg-card-bg p-8 shadow-[4px_4px_0px_0px_rgba(13,13,13,1)]">
          <div className="space-y-6">
            {/* Header Badge */}
            <div className="flex items-center justify-between">
              <span className="bg-accent3 text-ink text-xs font-black uppercase px-3 py-1 border-2 border-ink shadow-[2px_2px_0px_0px_rgba(13,13,13,1)]">
                Mobile App (iOS &amp; Android)
              </span>
              <span className="text-muted text-xs font-bold font-mono">2025</span>
            </div>

            <h3 className="text-3xl font-black tracking-tight">Primecrest Inventory</h3>
            
            <p className="text-ink text-sm leading-relaxed font-medium">
              A full-featured inventory management mobile app built using <strong>React Native</strong> and <strong>Expo</strong>. 
              Designed for retail and warehouse environments to provide instant product cataloguing, real-time stock levels tracking, low-stock notifications, and integrated dashboard analytics.
            </p>

            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-wider text-muted">Core Features Built</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-ink">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent3 rounded-full"></span>
                  Product Cataloguing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent3 rounded-full"></span>
                  Real-time Stock Tracking
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent3 rounded-full"></span>
                  Low-Stock Dashboard Alerts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent3 rounded-full"></span>
                  Analytics &amp; Asset Worth
                </li>
              </ul>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["React Native", "Expo", "TypeScript", "Zustand", "Tailwind CSS", "Mobile UX"].map((tag) => (
                <span key={tag} className="bg-paper border border-ink text-ink text-xs font-bold px-2 py-0.5">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4 mt-8 pt-6 border-t border-ink/10">
            <a 
              href="https://github.com/swiTTcHH" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-ink border-2 border-ink text-white font-bold py-2.5 px-5 hover:bg-accent3 hover:text-ink transition duration-200"
            >
              <span>View Source Code</span>
              <span className="text-xs font-mono">↗</span>
            </a>
          </div>
        </div>

        {/* Interactive Device Demo (Right) */}
        <div className="lg:col-span-6 flex flex-col justify-center items-center p-4 bg-paper/50 border-2 border-dashed border-ink/30 rounded-xl">
          <div className="text-center mb-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-1">
              📱 Interactive Prototype Mock
            </h4>
            <p className="text-[11px] text-muted font-medium">
              Click the stock controls to see values update in real-time.
            </p>
          </div>

          {/* Mobile phone container */}
          <div className="w-[320px] h-[540px] bg-[#121212] border-4 border-ink rounded-[40px] shadow-[8px_8px_0px_0px_rgba(13,13,13,1)] relative overflow-hidden flex flex-col p-3 text-white font-sans">
            
            {/* Phone Speaker & Camera Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-4 bg-ink rounded-full z-20 flex justify-center items-center">
              <span className="w-2 h-2 rounded-full bg-slate-800 mr-2" />
              <span className="w-12 h-1 bg-slate-700 rounded-full" />
            </div>

            {/* Screen Inner Wrapper */}
            <div className="flex-1 bg-[#1a1a1a] rounded-[32px] overflow-hidden flex flex-col relative pt-4 text-xs select-none">
              
              {/* App bar */}
              <div className="px-4 py-2 border-b border-white/10 flex justify-between items-center mt-2">
                <span className="font-black text-sm tracking-tight text-accent3">Primecrest</span>
                <span className="bg-white/10 text-[9px] px-2 py-0.5 rounded-full font-bold">Demo App</span>
              </div>

              {/* Dashboard metrics */}
              <div className="grid grid-cols-2 gap-2 p-3">
                <div className="bg-white/5 border border-white/10 p-2 rounded-xl">
                  <span className="block text-[9px] text-white/50 font-bold uppercase">Asset Worth</span>
                  <span className="text-xs font-extrabold text-white">${totalStockVal.toLocaleString()}</span>
                </div>
                <div className={`border p-2 rounded-xl transition duration-300 ${lowStockCount > 0 ? 'bg-red-950/30 border-red-500/50' : 'bg-white/5 border-white/10'}`}>
                  <span className="block text-[9px] text-white/50 font-bold uppercase">Alerts (Low Stock)</span>
                  <span className={`text-xs font-extrabold ${lowStockCount > 0 ? 'text-red-400' : 'text-white'}`}>{lowStockCount} Items</span>
                </div>
              </div>

              {/* Search Bar */}
              <div className="px-3 pb-2">
                <input
                  type="text"
                  placeholder="Search SKU or Product..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 text-white placeholder-white/40 focus:outline-none focus:border-accent3 text-[11px]"
                />
              </div>

              {/* Scrollable list */}
              <div className="flex-1 overflow-y-auto px-3 space-y-2 pb-4">
                {filteredProducts.map((p) => {
                  const isLowStock = p.stock <= p.minStock;
                  return (
                    <div key={p.id} className="bg-white/5 border border-white/10 p-2.5 rounded-xl flex items-center justify-between transition hover:border-white/20">
                      <div className="space-y-0.5 pr-2 flex-1">
                        <div className="font-bold text-white truncate max-w-[140px]">{p.name}</div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px] text-white/40 font-mono">{p.sku}</span>
                          <span className="text-[9px] text-white/50 font-bold">${p.price}</span>
                        </div>
                      </div>

                      {/* Stock Actions */}
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => updateStock(p.id, -1)}
                          className="w-5 h-5 flex items-center justify-center rounded bg-white/10 hover:bg-white/20 text-white font-extrabold cursor-pointer"
                        >
                          -
                        </button>
                        <div className="text-center w-6">
                          <span className={`block font-black text-xs ${isLowStock ? 'text-red-400' : 'text-white'}`}>{p.stock}</span>
                          <span className="text-[7px] text-white/35">qty</span>
                        </div>
                        <button 
                          onClick={() => updateStock(p.id, 1)}
                          className="w-5 h-5 flex items-center justify-center rounded bg-white/10 hover:bg-white/20 text-white font-extrabold cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  );
                })}
                {filteredProducts.length === 0 && (
                  <div className="text-center py-6 text-white/30 font-medium">
                    No products found.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
