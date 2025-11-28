// src/pages/blogs/Blogdetails.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../Component/header/Header";
import Footer from "../../Component/footer/Footer";
const blogPosts = [
  {
    id: 1,
    title: "How PET Recycling is Transforming Global Packaging",
    excerpt: "Discover how recycled PET is becoming the backbone of sustainable packaging worldwide...",
    category: "Recycling",
    image: "https://images.unsplash.com/photo-1520975922071-6f61a00a6c86?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 2,
    title: "The Future of Circular Economy in India",
    excerpt: "India is rapidly adapting new recycling systems to boost circular sustainability...",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1532634896-26909d0d4b6a?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 3,
    title: "Modern PET Flakes Processing Technology",
    excerpt: "High-efficiency machinery and automated systems are making PET processing faster than ever...",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 4,
    title: "Why Clean PET Bottles Matter in Recycling",
    excerpt: "Pre-cleaning PET bottles can significantly improve flake quality and reduce production waste...",
    category: "Awareness",
    image: "https://images.unsplash.com/photo-1581094271901-e350f1a37dd0?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 5,
    title: "Smart Automation in PET Bottle Sorting",
    excerpt: "AI-powered sorting systems are bringing accuracy and speed to waste management facilities...",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=60"
  }
]; 
const API_BASE = "https://server.grafizen.in/api/v2/hotel/admin";

/* ---------------- helpers ---------------- */
const getId = (b) =>
  typeof b?._id === "string" ? b._id : b?._id?.$oid || b?.id || "";

const getCreatedAt = (b) => {
  if (typeof b?.createdAt === "string") return new Date(b.createdAt);
  if (b?.createdAt?.$date) return new Date(b.createdAt.$date);
  return null;
};

const getH1FromHtml = (html) => {
  if (!html || typeof html !== "string") return "";
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.querySelector("h1")?.textContent?.trim() || "";
};

const getBlogH1 = (b) =>
  getH1FromHtml(b?.description) || getH1FromHtml(b?.subblogs) || b?.title || "Blog";

const slugify = (str) =>
  (str || "blog")
    .toString()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120);

    const resolveBlogById = (id, list) => {
  if (!id || !Array.isArray(list)) return null;
  return list.find((b) => getId(b) === id) || null;
};

/* ---------- HTML transformer (tight rhythm + uniform images + bullets) ---------- */
const styleSubblogsHtml = (html) => {
  if (typeof html !== "string" || !html.trim()) return "<p>No content available.</p>";

  const root = document.createElement("div");
  root.innerHTML = html;

  const onlyBrOrNbsp = (el) => {
    const raw = (el.innerHTML || "").replace(/&nbsp;|\s/gi, "");
    return raw === "" || raw.toLowerCase() === "<br>" || raw.toLowerCase() === "<br/>";
  };
  const setMB = (el, t, b) => {
    el.style.marginTop = `${t}px`;
    el.style.marginBottom = `${b}px`;
  };

  // remove empty <p> that create gaps
  Array.from(root.getElementsByTagName("p")).forEach((p) => {
    const text = (p.textContent || "").trim();
    if (!text && onlyBrOrNbsp(p)) p.remove();
  });

  // H1 compact
  Array.from(root.getElementsByTagName("h1")).forEach((h1) => {
    h1.className = "";
    h1.classList.add("text-[32px]", "font-[600]", "text-gray-900", "leading-snug");
    setMB(h1, 2, 2);
  });

  // H2 compact (purple)
  Array.from(root.getElementsByTagName("h2")).forEach((h2) => {
    h2.className = "";
    h2.classList.add("text-[#7442ff]", "font-semibold", "text-lg", "leading-snug");
    setMB(h2, 0, 2);
  });

  // paragraphs + dashed rule
  Array.from(root.getElementsByTagName("p")).forEach((p) => {
    const t = (p.textContent || "").trim();

    // "-----" -> dashed divider (half width)
    if (/^-{3,}$/.test(t)) {
      const bar = document.createElement("div");
      bar.className = "w-1/2 border-t-2 border-dashed border-[#7442ff]";
      setMB(bar, 8, 8);
      p.replaceWith(bar);
      return;
    }

    p.className = "";
    p.classList.add("text-[#222]", "leading-[1.6]");
    setMB(p, 2, 2);
    const prev = p.previousElementSibling;
    if (prev && /^H[12]$/.test(prev.tagName)) setMB(p, 2, 2);
  });

  // lists (force bullets/numbers even if globals reset them)
  Array.from(root.getElementsByTagName("ul")).forEach((el) => {
    el.className = "";
    el.classList.add("list-disc", "list-outside", "pl-5", "leading-[1.6]");
    setMB(el, 4, 4);
  });
  Array.from(root.getElementsByTagName("ol")).forEach((el) => {
    el.className = "";
    el.classList.add("list-decimal", "list-outside", "pl-5", "leading-[1.6]");
    setMB(el, 4, 4);
  });

  // IMAGES: uniform size — full width + fixed height, cover
  Array.from(root.getElementsByTagName("img")).forEach((img) => {
    const wrap = document.createElement("div");
    wrap.className = "w-full h-[320px] md:h-[420px] overflow-hidden rounded-md my-3";
    img.classList.add("w-full", "h-full", "object-cover", "block");
    img.removeAttribute("width");
    img.removeAttribute("height");
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";

    img.parentNode?.replaceChild(wrap, img);
    wrap.appendChild(img);
  });

  // collapse first/last outer margins
  const first = root.firstElementChild;
  if (first) first.style.marginTop = "0px";
  const last = root.lastElementChild;
  if (last) last.style.marginBottom = "0px";

  return root.innerHTML;
};

/* ---------------- component ---------------- */
export default function BlogDetails() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { state } = useLocation();
  const blogFromState = state?.blog || null;

  const [blog, setBlog] = useState(blogFromState);
  const [loading, setLoading] = useState(!blogFromState);

  const [allBlogs, setAllBlogs] = useState([]);
  const [loadingSidebar, setLoadingSidebar] = useState(true);

  console.log('blog', blog)

  // Use blog from state immediately
  useEffect(() => {
    if (state?.blog) {
      setBlog(state.blog);
      setLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [state?.blog]);

  useEffect(() => {
    let mounted = true;

    const fetchById = async (id) => {
      const res = await axios.get(`${API_BASE}/blog/${id}`);
      return res.data?.careerData || res.data;
    };

    const fetchAll = async () => {
      const res = await axios.get(`${API_BASE}/blog`);
      const list = res.data?.careerData || res.data || [];
      return Array.isArray(list) ? list : [];
    };

    (async () => {
      try {
        setLoadingSidebar(true);
        const list = await fetchAll();
        if (!mounted) return;
        setAllBlogs(list);

        if (state?.blog) return;

        setLoading(true);

        if (state?.blogId) {
          const data = await fetchById(state.blogId);
          if (mounted) setBlog(data);
          return;
        }

        const match =
          list
            .map((b) => ({ b, s: slugify(getBlogH1(b)) }))
            .find((x) => x.s === slug)?.b || null;

        if (mounted) setBlog(match);
      } catch (e) {
        console.error("Failed to load blog:", e);
      } finally {
        if (mounted) {
          setLoading(false);
          setLoadingSidebar(false);
        }
      }
    })();

    return () => {
      mounted = false;
    };
  }, [slug, state?.blog, state?.blogId]);

  // Only subblogs
  const rawHtml =
    typeof blog?.subblogs === "string" && blog.subblogs.trim()
      ? blog.subblogs
      : "<p>No content available.</p>";
  const styledHtml = useMemo(() => styleSubblogsHtml(rawHtml), [rawHtml]);

  // Popular (for sidebar)
  const popular = useMemo(() => {
    const byTime = [...allBlogs].sort(
      (a, b) => (getCreatedAt(b)?.getTime() || 0) - (getCreatedAt(a)?.getTime() || 0)
    );
    const seen = new Set();
    const out = [];
    for (const b of byTime) {
      const h1 = getBlogH1(b);
      if (!h1 || seen.has(h1)) continue;
      out.push({ h1, b, id: getId(b), slug: slugify(h1) });
      seen.add(h1);
      if (out.length >= 15) break;
    }
    return out;
  }, [allBlogs]);

  // Related (under the article): 4–5 recent, unique, exclude current
  const related = useMemo(() => {
  if (!blog?.relatedBlogs) return [];
  return blog.relatedBlogs
    .map((id) => {
      const b = resolveBlogById(id, allBlogs);
      if (!b) return null;
      const h1 = getBlogH1(b);
      return { id: getId(b), h1, slug: slugify(h1), b };
    })
    .filter(Boolean);
}, [blog, allBlogs]);


const suggested = useMemo(() => {
  if (!blog?.suggestedBlogs) return [];
  return blog.suggestedBlogs
    .map((id) => {
      const b = resolveBlogById(id, allBlogs);
      if (!b) return null;
      const h1 = getBlogH1(b);
      return { id: getId(b), h1, slug: slugify(h1), b };
    })
    .filter(Boolean);
}, [blog, allBlogs]);



  const goToBlog = ({ slug: s, id, b }) => {
    navigate(`/blogs/${s}`, { state: { blogId: id, blog: b } });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />

      <section className="w-[90%] md:w-[78%] mx-auto pt-[110px] pb-[40px] font-Poppins">
        <div className="flex flex-col md:flex-row md:gap-8 gap-6">
          {/* LEFT: 70% content */}
          <div className="w-full md:w-[70%]">
            {loading ? (
              <div className="p-6 text-[#7442ff]">Loading…</div>
            ) : (
              <article className="max-w-none">
                <div
                  className="text-[15px] leading-[1.6] text-[#222]"
                  dangerouslySetInnerHTML={{ __html: styledHtml }}
                />

                {/* Related Blogs */}
                {related.length > 0 && (
                  <div className="mt-10">
                    <h3 className="text-[#7442ff] font-semibold text-2xl mb-3">
                      Related Blogs :
                    </h3>
                    <ul className="list-disc list-outside pl-6 space-y-3 marker:text-[#7442ff]">
                      {related.map((r) => (
                        <li key={r.id}>
                          <button
                            type="button"
                            onClick={() => goToBlog({ slug: r.slug, id: r.id, b: r.b })}
                            className="text-[18px] font-medium text-[#111] hover:text-[#7442ff] transition-colors"
                            title={r.h1}
                          >
                            {r.h1}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            )}
          </div>

          {/* RIGHT: 30% sidebar */}
          <aside className="w-full md:w-[30%]">
            <div className="border-[1.1px] border-[#fcaf17] bg-white shadow p-4 rounded-[10px]">
              {/* Search (visual only) */}
              <div className="flex justify-between border p-2 rounded-[8px]">
                <input
                  type="text"
                  className="outline-none flex-1"
                  placeholder="Search"
                  disabled
                />
                <button className="pr-[10px]" type="button" disabled>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M15.682 14.318L12.025 10.662C12.722 9.719 13.111 8.563 13.111 7.333C13.111 3.868 10.244 1 6.778 1C3.312 1 0.444 3.868 0.444 7.333C0.444 10.798 3.312 13.666 6.778 13.666C8.008 13.666 9.163 13.277 10.106 12.579L13.762 16.236C13.975 16.448 14.311 16.448 14.524 16.236L15.681 15.08C15.894 14.868 15.894 14.533 15.682 14.318ZM6.778 11.889C4.347 11.889 2.222 9.763 2.222 7.333C2.222 4.902 4.347 2.777 6.778 2.777C9.208 2.777 11.333 4.902 11.333 7.333C11.333 9.763 9.208 11.889 6.778 11.889Z"
                      fill="#fcaf17"
                    />
                  </svg>
                </button>
              </div>

              {/* Popular list (with real bullets) */}
              <div className="mt-6">
                <h5 className="font-[600] text-[19px] py-[10px] text-[#000000]">
                  Popular Blogs
                </h5>
                <ul className="list-disc list-outside ml-5 space-y-2 text-[14px] text-[#5c5b5b] marker:text-[#fcaf17]">
                  {loadingSidebar ? (
                    <li>Loading…</li>
                  ) : popular.length === 0 ? (
                    <li>No blogs yet.</li>
                  ) : (
                    popular.map((entry) => {
                      const active = entry.slug === slug;
                      return (
                        <li key={entry.id}>
                          <button
                            type="button"
                            onClick={() =>
                              goToBlog({ slug: entry.slug, id: entry.id, b: entry.b })
                            }
                            className={`text-left hover:underline ${
                              active ? "text-[#7442ff] font-medium" : ""
                            }`}
                            aria-current={active ? "page" : undefined}
                            title={entry.h1}
                          >
                            <span
                              className="block max-w-[230px]"
                              style={{
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                              }}
                            >
                              {entry.h1}
                            </span>
                          </button>
                        </li>
                      );
                    })
                  )}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

{suggested.length > 0 && (
  <section className="pt-10  font-Poppins bg-gradient-to-b pb-[40px]">
    <div className="mx-auto px-4">
      <div className="text-center mb-10 relative">
        <h2 className="md:text-[45px] text-[30px] font-[600] text-gray-800 mb-3">
          Suggested Articles
        </h2>
      </div>

      <div className="flex overflow-x-auto pb-[19px] px-[20px] w-[100%] gap-8">
        {suggested.map((post) => (
          <div
            key={post.id}
            onClick={() => goToBlog(post)}
            className="cursor-pointer flex flex-col flex-shrink-0 w-[290px] bg-white h-[370px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            <div className="h-[190px] overflow-hidden">
              <img
                src={post.b.image}
                alt={post.h1}
                className="w-full h-full object-cover transition group-hover:scale-105"
              />
            </div>

            <div className="p-4">
              <h3 className="text-[18px] leading-[23px] font-[600] mb-2">
                {post.h1}
              </h3>

              <p className="text-gray-600 text-[13px] line-clamp-3">
                {getH1FromHtml(post.b.description)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)}



      
      <Footer />
    </>
  );
}
