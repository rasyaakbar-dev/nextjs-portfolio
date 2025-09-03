export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Tentang Saya</h1>
      <div className="space-y-4 text-white">
        <p>
          <span className="font-semibold">Nama:</span> Rasya Akbar Nugraha
        </p>
        <p>
          <span className="font-semibold">Sekolah:</span> SMKN 8 Malang
        </p>
        <p>
          <span className="font-semibold">Jurusan:</span> Rekayasa Perangkat Lunak
        </p>
        <p>
          <span className="font-semibold">Motivasi:</span> Saya adalah murid di sekolah SMKN 8 Malang yang tertarik dengan apapun yang terkait dengan teknologi komputer, dari perangkat keras komputer yang <i>obscure</i> sampai perangkat lunak <i>open source</i>.
        </p>
      </div>
    </div>
  );
}