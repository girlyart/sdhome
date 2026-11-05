import React, { useState } from 'react';
import { Trophy, Medal, Flag, Music, Activity, Star, Users, Flame } from 'lucide-react';

interface Achievement {
  title: string;
  category: 'Akademik' | 'Olahraga' | 'Seni & Budaya' | 'Kepramukaan';
  event: string;
  year: string;
  badge: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Juara 1 Olimpiade Sains Nasional (OSN) Bidang IPA',
    category: 'Akademik',
    event: 'Tingkat Kabupaten Jember & Delegasi Jawa Timur',
    year: '2026',
    badge: 'Medali Emas',
  },
  {
    title: 'Juara 2 Lomba Tari Tradisional Nusantara (FLS2N)',
    category: 'Seni & Budaya',
    event: 'Festival & Lomba Seni Siswa Nasional Tk. Karesidenan Besuki',
    year: '2025',
    badge: 'Piala Bergilir',
  },
  {
    title: 'Juara 1 Kejuaraan Bola Voli Putra Antar SMP',
    category: 'Olahraga',
    event: 'Pekan Olahraga Pelajar Daerah (POPDA) Jember',
    year: '2025',
    badge: 'Medali Emas',
  },
  {
    title: 'Regu Penggalang Berprestasi Tinggi (LT III)',
    category: 'Kepramukaan',
    event: 'Lomba Tingkat III Kwartir Cabang Gerakan Pramuka Jember',
    year: '2025',
    badge: 'Pramuka Garuda',
  },
  {
    title: 'Juara 3 Kompetisi Matematika Terbuka Unej',
    category: 'Akademik',
    event: 'Kompetisi Matematika Universitas Jember Se-Jatim Bali',
    year: '2024',
    badge: 'Medali Perunggu',
  },
  {
    title: 'Juara Harapan 1 Lomba Cipta & Baca Puisi Pelajar',
    category: 'Seni & Budaya',
    event: 'Bulan Bahasa Dispendik Kabupaten Jember',
    year: '2024',
    badge: 'Penghargaan Khusus',
  },
];

const EXTRACURRICULARS = [
  { name: 'Pramuka Inti (Gudep 06)', icon: Flag, desc: 'Pendidikan karakter, kedisiplinan dan keterampilan survival outdoor.' },
  { name: 'Palang Merah Remaja (PMR)', icon: Activity, desc: 'Pertolongan pertama, donor darah sukarela dan kepedulian kemanusiaan.' },
  { name: 'Paskibra Pasukan Khusus', icon: Flame, desc: 'Pelatihan baris-berbaris presisi dan pengibaran bendera pusaka sekolah.' },
  { name: 'Tari Tradisional & Karawitan', icon: Music, desc: 'Pelestarian seni tari Gandrung, Can-Macanan Kaduk, dan gamelan Jawa.' },
  { name: 'Futsal & Bola Basket', icon: Trophy, desc: 'Latihan taktik fisik rutin dan partisipasi turnamen resmi antar sekolah.' },
  { name: 'Klub Robotika & Multimedia', icon: Star, desc: 'Eksplorasi sensor Arduino sederhana, desain grafis dan fotografi jurnalistik.' },
];

export const Home3Achievements: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Semua');

  const filteredAchievements = activeFilter === 'Semua'
    ? ACHIEVEMENTS
    : ACHIEVEMENTS.filter((item) => item.category === activeFilter);

  return (
    <div className="space-y-12 animate-fade-in text-slate-100">
      {/* Header Prestasi */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20 mb-2">
              <Trophy className="w-4 h-4" /> Gelora Prestasi Siswa
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Koleksi Prestasi & Bangga Almamater
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-xl">
              Bukti dedikasi, kerja keras para siswa dan guru pembina dalam mengharumkan nama SMP Negeri 6 Jember di berbagai kancah.
            </p>
          </div>

          {/* Filter Pills / Buttons */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700/60">
            {['Semua', 'Akademik', 'Olahraga', 'Seni & Budaya', 'Kepramukaan'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                  activeFilter === cat
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Prestasi Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAchievements.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-amber-400/50 hover:bg-slate-800/70 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-amber-400">{item.category}</span>
                  <span className="font-mono text-slate-400">{item.year}</span>
                </div>
                <h4 className="font-bold text-white text-base mb-1.5 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 mb-4">{item.event}</p>
              </div>

              <div className="pt-3 border-t border-slate-700/40 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300">
                  <Medal className="w-4 h-4 text-amber-400" /> {item.badge}
                </span>
                <span className="text-[11px] text-slate-500">Tingkat Resmi</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ekstrakurikuler */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
        <div className="flex items-center gap-2 mb-2">
          <Users className="w-5 h-5 text-blue-400" />
          <h3 className="text-xl font-bold text-white">Wadah Bakat & Ekstrakurikuler</h3>
        </div>
        <p className="text-slate-300 text-sm mb-6">
          Setiap siswa didorong memilih wadah pengembangan diri untuk melatih kepemimpinan, sportivitas, dan kreativitas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EXTRACURRICULARS.map((ekskul, idx) => {
            const Icon = ekskul.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/40 flex items-start gap-3.5 hover:border-slate-600 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{ekskul.name}</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{ekskul.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
