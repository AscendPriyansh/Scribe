export interface User {
    _id: string,
    name: string,
    email: string,
    password: string,
    role?: string,
    location?: string,
    description?: string,
    createdAt?: string,
    updatedAt?: string
}

