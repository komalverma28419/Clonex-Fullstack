import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <article className="group border-b border-zinc-200 py-10 dark:border-white/10">
      <Link
        to={`/blog/${blog.id}`}
        className="grid gap-8 md:grid-cols-[1fr_360px] md:items-center lg:grid-cols-[1fr_440px]"
      >
        {/* LEFT CONTENT */}
        <div className="order-2 md:order-1">

          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em]">
            <span className="text-blue-600 dark:text-blue-400">
              {blog.category}
            </span>

            <span className="text-zinc-300 dark:text-zinc-700">
              •
            </span>

            <span className="text-zinc-400">
              {blog.date}
            </span>

            <span className="text-zinc-300 dark:text-zinc-700">
              •
            </span>

            <span className="text-zinc-400">
              {blog.readTime}
            </span>
          </div>

          <h2 className="mt-4 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-zinc-950 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 md:text-3xl">
            {blog.title}
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500 dark:text-zinc-400 md:text-base">
            {blog.description}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-white">
            <span className="border-b border-zinc-900 pb-1 dark:border-white">
              Read article
            </span>

            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="order-1 h-[230px] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 md:order-2 md:h-[260px]">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;