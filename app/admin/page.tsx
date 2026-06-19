"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  FolderOpen,
  Tag,
  Image as ImageIcon,
  User,
  Settings,
  LogOut,
  Menu,
  ChevronRight,
  Eye,
  Pencil,
  Trash2,
  Plus,
  EyeOff,
  Mail,
  Lock,
  X,
  Upload,
  CheckCircle,
  AlertCircle,
  Save,
  Send,
} from "lucide-react";
import styles from "./page.module.css";

/* ─── Types ────────────────────────────────── */
interface Article {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  imagePublicId: string;
  author: string;
  category: string;
  published: boolean;
  createdAt: string;
}

const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";
const CLOUDINARY_UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET ?? "";
const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD ?? "";

const CATEGORIES = [
  "News", "Healthcare", "Empowerment", "Advocacy", "Events", "Stories", "Education", "Programs",
];

/* ─── Auth token helpers ──────────────────────
   Your backend's POST/PUT/DELETE /api/news routes require a JWT
   (see middleware/auth.ts -> protect). This stores/reads that token. */
const TOKEN_KEY = "dhrf_admin_token";

function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY) ?? sessionStorage.getItem(TOKEN_KEY);
}

function authHeaders(): HeadersInit {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-NG", {
    day: "numeric", month: "short", year: "numeric",
  });
}

function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

/* ══════════════════════════════════════════════
   LOGIN
══════════════════════════════════════════════ */
function LoginPage({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!email || !password) { setError("Please fill in all fields."); return; }
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success && data.token) {
        if (remember) localStorage.setItem(TOKEN_KEY, data.token);
        else sessionStorage.setItem(TOKEN_KEY, data.token);
        onLogin();
      } else {
        setError(data.message ?? "Invalid email or password.");
      }
    } catch {
      setError("Could not reach the server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.loginPage}>
      <img src="https://picsum.photos/seed/dhrf-admin-bg/1400/900" alt="" className={styles.loginBg} />
      <div className={styles.loginOverlay} />

      <div className={styles.loginCard}>
        {/* Logo */}
        <div className={styles.loginLogo}>
          <div className={styles.loginLogoMark}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="#0a3d62"/>
              <path d="M20 9c-3.5 4.5-8 6-8 11a8 8 0 0016 0c0-5-4.5-6.5-8-11z" fill="#fff" opacity=".9"/>
              <circle cx="20" cy="24" r="3.5" fill="#0a3d62"/>
            </svg>
          </div>
          <div>
            <p className={styles.loginLogoName}>DHRF</p>
            <p className={styles.loginLogoSub}>DISABILITY HOPE &amp; RECOVERY FOUNDATION</p>
          </div>
        </div>

        <h1 className={styles.loginTitle}>Admin Login</h1>
        <p className={styles.loginSubtitle}>Sign in to your admin account</p>

        {error && (
          <div className={styles.loginError}>
            <AlertCircle size={15}/> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.loginForm} noValidate>
          <div className={styles.loginField}>
            <label className={styles.loginLabel}>Email Address</label>
            <div className={styles.loginInputWrap}>
              <Mail size={15} className={styles.loginInputIcon}/>
              <input type="email" className={styles.loginInput} placeholder="Enter your email"
                value={email} onChange={e => setEmail(e.target.value)} autoComplete="email"/>
            </div>
          </div>

          <div className={styles.loginField}>
            <label className={styles.loginLabel}>Password</label>
            <div className={styles.loginInputWrap}>
              <Lock size={15} className={styles.loginInputIcon}/>
              <input type={showPw ? "text" : "password"} className={styles.loginInput}
                placeholder="Enter your password" value={password}
                onChange={e => setPassword(e.target.value)} autoComplete="current-password"/>
              <button type="button" className={styles.loginEye} onClick={() => setShowPw(v => !v)} tabIndex={-1}>
                {showPw ? <EyeOff size={15}/> : <Eye size={15}/>}
              </button>
            </div>
          </div>

          <div className={styles.loginExtras}>
            <label className={styles.loginRemember}>
              <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)}/>
              Remember Me
            </label>
            <button type="button" className={styles.loginForgot}>Forgot Password?</button>
          </div>

          <button type="submit" className={styles.loginBtn} disabled={loading}>
            {loading ? "Signing in…" : "Login"}
          </button>
        </form>

        <p className={styles.loginFooter}>© 2024 DHRF. All rights reserved.</p>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   POST FORM PANEL (slide-in)
══════════════════════════════════════════════ */
interface PostFormProps {
  editArticle?: Article | null;
  onClose: () => void;
  onSaved: () => void;
}

function PostForm({ editArticle, onClose, onSaved }: PostFormProps) {
  const isEdit = !!editArticle;
  const [title, setTitle]         = useState(editArticle?.title ?? "");
  const [slug, setSlug]           = useState(editArticle?.slug ?? "");
  const [excerpt, setExcerpt]     = useState(editArticle?.excerpt ?? "");
  const [content, setContent]     = useState(editArticle?.content ?? "");
  const [category, setCategory]   = useState(editArticle?.category ?? "News");
  const [author, setAuthor]       = useState(editArticle?.author ?? "DHRF");
  const [published, setPublished] = useState(editArticle?.published ?? true);
  const [imageUrl, setImageUrl]   = useState(editArticle?.featuredImage ?? "");
  const [imagePublicId, setImagePublicId] = useState(editArticle?.imagePublicId ?? "");
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving]       = useState(false);
  const [error, setError]         = useState("");
  const [success, setSuccess]     = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  // auto-slug from title
  useEffect(() => {
    if (!isEdit) setSlug(slugify(title));
  }, [title, isEdit]);

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      // If Cloudinary is configured, use it; otherwise use a local upload endpoint
      if (CLOUDINARY_CLOUD_NAME && CLOUDINARY_UPLOAD_PRESET) {
        const fd = new FormData();
        fd.append("file", file);
        fd.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
          { method: "POST", body: fd }
        );
        const data = await res.json();
        console.log("Response status:", res.status);
        console.log("Response data:", data);
        setImageUrl(data.secure_url);
        setImagePublicId(data.public_id);
      } else {
        // Fallback: upload to your backend
        const fd = new FormData();
        fd.append("image", file);
        const res = await fetch(`${API}/api/upload`, { method: "POST", body: fd });
        const data = await res.json();
        console.log("UPLOAD RESPONSE:", data);
        setImageUrl(data.url ?? data.secure_url ?? data.imageUrl ?? "");
        setImagePublicId(data.public_id ?? "");
      }
    } catch {
      setError("Image upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(""); setSuccess("");
    if (!title || !excerpt || !content || !imageUrl) {
      setError("Title, excerpt, content and featured image are required.");
      return;
    }
    setSaving(true);
    try {
      const payload = { title, slug, excerpt, content, category, author, published,
        featuredImage: imageUrl, imagePublicId };
      const url  = isEdit ? `${API}/api/news/${editArticle!._id}` : `${API}/api/news`;
      const method = isEdit ? "PUT" : "POST";
      const res  = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json", ...authHeaders() },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(isEdit ? "Article updated!" : "Article published!");
        setTimeout(() => { onSaved(); onClose(); }, 900);
      } else if (res.status === 401) {
        setError("Your session has expired. Please log out and log in again.");
      } else {
        setError(data.message ?? "Something went wrong.");
      }
    } catch (err) {
        console.error("Publish error:", err);
      setError("Could not reach the server.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className={styles.panelBackdrop} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <aside className={styles.panel}>
        {/* panel header */}
        <div className={styles.panelHeader}>
          <h2 className={styles.panelTitle}>{isEdit ? "Edit Article" : "Add New Post"}</h2>
          <button className={styles.panelClose} onClick={onClose} aria-label="Close"><X size={18}/></button>
        </div>

        <form className={styles.panelForm} onSubmit={handleSubmit} noValidate>
          {error && <div className={styles.formError}><AlertCircle size={14}/> {error}</div>}
          {success && <div className={styles.formSuccess}><CheckCircle size={14}/> {success}</div>}

          {/* Title */}
          <div className={styles.formField}>
            <label className={styles.formLabel}>Title *</label>
            <input className={styles.formInput} type="text" placeholder="Article title"
              value={title} onChange={e => setTitle(e.target.value)} required/>
          </div>

          {/* Slug */}
          <div className={styles.formField}>
            <label className={styles.formLabel}>Slug</label>
            <input className={styles.formInput} type="text" placeholder="url-friendly-slug"
              value={slug} onChange={e => setSlug(slugify(e.target.value))}/>
            <p className={styles.formHint}>Auto-generated from title. Editable.</p>
          </div>

          {/* Excerpt */}
          <div className={styles.formField}>
            <label className={styles.formLabel}>Excerpt *</label>
            <textarea className={`${styles.formInput} ${styles.formTextarea}`} rows={3}
              placeholder="Short summary shown in listings…"
              value={excerpt} onChange={e => setExcerpt(e.target.value)} required/>
          </div>

          {/* Content */}
          <div className={styles.formField}>
            <label className={styles.formLabel}>Content *</label>
            <textarea className={`${styles.formInput} ${styles.formTextarea} ${styles.formTextareaLg}`}
              rows={10} placeholder="Full article content. HTML is supported."
              value={content} onChange={e => setContent(e.target.value)} required/>
          </div>

          {/* Featured Image */}
          <div className={styles.formField}>
            <label className={styles.formLabel}>Featured Image *</label>
            {imageUrl ? (
              <div className={styles.imagePreview}>
                <img src={imageUrl} alt="preview"/>
                <button type="button" className={styles.imageRemove}
                  onClick={() => { setImageUrl(""); setImagePublicId(""); }}>
                  <X size={14}/> Remove
                </button>
              </div>
            ) : (
              <div className={styles.imageUpload} onClick={() => fileRef.current?.click()}>
                <Upload size={22} className={styles.imageUploadIcon}/>
                <p>{uploading ? "Uploading…" : "Click to upload image"}</p>
                <p className={styles.imageUploadSub}>PNG, JPG, WEBP — max 5MB</p>
              </div>
            )}
            <input ref={fileRef} type="file" accept="image/*" hidden onChange={handleImageUpload}/>
            {/* OR paste URL */}
            <div className={styles.imageUrlRow}>
              <span className={styles.imageUrlLabel}>Or paste image URL:</span>
              <input className={styles.formInputSm} type="url" placeholder="https://…"
                value={imageUrl} onChange={e => setImageUrl(e.target.value)}/>
            </div>
          </div>

          {/* Category + Author row */}
          <div className={styles.formRow2}>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Category</label>
              <select className={styles.formInput} value={category}
                onChange={e => setCategory(e.target.value)}>
                {CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Author</label>
              <input className={styles.formInput} type="text" placeholder="DHRF"
                value={author} onChange={e => setAuthor(e.target.value)}/>
            </div>
          </div>

          {/* Publish status */}
          <div className={styles.formField}>
            <label className={styles.formToggleRow}>
              <span className={styles.formLabel} style={{margin:0}}>Publish immediately</span>
              <div className={`${styles.toggle} ${published ? styles.toggleOn : ""}`}
                onClick={() => setPublished(v => !v)}>
                <div className={styles.toggleThumb}/>
              </div>
            </label>
            <p className={styles.formHint}>
              {published ? "This post will be publicly visible." : "This post will be saved as draft."}
            </p>
          </div>

          {/* Submit */}
          <div className={styles.panelActions}>
            <button type="button" className={styles.btnCancel} onClick={onClose}>Cancel</button>
            <button type="submit" className={styles.btnPublish} disabled={saving || uploading}>
              {saving ? "Saving…" : isEdit
                ? <><Save size={15}/> Update Article</>
                : <><Send size={15}/> {published ? "Publish Post" : "Save Draft"}</>}
            </button>
          </div>
        </form>
      </aside>
    </div>
  );
}

/* ══════════════════════════════════════════════
   DASHBOARD
══════════════════════════════════════════════ */
function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [sideOpen, setSideOpen]     = useState(true);
  const [articles, setArticles]     = useState<Article[]>([]);
  const [loading, setLoading]       = useState(true);
  const [activeNav, setActiveNav]   = useState("Dashboard");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [formOpen, setFormOpen]     = useState(false);
  const [editArticle, setEditArticle] = useState<Article | null>(null);
  const [deleteId, setDeleteId]     = useState<string | null>(null);
  const [toast, setToast]           = useState("");
  const userMenuRef = useRef<HTMLDivElement>(null);

  const fetchArticles = useCallback(() => {
    setLoading(true);
    fetch(`${API}/api/news`)
      .then(r => r.json())
      .then(j => { if (j.success) setArticles(j.data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => { fetchArticles(); }, [fetchArticles]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node))
        setUserMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  }

  function openNew() { setEditArticle(null); setFormOpen(true); setActiveNav("Add New Post"); }
  function openEdit(a: Article) { setEditArticle(a); setFormOpen(true); }

  async function handleDelete(id: string) {
    try {
      const r = await fetch(`${API}/api/news/${id}`, {
        method: "DELETE",
        headers: { ...authHeaders() },
      });
      const j = await r.json();
      if (j.success) {
        setArticles(prev => prev.filter(a => a._id !== id));
        showToast("Article deleted.");
      }
    } catch {}
    setDeleteId(null);
  }

  const totalPosts   = articles.length;
  const publishedCt  = articles.filter(a => a.published).length;
  const draftCt      = articles.filter(a => !a.published).length;
  const categories   = [...new Set(articles.map(a => a.category))].length;

  const navItems = [
    { label: "Dashboard",    icon: LayoutDashboard },
    { label: "All Posts",    icon: FileText },
    { label: "Add New Post", icon: PlusCircle },
    { label: "Categories",   icon: FolderOpen },
    { label: "Tags",         icon: Tag },
    { label: "Media",        icon: ImageIcon },
    { label: "Profile",      icon: User },
    { label: "Settings",     icon: Settings },
  ];

  function handleNav(label: string) {
    setActiveNav(label);
    if (label === "Add New Post") openNew();
  }

  const displayArticles = activeNav === "All Posts" ? articles : articles.slice(0, 5);

  return (
    <div className={styles.dashLayout}>
      {/* ── Sidebar ── */}
      <aside className={`${styles.sidebar} ${sideOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
        <div className={styles.sidebarLogo}>
          <div className={styles.sidebarLogoMark}>
            <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="rgba(255,255,255,0.15)"/>
              <path d="M20 9c-3.5 4.5-8 6-8 11a8 8 0 0016 0c0-5-4.5-6.5-8-11z" fill="#fff" opacity=".95"/>
              <circle cx="20" cy="24" r="3.5" fill="#0a3d62"/>
            </svg>
          </div>
          {sideOpen && (
            <div className={styles.sidebarLogoText}>
              <span className={styles.sidebarName}>DHRF</span>
              <span className={styles.sidebarSub}>Admin Panel</span>
            </div>
          )}
        </div>

        <nav className={styles.sidebarNav}>
          {navItems.map(({ label, icon: Icon }) => (
            <button key={label}
              className={`${styles.navItem} ${activeNav === label ? styles.navActive : ""}`}
              onClick={() => handleNav(label)}>
              <Icon size={17} className={styles.navIcon}/>
              {sideOpen && <span>{label}</span>}
            </button>
          ))}
        </nav>

        <div className={styles.sidebarBottom}>
          <button className={`${styles.navItem} ${styles.navLogout}`} onClick={onLogout}>
            <LogOut size={17} className={styles.navIcon}/>
            {sideOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <div className={styles.dashMain}>
        {/* Topbar */}
        <header className={styles.topbar}>
          <button className={styles.menuBtn} onClick={() => setSideOpen(v => !v)} aria-label="Toggle menu">
            <Menu size={20}/>
          </button>
          <div className={styles.topbarRight} ref={userMenuRef}>
            <button className={styles.userBtn} onClick={() => setUserMenuOpen(v => !v)}>
              <div className={styles.userAvatar}><User size={15}/></div>
              <span>Admin</span>
              <ChevronRight size={13} style={{ transform: userMenuOpen ? "rotate(90deg)" : "none", transition: "transform .2s" }}/>
            </button>
            {userMenuOpen && (
              <div className={styles.userDropdown}>
                <button className={styles.dropItem} onClick={() => { setActiveNav("Profile"); setUserMenuOpen(false); }}>
                  <User size={13}/> Profile
                </button>
                <button className={styles.dropItem} onClick={() => { setActiveNav("Settings"); setUserMenuOpen(false); }}>
                  <Settings size={13}/> Settings
                </button>
                <div className={styles.dropDivider}/>
                <button className={`${styles.dropItem} ${styles.dropRed}`} onClick={onLogout}>
                  <LogOut size={13}/> Logout
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Content */}
        <main className={styles.dashContent}>
          <div className={styles.pageHeader}>
            <div>
              <h1 className={styles.pageTitle}>Dashboard</h1>
              <p className={styles.pageSubtitle}>Welcome back, Admin! Here's what's happening.</p>
            </div>
            <button className={styles.addBtn} onClick={openNew}>
              <Plus size={15}/> Add New Post
            </button>
          </div>

          {/* Stats */}
          <div className={styles.statsGrid}>
            {[
              { label: "Total Posts", value: totalPosts, icon: FileText, color: "blue" },
              { label: "Draft Posts", value: draftCt,   icon: FileText, color: "yellow" },
              { label: "Published",   value: publishedCt, icon: CheckCircle, color: "green" },
              { label: "Categories",  value: categories,  icon: FolderOpen,  color: "purple" },
            ].map(({ label, value, icon: Icon, color }) => (
              <div key={label} className={styles.statCard}>
                <div>
                  <p className={styles.statLabel}>{label}</p>
                  <p className={styles.statValue}>{loading ? "—" : value}</p>
                </div>
                <div className={`${styles.statIcon} ${styles[`statIcon_${color}`]}`}>
                  <Icon size={20}/>
                </div>
              </div>
            ))}
          </div>

          {/* Posts table */}
          <div className={styles.tableSection}>
            <div className={styles.tableSectionHeader}>
              <h2 className={styles.sectionTitle}>
                {activeNav === "All Posts" ? "All Posts" : "Recent Posts"}
              </h2>
              {activeNav !== "All Posts" && (
                <button className={styles.viewAll} onClick={() => setActiveNav("All Posts")}>View All</button>
              )}
            </div>

            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading && (
                    <tr><td colSpan={5} className={styles.tableEmpty}>Loading articles…</td></tr>
                  )}
                  {!loading && displayArticles.length === 0 && (
                    <tr>
                      <td colSpan={5} className={styles.tableEmpty}>
                        No articles yet.{" "}
                        <button className={styles.tableEmptyBtn} onClick={openNew}>Add one →</button>
                      </td>
                    </tr>
                  )}
                  {!loading && displayArticles.map(a => (
                    <tr key={a._id}>
                      <td>
                        <div className={styles.tableTitle}>
                          <img src={a.featuredImage} alt={a.title} className={styles.tableThumb}
                            onError={e => { (e.target as HTMLImageElement).style.display = "none"; }}/>
                          <span>{a.title}</span>
                        </div>
                      </td>
                      <td>
                        <span className={`${styles.badge} ${a.published ? styles.badgePub : styles.badgeDraft}`}>
                          {a.published ? "Published" : "Draft"}
                        </span>
                      </td>
                      <td className={styles.tdMuted}>{a.category}</td>
                      <td className={styles.tdMuted}>{formatDate(a.createdAt)}</td>
                      <td>
                        <div className={styles.tableActions}>
                          <Link href={`/news/${a.slug}`} target="_blank"
                            className={`${styles.actBtn} ${styles.actView}`} title="View">
                            <Eye size={13}/>
                          </Link>
                          <button className={`${styles.actBtn} ${styles.actEdit}`}
                            onClick={() => openEdit(a)} title="Edit">
                            <Pencil size={13}/>
                          </button>
                          <button className={`${styles.actBtn} ${styles.actDel}`}
                            onClick={() => setDeleteId(a._id)} title="Delete">
                            <Trash2 size={13}/>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className={styles.quickSection}>
            <h2 className={styles.sectionTitle} style={{ marginBottom: 14 }}>Quick Actions</h2>
            <div className={styles.quickGrid}>
              {[
                { label: "Add New Post",       icon: Plus,       nav: "Add New Post" },
                { label: "Manage Categories",  icon: FolderOpen, nav: "Categories" },
                { label: "Manage Tags",        icon: Tag,        nav: "Tags" },
                { label: "Media Library",      icon: ImageIcon,  nav: "Media" },
              ].map(({ label, icon: Icon, nav }) => (
                <button key={label} className={styles.quickItem} onClick={() => handleNav(nav)}>
                  <div className={styles.quickIcon}><Icon size={15}/></div>
                  <span>{label}</span>
                  <ChevronRight size={14} className={styles.quickArrow}/>
                </button>
              ))}
            </div>
          </div>
        </main>

        <footer className={styles.dashFooter}>
          <span>© 2024 <strong>DHRF</strong>. All rights reserved.</span>
          <span>Version 1.0.0</span>
        </footer>
      </div>

      {/* ── Post Form Panel ── */}
      {formOpen && (
        <PostForm
          editArticle={editArticle}
          onClose={() => { setFormOpen(false); setEditArticle(null); }}
          onSaved={() => { fetchArticles(); showToast(editArticle ? "Article updated!" : "Article published!"); }}
        />
      )}

      {/* ── Delete confirm modal ── */}
      {deleteId && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modal}>
            <div className={styles.modalIcon}><Trash2 size={28}/></div>
            <h3 className={styles.modalTitle}>Delete Article?</h3>
            <p className={styles.modalText}>This action cannot be undone. The article will be permanently removed.</p>
            <div className={styles.modalActions}>
              <button className={styles.btnCancel} onClick={() => setDeleteId(null)}>Cancel</button>
              <button className={styles.btnDelete} onClick={() => handleDelete(deleteId)}>Yes, Delete</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Toast ── */}
      {toast && (
        <div className={styles.toast}>
          <CheckCircle size={15}/> {toast}
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════
   ROOT — auth gate
══════════════════════════════════════════════ */
export default function AdminPage() {
  const [auth, setAuth] = useState<boolean | null>(null);

  useEffect(() => {
    setAuth(!!getToken());
  }, []);

  if (auth === null) return null;

  return auth ? (
    <Dashboard onLogout={() => {
      localStorage.removeItem(TOKEN_KEY);
      sessionStorage.removeItem(TOKEN_KEY);
      setAuth(false);
    }}/>
  ) : (
    <LoginPage onLogin={() => setAuth(true)}/>
  );
}