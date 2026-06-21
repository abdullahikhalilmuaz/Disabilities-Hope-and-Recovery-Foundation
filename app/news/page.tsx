"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Calendar,
  Tag,
} from "lucide-react";
import styles from "./page.module.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

/* ─── Types ─────────────────────────────────── */
interface Article {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: string;
  category: string;
  published: boolean;
  createdAt: string;
}

const CATEGORIES = [
  "All",
  "Healthcare",
  "Empowerment",
  "Advocacy",
  "Events",
  "Stories",
];
const PER_PAGE = 6;
const API = process.env.NEXT_PUBLIC_API_URL ?? "https://disabilities-hope-and-recovery.onrender.com";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/* ─── Small side card (Latest News) ─────────── */
function SideCard({ article }: { article: Article }) {
  return (
    <Link href={`/news/${article.slug}`} className={styles.sideCard}>
      <div className={styles.sideImg}>
        <img src={article.featuredImage} alt={article.title} loading="lazy" />
      </div>
      <div className={styles.sideBody}>
        <p className={styles.sideDate}>{formatDate(article.createdAt)}</p>
        <p className={styles.sideTitle}>{article.title}</p>
        <span className={styles.sideReadMore}>Read More →</span>
      </div>
    </Link>
  );
}

/* ─── Grid article card ──────────────────────── */
function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/news/${article.slug}`} className={styles.card}>
      <div className={styles.cardImg}>
        <img src={article.featuredImage} alt={article.title} loading="lazy" />
        <span className={styles.cardBadge}>{article.category}</span>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.cardDate}>
          <Calendar size={13} />
          {formatDate(article.createdAt)}
        </p>
        <h3 className={styles.cardTitle}>{article.title}</h3>
        <p className={styles.cardExcerpt}>{article.excerpt}</p>
        <span className={styles.readMore}>
          Read More <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}

/* ─── Page ───────────────────────────────────── */
export default function NewsPage() {
  const [all, setAll] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`${API}/api/news`)
      .then((r) => r.json())
      .then((j) => {
        if (j.success) setAll(j.data as Article[]);
        else setError("Failed to load articles.");
      })
      .catch(() => setError("Could not reach the server."))
      .finally(() => setLoading(false));
  }, []);

  const published = all.filter((a) => a.published);

  const filtered = published.filter((a) => {
    const matchCat =
      category === "All" || a.category.toLowerCase() === category.toLowerCase();
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  /* featured = first article, latest sidebar = next 3, grid = rest */
  const featured = filtered[0] ?? null;
  const latestSidebar = filtered.slice(1, 4);
  const gridArticles = filtered.slice(1);
  const totalPages = Math.ceil(gridArticles.length / PER_PAGE);
  const paged = gridArticles.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  }, []);

  const handleCategory = (cat: string) => {
    setCategory(cat);
    setPage(1);
  };

  return (
    <main className={styles.page}>
      <Navbar />
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <img
          src="https://picsum.photos/seed/dhrf-news-hero/1400/480"
          alt="DHRF field team working with community"
          className={styles.heroImg}
        />
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>OUR NEWS &amp; STORIES</span>
          <h1 className={styles.heroTitle}>
            Our Work. Their Stories.
            <br />
            Real Impact.
          </h1>
          <p className={styles.heroDesc}>
            Stay updated with our latest activities, events, stories and
            achievements from the field.
          </p>
        </div>
      </section>

      {/* ── Filters bar ── */}
      <section className={styles.filtersBar}>
        <div className={styles.container}>
          <div className={styles.filtersInner}>
            <label className={styles.searchWrap}>
              <Search size={16} className={styles.searchIcon} />
              <input
                className={styles.searchInput}
                type="search"
                placeholder="Search news…"
                value={search}
                onChange={handleSearch}
              />
            </label>

            <label className={styles.filterSelect}>
              <Tag size={14} />
              <select
                value={category}
                onChange={(e) => handleCategory(e.target.value)}
              >
                {CATEGORIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </section>

      {/* ── Featured + Latest sidebar (unified panel) ── */}
      <section className={styles.topSection}>
        <div className={styles.container}>
          {loading && <p className={styles.stateMsg}>Loading articles…</p>}
          {error && (
            <p className={`${styles.stateMsg} ${styles.errMsg}`}>{error}</p>
          )}
          {!loading && !error && filtered.length === 0 && (
            <p className={styles.stateMsg}>No articles match your search.</p>
          )}

          {!loading && !error && featured && (
            <div className={styles.topPanel}>
              {/* ── Left: Featured article ── */}
              <Link
                href={`/news/${featured.slug}`}
                className={styles.featuredCard}
              >
                {/* image */}
                <div className={styles.featuredImg}>
                  <img src={featured.featuredImage} alt={featured.title} />
                </div>

                {/* body below image */}
                <div className={styles.featuredBody}>
                  <div className={styles.featuredMetaRow}>
                    <span className={styles.featuredBadge}>FEATURED</span>
                    <span className={styles.featuredDate}>
                      {formatDate(featured.createdAt)}
                    </span>
                  </div>
                  <h2 className={styles.featuredTitle}>{featured.title}</h2>
                  <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                  <span className={styles.readMore}>
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>

              {/* ── Divider ── */}
              <div className={styles.panelDivider} />

              {/* ── Right: Latest News sidebar ── */}
              {latestSidebar.length > 0 && (
                <aside className={styles.latestSide}>
                  <h3 className={styles.latestTitle}>Latest News</h3>
                  <div className={styles.latestList}>
                    {latestSidebar.map((a) => (
                      <SideCard key={a._id} article={a} />
                    ))}
                  </div>
                </aside>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── Category tabs ── */}
      <section className={styles.tabsSection}>
        <div className={styles.container}>
          <div className={styles.tabs}>
            {CATEGORIES.map((c) => (
              <button
                key={c}
                className={`${styles.tab} ${
                  category === c ? styles.tabActive : ""
                }`}
                onClick={() => handleCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Article grid ── */}
      {!loading && !error && paged.length > 0 && (
        <section className={styles.gridSection}>
          <div className={styles.container}>
            <div className={styles.grid}>
              {paged.map((a) => (
                <ArticleCard key={a._id} article={a} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className={styles.pagination}>
                <button
                  className={styles.pageBtn}
                  disabled={page === 1}
                  onClick={() => setPage((p) => p - 1)}
                >
                  <ChevronLeft size={16} />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (n) => (
                    <button
                      key={n}
                      className={`${styles.pageBtn} ${
                        n === page ? styles.pageBtnActive : ""
                      }`}
                      onClick={() => setPage(n)}
                    >
                      {n}
                    </button>
                  ),
                )}

                {totalPages > 5 && page < totalPages - 1 && (
                  <span className={styles.ellipsis}>…</span>
                )}

                <button
                  className={styles.pageBtn}
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => p + 1)}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>
        </section>
      )}
      <Footer />
    </main>
  );
}
