import type { GetEntry, Prefetcher, Prerenderer } from "wakuwork/server";

export const getEntry: GetEntry = async (id) => {
  switch (id) {
    case "App":
      return import("./src/App.js");
    default:
      throw new Error(`Unknown entry id: ${id}`);
  }
};

export const prefetcher: Prefetcher = async (path) => {
  switch (path) {
    case "/":
      return {
        entryItems: [["App", { name: "COW iO" }]],
        clientModules: [(await import("./src/UsersSearch.js")).UsersSearch],
      };
    default:
      return {};
  }
};

export const prerenderer: Prerenderer = async () => {
  return {
    entryItems: [["App", { name: "Wakuwork" }]],
    paths: ["/"],
  };
};
