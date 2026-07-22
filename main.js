/* =====================================================================
   PUSTAKA POTENSI — Universitas Potensi Utama
   js/main.js
   Data buku nyata + logika katalog, peminjaman, riwayat, modal e-book.
   Tidak ada rating/ulasan bintang.
   ===================================================================== */

/* =====================================================================
   DATA BUKU
   ===================================================================== */
const dataBuku = [
  { id:"PD-0001", judul:"Seruan Zarathustra", penulis:"Friedrich Nietzsche", kategori:"Filsafat", isbn:"978-979-9289-86-6", tahun:2010, halaman:246, popular:true,
    deskripsi:"Buku Untuk Semua dan tidak untuk semua. Karya monumental Nietzsche yang menyuarakan gagasan Übermensch dan kehendak untuk berkuasa.",
    cover:"https://drive.google.com/thumbnail?id=1BE65U_l6Zop5ml5l3KZV-MFYtegNls7X&sz=w800",
    linkDrive:"https://drive.google.com/file/d/1qcMuZ-DnMjnAouSXs1CIuyWuwENim7mk/view?usp=drivesdk" },
  { id:"PD-0002", judul:"How To Win Friends & Influence People", penulis:"Dale Carnegie", kategori:"Pengembangan Diri", isbn:"-", tahun:1936, halaman:250, popular:true,
    deskripsi:"Salah satu buku pengembangan diri paling berpengaruh sepanjang masa, mengajarkan seni bergaul dan memengaruhi orang lain secara positif.",
    cover:"https://drive.google.com/thumbnail?id=19EG6eAgbFk6l96Xzz2pg3ZfAbke1lf02&sz=w800",
    linkDrive:"https://drive.google.com/file/d/16bvOkiAYXSPUULm9O0HVZVPLZIloD9rP/view?usp=drivesdk" },
  { id:"PD-0003", judul:"The Trial / Proses", penulis:"Franz Kafka", kategori:"Sastra", isbn:"978-602-03-2895-9", tahun:2016, halaman:260, popular:false,
    deskripsi:"Novel absurd Kafka yang menggambarkan seseorang yang ditangkap dan diadili tanpa tahu tuduhan terhadap dirinya.",
    cover:"https://drive.google.com/thumbnail?id=1d8PsZAjpzn8P5GpeiwySoLBLoedBlxnK&sz=w800",
    linkDrive:"https://drive.google.com/file/d/1oTbm7t2gwzgUdiFCtvrYMzxDz3bb1Tsr/view?usp=drivesdk" },
  { id:"PD-0004", judul:"Rehat Dulu", penulis:"Syahid Muhammad", kategori:"Pengembangan Diri", isbn:"978-979-27-1766-2", tahun:2020, halaman:216, popular:true,
    deskripsi:"Buku yang mengajak pembaca untuk berhenti sejenak, mengevaluasi hidup, dan mengisi ulang energi sebelum melanjutkan perjalanan.",
    cover:"https://drive.google.com/thumbnail?id=1vntG3a1o0Z--vFtIaKXk25FeUNsA9-71&sz=w800",
    linkDrive:"https://drive.google.com/file/d/1_e4FqZX8wFOKrM6eVk4eGptS4s3ZlWCP/view?usp=drivesdk" },
  { id:"PD-0005", judul:"Super Memory — Brain Fitness", penulis:"-", kategori:"Sains", isbn:"978-602-0823-19-5", tahun:2016, halaman:166, popular:false,
    deskripsi:"Panduan ilmiah untuk melatih dan meningkatkan kemampuan memori otak melalui teknik-teknik brain fitness yang teruji.",
    cover:"https://drive.google.com/thumbnail?id=1pobFPWKh1OjY82DIw0RpLaPjbSIU7M7Y&sz=w800",
    linkDrive:"https://drive.google.com/file/d/1wTeTl1UFex3VXMsB6ByF4IPS0Xbf6yrR/view?usp=drivesdk" },
  { id:"PD-0006", judul:"Agama Dan Nusantara", penulis:"-", kategori:"Agama & Budaya", isbn:"978-602-6418-38-8", tahun:2019, halaman:306, popular:false,
    deskripsi:"Mengkaji relasi antara agama dan kebudayaan Nusantara dalam perspektif sejarah dan sosial.",
    cover:"https://drive.google.com/thumbnail?id=16ATDglx6e4ahkrbE3aYzCKTpGh6gcagw&sz=w800",
    linkDrive:"https://drive.google.com/file/d/1md-MsBaQezB6vL0F_-22NTnPH38pt0dG/view?usp=drivesdk" },
  { id:"PD-0007", judul:"Ajaib, Istimewa, Kacau", penulis:"Andre Moller", kategori:"Agama & Budaya", isbn:"978-623-241-021-3", tahun:2019, halaman:177, popular:false,
    deskripsi:"Esai-esai yang memandang keunikan dan kekacauan kehidupan beragama di Indonesia dari sudut pandang yang segar.",
    cover:"https://drive.google.com/thumbnail?id=1Dh3hpG9lkSftod8msLYFCAVgc2_fjTKO&sz=w800",
    linkDrive:"https://drive.google.com/file/d/1fNkR3sVlTlJzvlfhgUffk8KvYF2xPf4B/view?usp=drivesdk" },
  { id:"PD-0008", judul:"Aku Tahu, Sadar & Berdaya", penulis:"-", kategori:"Pengembangan Diri", isbn:"978-623-90222-6-6", tahun:2020, halaman:281, popular:false,
    deskripsi:"Buku yang membimbing pembaca menuju kesadaran diri, pengetahuan yang lebih dalam, dan keberdayaan sebagai individu.",
    cover:"https://drive.google.com/thumbnail?id=11X4Ju5z8M_qAcDccvxqtsemvhwQYnLnP&sz=w800",
    linkDrive:"https://drive.google.com/file/d/1r9NieAKprppjWVadWlNgK3horuMqpJ5_/view?usp=drivesdk" },
  { id:"PD-0009", judul:"Orang Asing", penulis:"Albert Camus", kategori:"Sastra", isbn:"978-979-461-862-2", tahun:2013, halaman:134, popular:true,
    deskripsi:"Novel eksistensialis ikonik Camus tentang Meursault, seorang pria yang tidak mampu merasakan emosi seperti orang pada umumnya.",
    cover:"https://drive.google.com/thumbnail?id=13c6VdBwPk-P6tCDxxzXVM4sBnxrP3DkZ&sz=w800",
    linkDrive:"https://drive.google.com/file/d/1t0VpPhUpZNyg40YczWr4Ds6QLEAeC7DO/view?usp=drivesdk" },
  { id:"PD-0010", judul:"Orang-Orang Yang Terbungkam", penulis:"Albert Camus", kategori:"Sastra", isbn:"978-95978-35-X", tahun:1956, halaman:212, popular:false,
    deskripsi:"Kumpulan cerita pendek Camus yang mengeksplorasi tema keheningan, ketidakberdayaan, dan perlawanan diam dalam kehidupan sehari-hari.",
    cover:"https://drive.google.com/thumbnail?id=1VFb13LEM171f-46aXZ01PQ6oN37v52GP&sz=w800",
    linkDrive:"https://drive.google.com/file/d/14Te7Uvbh_WD-5j5xRBAvg_PDXBjCYVLz/view?usp=drivesdk" },
  { id:"PD-0011", judul:"Aliran Dan Paradigma Pemikiran Pendidikan Agama Islam Kontemporer", penulis:"Dr. Hj. Evi Fatimatur Rusydiyah, M.Ag.", kategori:"Agama & Budaya", isbn:"978-602-332-116-2", tahun:2019, halaman:228, popular:false,
    deskripsi:"Mengulas berbagai aliran dan paradigma dalam pemikiran Pendidikan Agama Islam di era kontemporer secara akademis.",
    cover:"https://drive.google.com/thumbnail?id=1Y_w3n3d--z8WGpoLek8_FvaiqNZSuJ4K&sz=w800",
    linkDrive:"https://drive.google.com/file/d/1DzpnHZxPVHjBPZ8DtTDiKBQN62Jmbj4v/view?usp=drivesdk" },
  { id:"PD-0012", judul:"Anak Muda Miliarder Saham", penulis:"Andika Sutoro Putra", kategori:"Ekonomi", isbn:"978-602-04-5704-8", tahun:2018, halaman:145, popular:true,
    deskripsi:"Panduan investasi saham praktis yang ditulis oleh investor muda, cocok untuk pemula yang ingin memulai perjalanan finansial.",
    cover:"https://drive.google.com/thumbnail?id=1GBm-_uBTGOEbw60HZAU13Yqz1WDQWxuV&sz=w800",
    linkDrive:"https://drive.google.com/file/d/1sDfAKVljq1Su0mFQigQnvIjF7rhxkszQ/view?usp=drivesdk" },
  { id:"PD-0013", judul:"Atomic Habits", penulis:"James Clear", kategori:"Pengembangan Diri", isbn:"978-602-06-3318-3", tahun:2018, halaman:356, popular:true,
    deskripsi:"Panduan perubahan kebiasaan berbasis sains: cara membangun kebiasaan baik dan menghilangkan kebiasaan buruk secara bertahap.",
    cover:"https://drive.google.com/thumbnail?id=1OEh_CdeBUZXIemldH6DAhyOFcOfMTvEv&sz=w800",
    linkDrive:"https://drive.google.com/file/d/1DfMVKLT0nPLVO_3VbmVihLRhDomAUDc0/view?usp=drivesdk" },
  { id:"PD-0014", judul:"Baca Buku Ini Saat Engkau Gagal", penulis:"Kinanti Linda R.", kategori:"Pengembangan Diri", isbn:"978-623-244-342-6", tahun:2020, halaman:225, popular:false,
    deskripsi:"Sesungguhnya berpura-pura sukses itu melelahkan. Buku motivasi untuk bangkit dari kegagalan dan menemukan makna di baliknya.",
    cover:"https://drive.google.com/thumbnail?id=1kxNcSaDY5YUk0pbX391B9KtoaGiUqfO4&sz=w800",
    linkDrive:"https://drive.google.com/file/d/102Fs2j7Je1bm0ikW4hHULfEeI4G60xtJ/view?usp=drivesdk" },
  { id:"PD-0015", judul:"Baca Buku Ini Saat Engkau Ingin Berubah", penulis:"Rahma Kusharjanti", kategori:"Pengembangan Diri", isbn:"978-623-244-337-2", tahun:2020, halaman:265, popular:false,
    deskripsi:"Karena terjebak dalam kebiasaan buruk dapat menghancurkanmu pelan-pelan. Panduan transformasi diri yang penuh empati.",
    cover:"https://drive.google.com/thumbnail?id=1txD7JahWPz_hY3_aXzeYG-9vNdnssh48&sz=w800",
    linkDrive:"https://drive.google.com/file/d/1LMH1s5QgizBFQR5T6rrJZzQAZiKiCAX_/view?usp=drivesdk" },
  { id:"PD-0016", judul:"Logika (Ilmu Mantiq)", penulis:"DRS. H. A. Basiq Djalil, S.H., M.A.", kategori:"Filsafat", isbn:"979-3465-08-5", tahun:2009, halaman:119, popular:false,
    deskripsi:"Pengantar ilmu logika klasik (mantiq) yang membahas dasar-dasar penalaran valid dalam tradisi filsafat Islam.",
    cover:"https://drive.google.com/thumbnail?id=1DVkKiCa6muVlmTaV0pcTMgRYC3l5ilcr&sz=w800",
    linkDrive:"https://drive.google.com/file/d/1hjgsoGrikZ9cH7FWfv600gbnlcd2kbR-/view?usp=drivesdk" },
  { id:"PD-0017", judul:"Belajar Cara Belajar — Keahlian Penting Manusia Modern", penulis:"Fikri, Syarif Rousyan, Mohammad Ikhsan & Aditya Banuaji", kategori:"Sains", isbn:"978-602-481-367-3", tahun:2020, halaman:172, popular:false,
    deskripsi:"Mengupas strategi dan teknik belajar efektif berdasarkan riset ilmu kognitif untuk menghadapi tantangan era modern.",
    cover:"https://drive.google.com/thumbnail?id=1hW0pd1e63wsnto_c_d9PrwyCfhspKSCQ&sz=w800",
    linkDrive:"https://drive.google.com/file/d/1q0h8NY84ZQKFA65c6jYpTAfgYEuLcNsK/view?usp=drivesdk" },
  { id:"PD-0018", judul:"Ebook Belajar HTML & CSS Dasar", penulis:"Diki Alfarabi Hadi", kategori:"Teknologi", isbn:"-", tahun:null, halaman:null, popular:true,
    deskripsi:"Panduan praktis belajar HTML dan CSS dari nol untuk pemula yang ingin memulai perjalanan di dunia pengembangan web.",
    cover:"https://drive.google.com/thumbnail?id=1vH1P79xpnV7cZgmqZsNmBUcNIhSAYpqs&sz=w800",
    linkDrive:"https://drive.google.com/file/d/14twh2GMnJHavJbKgQHn4n5fBX5-lbvWb/view?usp=drivesdk" },
  { id:"PD-0019", judul:"Berani Tidak Disukai", penulis:"Ichiro Kishimi & Fumitake Koga", kategori:"Filsafat", isbn:"978-602-06-3322-0", tahun:2017, halaman:350, popular:true,
    deskripsi:"Fenomena dari Jepang untuk membebaskan diri, mengubah hidup, dan meraih kebahagiaan sejati berdasarkan psikologi Adler.",
    cover:"https://drive.google.com/thumbnail?id=19rBOQinoAVswRuSizwSFljcGb2oa1YwB&sz=w800",
    linkDrive:"https://drive.google.com/file/d/1rq9klYYCpaywR9Ai3dqowcLo-qxEByyb/view?usp=drivesdk" },
  { id:"PD-0020", judul:"Berdamai Dengan Diri Sendiri", penulis:"Muthia Sayekti", kategori:"Pengembangan Diri", isbn:"978-623-244-334-1", tahun:2017, halaman:225, popular:false,
    deskripsi:"Perjalanan menuju penerimaan dan kedamaian batin melalui refleksi mendalam tentang hubungan kita dengan diri sendiri.",
    cover:"https://drive.google.com/thumbnail?id=1earE9ZM5cxrithaIV-m_qnT_ERZPDzEq&sz=w800",
    linkDrive:"https://drive.google.com/file/d/1Hee0-iszG9snRo3qg9vpF29XEwH4jR_T/view?usp=drivesdk" },
  { id:"PD-0021", judul:"Bermain Kata Beribadah — Puisi Joko Pinurbo", penulis:"Joko Pinurbo", kategori:"Sastra", isbn:"978-602-391-805-8", tahun:2019, halaman:265, popular:false,
    deskripsi:"Kumpulan puisi Joko Pinurbo yang memadukan kelucuan, spiritualitas, dan kepedihan dalam bahasa yang mengalir indah.",
    cover:"https://drive.google.com/thumbnail?id=14kLQ7WFv5jzgahzmhLXsqAkvUSrXx_aY&sz=w800",
    linkDrive:"https://drive.google.com/file/d/1vTDOVo7-3kvT8kxmUUqnYZcdQ9JOxDqf/view?usp=drivesdk" },
  { id:"PD-0022", judul:"Berpikir & Berjiwa Besar", penulis:"David J. Schwartz, Ph.D.", kategori:"Pengembangan Diri", isbn:"979-3253-09-6", tahun:2006, halaman:321, popular:true,
    deskripsi:"Klasik motivasi yang mengajarkan bahwa besarnya kesuksesan seseorang ditentukan oleh besarnya cara ia berpikir.",
    cover:"https://drive.google.com/thumbnail?id=1WRXQdh4YkJQiOSbvTMnMGAJFMR9806mU&sz=w800",
    linkDrive:"https://drive.google.com/file/d/1WeUrA3WYEZTQuWWin_EzaXmdkc3CGKY2/view?usp=drivesdk" },
  { id:"PD-0023", judul:"A History Of Western Philosophy", penulis:"Bertrand Russell", kategori:"Filsafat", isbn:"978-1-4165-9915-9", tahun:1945, halaman:1211, popular:true,
    deskripsi:"Karya monumental Russell yang menelusuri sejarah filsafat Barat dari zaman Yunani Kuno hingga abad ke-20 secara komprehensif.",
    cover:"https://drive.google.com/thumbnail?id=1PSZK_uM7ciuZBUaDptg6V_n-hUkKJu6a&sz=w800",
    linkDrive:"https://drive.google.com/file/d/1WOSiwyS4kV8lbYwSMg8TKL9CHZSWugin/view?usp=drivesdk" },
  { id:"PD-0024", judul:"Better Me — Seni Untuk Menjadi Versi Terbaik Diri Sendiri", penulis:"Anna Silvia", kategori:"Pengembangan Diri", isbn:"978-623-00-2925-7", tahun:2021, halaman:314, popular:false,
    deskripsi:"Panduan reflektif dan praktis untuk menemukan potensi terbaik diri dan membangun versi diri yang lebih baik setiap harinya.",
    cover:"https://drive.google.com/thumbnail?id=1bvX_WBN6dZ_yyEfxtRi9QXMyR-7GWvL7&sz=w800",
    linkDrive:"https://drive.google.com/file/d/14j-kb-q7UMDQNs7aFvWqC7ylAFE26LNk/view?usp=drivesdk" },
  { id:"PD-0025", judul:"Beyond Good And Evil", penulis:"Friedrich Nietzsche", kategori:"Filsafat", isbn:"978-623-400-854-8", tahun:2023, halaman:305, popular:true,
    deskripsi:"Nietzsche menantang moralitas konvensional dan mengajukan visi baru tentang nilai-nilai di luar dikotomi baik dan jahat.",
    cover:"https://drive.google.com/thumbnail?id=1GMzHhDGKVtMbsHFhbn9brqbpfhvgFrVp&sz=w800",
    linkDrive:"https://drive.google.com/file/d/1cndg-NTfW08JtvxjNifUFFTDOA6SGh6v/view?usp=drivesdk" },
  { id:"PD-0026", judul:"Kemiskinan Filsafat", penulis:"Karl Marx", kategori:"Filsafat", isbn:"978-623-400-854-8", tahun:2007, halaman:224, popular:false,
    deskripsi:"Respons kritis Marx terhadap Proudhon, mengupas hubungan antara ekonomi politik dan filsafat dari perspektif materialisme dialektis.",
    cover:"https://drive.google.com/thumbnail?id=1tAsmzSIRHiBz6PdL73vAeLIL-Jiooz95&sz=w800",
    linkDrive:"https://drive.google.com/file/d/1Jd6WHdaknrcGiCHMuhgDyB6sNgFR44vI/view?usp=drivesdk" },
];

const KATEGORI_LIST = ["Filsafat","Sastra","Pengembangan Diri","Sains","Ekonomi","Teknologi","Agama & Budaya"];

/* =====================================================================
   STATE & LOCALSTORAGE
   ===================================================================== */
const STORAGE_KEY = "pustakaPotensi_state_v1";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { dipinjam: {}, riwayat: [] };
    const parsed = JSON.parse(raw);
    return { dipinjam: parsed.dipinjam || {}, riwayat: parsed.riwayat || [] };
  } catch (e) {
    return { dipinjam: {}, riwayat: [] };
  }
}
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState();
let halamanAktif = 1;
const ITEM_PER_HALAMAN = 9;
let kategoriAktif = "Semua";
let hanyaTersedia = false;
let kataKunci = "";

/* =====================================================================
   UTIL
   ===================================================================== */
function cariBuku(id) { return dataBuku.find(b => b.id === id); }

function tampilkanToast(pesan) {
  const body = document.querySelector("#peminjamanToast .toast-body");
  if (body) body.innerHTML = '<i class="bi bi-check-circle-fill text-success me-2"></i>' + pesan;
  const toastEl = document.getElementById("peminjamanToast");
  if (toastEl) bootstrap.Toast.getOrCreateInstance(toastEl).show();
}

function formatTanggal(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

function sisaHari(tenggatIso) {
  const sekarang = new Date();
  const tenggat = new Date(tenggatIso);
  const diffMs = tenggat.setHours(0,0,0,0) - sekarang.setHours(0,0,0,0);
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

function coverStyle(b) {
  return `background-image:linear-gradient(180deg, rgba(23,42,71,.15), rgba(23,42,71,.85)), url('${b.cover}'); background-size:cover; background-position:center;`;
}

/* =====================================================================
   RENDER: RAK BUKU POPULER (Beranda)
   ===================================================================== */
function renderRakPopuler() {
  const shelf = document.getElementById("rakPopuler");
  if (!shelf) return;
  const populer = dataBuku.filter(b => b.popular).slice(0, 8);
  shelf.innerHTML = populer.map(b => `
    <div class="spine" role="button" tabindex="0" onclick="bukaDetailBuku('${b.id}')" onkeypress="if(event.key==='Enter') bukaDetailBuku('${b.id}')">
      <div class="spine-cover" style="${coverStyle(b)}">${b.judul}</div>
    </div>`).join("");
}

/* =====================================================================
   RENDER: KATALOG BUKU
   ===================================================================== */
function renderKategoriPills() {
  const wrap = document.getElementById("katalogPills");
  if (!wrap) return;
  const kategoris = ["Semua", ...KATEGORI_LIST];
  wrap.innerHTML = kategoris.map(k => `
    <li class="nav-item">
      <button class="nav-link ${k === kategoriAktif ? 'active btn-brand-blue' : ''}"
        style="${k === kategoriAktif ? 'border:none;' : 'color:var(--blue);'}"
        onclick="setKategori('${k.replace(/'/g, "\\'")}')">${k}</button>
    </li>`).join("");
}

function renderKategoriSidebar() {
  [document.getElementById("filterKategoriSidebar"), document.getElementById("filterKategoriOffcanvas")].forEach(wrap => {
    if (!wrap) return;
    const items = ["Semua", ...KATEGORI_LIST];
    wrap.innerHTML = items.map(k => `
      <label class="list-group-item d-flex align-items-center gap-2" role="button">
        <input class="form-check-input m-0" type="radio" name="katsel-${wrap.id}" ${k === kategoriAktif ? 'checked' : ''} onchange="setKategori('${k.replace(/'/g, "\\'")}')">
        ${k === "Semua" ? "Semua Kategori" : k}
      </label>`).join("");
  });
}

function setKategori(k) {
  kategoriAktif = k;
  halamanAktif = 1;
  renderKategoriPills();
  renderKategoriSidebar();
  renderKatalog();
}

function renderKatalog() {
  let hasil = dataBuku.filter(b => {
    const cocokTeks = !kataKunci ||
      b.judul.toLowerCase().includes(kataKunci) ||
      b.penulis.toLowerCase().includes(kataKunci) ||
      b.isbn.toLowerCase().includes(kataKunci);
    const cocokKategori = kategoriAktif === "Semua" || b.kategori === kategoriAktif;
    const sedangDipinjam = !!state.dipinjam[b.id];
    const cocokStatus = !hanyaTersedia || !sedangDipinjam;
    return cocokTeks && cocokKategori && cocokStatus;
  });

  const totalHalaman = Math.max(1, Math.ceil(hasil.length / ITEM_PER_HALAMAN));
  if (halamanAktif > totalHalaman) halamanAktif = totalHalaman;
  const mulai = (halamanAktif - 1) * ITEM_PER_HALAMAN;
  const potongan = hasil.slice(mulai, mulai + ITEM_PER_HALAMAN);

  const grid = document.getElementById("gridKatalog");
  const empty = document.getElementById("katalogEmpty");
  const countLabel = document.getElementById("katalogCount");
  if (!grid) return;

  if (countLabel) countLabel.textContent = `${hasil.length} judul ditemukan`;

  if (hasil.length === 0) {
    grid.innerHTML = "";
    if (empty) empty.classList.remove("d-none");
  } else {
    if (empty) empty.classList.add("d-none");
    grid.innerHTML = potongan.map(b => {
      const dipinjam = !!state.dipinjam[b.id];
      return `
      <div class="col-6 col-md-4">
        <div class="book-card h-100 d-flex flex-column">
          <div class="ribbon"></div>
          <div class="book-cover-sm" role="button" tabindex="0" style="${coverStyle(b)}"
            onclick="bukaDetailBuku('${b.id}')" onkeypress="if(event.key==='Enter') bukaDetailBuku('${b.id}')"></div>
          <div class="p-3 d-flex flex-column flex-grow-1">
            <span class="badge bg-brand-paper-soft text-brand-blue border mb-2 align-self-start">${b.kategori}</span>
            <h6 class="mb-1">${b.judul}</h6>
            <p class="small text-ink-soft mb-2">${b.penulis}</p>
            <div class="mt-auto d-flex justify-content-between align-items-center">
              <span class="small ${dipinjam ? 'text-brand-red' : 'text-success'}">${dipinjam ? 'Dipinjam' : 'Tersedia'}</span>
              <button class="btn btn-sm btn-outline-brand-blue" onclick="bukaDetailBuku('${b.id}')">Lihat</button>
            </div>
          </div>
        </div>
      </div>`;
    }).join("");
  }
  renderPaginasi(totalHalaman);
}

function renderPaginasi(totalHalaman) {
  const ul = document.getElementById("paginasiKatalog");
  if (!ul) return;
  let html = `<li class="page-item ${halamanAktif === 1 ? 'disabled' : ''}">
    <a class="page-link text-brand-blue" href="#katalog" onclick="gantiHalaman(${halamanAktif - 1})">Sebelumnya</a></li>`;
  for (let i = 1; i <= totalHalaman; i++) {
    html += `<li class="page-item ${i === halamanAktif ? 'active' : ''}">
      <a class="page-link ${i === halamanAktif ? 'btn-brand-blue' : 'text-brand-blue'}" style="${i===halamanAktif?'border-color:var(--blue);':''}" href="#katalog" onclick="gantiHalaman(${i})">${i}</a></li>`;
  }
  html += `<li class="page-item ${halamanAktif === totalHalaman ? 'disabled' : ''}">
    <a class="page-link text-brand-blue" href="#katalog" onclick="gantiHalaman(${halamanAktif + 1})">Selanjutnya</a></li>`;
  ul.innerHTML = html;
}

function gantiHalaman(h) {
  if (h < 1) return;
  halamanAktif = h;
  renderKatalog();
}

/* =====================================================================
   MODAL DETAIL BUKU
   ===================================================================== */
let bukuAktifId = null;

function bukaDetailBuku(id) {
  const b = cariBuku(id);
  if (!b) return;
  bukuAktifId = id;
  const dipinjam = !!state.dipinjam[id];

  const set = (elId, val) => { const el = document.getElementById(elId); if (el) el.textContent = val; };
  set("modalKategori", b.kategori);
  set("modalJudul", b.judul);
  set("modalPenulis", b.penulis);
  set("modalIsbn", "ISBN: " + b.isbn);
  set("modalDeskripsi", b.deskripsi);
  set("modalHalaman", b.halaman ? (b.halaman + " Halaman") : "Halaman tidak tercatat");
  set("modalTahun", b.tahun ? ("Terbit " + b.tahun) : "Tahun tidak tercatat");

  const cover = document.getElementById("modalCover");
  if (cover) cover.style.cssText = coverStyle(b) + "min-height:380px;border-radius:var(--radius);display:flex;align-items:flex-end;padding:1.5rem;";

  const statusBadge = document.getElementById("modalStatusBadge");
  const btnPinjam = document.getElementById("btnPinjamModal");
  const btnAkses = document.getElementById("btnAksesEbook");
  const btnKembalikan = document.getElementById("btnKembalikanModal");
  const alertDipinjam = document.getElementById("modalAlertDipinjam");

  if (dipinjam) {
    if (statusBadge) { statusBadge.textContent = "Dipinjam"; statusBadge.className = "badge bg-brand-blue status-pill"; }
    btnPinjam?.classList.add("d-none");
    btnAkses?.classList.remove("d-none");
    if (btnAkses) btnAkses.href = b.linkDrive;
    btnKembalikan?.classList.remove("d-none");
    alertDipinjam?.classList.remove("d-none");
  } else {
    if (statusBadge) { statusBadge.textContent = "Tersedia"; statusBadge.className = "badge bg-success status-pill"; }
    btnPinjam?.classList.remove("d-none");
    btnAkses?.classList.add("d-none");
    btnKembalikan?.classList.add("d-none");
    alertDipinjam?.classList.add("d-none");
  }

  bootstrap.Modal.getOrCreateInstance(document.getElementById("modalDetailBuku")).show();
}

/* =====================================================================
   AKSI PINJAM / KEMBALIKAN
   ===================================================================== */
function pinjamBuku(id) {
  const b = cariBuku(id);
  if (!b) return;
  const sekarang = new Date();
  const tenggat = new Date();
  tenggat.setDate(tenggat.getDate() + 7);
  state.dipinjam[id] = {
    tanggalPinjam: sekarang.toISOString(),
    tenggat: tenggat.toISOString()
  };
  saveState();
  renderSemua();
  tampilkanToast(`"${b.judul}" berhasil dipinjam. Tenggat: ${formatTanggal(tenggat)}.`);
}

function kembalikanBuku(id) {
  const b = cariBuku(id);
  if (!b) return;
  const info = state.dipinjam[id];
  if (info) {
    state.riwayat.unshift({
      id, judul: b.judul, penulis: b.penulis,
      tanggalPinjam: info.tanggalPinjam,
      tanggalKembali: new Date().toISOString(),
      status: "Selesai"
    });
  }
  delete state.dipinjam[id];
  saveState();
  renderSemua();
  tampilkanToast(`"${b.judul}" telah dikembalikan dan dipindahkan ke Riwayat.`);
}

function hapusRiwayat(index) {
  state.riwayat.splice(index, 1);
  saveState();
  renderRiwayat();
}

/* =====================================================================
   RENDER: PEMINJAMAN
   ===================================================================== */
function renderPeminjaman() {
  const idDipinjam = Object.keys(state.dipinjam);
  const list = document.getElementById("listPeminjamanAktif");
  const empty = document.getElementById("peminjamanEmpty");
  const countBadge = document.getElementById("peminjamanCount");
  if (!list) return;

  if (countBadge) countBadge.textContent = idDipinjam.length;

  if (idDipinjam.length === 0) {
    list.innerHTML = "";
    if (empty) empty.classList.remove("d-none");
    return;
  }
  if (empty) empty.classList.add("d-none");

  list.innerHTML = idDipinjam.map(id => {
    const b = cariBuku(id);
    if (!b) return "";
    const info = state.dipinjam[id];
    const sisa = sisaHari(info.tenggat);
    const labelSisa = sisa < 0 ? `Terlambat ${Math.abs(sisa)} hari` : (sisa === 0 ? "Jatuh tempo hari ini" : `${sisa} hari lagi`);
    const warnaSisa = sisa < 0 ? "text-brand-red" : (sisa <= 2 ? "text-warning" : "text-ink-soft");
    return `
    <div class="card border-0 shadow-sm mb-3">
      <div class="card-body d-flex flex-wrap justify-content-between align-items-center gap-3">
        <div class="d-flex align-items-center gap-3">
          <div style="width:56px;height:72px;border-radius:6px;${coverStyle(b)}background-size:cover;flex-shrink:0;"></div>
          <div>
            <h6 class="mb-1">${b.judul}</h6>
            <p class="small text-ink-soft mb-0">Dipinjam: ${formatTanggal(info.tanggalPinjam)}</p>
            <p class="small ${warnaSisa} mb-0">Tenggat: ${formatTanggal(info.tenggat)} (${labelSisa})</p>
          </div>
        </div>
        <div class="d-flex gap-2">
          <a href="${b.linkDrive}" target="_blank" rel="noopener" class="btn btn-sm btn-outline-brand-blue">
            <i class="bi bi-cloud-arrow-down me-1"></i>Akses E-book
          </a>
          <button class="btn btn-sm btn-brand-red" onclick="kembalikanBuku('${id}')">
            <i class="bi bi-arrow-counterclockwise me-1"></i>Kembalikan
          </button>
        </div>
      </div>
    </div>`;
  }).join("");
}

/* =====================================================================
   RENDER: RIWAYAT
   ===================================================================== */
function renderRiwayat() {
  const empty = document.getElementById("riwayatEmpty");
  const wrap = document.getElementById("riwayatTableWrap");
  const body = document.getElementById("riwayatBody");
  if (!body) return;

  if (state.riwayat.length === 0) {
    body.innerHTML = "";
    empty?.classList.remove("d-none");
    wrap?.classList.add("d-none");
    return;
  }
  empty?.classList.add("d-none");
  wrap?.classList.remove("d-none");

  body.innerHTML = state.riwayat.map((r, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${r.judul}</td>
      <td>Mahasiswa</td>
      <td>${formatTanggal(r.tanggalPinjam)}</td>
      <td>${formatTanggal(r.tanggalKembali)}</td>
      <td><span class="badge bg-success status-pill">${r.status}</span></td>
      <td class="text-end"><button class="btn btn-sm btn-outline-danger" onclick="hapusRiwayat(${i})"><i class="bi bi-trash"></i></button></td>
    </tr>`).join("");
}

/* =====================================================================
   RENDER SEMUA
   ===================================================================== */
function renderSemua() {
  renderRakPopuler();
  renderKategoriPills();
  renderKategoriSidebar();
  renderKatalog();
  renderPeminjaman();
  renderRiwayat();
}

/* =====================================================================
   EVENT LISTENERS
   ===================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // Search (desktop sidebar + mobile offcanvas)
  ["searchSidebar", "searchOffcanvas", "searchHero"].forEach(inputId => {
    document.getElementById(inputId)?.addEventListener("input", (e) => {
      kataKunci = e.target.value.trim().toLowerCase();
      halamanAktif = 1;
      renderKatalog();
      if (inputId === "searchHero") document.getElementById("katalog")?.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Availability switch
  document.getElementById("onlyAvailable")?.addEventListener("change", (e) => {
    hanyaTersedia = e.target.checked;
    halamanAktif = 1;
    renderKatalog();
  });

  // Modal — pinjam & kembalikan
  document.getElementById("btnPinjamModal")?.addEventListener("click", () => {
    if (bukuAktifId) pinjamBuku(bukuAktifId);
    bukaDetailBuku(bukuAktifId);
  });
  document.getElementById("btnKembalikanModal")?.addEventListener("click", () => {
    if (bukuAktifId) kembalikanBuku(bukuAktifId);
    bootstrap.Modal.getOrCreateInstance(document.getElementById("modalDetailBuku")).hide();
  });

  // Contact form
  const formKontak = document.getElementById("formKontak");
  formKontak?.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!formKontak.checkValidity()) {
      formKontak.classList.add("was-validated");
      return;
    }
    formKontak.reset();
    formKontak.classList.remove("was-validated");
    tampilkanToast("Pesanmu berhasil terkirim. Tim pustakawan akan segera merespons.");
  });

  renderSemua();
});
