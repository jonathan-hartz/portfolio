const entries = [
  {
    url: "/portfolio",
    name: "Home",
    alternate_name: "",
    className: "rounded-sm border border-blue-500 bg-blue-800",
    sidebarClassName: "fa-solid fa-home",
    icon: "fa-solid fa-house",
    active: false,
  },
  {
    url: "/portfolio/mes-services",
    name: "Mes services",
    icon: "",
    alternate_name: "mes services",
    className: "",
    sidebarClassName: "fa-solid fa-industry",
    active: false,
  },
  {
    url: "/portfolio/competences",
    icon: "",
    name: "Mes compétences",
    alternate_name: "mes compétences",
    className: "",
    sidebarClassName: "fa-solid fa-list-check",
    active: false,
  },
  {
    url: "/portfolio/projets",
    icon: "",
    name: "Mes projets",
    alternate_name: "mes projets",
    className: "",
    sidebarClassName: "fa-solid fa-diagram-project",
    active: false,
  },
  {
    url: "/portfolio/me-contacter",
    icon: "",
    name: "Me contacter",
    alternate_name: "le formulaire de contact",
    className: "",
    sidebarClassName: "fa-solid fa-envelope",
    active: false,
  },
];

export default function getMenuEntries(current_path: string) {
  return entries.map((item) =>
    item.url === current_path ? { ...item, active: true } : item,
  );
}

export function isOnTheLastPage(current_page_pathname: string) {
  return entries[entries.length - 1].url === current_page_pathname;
}

export function isPreviousPageBeforeCurrentPage(
  current_page_pathname: string,
  referrer_page_pathname: string,
) {
  const current_entry_position = entries.findIndex(
    (entry) => entry.url === current_page_pathname,
  );
  const referrer_entry_position = entries.findIndex(
    (entry) => entry.url === referrer_page_pathname,
  );

  return (
    current_entry_position !== -1 &&
    referrer_entry_position !== -1 &&
    referrer_entry_position < current_entry_position
  );
}

export function getNextPage(current_page_pathname: string) {
  return getPagePreviousOrNext(current_page_pathname, "next");
}

export function getPreviousPage(current_page_pathname: string) {
  return getPagePreviousOrNext(current_page_pathname, "previous");
}

function getPagePreviousOrNext(
  current_page_pathname: string,
  direction: string,
) {
  const current_page_position = entries.findIndex(
    (entry) => entry.url === current_page_pathname,
  );
  if (current_page_position === -1) {
    return { url: "", title: "" };
  }

  const offset = direction === "previous" ? -1 : 1;
  const target_position = current_page_position + offset;

  if (target_position < 0 || target_position >= entries.length) {
    return { url: "", title: "" };
  }

  const page = entries[target_position];
  return { url: page.url, title: page.alternate_name };
}
