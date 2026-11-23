
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="main">
      <div className="container" style={{ textAlign: "center", paddingTop: 100 }}>
        <h1 style={{ fontSize: 48, color: "#ffd1e7" }}>
          404
        </h1>
        <h2 style={{ margin: "20px 0" }}>
          Səhifə tapılmadı ❤️
        </h2>
        <p style={{ marginBottom: 25 }}>
          Axtardığın səhifə mövcud deyil.
        </p>
        <Link href="/" className="spin-button">
          Ana səhifəyə qayıt
        </Link>
      </div>
    </main>
  );
}
