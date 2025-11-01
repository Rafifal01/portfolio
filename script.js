const githubUsername = "Rafifal01";

const reposToShow = [
  "bikesharing-SARIMA",
  "Transjakarta_Analysis",
  "studentapp",
  "Tokopedia-SentimentAnalysis",
  "portfolio"
];

const GITHUB_TOKEN = null;

function el(tag, cls) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  return e;
}

function formatDate(isoStr){
  if(!isoStr) return "";
  const d = new Date(isoStr);
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

async function fetchRepos() {
  const endpoint = `https://api.github.com/users/${githubUsername}/repos?per_page=100`;
  const headers = GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : {};
  const resp = await fetch(endpoint, { headers });
  if(!resp.ok) throw new Error(`GitHub API error: ${resp.status} ${resp.statusText}`);
  const all = await resp.json();
  return all;
}

function createCard(repo) {
  const card = el("div", "project-card");
  const title = el("h3"); title.textContent = repo.name;
  const desc = el("p"); desc.textContent = repo.description || "No description provided.";

  const meta = el("div", "project-meta");
  const lang = el("span","badge"); lang.textContent = repo.language || "—";
  const stars = el("span"); stars.innerHTML = `⭐ ${repo.stargazers_count}`;
  const updated = el("span"); updated.textContent = `Updated: ${formatDate(repo.updated_at)}`;
  meta.appendChild(lang);
  meta.appendChild(stars);
  meta.appendChild(updated);

  const links = el("div","project-links");
  const codeA = el("a");
  codeA.href = repo.html_url;
  codeA.target = "_blank";
  codeA.rel = "noopener";
  codeA.textContent = "View Code";
  links.appendChild(codeA);

  card.appendChild(title);
  card.appendChild(desc);
  card.appendChild(meta);
  card.appendChild(links);

  return card;
}

async function renderProjects() {
  const grid = document.getElementById("projects-grid");
  const note = document.getElementById("projects-note");
  grid.innerHTML = "";
  note.textContent = "Memuat repositori...";

  try {
    const repos = await fetchRepos();
    const repoMap = {};
    repos.forEach(r => repoMap[r.name] = r);

    const found = [];
    reposToShow.forEach(name => {
      if(repoMap[name]) found.push(repoMap[name]);
    });

    if(found.length === 0){
      note.textContent = "Tidak ditemukan repositori yang dipilih.";
      return;
    }

    found.forEach(r => {
      const card = createCard(r);
      grid.appendChild(card);
    });

    note.textContent = `Menampilkan ${found.length} repositori dari GitHub (${githubUsername}).`;
  } catch (err) {
    console.error(err);
    note.textContent = "Gagal memuat data dari GitHub. Coba lagi nanti.";
  }
}

renderProjects();
