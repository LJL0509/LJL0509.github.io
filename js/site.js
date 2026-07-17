const page = document.body.dataset.page || "home";

const navigation = [
  { id: "home", label: "首页", href: "index.html" },
  { id: "about", label: "关于我", href: "about.html" },
  { id: "efforts", label: "成长记录", href: "efforts.html" },
  { id: "results", label: "方法记录", href: "results.html" },
  { id: "fragments", label: "生活碎片", href: "fragments.html" }
];

const header = document.getElementById("siteHeader");
const footer = document.getElementById("siteFooter");

header.innerHTML = `
  <header class="site-header shell">
    <a class="wordmark" href="index.html" aria-label="佳乐的记录站首页">
      <span class="wordmark-dot" aria-hidden="true"></span>
      佳乐的记录站
    </a>
    <nav class="main-nav" aria-label="主要导航">
      ${navigation
        .map(
          (item) =>
            `<a href="${item.href}"${item.id === page ? ' class="is-current" aria-current="page"' : ""}>${item.label}</a>`
        )
        .join("")}
    </nav>
  </header>
`;

footer.innerHTML = `
  <footer class="site-footer shell">
    <p>佳乐的自我记录站</p>
    <p>让自己开心是美好生活的答案。</p>
    <div class="footer-links">
      <a href="https://github.com/LJL0509" target="_blank" rel="noreferrer">GitHub</a>
      <a href="mailto:17791624829@163.com">Email</a>
    </div>
  </footer>
`;

document.body.classList.add("js-ready");

const revealItems = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("revealed"));
}
