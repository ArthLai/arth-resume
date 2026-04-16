export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-subtle)] mt-24">
      <div className="container-wide py-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-[color:var(--color-muted)]">
        <div>
          © {new Date().getFullYear()} Arth Lai · 資深行銷與營運專業
        </div>
        <div className="flex gap-5">
          <a
            href="mailto:bo.heng.lai@gmail.com"
            className="hover:text-[color:var(--color-fg)] transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[color:var(--color-fg)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://arthlai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[color:var(--color-fg)] transition-colors"
          >
            arthlai.com
          </a>
        </div>
      </div>
    </footer>
  );
}
