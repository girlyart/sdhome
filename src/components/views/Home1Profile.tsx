import React from 'react';
import { Award, Compass, GraduationCap, CheckCircle2, ShieldCheck, HeartHandshake, UserCheck } from 'lucide-react';

export const Home1Profile: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in text-slate-100">
      {/* Sambutan & Gambaran Singkat */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/60 p-6 md:p-8 rounded-3xl border border-slate-800 shadow-xl">
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-gradient-to-b from-slate-800 to-slate-950 p-6 text-center">
            <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-gradient-to-tr from-blue-600 to-amber-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <GraduationCap className="w-14 h-14 text-amber-300" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Drs. H. Suwito, M.Pd.</h3>
            <p className="text-amber-400 text-sm font-medium mb-3">Kepala SMP Negeri 6 Jember</p>
            <div className="text-xs text-slate-400 space-y-1 pt-3 border-t border-slate-800">
              <p>NIP. 19680415 199412 1 003</p>
              <p className="italic font-serif text-slate-300">"Mendidik dengan Hati, Merajut Prestasi Generasi Penerus Bangsa"</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            <ShieldCheck className="w-4 h-4" /> Sambutan Resmi Pimpinan
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
            Mewujudkan Generasi Cerdas Berkarakter di Jember
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Selamat datang di portal informasi resmi <strong className="text-white">SMP Negeri 6 Jember</strong>. Kami berkomitmen menyelenggarakan pendidikan menengah pertama yang bermutu tinggi, berakar pada keluhuran budi pekerti, kearifan lokal Jember, serta kesiapan menyongsong era peradaban global.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Dengan dukungan tenaga pendidik berdedikasi dan sarana pembelajaran yang terintegrasi, seluruh putra-putri dididik dalam ekosistem belajar yang aman, ramah anak, dan memicu rasa ingin tahu ilmiah.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/60 text-center">
              <span className="block text-2xl font-extrabold text-amber-400 font-mono">A</span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Akreditasi BAN-S/M</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/60 text-center">
              <span className="block text-2xl font-extrabold text-white font-mono">24</span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Rombongan Belajar</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/60 text-center">
              <span className="block text-2xl font-extrabold text-white font-mono">54+</span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Pendidik & Staf</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/60 text-center">
              <span className="block text-2xl font-extrabold text-blue-400 font-mono">1979</span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Tahun Berdiri</span>
            </div>
          </div>
        </div>
      </div>

      {/* Visi & Misi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Visi */}
        <div className="p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Visi Sekolah</h3>
          </div>
          <blockquote className="p-4 rounded-2xl bg-blue-950/30 border border-blue-800/40 text-blue-100 font-medium italic text-base sm:text-lg mb-4">
            "Terwujudnya Lulusan yang Unggul dalam Prestasi, Luhur dalam Budi Pekerti, Menguasai IPTEK, dan Peduli terhadap Kelestarian Lingkungan."
          </blockquote>
          <p className="text-slate-300 text-sm leading-relaxed">
            Visi ini menjadi kompas seluruh insan pendidik dan peserta didik SMP Negeri 6 Jember dalam setiap langkah pembentukan karakter Profil Pelajar Pancasila.
          </p>
        </div>

        {/* Misi */}
        <div className="p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Misi Pokok</h3>
          </div>
          <ul className="space-y-3 text-sm text-slate-300">
            {[
              'Melaksanakan proses pembelajaran aktif, inovatif, kreatif, dan berorientasi HOTS.',
              'Menumbuhkembangkan penghayatan ajaran agama serta norma budi pekerti yang luhur.',
              'Meningkatkan kompetensi literasi dan numerasi serta pemanfaatan teknologi digital.',
              'Mewujudkan lingkungan sekolah yang bersih, asri, sehat, dan berwawasan Adiwiyata.',
              'Membina bakat minat siswa dalam bidang sains, olahraga, seni rupa, dan seni musik.',
            ].map((misi, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>{misi}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Nilai Budaya Sekolah (SPENIX) */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-slate-900/60 border border-slate-800">
        <h3 className="text-xl font-bold text-white mb-6 text-center">
          Pilar Budaya Sekolah SMP Negeri 6 Jember
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/50">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center mb-3">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-base mb-1">Berakhlak & Empati</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Membiasakan 5S (Senyum, Salam, Sapa, Sopan, Santun) serta kepedulian sosial antar sesama warga sekolah.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/50">
            <div className="w-10 h-10 rounded-xl bg-blue-400/10 text-blue-400 flex items-center justify-center mb-3">
              <UserCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-base mb-1">Disiplin & Integritas</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Konsistensi kehadiran tepat waktu, kejujuran akademik, dan tanggung jawab atas tugas belajar.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/50">
            <div className="w-10 h-10 rounded-xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-base mb-1">Peduli Lingkungan</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Gerakan reduksi sampah plastik, pemilahan organik-anorganik, dan perawatan taman hijau sekolah.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
