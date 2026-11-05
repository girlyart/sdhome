import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, FileText, UserPlus, HelpCircle } from 'lucide-react';

export const Home5Services: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nama: '',
    kontak: '',
    kategori: 'Informasi PPDB',
    pesan: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nama || !formData.kontak || !formData.pesan) return;
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-12 animate-fade-in text-slate-100">
      {/* PPDB & Layanan Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
            <UserPlus className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Informasi PPDB Terpadu</h3>
          <p className="text-xs text-slate-300 leading-relaxed mb-4">
            Penerimaan Peserta Didik Baru (PPDB) SMP Negeri 6 Jember diselenggarakan sesuai pedoman Dispendik Kabupaten Jember melalui 4 jalur:
          </p>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <strong>Jalur Zonasi:</strong> Kuota utama domisili terdekat
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <strong>Jalur Afirmasi:</strong> Siswa keluarga pra-sejahtera
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <strong>Jalur Prestasi:</strong> Nilai rapor & sertifikat kejuaraan
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <strong>Perpindahan Tugas:</strong> Mutasi orang tua / wali
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Layanan Administrasi Siswa</h3>
          <p className="text-xs text-slate-300 leading-relaxed mb-4">
            Pelayanan cepat dan transparan untuk kebutuhan dokumen siswa aktif maupun alumni:
          </p>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Legalisir Ijazah & Rapor Digital
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Surat Keterangan Aktif Belajar (KIP / Beasiswa)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Layanan Mutasi Masuk / Keluar Siswa
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Konsultasi Akademik Wali Kelas
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
            <HelpCircle className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Saluran Pengaduan & Bantuan</h3>
          <p className="text-xs text-slate-300 leading-relaxed mb-4">
            Komitmen kami untuk mewujudkan sekolah yang bebas perundungan (Anti-Bullying) dan inklusif:
          </p>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Pos Pengaduan Ramah Anak (PPRA)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Kotak Saran & Aspirasi Orang Tua
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Hotline Layanan Konseling Rahasia
            </li>
          </ul>
        </div>
      </div>

      {/* Kontak Langsung & Formulir Hubungi Kami */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Info Lokasi & Kontak */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-5">
            <h3 className="text-xl font-bold text-white">Alamat & Kontak Resmi</h3>
            
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                <div>
                  <strong className="block text-white">Alamat Sekolah:</strong>
                  <span>Jl. Bengawan Solo No. 1, Tegal Boto Kidul, Sumbersari, Kec. Sumbersari, Kabupaten Jember, Jawa Timur 68121</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                <div>
                  <strong className="block text-white">Telepon / WhatsApp:</strong>
                  <span>(0331) 338166 / +62 812-3456-7890</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                <div>
                  <strong className="block text-white">Email Resmi:</strong>
                  <span>smpn6jember.official@gmail.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-purple-400 shrink-0 mt-1" />
                <div>
                  <strong className="block text-white">Jam Layanan Tata Usaha:</strong>
                  <span>Senin - Kamis: 07.30 - 14.30 WIB<br />Jumat: 07.30 - 11.00 WIB</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Interaktif */}
        <div className="lg:col-span-7">
          <div className="p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-2">Kirim Pesan / Permohonan Informasi</h3>
            <p className="text-xs text-slate-400 mb-6">
              Silakan isi formulir di bawah ini. Tim Administrasi SMP Negeri 6 Jember akan segera menghubungi Anda.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-600/50 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Pesan Anda Berhasil Terkirim!</h4>
                <p className="text-sm text-slate-300">
                  Terima kasih <strong>{formData.nama}</strong>. Permohonan Anda mengenai <em>{formData.kategori}</em> telah diterima oleh bagian Tata Usaha SMP Negeri 6 Jember.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ nama: '', kontak: '', kategori: 'Informasi PPDB', pesan: '' });
                  }}
                  className="mt-3 px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                >
                  Kirim Pertanyaan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nama}
                      onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                      placeholder="Contoh: Rahmat Hidayat"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      No. WhatsApp / Email *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.kontak}
                      onChange={(e) => setFormData({ ...formData, kontak: e.target.value })}
                      placeholder="08123xxxxxxx atau email"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Kategori Keperluan
                  </label>
                  <select
                    value={formData.kategori}
                    onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Informasi PPDB">Informasi Pendaftaran Siswa Baru (PPDB)</option>
                    <option value="Administrasi & Surat">Pelayanan Administrasi & Legalisir</option>
                    <option value="Konsultasi BK">Konsultasi BK & Bimbingan Siswa</option>
                    <option value="Aspirasi & Saran">Aspirasi & Masukan untuk Sekolah</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Isi Pesan / Pertanyaan *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.pesan}
                    onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                    placeholder="Tuliskan pertanyaan atau permohonan informasi Anda..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm tracking-wide transition-colors shadow-lg shadow-blue-600/30"
                >
                  <Send className="w-4 h-4" />
                  Kirim Permohonan Layanan
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
