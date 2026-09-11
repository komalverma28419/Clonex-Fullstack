import React, { useState } from "react";
import blogs from "../../data/blogs";
import BlogCard from "./BlogCard";

const POSTS_PER_PAGE = 4;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE)
  const startIndex =(currentPage - 1) * POSTS_PER_PAGE
  const currentBlogs = blogs.slice(startIndex, startIndex + POSTS_PER_PAGE)

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <main className="bg-white text-dark  dark:text-dark-text">
      <section className="relative overflow-hidden border-zinc-200 dark:border-white/10 py-6 md:py-10 xl:py-14 dark:bg-dark-background">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-400/20 blur-[100px] dark:bg-blue-500/15" />

        {/* Aurora glow - right */}
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-[100px] dark:bg-cyan-500/15" />

        {/* Grid */}
        <div
        className="absolute inset-0 opacity-50 dark:opacity-20"
        style={{
            backgroundImage:`
            linear-gradient(rgba(59, 130, 246, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
        }}
        />
        <div className="relative z-10  max-w-7xl text-center mx-auto px-7 lg:px-12 xl:px-14">
          <div>
            <div className="max-w-4xl items-center gap-3 mx-auto">
              <span className="inline-flex items-center rounded-full border border-blue-200/70 bg-white/70 px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm backdrop-blur-md dark:border-blue-400/20 dark:bg-slate-900/60 dark:text-blue-400">
                Clonex Insights
              </span>
            </div>

            <h1 className="mx-auto mt-2 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-[46px]">
              Ideas that help you
              <span className="block text-blue-700 dark:border-blue-400/20">
                build better.
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-base text-zinc-500 dark:text-zinc-400 md:text-lg">
              Insights, ideas and practical knowledge about technology,
              products, engineering and digital experiences.
            </p>

          </div>
        </div>
      </section>

      <section className="py-6 md:py-10 xl:py-14 dark:bg-dark-alternate">
        <div className="mx-auto max-w-7xl px-7 lg:px-12 xl:px-14">
          {/*------------------------------- BLOG LIST----------------------------------------- */}
          <div>
            {currentBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog}/>
            ))}
          </div>

          {/*------------------------------------ PAGINATION------------------------------------ */}
          <div className="flex items-center justify-between border-zinc-200 pt-8 dark:border-white/10">
            <button onClick={() =>changePage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`group inline-flex items-center gap-3 text-sm font-semibold transition ${
                currentPage === 1
                  ? "cursor-not-allowed text-zinc-300 dark:text-zinc-700"
                  : "text-zinc-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
              }`}>
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              Prev
            </button>

            {/* -------------------------------PAGE NUMBERS--------------------------------------- */}
            <div className="flex items-center sm:gap-2">
              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((page) => (
                <button
                  key={page}
                  onClick={() => changePage(page)}
                  className={`flex h-7 w-7 md:h-9 md:w-9 items-center justify-center rounded-full text-sm font-medium transition ${
                    currentPage === page
                      ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"
                      : "text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-white/10"
                  }`}>
                  {page}
                </button>
              ))}
            </div>

            <button onClick={() =>changePage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`group inline-flex items-center gap-3 text-sm font-semibold transition ${
                currentPage === totalPages
                  ? "cursor-not-allowed text-zinc-300 dark:text-zinc-700"
                  : "text-zinc-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
              }`}>
              Next
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  )}
export default Blog