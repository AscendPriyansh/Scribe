export const GENRES = [
    "Fiction",
    "Non-Fiction",
    "Sci-Fi",
    "Fantasy",
    "Romance",
    "Mystery",
    "Thriller",
    "Horror",
    "Drama",
    "Biography",
    "Self-Help",
    "History",
    "Poetry",
] as const;

export type Genre = (typeof GENRES)[number];
