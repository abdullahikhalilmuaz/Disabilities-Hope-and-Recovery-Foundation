"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  Calendar,
  User,
  Tag,
  ChevronRight,
  ArrowLeft,
  Clock,
  Share2,
  Link2,
} from "lucide-react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import styles from "./page.module.css";

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

const API =
  process.env.NEXT_PUBLIC_API_URL ??
  "https://disabilities-hope-and-recovery.onrender.com";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function readTime(content: string) {
  const words = content.replace(/<[^>]+>/g, "").split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

function copyLink() {
  navigator.clipboard
    .writeText(window.location.href)
    .then(() => alert("Link copied!"));
}

export default function ArticlePage() {
  const params = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [related, setRelated] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!params?.slug) return;

    fetch(`${API}/api/news/${params.slug}`)
      .then((r) => r.json())
      .then((j) => {
        if (j.success) {
          setArticle(j.data);
          // fetch all for related
          return fetch(`${API}/api/news`);
        }
        throw new Error(j.message ?? "Not found");
      })
      .then((r) => r?.json())
      .then((j) => {
        if (j?.success && article) {
          const others = (j.data as Article[]).filter(
            (a) => a.slug !== params.slug && a.published,
          );
          setRelated(others.slice(0, 3));
        }
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.slug]);

  /* second pass to load related once article is set */
  useEffect(() => {
    if (!article) return;
    fetch(`${API}/api/news`)
      .then((r) => r.json())
      .then((j) => {
        if (j.success) {
          const others = (j.data as Article[]).filter(
            (a) => a.slug !== article.slug && a.published,
          );
          setRelated(others.slice(0, 3));
        }
      });
  }, [article]);

  if (loading)
    return (
      <div className={styles.statePage}>
        <p>Loading article…</p>
      </div>
    );

  if (error || !article)
    return (
      <div className={styles.statePage}>
        <p className={styles.errMsg}>{error || "Article not found."}</p>
        <Link href="/news" className={styles.backLink}>
          ← Back to News
        </Link>
      </div>
    );

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <main className={styles.page}>
      {/* ── Breadcrumb ── */}
      <nav className={styles.breadcrumb}>
        <div className={styles.container}>
          <Link href="/" className={styles.bcLink}>
            Home
          </Link>
          <ChevronRight size={13} className={styles.bcSep} />
          <Link href="/news" className={styles.bcLink}>
            News &amp; Stories
          </Link>
          <ChevronRight size={13} className={styles.bcSep} />
          <span className={styles.bcCurrent}>{article.title}</span>
        </div>
      </nav>

      {/* ── Hero image ── */}
      <div className={styles.heroBanner}>
        <img
          src={article.featuredImage}
          alt={article.title}
          className={styles.heroImg}
        />
        <div className={styles.heroOverlay} />
      </div>

      {/* ── Content area ── */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.layout}>
            {/* ── Article ── */}
            <article className={styles.article}>
              {/* meta */}
              <span className={styles.categoryBadge}>{article.category}</span>
              <h1 className={styles.articleTitle}>{article.title}</h1>
              <div className={styles.metaRow}>
                <span>
                  <Calendar size={14} /> {formatDate(article.createdAt)}
                </span>
                <span>
                  <User size={14} /> {article.author}
                </span>
                <span>
                  <Clock size={14} /> {readTime(article.content)}
                </span>
              </div>

              <p className={styles.excerpt}>{article.excerpt}</p>

              {/* content — if your backend stores HTML use dangerouslySetInnerHTML;
                  if plain text, render as paragraphs */}
              <div
                className={styles.body}
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* share */}
              <div className={styles.shareRow}>
                <span className={styles.shareLabel}>
                  <Share2 size={14} /> Share this story
                </span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.shareBtn}
                  aria-label="Share on Facebook"
                >
                  <FaFacebook size={16} />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.shareBtn}
                  aria-label="Share on Twitter"
                >
                  <FaTwitter size={16} />
                </a>
                <button
                  onClick={copyLink}
                  className={styles.shareBtn}
                  aria-label="Copy link"
                >
                  <Link2 size={16} />
                </button>
              </div>

              <Link href="/news" className={styles.backLink}>
                <ArrowLeft size={16} /> Back to News
              </Link>
            </article>

            {/* ── Sidebar ── */}
            <aside className={styles.sidebar}>
              <div className={styles.sideBox}>
                <h3 className={styles.sideBoxTitle}>Need Support?</h3>
                <p className={styles.sideBoxText}>
                  If you or someone you know needs help, DHRF is here for you.
                </p>
                <Link href="/get-help" className={styles.sideBtn}>
                  Request Support →
                </Link>
              </div>

              <div className={styles.sideBox}>
                <h3 className={styles.sideBoxTitle}>Make a Difference</h3>
                <p className={styles.sideBoxText}>
                  Your donation helps us continue this life-changing work.
                </p>
                <Link href="/donate" className={styles.sideBtnDark}>
                  Donate Now →
                </Link>
              </div>

              {related.length > 0 && (
                <div className={styles.sideBox}>
                  <h3 className={styles.sideBoxTitle}>More Stories</h3>
                  <div className={styles.relatedList}>
                    {related.map((a) => (
                      <Link
                        key={a._id}
                        href={`/news/${a.slug}`}
                        className={styles.relatedCard}
                      >
                        <img
                          src={a.featuredImage}
                          alt={a.title}
                          className={styles.relatedImg}
                        />
                        <div>
                          <p className={styles.relatedDate}>
                            {formatDate(a.createdAt)}
                          </p>
                          <p className={styles.relatedTitle}>{a.title}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
