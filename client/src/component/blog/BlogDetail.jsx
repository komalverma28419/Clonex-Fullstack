import React from "react";
import { Link, useParams } from "react-router-dom";
import blogs from "../../data/blogs";

const BlogDetail = () => {
  const { id } = useParams();
  const currentIndex = blogs.findIndex((blog) => String(blog.id) === String(id))
  const blog = blogs[currentIndex];

  if (!blog) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center bg-white px-6 dark:bg-dark-background">
        <div className="max-w-lg text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
            404 Error
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-5xl">
            Blog not found
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-zinc-500 dark:text-zinc-400">
            The article you are looking for doesn't exist or may have been removed.
          </p>
          <Link to="/blogs"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-600 dark:bg-white dark:text-zinc-950 dark:hover:bg-blue-400"
          >
            ← Back to blogs
          </Link>
        </div>
      </section>
    )
  }

  const previousBlog = currentIndex > 0 ? blogs[currentIndex - 1] : null;
  const nextBlog = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;

  return (
    <section className="relative overflow-hidden bg-white text-zinc-950 dark:bg-[#080808] dark:text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl dark:bg-blue-500/[0.07]" />

      <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-7 md:py-12 lg:px-10 xl:px-14">
        <div className="flex items-center justify-between">
          <Link to="/blogs"
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400">
            <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
            All articles
          </Link>

          <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 sm:block">
            Article
          </span>
        </div>

        <header className="mx-auto mt-12 text-center md:mt-16">
          <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em]">
            <span className="rounded-full bg-blue-50 px-3.5 py-1.5 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
              {blog.category}
            </span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span className="text-zinc-400">{blog.date}</span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span className="text-zinc-400"> {blog.readTime}</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold text-dark dark:text-dark-text md:text-4xl lg:text-[46px]">
            {blog.title}
          </h1>
          <p className="mt-2 text-base text-font dark:text-dark-muted md:text-lg">{blog.description}</p>
        </header>

        {/* HERO IMAGE */}
        <div className="mx-auto mt-6">
          <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.25)] dark:border-white/10 dark:bg-zinc-900 md:rounded-[28px]">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <img src={blog.image} alt={blog.title}
              className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-[1.02] sm:h-[380px] md:h-[520px] lg:h-[600px]"/>
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-6xl lg:grid-cols-[170px_minmax(0,760px)] lg:gap-16 xl:gap-24">
          {/* SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-font">
                In this article
              </p>
              <div className="mt-4 h-[2px] w-8 rounded-full bg-blue-600" />
              <p className="mt-5 text-sm text-zinc-500 dark:text-zinc-400">{blog.category}</p>
              <div className="mt-8 border-l border-zinc-200 pl-4 dark:border-white/10">
                <span className="text-xs leading-5 text-zinc-400">{blog.readTime}</span>
              </div>
            </div>
          </aside>

          {/* CONTENT */}
          <article className="min-w-0">
            {Array.isArray(blog.content) &&
              blog.content.map((section, index) => (
                <section key={index} className="group mb-10 last:mb-0 md:mb-6">
                  {section.heading && (
                    <h2 className="mb-2 text-2xl font-semibold leading-tight tracking-tight text-dark dark:text-white md:text-3xl">
                      <span className="mr-3 text-blue-600 dark:text-blue-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {section.heading}
                    </h2>
                  )}

                  <p className="text-[15px] text-font dark:text-dark-muted md:text-base">
                    {section.text}
                  </p>

                </section>
              ))}
          </article>
        </div>

        {/* PREVIOUS / NEXT */}
        <div className="mx-auto mt-16 max-w-6xl border-y border-zinc-200 dark:border-white/10">
          <div className="grid md:grid-cols-2">
            <div className="border-b border-zinc-200 p-7 dark:border-white/10 md:border-b-0 md:border-r md:p-10">
              {previousBlog ? (
                <Link to={`/blog/${previousBlog.id}`} className="group block">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-zinc-400">
                    <span className="transition-transform duration-200 group-hover:-translate-x-1">
                      ←
                    </span>
                    Previous article
                  </div>
                  <h3 className="mt-4 text-xl font-semibold leading-snug text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 md:text-2xl">
                    {previousBlog.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                    {previousBlog.description}
                  </p>
                </Link>
              ) : (
                <div>
                  <p className="text-xs font-bold uppercase text-zinc-400">Previous article</p>
                  <p className="mt-4 text-sm text-zinc-400">You're at the beginning.</p>
                </div>
              )}
            </div>

            <div className="p-7 md:p-10 md:text-right">
              {nextBlog ? (
                <Link to={`/blog/${nextBlog.id}`} className="group block">
                  <div className="flex items-center justify-start gap-2 text-xs font-bold uppercase tracking-[0.15em] text-zinc-400 md:justify-end">Next article
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold leading-snug text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 md:text-2xl">
                    {nextBlog.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                    {nextBlog.description}
                  </p>
                </Link>
              ) : (
                <div>
                  <p className="text-xs font-bold uppercase text-zinc-400">Next article</p>
                  <p className="mt-4 text-sm text-zinc-400">You've reached the end.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="py-14 text-center md:py-16">
          <Link
            to="/blogs"
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-900 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600 dark:border-white/10 dark:text-white dark:hover:border-blue-400 dark:hover:text-blue-400">
            <span className="transition-transform duration-200 group-hover:-translate-x-1"> ← </span>
            View all articles
          </Link>
        </div>

      </div>
    </section>
  )}
export default BlogDetail;
