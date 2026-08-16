export interface Author {
    _id: string;
    name: string;
}

export interface User {
    _id: string;
    name: string;
    email: string;
    role?: string;
    location?: string;
    description?: string;
    createdAt?: string;
    updatedAt?: string;
    bookCount?: number;
}

export interface PublicUserProfile {
    user: User;
    books: Book[];
}

export interface Book {
    _id: string;
    title: string;
    description: string;
    genre: string[] | string;
    author: Author;
    coverImage: string;
    file: string;
    createdAt: string;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}