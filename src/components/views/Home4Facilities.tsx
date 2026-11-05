import React from 'react';
import { Building, Trees, BookOpen, Monitor, ShieldCheck, HeartPulse, Sparkles } from 'lucide-react';

const FACILITIES = [
  {
    title: 'Perpustakaan Graha Literasi Digital',
    desc: 'Ruang baca berpendingin dengan ribuan koleksi buku referensi, novel sastra, e-book reader, dan workstation mandiri.',
    icon: BookOpen,
    tag: 'Akademik',
  },
  {
    title: 'Laboratorium IPA Terpadu',
    desc: 'Dilengkapi mikroskop binokuler, alat peraga anatomi, reagen kimia dasar, serta peralatan fisika optik.',
    icon: Sparkles,
    tag: 'Sains',
  },
  {
    title: 'Lab Komputer & Multimedia CBT',
    desc: '40 unit PC modern tersambung jaringan LAN berkecepatan tinggi untuk Asesmen Nasional Berbasis Komputer (ANBK).',
    icon: Monitor,
    tag: 'Teknologi',
  },
  {
    title: 'Lapangan Olahraga Serbaguna',
    desc: 'Fasilitas lapangan terbuka berlapis khusus untuk upacara bendera, pertandingan futsal, bola voli, dan bola basket.',
    icon: Building,
    tag: 'Olahraga',
  },
  {
    title: 'Ruang Konseling BK & Ramah Anak',
    desc: 'Ruang konsultasi psikologis yang nyaman, tertutup, dan bersahabat untuk bimbingan karier dan mediasi siswa.',
    icon: ShieldCheck,
    tag: 'Karakter',
  },
  {
    title: 'UKS & Fasilitas Sanitasi Sehat',
    desc: 'Ruang istirahat kesehatan lengkap dengan tempat tidur medis, obat-obatan P3K, dan kader kesehatan remaja terampil.',
    icon: HeartPulse,
    tag: 'Kesehatan',
  },
];

export const Home4Facilities: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in text-slate-100">
      {/* Visual Showcase Banners */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Exterior Campus Image */}
        <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-xl flex flex-col">
          <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
            <img
              src="/src/assets/images/hero_smpn6_campus_1793890518670.jpg"
              alt="Halaman Upacara dan Gedung Utama SMP Negeri 6 Jember"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs font-semibold text-amber-300 bg-black/60 px-2.5 py-1 rounded backdrop-blur-md">
                Gedung Utama & Halaman Upacara
              </span>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Kampus Asri & Lingkungan Adiwiyata</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Terletak di kawasan pendidikan strategis Jember dengan pepohonan rindang, sirkulasi udara optimal, dan penataan taman yang asri untuk menunjang konsentrasi belajar para siswa.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-emerald-400">
              <Trees className="w-4 h-4" />
              <span>Sekolah Peduli & Berbudaya Lingkungan Hidup (Adiwiyata)</span>
            </div>
          </div>
        </div>

        {/* Interior Facility Image */}
        <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-xl flex flex-col">
          <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
            <img
              src="/src/assets/images/facility_smpn6_library_1793890517523.jpg"
              alt="Perpustakaan Digital dan Laboratorium Pembelajaran Terpadu"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs font-semibold text-blue-300 bg-black/60 px-2.5 py-1 rounded backdrop-blur-md">
                Graha Literasi & Pusat Sains
              </span>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Sarana Modern Berbasis Digital</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Penyediaan perangkat multimedia terkini, konektivitas internet serat optik di setiap ruang laboratorium, serta pojok baca yang nyaman bagi seluruh peserta didik.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-blue-400">
              <Sparkles className="w-4 h-4" />
              <span>Standar Sarana & Prasarana Sesuai SPM Kemendikbudristek</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Fasilitas Tambahan */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
        <h3 className="text-xl font-bold text-white mb-6">
          Daftar Sarana Prasarana Penunjang Pendidikan
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FACILITIES.map((facility, idx) => {
            const Icon = facility.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-slate-600 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 bg-slate-700/50 px-2.5 py-0.5 rounded-full">
                    {facility.tag}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-1.5">{facility.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{facility.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
