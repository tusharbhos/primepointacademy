"use client";
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import Image from "next/image";
import Link from "next/link";

interface LazyLoadInstance {
  destroy: () => void;
}

const MarkdownComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-4xl font-bold my-8" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-3xl font-semibold mt-8 mb-6 border-b pb-3" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-2xl font-medium mt-6 mb-4" {...props} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-xl font-medium mt-5 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => {
    const hasBlockElement = React.Children.toArray(props.children).some(
      (child) =>
        React.isValidElement(child) &&
        (child.type === "div" ||
          child.type === "pre" ||
          child.type === "iframe" ||
          child.type === "ul" ||
          child.type === "ol" ||
          child.type === "table" ||
          child.type === MarkdownComponents.img ||
          child.type === MarkdownComponents.iframe)
    );
    return hasBlockElement ? (
      <div {...props}>{props.children}</div>
    ) : (
      <p className="mb-6 leading-relaxed text-gray-700" {...props}>
        {props.children}
      </p>
    );
  },
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const { width, height, ...rest } = props;
    console.log(width)
    console.log(height)
    const cleanAlt = props.alt?.replace("{:priority}", "") || "";
    return (
      <div className="my-8 relative w-full aspect-video">
        <Image
          src={props.src || ""}
          alt={cleanAlt}
          fill
          className="rounded-lg object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
          priority={props.alt?.includes("{:priority}")}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+yHgAFWAJ/p08ESgAAAABJRU5ErkJggg=="
          {...rest}
        />
        {cleanAlt && (
          <div className="text-center text-sm text-gray-500 mt-3">
            {cleanAlt}
          </div>
        )}
      </div>
    );
  },
  iframe: (props: React.IframeHTMLAttributes<HTMLIFrameElement>) => (
    <div className="my-8 aspect-video w-full overflow-hidden rounded-lg shadow-xl">
      <iframe
        {...props}
        className="w-full h-full"
        allowFullScreen
        loading="lazy"
        title={props.title || "Embedded content"}
      />
    </div>
  ),
  code: (
    props: React.HTMLAttributes<HTMLElement> & {
      inline?: boolean;
      className?: string;
    }
  ) => {
    const { inline, className, children, ...rest } = props;
    return inline ? (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm" {...rest}>
        {children}
      </code>
    ) : (
      <div className="my-6 overflow-hidden rounded-lg">
        <pre className="bg-gray-800 p-5 overflow-x-auto text-sm rounded-md">
          <code className={className} {...rest}>
            {children}
          </code>
        </pre>
      </div>
    );
  },
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const { href, children, ...rest } = props;
    if (href && href.startsWith("/")) {
      return (
        <Link href={href} className="text-blue-600 hover:underline" {...rest}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  },
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc pl-6 my-4 space-y-2" {...props} />
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal pl-6 my-4 space-y-2" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="pl-2" {...props} />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-8">
      <table
        className="w-full border-collapse border border-gray-300 rounded-lg shadow-md"
        {...props}
      />
    </div>
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th
      className="bg-gray-200 text-center py-4 px-6 border border-gray-300 font-semibold text-sm md:text-base"
      {...props}
    />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableDataCellElement>) => (
    <td
      className="py-4 px-6 border border-gray-300 text-center text-sm md:text-base even:bg-gray-50"
      {...props}
    />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLElement>) => (
    <blockquote
      className="border-l-4 border-blue-500 pl-5 my-6 italic text-gray-600 bg-gray-50 p-4 rounded-md"
      {...props}
    />
  ),
};

export default function PostContent({ content }: { content: string }) {
  useEffect(() => {
    let lazyLoadInstance: LazyLoadInstance | null = null;
    if (typeof window !== "undefined") {
      // Dynamically import vanilla-lazyload on the client side
      import("vanilla-lazyload").then((module) => {
        const LazyLoad = module.default;
        lazyLoadInstance = new LazyLoad();
      });
    }
    return () => {
      if (lazyLoadInstance && typeof lazyLoadInstance.destroy === "function") {
        lazyLoadInstance.destroy();
      }
    };
  }, []);

  return (
    <ReactMarkdown
      components={MarkdownComponents}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, [rehypeHighlight, { ignoreMissing: true }]]}
    >
      {content}
    </ReactMarkdown>
  );
}
