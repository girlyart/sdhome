import React, { useState } from 'react';
import { BookMarked, Cpu, Sparkles, Calendar, Clock, CheckCircle } from 'lucide-react';

export const Home2Academic: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState<'ganjil' | 'genap'>('ganjil');

  return (
    <div className="space-y-12 animate-fade-in text-slate-100">
      {/* Kurikulum Merdeka Overview */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-400/20 mb-2">
              <BookMarked className="w-4 h-4" /> Standar Pembelajaran Nasional
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Kurikulum Merdeka SMP Negeri 6 Jember
            </h2>
            <p className="text-slate-300 text-sm mt-1">
              Pendekatan pembelajaran berpusat pada peserta didik, penguatan literasi digital, dan diferensiasi bakat.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700/60">
            <button
              onClick={() => setSelectedSemester('ganjil')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                selectedSemester === 'ganjil'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Semester Ganjil
            </button>
            <button
              onClick={() => setSelectedSemester('genap')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                selectedSemester === 'genap'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Semester Genap
            </button>
          </div>
        </div>

        {/* 3 Core Pillars of Academics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-blue-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-lg mb-2">Projek P5 Berkelanjutan</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Penguatan Profil Pelajar Pancasila dengan tema Gaya Hidup Berkelanjutan, Kearifan Lokal Tembakau & Budaya Pandhalungan Jember, serta Rekayasa Teknologi.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                Gaya Hidup Berkelanjutan
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                Kearifan Budaya Pandhalungan
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                Suara Demokrasi Pemilihan OSIS
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-amber-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-lg mb-2">Informatika & Coding Dasar</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Pembelajaran Computational Thinking, literasi keamanan siber bagi remaja, serta eksplorasi pemrograman visual blok bagi siswa kelas VII, VIII, dan IX.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                Praktik Lab Komputer Terjadwal
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                Platform Asesmen Digital CBT
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                Literasi Cerdas Bermedia Sosial
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-emerald-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <BookMarked className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-lg mb-2">Program Bina Prestasi</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Bimbingan intensif khusus persiapan Olimpiade Sains Nasional (OSN Matematika, IPA, IPS) serta kompetisi Bahasa Inggris dan Pidato Bahasa Daerah.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                Mentoring Khusus Guru Pembimbing
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                Simulasi Uji Soal Berkala
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                Dukungan Penuh Delegasi Sekolah
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Jadwal & Kalender Pembelajaran */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-bold text-white">Struktur Waktu Belajar Siswa</h3>
          </div>
          <div className="space-y-3">
            {[
              { day: 'Senin', time: '06.45 - 14.30 WIB', note: 'Upacara Bendera & KBM 8 Jam Pelajaran' },
              { day: 'Selasa - Kamis', time: '06.45 - 14.30 WIB', note: 'Literasi Pagi, Sholat Dhuhur Berjamaah, KBM' },
              { day: 'Jumat', time: '06.45 - 11.00 WIB', note: 'Senam Sehat / Istighosah Pagi & KBM Singkat' },
              { day: 'Sabtu', time: '07.30 - 12.00 WIB', note: 'Kegiatan Ekstrakurikuler Wajib & Pilihan' },
            ].map((schedule, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/40">
                <div>
                  <span className="font-bold text-white text-sm">{schedule.day}</span>
                  <p className="text-xs text-slate-400">{schedule.note}</p>
                </div>
                <span className="text-xs font-mono font-semibold text-amber-300 mt-1 sm:mt-0">
                  {schedule.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-bold text-white">Agenda Akademik Utama</h3>
          </div>
          <div className="space-y-3">
            {[
              { month: 'Juli 2026', title: 'Masa Pengenalan Lingkungan Sekolah (MPLS)', status: 'Wajib Siswa Baru' },
              { month: 'September 2026', title: 'Asesmen Sumatif Tengah Semester & Pameran Karya P5', status: 'Akademik' },
              { month: 'Desember 2026', title: 'Penilaian Akhir Semester (PAS) & Pembagian Rapor', status: 'Evaluasi' },
              { month: 'Maret 2027', title: 'Try Out Asesmen Bakat Minat & Ujian Sekolah Kelas IX', status: 'Kelulusan' },
            ].map((agenda, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/40 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-blue-400 font-mono">{agenda.month}</span>
                  <p className="text-sm font-medium text-white">{agenda.title}</p>
                </div>
                <span className="text-[11px] text-slate-400 bg-slate-700/50 px-2.5 py-1 rounded-md shrink-0">
                  {agenda.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
