import { useState } from "react";

// ── Icons ──────────────────────────────────────────────────────────────────
function Icon({ name, size = 20, className = "" }: { name: string; size?: number; className?: string }) {
  const icons: Record<string, string> = {
    home: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10",
    files: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8",
    photos: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M4 22v-7 M2 12h20",
    storage: "M12 2a10 10 0 100 20A10 10 0 0012 2z M12 6v6l4 2",
    profile: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2 M12 11a4 4 0 100-8 4 4 0 000 8z",
    cloud: "M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z",
    upload: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4 M17 8l-5-5-5 5 M12 3v12",
    download: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4 M7 10l5 5 5-5 M12 15V3",
    search: "M11 19a8 8 0 100-16 8 8 0 000 16z M21 21l-4.35-4.35",
    settings: "M12 20a8 8 0 100-16 8 8 0 000 16z M12 14a2 2 0 100-4 2 2 0 000 4z",
    plus: "M12 5v14 M5 12h14",
    check: "M20 6L9 17l-5-5",
    arrow_right: "M5 12h14 M12 5l7 7-7 7",
    arrow_left: "M19 12H5 M12 19l-7-7 7-7",
    trash: "M3 6h18 M8 6V4h8v2 M19 6l-1 14H6L5 6",
    share: "M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8 M16 6l-4-4-4 4 M12 2v13",
    folder: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z",
    image: "M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z M8.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3z M21 15l-5-5L5 21",
    video: "M22.54 6.42a2.78 2.78 0 00-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.95A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z M9.75 15.02l5.75-3.02-5.75-3.02v6.04z",
    doc: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8",
    wifi_off: "M1 1l22 22 M16.72 11.06A10.94 10.94 0 0119 12.55 M5 12.55a10.94 10.94 0 015.17-2.39 M10.71 5.05A16 16 0 0122.56 9 M1.42 9a15.91 15.91 0 014.7-2.88 M8.53 16.11a6 6 0 016.95 0 M12 20h.01",
    bell: "M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 01-3.46 0",
    lock: "M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2z M7 11V7a5 5 0 0110 0v4",
    x: "M18 6L6 18 M6 6l12 12",
    chevron_right: "M9 18l6-6-6-6",
    chevron_down: "M6 9l6 6 6-6",
    info: "M12 22a10 10 0 100-20 10 10 0 000 20z M12 8h.01 M12 12v4",
    star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    grid: "M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z",
    list: "M8 6h13 M8 12h13 M8 18h13 M3 6h.01 M3 12h.01 M3 18h.01",
    zap: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
    phone: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z",
    credit_card: "M1 4h22v16H1z M1 10h22",
    help: "M12 22a10 10 0 100-20 10 10 0 000 20z M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3 M12 17h.01",
    shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    camera: "M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z M12 17a4 4 0 100-8 4 4 0 000 8z",
    scan: "M3 7V5a2 2 0 012-2h2 M17 3h2a2 2 0 012 2v2 M21 17v2a2 2 0 01-2 2h-2 M7 21H5a2 2 0 01-2-2v-2",
  };
  const d = icons[name] || icons["files"];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {d.split(" M").map((segment, i) => (
        <path key={i} d={i === 0 ? segment : "M" + segment} />
      ))}
    </svg>
  );
}

// ── Storage Bar ────────────────────────────────────────────────────────────
function StorageBar({ used, total, color = "bg-[#4F6EF7]" }: { used: number; total: number; color?: string }) {
  const pct = Math.min((used / total) * 100, 100);
  const warn = pct > 85;
  return (
    <div className="h-2 bg-[#E8EBF0] rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full transition-all ${warn ? "bg-[#EF4444]" : color}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

// ── File Row ───────────────────────────────────────────────────────────────
function FileRow({ name, size, type, status, onClick }: { name: string; size: string; type: string; status: "local" | "cloud" | "both"; onClick?: () => void }) {
  const icons: Record<string, string> = { image: "image", video: "video", doc: "doc", pdf: "doc", folder: "folder", audio: "zap" };
  const colors: Record<string, string> = { image: "bg-violet-100 text-violet-600", video: "bg-blue-100 text-blue-600", doc: "bg-orange-100 text-orange-600", pdf: "bg-red-100 text-red-600", folder: "bg-yellow-100 text-yellow-600", audio: "bg-green-100 text-green-600" };
  return (
    <button onClick={onClick} className="w-full flex items-center gap-3 px-4 py-3 active:bg-[#F8F9FB] transition-colors text-left">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${colors[type] || "bg-gray-100 text-gray-500"}`}>
        <Icon name={icons[type] || "files"} size={18} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-[#1A1D2E] truncate">{name}</p>
        <p className="text-xs text-[#8B91A0] mt-0.5">{size}</p>
      </div>
      <div className="flex items-center gap-1.5">
        {status === "cloud" && (
          <span className="flex items-center gap-1 text-[10px] font-medium text-[#A78BFA] bg-[#F5F3FF] px-1.5 py-0.5 rounded-full">
            <Icon name="cloud" size={10} />
            Cloud
          </span>
        )}
        {status === "local" && (
          <span className="flex items-center gap-1 text-[10px] font-medium text-[#4F6EF7] bg-[#EEF1FF] px-1.5 py-0.5 rounded-full">
            <Icon name="phone" size={10} />
            Local
          </span>
        )}
        {status === "both" && (
          <span className="flex items-center gap-1 text-[10px] font-medium text-[#22C55E] bg-[#F0FDF4] px-1.5 py-0.5 rounded-full">
            <Icon name="check" size={10} />
            Backed up
          </span>
        )}
        <Icon name="chevron_right" size={16} className="text-[#CBD0DA]" />
      </div>
    </button>
  );
}

// ── Bottom Nav ─────────────────────────────────────────────────────────────
function BottomNav({ active, setActive }: { active: string; setActive: (s: string) => void }) {
  const tabs = [
    { id: "home", label: "Home", icon: "home" },
    { id: "files", label: "Files", icon: "files" },
    { id: "photos", label: "Photos", icon: "image" },
    { id: "storage", label: "Storage", icon: "storage" },
    { id: "profile", label: "Profile", icon: "profile" },
  ];
  return (
    <nav className="flex bg-white border-t border-[#E8EBF0] pb-safe">
      {tabs.map((t) => (
        <button key={t.id} onClick={() => setActive(t.id)} className="flex-1 flex flex-col items-center gap-0.5 py-3 transition-colors">
          <Icon name={t.icon} size={22} className={active === t.id ? "text-[#4F6EF7]" : "text-[#8B91A0]"} />
          <span className={`text-[10px] font-medium ${active === t.id ? "text-[#4F6EF7]" : "text-[#8B91A0]"}`}>{t.label}</span>
        </button>
      ))}
    </nav>
  );
}

// ── HOME SCREEN ─────────────────────────────────────────────────────────────
function HomeScreen({ setActive, setFreeUpOpen }: { setActive: (s: string) => void; setFreeUpOpen: (b: boolean) => void }) {
  return (
    <div className="flex-1 overflow-y-auto bg-[#F8F9FB]">
      {/* Header */}
      <div className="bg-white px-5 pt-12 pb-5">
        <div className="flex items-center justify-between mb-1">
          <div>
            <p className="text-xs text-[#8B91A0] font-medium">Good morning</p>
            <h1 className="text-xl font-bold text-[#1A1D2E]">Amara Osei</h1>
          </div>
          <button className="w-10 h-10 rounded-full bg-[#4F6EF7] flex items-center justify-center text-white font-bold text-sm">AO</button>
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* Phone storage warning */}
        <div className="bg-[#FFF5F5] border border-[#FECACA] rounded-2xl p-4">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-xs font-semibold text-[#EF4444] uppercase tracking-wider">Phone Storage</p>
              <p className="text-2xl font-bold text-[#1A1D2E] mt-0.5">57.8 <span className="text-sm font-medium text-[#8B91A0]">/ 64 GB</span></p>
            </div>
            <div className="bg-[#FEE2E2] rounded-xl p-2">
              <Icon name="phone" size={18} className="text-[#EF4444]" />
            </div>
          </div>
          <StorageBar used={57.8} total={64} color="bg-[#EF4444]" />
          <p className="text-xs text-[#EF4444] mt-2 font-medium">90% full — your phone is almost out of storage</p>
          <button
            onClick={() => setFreeUpOpen(true)}
            className="mt-3 w-full bg-[#1A1D2E] text-white text-sm font-semibold py-3 rounded-xl flex items-center justify-center gap-2 active:opacity-80"
          >
            <Icon name="zap" size={16} />
            Free up 14.8 GB
          </button>
        </div>

        {/* Cloud storage */}
        <div className="bg-white rounded-2xl p-4 border border-[#E8EBF0]">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-xs font-semibold text-[#4F6EF7] uppercase tracking-wider">Cloud Storage</p>
              <p className="text-2xl font-bold text-[#1A1D2E] mt-0.5">42.7 <span className="text-sm font-medium text-[#8B91A0]">/ 128 GB</span></p>
            </div>
            <div className="bg-[#EEF1FF] rounded-xl p-2">
              <Icon name="cloud" size={18} className="text-[#4F6EF7]" />
            </div>
          </div>
          <StorageBar used={42.7} total={128} />
          <p className="text-xs text-[#8B91A0] mt-2">85.3 GB available</p>
        </div>

        {/* Quick actions */}
        <div>
          <p className="text-xs font-semibold text-[#8B91A0] uppercase tracking-wider mb-3 px-1">Quick Actions</p>
          <div className="grid grid-cols-4 gap-3">
            {[
              { icon: "upload", label: "Upload", color: "bg-[#EEF1FF] text-[#4F6EF7]" },
              { icon: "camera", label: "Scan", color: "bg-[#F5F3FF] text-[#A78BFA]" },
              { icon: "zap", label: "Free Space", color: "bg-[#FFF5F5] text-[#EF4444]", action: () => setFreeUpOpen(true) },
              { icon: "share", label: "Share", color: "bg-[#F0FDF4] text-[#22C55E]" },
            ].map((a) => (
              <button key={a.label} onClick={a.action} className="flex flex-col items-center gap-2 active:opacity-70">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${a.color}`}>
                  <Icon name={a.icon} size={20} />
                </div>
                <span className="text-[10px] font-medium text-[#8B91A0] text-center leading-tight">{a.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Recent files */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <p className="text-xs font-semibold text-[#8B91A0] uppercase tracking-wider">Recent Files</p>
            <button onClick={() => setActive("files")} className="text-xs font-semibold text-[#4F6EF7]">See all</button>
          </div>
          <div className="bg-white rounded-2xl border border-[#E8EBF0] overflow-hidden divide-y divide-[#F0F2F5]">
            <FileRow name="Family_Christmas_2024.mp4" size="1.8 GB · 2 hours ago" type="video" status="cloud" />
            <FileRow name="Project_Proposal_Q1.pdf" size="4.2 MB · Yesterday" type="pdf" status="both" />
            <FileRow name="WhatsApp Image 2024-12-24" size="3.4 MB · Yesterday" type="image" status="both" />
            <FileRow name="Invoice_December.pdf" size="180 KB · 3 days ago" type="pdf" status="local" />
          </div>
        </div>

        <div className="h-4" />
      </div>
    </div>
  );
}

// ── FILES SCREEN ────────────────────────────────────────────────────────────
function FilesScreen({ setCloudFileOpen }: { setCloudFileOpen: (b: boolean) => void }) {
  const [view, setView] = useState<"grid" | "list">("list");
  const [tab, setTab] = useState("Recent");
  const tabs = ["Recent", "Folders", "Photos", "Videos", "Docs", "Downloads"];

  const files = [
    { name: "Family_Christmas_2024.mp4", size: "1.8 GB", type: "video", status: "cloud" as const },
    { name: "Holiday Photos", size: "Folder · 142 items", type: "folder", status: "both" as const },
    { name: "Project_Proposal_Q1.pdf", size: "4.2 MB", type: "pdf", status: "both" as const },
    { name: "WhatsApp Image Dec 24", size: "3.4 MB", type: "image", status: "both" as const },
    { name: "Budget_2025.xlsx", size: "890 KB", type: "doc", status: "local" as const },
    { name: "Kenya_Road_Trip.mp4", size: "4.1 GB", type: "video", status: "cloud" as const },
    { name: "Invoice_December.pdf", size: "180 KB", type: "pdf", status: "local" as const },
    { name: "Music Mix Jan.mp3", size: "112 MB", type: "audio", status: "both" as const },
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-[#F8F9FB]">
      <div className="bg-white px-5 pt-12 pb-4 border-b border-[#E8EBF0]">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-[#1A1D2E]">Files</h1>
          <div className="flex items-center gap-2">
            <button onClick={() => setView(v => v === "list" ? "grid" : "list")} className="p-2 rounded-xl bg-[#F8F9FB]">
              <Icon name={view === "list" ? "grid" : "list"} size={18} className="text-[#8B91A0]" />
            </button>
            <button className="p-2 rounded-xl bg-[#F8F9FB]">
              <Icon name="search" size={18} className="text-[#8B91A0]" />
            </button>
          </div>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} className={`flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${tab === t ? "bg-[#4F6EF7] text-white" : "bg-[#F0F2F5] text-[#8B91A0]"}`}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white divide-y divide-[#F0F2F5]">
        {files.map((f) => (
          <FileRow
            key={f.name}
            {...f}
            onClick={f.status === "cloud" ? () => setCloudFileOpen(true) : undefined}
          />
        ))}
      </div>
    </div>
  );
}

// ── PHOTOS SCREEN ───────────────────────────────────────────────────────────
function PhotosScreen() {
  const months = [
    { label: "December 2024", count: 47 },
    { label: "November 2024", count: 82 },
  ];
  const photoColors = [
    "bg-violet-200", "bg-blue-200", "bg-emerald-200", "bg-amber-200", "bg-rose-200", "bg-sky-200",
    "bg-orange-200", "bg-teal-200", "bg-pink-200", "bg-indigo-200", "bg-lime-200", "bg-cyan-200",
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-[#F8F9FB]">
      <div className="bg-white px-5 pt-12 pb-4 border-b border-[#E8EBF0]">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-[#1A1D2E]">Photos</h1>
          <button className="p-2 rounded-xl bg-[#F8F9FB]">
            <Icon name="search" size={18} className="text-[#8B91A0]" />
          </button>
        </div>
        {/* Backup status */}
        <div className="flex items-center gap-3 bg-[#F0FDF4] rounded-xl p-3">
          <div className="w-8 h-8 rounded-full bg-[#22C55E] flex items-center justify-center">
            <Icon name="check" size={16} className="text-white" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-[#1A1D2E]">Backup is on</p>
            <p className="text-[11px] text-[#8B91A0]">Last backup 2 minutes ago</p>
          </div>
          <Icon name="chevron_right" size={16} className="text-[#22C55E]" />
        </div>
      </div>

      <div className="px-4 py-4 space-y-6">
        {months.map((month, mi) => (
          <div key={month.label}>
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-bold text-[#1A1D2E]">{month.label}</p>
              <span className="text-xs text-[#8B91A0]">{month.count} photos</span>
            </div>
            <div className="grid grid-cols-3 gap-1">
              {Array.from({ length: Math.min(month.count, 9) }).map((_, i) => (
                <div key={i} className={`aspect-square rounded-lg ${photoColors[(mi * 9 + i) % photoColors.length]} relative overflow-hidden`}>
                  {i < 2 && mi === 0 && (
                    <div className="absolute bottom-1 right-1 bg-[#A78BFA] rounded-full p-0.5">
                      <Icon name="cloud" size={8} className="text-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            {month.count > 9 && (
              <button className="mt-2 text-xs font-semibold text-[#4F6EF7]">+{month.count - 9} more</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── STORAGE SCREEN ──────────────────────────────────────────────────────────
function StorageScreen({ setFreeUpOpen }: { setFreeUpOpen: (b: boolean) => void }) {
  const categories = [
    { label: "Photos", gb: 18.4, color: "bg-violet-400" },
    { label: "Videos", gb: 22.1, color: "bg-blue-400" },
    { label: "WhatsApp", gb: 8.7, color: "bg-emerald-400" },
    { label: "Apps", gb: 5.1, color: "bg-amber-400" },
    { label: "Documents", gb: 2.3, color: "bg-orange-400" },
    { label: "Other", gb: 1.2, color: "bg-gray-400" },
  ];
  const total = 57.8;

  return (
    <div className="flex-1 overflow-y-auto bg-[#F8F9FB]">
      <div className="bg-white px-5 pt-12 pb-5 border-b border-[#E8EBF0]">
        <h1 className="text-xl font-bold text-[#1A1D2E]">Storage</h1>
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* Phone storage */}
        <div className="bg-white rounded-2xl p-5 border border-[#E8EBF0]">
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs font-semibold text-[#EF4444] uppercase tracking-wider">Phone Storage</p>
            <span className="text-xs bg-[#FEE2E2] text-[#EF4444] font-semibold px-2 py-0.5 rounded-full">90% full</span>
          </div>
          <p className="text-3xl font-bold text-[#1A1D2E] mb-1">57.8 GB</p>
          <p className="text-xs text-[#8B91A0] mb-4">6.2 GB available of 64 GB total</p>
          <StorageBar used={57.8} total={64} color="bg-[#EF4444]" />

          {/* Category breakdown */}
          <div className="mt-4 flex h-2.5 rounded-full overflow-hidden gap-px">
            {categories.map((c) => (
              <div key={c.label} className={c.color} style={{ width: `${(c.gb / 64) * 100}%` }} />
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-y-3">
            {categories.map((c) => (
              <div key={c.label} className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 rounded-full ${c.color}`} />
                <span className="text-xs text-[#8B91A0]">{c.label}</span>
                <span className="text-xs font-semibold text-[#1A1D2E] ml-auto mr-3">{c.gb} GB</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => setFreeUpOpen(true)}
            className="mt-4 w-full bg-[#1A1D2E] text-white text-sm font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2"
          >
            <Icon name="zap" size={16} />
            Free up 14.8 GB
          </button>
        </div>

        {/* Cloud storage */}
        <div className="bg-white rounded-2xl p-5 border border-[#E8EBF0]">
          <p className="text-xs font-semibold text-[#4F6EF7] uppercase tracking-wider mb-1">Cloud Storage</p>
          <p className="text-3xl font-bold text-[#1A1D2E] mb-1">42.7 GB</p>
          <p className="text-xs text-[#8B91A0] mb-4">85.3 GB available of 128 GB total</p>
          <StorageBar used={42.7} total={128} />

          <div className="mt-4 flex items-center justify-between">
            <div className="text-center">
              <p className="text-lg font-bold text-[#1A1D2E]">42.7 GB</p>
              <p className="text-[10px] text-[#8B91A0] font-medium">Used</p>
            </div>
            <div className="h-8 w-px bg-[#E8EBF0]" />
            <div className="text-center">
              <p className="text-lg font-bold text-[#1A1D2E]">85.3 GB</p>
              <p className="text-[10px] text-[#8B91A0] font-medium">Available</p>
            </div>
            <div className="h-8 w-px bg-[#E8EBF0]" />
            <div className="text-center">
              <p className="text-lg font-bold text-[#1A1D2E]">128 GB</p>
              <p className="text-[10px] text-[#8B91A0] font-medium">Total</p>
            </div>
          </div>

          <button className="mt-4 w-full border border-[#4F6EF7] text-[#4F6EF7] text-sm font-semibold py-3.5 rounded-xl">
            Upgrade storage plan
          </button>
        </div>

        <div className="h-4" />
      </div>
    </div>
  );
}

// ── PROFILE SCREEN ──────────────────────────────────────────────────────────
function ProfileScreen({ setSubscriptionOpen }: { setSubscriptionOpen: (b: boolean) => void }) {
  const rows = [
    { icon: "cloud", label: "Storage plan", value: "Plus · 128 GB", action: () => setSubscriptionOpen(true) },
    { icon: "bell", label: "Notifications", value: "On" },
    { icon: "lock", label: "Security & privacy", value: "" },
    { icon: "wifi_off", label: "Data usage", value: "Wi-Fi only" },
    { icon: "phone", label: "Devices", value: "2 devices" },
    { icon: "credit_card", label: "Payment methods", value: "M-Pesa" },
    { icon: "help", label: "Help & support", value: "" },
    { icon: "shield", label: "Terms & Privacy", value: "" },
  ];
  return (
    <div className="flex-1 overflow-y-auto bg-[#F8F9FB]">
      <div className="bg-white px-5 pt-12 pb-5 border-b border-[#E8EBF0]">
        <h1 className="text-xl font-bold text-[#1A1D2E]">Profile</h1>
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* Avatar */}
        <div className="bg-white rounded-2xl p-5 border border-[#E8EBF0] flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-[#4F6EF7] flex items-center justify-center text-white font-bold text-xl">AO</div>
          <div>
            <p className="font-bold text-[#1A1D2E] text-lg">Amara Osei</p>
            <p className="text-sm text-[#8B91A0]">amara@email.com</p>
            <p className="text-xs text-[#8B91A0] mt-0.5">+254 712 345 678</p>
          </div>
        </div>

        {/* Usage summary */}
        <div className="bg-[#EEF1FF] rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-bold text-[#1A1D2E]">Plus Plan · 128 GB</p>
            <span className="text-xs bg-[#4F6EF7] text-white font-semibold px-2 py-0.5 rounded-full">Active</span>
          </div>
          <StorageBar used={42.7} total={128} />
          <div className="flex justify-between mt-2">
            <span className="text-xs text-[#8B91A0]">42.7 GB used</span>
            <span className="text-xs text-[#8B91A0]">85.3 GB free</span>
          </div>
          <p className="text-xs text-[#4F6EF7] mt-2 font-medium">KSh 249/month · Renews Jan 15</p>
        </div>

        {/* Settings list */}
        <div className="bg-white rounded-2xl border border-[#E8EBF0] overflow-hidden divide-y divide-[#F0F2F5]">
          {rows.map((r) => (
            <button key={r.label} onClick={r.action} className="w-full flex items-center gap-3 px-4 py-3.5 active:bg-[#F8F9FB] text-left">
              <div className="w-8 h-8 rounded-xl bg-[#F0F2F5] flex items-center justify-center flex-shrink-0">
                <Icon name={r.icon} size={16} className="text-[#8B91A0]" />
              </div>
              <p className="text-sm font-medium text-[#1A1D2E] flex-1">{r.label}</p>
              {r.value && <span className="text-xs text-[#8B91A0]">{r.value}</span>}
              <Icon name="chevron_right" size={16} className="text-[#CBD0DA]" />
            </button>
          ))}
        </div>

        <button className="w-full py-3.5 rounded-xl text-sm font-semibold text-[#EF4444] bg-[#FFF5F5] border border-[#FECACA]">
          Sign out
        </button>

        <div className="h-4" />
      </div>
    </div>
  );
}

// ── FREE UP SPACE MODAL ─────────────────────────────────────────────────────
function FreeUpModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  const cats = [
    { label: "Videos", gb: 8.4, icon: "video", color: "bg-blue-100 text-blue-600" },
    { label: "WhatsApp Media", gb: 5.4, icon: "image", color: "bg-emerald-100 text-emerald-600" },
    { label: "Photos", gb: 3.2, icon: "camera", color: "bg-violet-100 text-violet-600" },
    { label: "Downloads", gb: 1.8, icon: "download", color: "bg-orange-100 text-orange-600" },
  ];
  const [selected, setSelected] = useState(new Set([0, 1, 2, 3]));
  const totalSelected = cats.filter((_, i) => selected.has(i)).reduce((s, c) => s + c.gb, 0);

  function startUpload() {
    setStep(2);
    setUploading(true);
    let p = 0;
    const iv = setInterval(() => {
      p += Math.random() * 4 + 1;
      if (p >= 100) { p = 100; clearInterval(iv); setUploading(false); setDone(true); }
      setProgress(p);
    }, 120);
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end" onClick={onClose}>
      <div className="w-full bg-white rounded-t-3xl overflow-hidden max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
          <div className="w-10 h-1 bg-[#E8EBF0] rounded-full" />
        </div>

        {/* Steps */}
        {step === 0 && (
          <div className="flex flex-col flex-1 overflow-hidden">
            <div className="px-5 pt-3 pb-4 flex-shrink-0">
              <h2 className="text-xl font-bold text-[#1A1D2E]">Free up space</h2>
              <p className="text-sm text-[#8B91A0] mt-1">Select what to move to the cloud. Your files stay visible in the app.</p>
            </div>

            <div className="px-5 space-y-3 overflow-y-auto flex-1">
              {cats.map((c, i) => (
                <button
                  key={c.label}
                  onClick={() => setSelected(s => { const n = new Set(s); n.has(i) ? n.delete(i) : n.add(i); return n; })}
                  className={`w-full flex items-center gap-3 p-4 rounded-2xl border-2 transition-colors ${selected.has(i) ? "border-[#4F6EF7] bg-[#EEF1FF]" : "border-[#E8EBF0] bg-white"}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${c.color}`}>
                    <Icon name={c.icon} size={18} />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-semibold text-[#1A1D2E]">{c.label}</p>
                    <p className="text-xs text-[#8B91A0]">{c.gb} GB</p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${selected.has(i) ? "border-[#4F6EF7] bg-[#4F6EF7]" : "border-[#CBD0DA]"}`}>
                    {selected.has(i) && <Icon name="check" size={10} className="text-white" />}
                  </div>
                </button>
              ))}
            </div>

            <div className="px-5 py-5 border-t border-[#F0F2F5] flex-shrink-0">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[#8B91A0]">You'll free up</span>
                <span className="text-xl font-bold text-[#1A1D2E]">{totalSelected.toFixed(1)} GB</span>
              </div>
              <button
                onClick={() => setStep(1)}
                disabled={!selected.size}
                className="w-full bg-[#4F6EF7] text-white text-sm font-semibold py-4 rounded-xl disabled:opacity-40 flex items-center justify-center gap-2"
              >
                Review files
                <Icon name="arrow_right" size={16} />
              </button>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="flex flex-col flex-1 overflow-hidden">
            <div className="px-5 pt-3 pb-4 flex-shrink-0">
              <button onClick={() => setStep(0)} className="flex items-center gap-1 text-[#4F6EF7] text-sm font-medium mb-3">
                <Icon name="arrow_left" size={16} />
                Back
              </button>
              <h2 className="text-xl font-bold text-[#1A1D2E]">Confirm backup</h2>
              <p className="text-sm text-[#8B91A0] mt-1">Files will be uploaded to the cloud before being removed from your phone.</p>
            </div>

            <div className="px-5 space-y-3 flex-1 overflow-y-auto">
              <div className="bg-[#F0FDF4] rounded-2xl p-4 flex items-start gap-3">
                <Icon name="shield" size={18} className="text-[#22C55E] flex-shrink-0 mt-0.5" />
                <p className="text-xs text-[#166534]">Files are uploaded and verified before anything is deleted from your phone. This is completely safe.</p>
              </div>
              {cats.filter((_, i) => selected.has(i)).map((c) => (
                <div key={c.label} className="flex items-center gap-3 bg-white border border-[#E8EBF0] rounded-xl p-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${c.color}`}>
                    <Icon name={c.icon} size={16} />
                  </div>
                  <p className="text-sm font-medium text-[#1A1D2E] flex-1">{c.label}</p>
                  <span className="text-sm font-bold text-[#1A1D2E]">{c.gb} GB</span>
                </div>
              ))}
            </div>

            <div className="px-5 py-5 border-t border-[#F0F2F5] flex-shrink-0">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[#8B91A0]">Total to free up</span>
                <span className="text-xl font-bold text-[#4F6EF7]">{totalSelected.toFixed(1)} GB</span>
              </div>
              <button
                onClick={startUpload}
                className="w-full bg-[#1A1D2E] text-white text-sm font-semibold py-4 rounded-xl flex items-center justify-center gap-2"
              >
                <Icon name="cloud" size={16} />
                Back up & free space
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col items-center px-8 py-10 flex-1">
            {!done ? (
              <>
                {/* Animated upload indicator */}
                <div className="w-24 h-24 rounded-full bg-[#EEF1FF] flex items-center justify-center mb-6 relative">
                  <div className="absolute inset-0 rounded-full border-4 border-[#4F6EF7] border-t-transparent animate-spin" />
                  <Icon name="cloud" size={32} className="text-[#4F6EF7]" />
                </div>
                <h2 className="text-xl font-bold text-[#1A1D2E] text-center mb-1">Uploading your files...</h2>
                <p className="text-sm text-[#8B91A0] text-center mb-8">Do not close the app. This may take a few minutes.</p>

                <div className="w-full bg-[#E8EBF0] rounded-full h-3 mb-3">
                  <div className="bg-[#4F6EF7] h-3 rounded-full transition-all" style={{ width: `${progress}%` }} />
                </div>
                <div className="flex w-full justify-between">
                  <span className="text-xs text-[#8B91A0]">Uploading 142 files</span>
                  <span className="text-sm font-bold text-[#1A1D2E]">{Math.round(progress)}%</span>
                </div>

                <p className="text-xs text-[#8B91A0] mt-6">Using Wi-Fi · {(totalSelected * (1 - progress / 100)).toFixed(1)} GB remaining</p>
              </>
            ) : (
              <>
                <div className="w-24 h-24 rounded-full bg-[#F0FDF4] flex items-center justify-center mb-6">
                  <Icon name="check" size={40} className="text-[#22C55E]" />
                </div>
                <h2 className="text-3xl font-bold text-[#1A1D2E] text-center mb-2">{totalSelected.toFixed(1)} GB freed</h2>
                <p className="text-sm text-[#8B91A0] text-center mb-8">Your files are safely in the cloud and still accessible in this app.</p>

                <div className="w-full bg-white border border-[#E8EBF0] rounded-2xl p-4 mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs text-[#8B91A0]">Phone storage now</span>
                  </div>
                  <p className="text-2xl font-bold text-[#1A1D2E] mb-1">{(57.8 - totalSelected).toFixed(1)} <span className="text-sm font-medium text-[#8B91A0]">/ 64 GB</span></p>
                  <StorageBar used={57.8 - totalSelected} total={64} />
                </div>

                <button onClick={onClose} className="w-full bg-[#4F6EF7] text-white text-sm font-semibold py-4 rounded-xl">
                  Done
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ── CLOUD FILE MODAL ────────────────────────────────────────────────────────
function CloudFileModal({ onClose }: { onClose: () => void }) {
  const [stage, setStage] = useState<"prompt" | "downloading" | "ready">("prompt");
  const [prog, setProg] = useState(0);

  function startDownload() {
    setStage("downloading");
    let p = 0;
    const iv = setInterval(() => {
      p += Math.random() * 6 + 2;
      if (p >= 100) { p = 100; clearInterval(iv); setStage("ready"); }
      setProg(p);
    }, 100);
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end" onClick={onClose}>
      <div className="w-full bg-white rounded-t-3xl p-6 flex flex-col items-center" onClick={e => e.stopPropagation()}>
        <div className="w-10 h-1 bg-[#E8EBF0] rounded-full mb-6" />

        {stage === "prompt" && (
          <>
            <div className="w-16 h-16 rounded-2xl bg-[#F5F3FF] flex items-center justify-center mb-4">
              <Icon name="video" size={28} className="text-[#A78BFA]" />
            </div>
            <h3 className="text-lg font-bold text-[#1A1D2E] text-center mb-1">Family_Christmas_2024.mp4</h3>
            <p className="text-sm text-[#8B91A0] text-center mb-2">1.8 GB · Cloud only</p>
            <div className="flex items-center gap-1.5 mb-6">
              <Icon name="cloud" size={14} className="text-[#A78BFA]" />
              <span className="text-xs text-[#A78BFA] font-medium">Stored in cloud · not on phone</span>
            </div>
            <button onClick={startDownload} className="w-full bg-[#4F6EF7] text-white text-sm font-semibold py-4 rounded-xl flex items-center justify-center gap-2 mb-3">
              <Icon name="download" size={16} />
              Download to phone (1.8 GB)
            </button>
            <button className="w-full border border-[#E8EBF0] text-[#1A1D2E] text-sm font-semibold py-4 rounded-xl">
              Open from cloud (uses data)
            </button>
          </>
        )}

        {stage === "downloading" && (
          <>
            <div className="w-16 h-16 rounded-full bg-[#EEF1FF] flex items-center justify-center mb-4 relative">
              <div className="absolute inset-0 rounded-full border-4 border-[#4F6EF7] border-t-transparent animate-spin" />
              <Icon name="download" size={24} className="text-[#4F6EF7]" />
            </div>
            <h3 className="text-lg font-bold text-[#1A1D2E] mb-1">Downloading...</h3>
            <p className="text-sm text-[#8B91A0] mb-6">{(1.8 * (1 - prog / 100)).toFixed(1)} GB remaining</p>
            <div className="w-full bg-[#E8EBF0] rounded-full h-2.5 mb-2">
              <div className="bg-[#4F6EF7] h-2.5 rounded-full transition-all" style={{ width: `${prog}%` }} />
            </div>
            <div className="flex w-full justify-between mb-6">
              <span className="text-xs text-[#8B91A0]">Family_Christmas_2024.mp4</span>
              <span className="text-xs font-bold text-[#1A1D2E]">{Math.round(prog)}%</span>
            </div>
            <button className="text-sm text-[#8B91A0]">Pause</button>
          </>
        )}

        {stage === "ready" && (
          <>
            <div className="w-16 h-16 rounded-2xl bg-[#F0FDF4] flex items-center justify-center mb-4">
              <Icon name="check" size={28} className="text-[#22C55E]" />
            </div>
            <h3 className="text-lg font-bold text-[#1A1D2E] text-center mb-1">Ready to open</h3>
            <p className="text-sm text-[#8B91A0] text-center mb-6">Family_Christmas_2024.mp4 is now on your phone</p>
            <button onClick={onClose} className="w-full bg-[#22C55E] text-white text-sm font-semibold py-4 rounded-xl flex items-center justify-center gap-2 mb-3">
              <Icon name="video" size={16} />
              Open file
            </button>
            <button onClick={onClose} className="text-sm text-[#8B91A0]">Done</button>
          </>
        )}
      </div>
    </div>
  );
}

// ── SUBSCRIPTION MODAL ──────────────────────────────────────────────────────
function SubscriptionModal({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState(1);
  const plans = [
    { name: "Free", gb: "5 GB", price: "Free", color: "bg-gray-100", accent: "text-gray-600" },
    { name: "Starter", gb: "50 GB", price: "KSh 99/mo", color: "bg-[#EEF1FF]", accent: "text-[#4F6EF7]", current: false },
    { name: "Plus", gb: "200 GB", price: "KSh 249/mo", color: "bg-[#EEF1FF]", accent: "text-[#4F6EF7]", current: true },
    { name: "Pro", gb: "1 TB", price: "KSh 699/mo", color: "bg-[#F5F3FF]", accent: "text-[#A78BFA]" },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end" onClick={onClose}>
      <div className="w-full bg-white rounded-t-3xl max-h-[90vh] flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
          <div className="w-10 h-1 bg-[#E8EBF0] rounded-full" />
        </div>
        <div className="px-5 pt-3 pb-4 flex-shrink-0">
          <h2 className="text-xl font-bold text-[#1A1D2E]">Storage plans</h2>
          <p className="text-sm text-[#8B91A0] mt-1">Your phone just got bigger.</p>
        </div>

        <div className="px-5 space-y-3 overflow-y-auto flex-1">
          {plans.map((p, i) => (
            <button key={p.name} onClick={() => setSelected(i)} className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-colors text-left ${selected === i ? "border-[#4F6EF7] bg-[#EEF1FF]" : "border-[#E8EBF0] bg-white"}`}>
              <div className={`flex-1`}>
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-[#1A1D2E]">{p.name}</span>
                  {p.current && <span className="text-[10px] bg-[#4F6EF7] text-white font-semibold px-2 py-0.5 rounded-full">Current</span>}
                </div>
                <span className="text-2xl font-bold text-[#1A1D2E]">{p.gb}</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-[#1A1D2E]">{p.price}</p>
                <p className="text-[10px] text-[#8B91A0]">{i > 0 ? "per month" : "forever"}</p>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${selected === i ? "border-[#4F6EF7] bg-[#4F6EF7]" : "border-[#CBD0DA]"}`}>
                {selected === i && <Icon name="check" size={10} className="text-white" />}
              </div>
            </button>
          ))}

          {/* M-Pesa note */}
          <div className="bg-[#F0FDF4] rounded-xl p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#22C55E] flex items-center justify-center text-white font-bold text-xs flex-shrink-0">M</div>
            <p className="text-xs text-[#166534]">Pay with M-Pesa, card, or bank transfer. Cancel anytime.</p>
          </div>
        </div>

        <div className="px-5 py-5 border-t border-[#F0F2F5] flex-shrink-0">
          <button onClick={onClose} className="w-full bg-[#4F6EF7] text-white text-sm font-semibold py-4 rounded-xl">
            {selected === plans.findIndex(p => p.current) ? "Keep current plan" : `Upgrade to ${plans[selected].name}`}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── APP ROOT ────────────────────────────────────────────────────────────────
export default function App() {
  const [active, setActive] = useState("home");
  const [freeUpOpen, setFreeUpOpen] = useState(false);
  const [cloudFileOpen, setCloudFileOpen] = useState(false);
  const [subscriptionOpen, setSubscriptionOpen] = useState(false);

  return (
    <div className="flex flex-col h-full bg-[#F8F9FB] font-sans max-w-sm mx-auto relative overflow-hidden shadow-2xl">
      {/* Screen content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {active === "home" && <HomeScreen setActive={setActive} setFreeUpOpen={setFreeUpOpen} />}
        {active === "files" && <FilesScreen setCloudFileOpen={setCloudFileOpen} />}
        {active === "photos" && <PhotosScreen />}
        {active === "storage" && <StorageScreen setFreeUpOpen={setFreeUpOpen} />}
        {active === "profile" && <ProfileScreen setSubscriptionOpen={setSubscriptionOpen} />}
      </div>

      <BottomNav active={active} setActive={setActive} />

      {/* Modals */}
      {freeUpOpen && <FreeUpModal onClose={() => setFreeUpOpen(false)} />}
      {cloudFileOpen && <CloudFileModal onClose={() => setCloudFileOpen(false)} />}
      {subscriptionOpen && <SubscriptionModal onClose={() => setSubscriptionOpen(false)} />}
    </div>
  );
}
