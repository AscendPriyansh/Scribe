import { useParams } from "react-router";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile, downloadBook } from "@/http/api";
import type { Book } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Calendar, Download, MapPin, Users } from "lucide-react";
import { useState } from "react";

function PublicProfilePage() {
    const { userId } = useParams<{ userId: string }>();

    const { data, isLoading, isError } = useQuery({
        queryKey: ['public-profile', userId],
        queryFn: () => getUserProfile(userId as string),
        enabled: !!userId,
    });

    const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

    const user = data?.data?.user;
    const books: Book[] = data?.data?.books ?? [];

    const handleDownload = async (book: Book) => {
        const res = await downloadBook(book._id);
        const url = URL.createObjectURL(res.data);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${book.title}.pdf`;
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="w-full">
            <div className="m-4">
                <Breadcrumb className="mb-4">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <Link to="/dashboard/home">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>
                                {user?.name ?? "User"}
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                {isLoading ? (
                    <div className="space-y-4">
                        <Skeleton className="h-40 w-full rounded-lg" />
                        <div className="flex items-center gap-4">
                            <Skeleton className="h-28 w-28 rounded-full" />
                            <div className="space-y-2">
                                <Skeleton className="h-6 w-48" />
                                <Skeleton className="h-4 w-32" />
                            </div>
                        </div>
                    </div>
                ) : isError ? (
                    <div className="min-h-[40vh] flex flex-col items-center justify-center gap-3 rounded-xl bg-muted/50">
                        <h3 className="font-bold text-lg text-red-700 opacity-70">
                            An Error Occurred.
                        </h3>
                        <p className="text-xs text-gray-400">
                            This profile could not be loaded.
                        </p>
                    </div>
                ) : user ? (
                    <>
                        <AspectRatio ratio={8 / 1} className="rounded-lg bg-muted overflow-hidden">
                            <img
                                src={`https://avatar.vercel.sh/${user.name}`}
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </AspectRatio>
                        <div className="pl-8 pr-8 mb-5">
                            <div className="flex">
                                <Avatar className="h-28 w-28 relative -mt-14 sm:-mt-16 inline-block">
                                    <AvatarImage src={`https://avatar.vercel.sh/${user.name}`} />
                                    <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                                </Avatar>
                            </div>

                            <div className="mt-4">
                                <h1 className="font-bold text-2xl">{user.name}</h1>
                                <p className="text-md text-gray-500">{user.role ?? "Member"}</p>
                            </div>
                            <div className="flex gap-4 mt-2">
                                <div className="flex items-center gap-1">
                                    <MapPin className="text-md text-gray-500 size-4" />
                                    <h1 className="text-md text-gray-500">{user.location ?? "Unknown"}</h1>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Calendar className="text-md text-gray-500 size-4" />
                                    <p className="text-md text-gray-500">
                                        {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "—"}
                                    </p>
                                </div>
                            </div>
                            <div className="flex mt-4">
                                <p className="text-md text-gray-700">{user.description ?? "No description provided."}</p>
                            </div>
                        </div>

                        <div className="px-4 pb-4">
                            <div className="flex items-center gap-2 mb-4">
                                <Users className="size-4 text-gray-500" />
                                <h2 className="font-semibold text-lg">Books</h2>
                            </div>

                            {books.length === 0 ? (
                                <div className="rounded-xl bg-muted/50 flex flex-col items-center justify-center gap-2 py-12">
                                    <p className="font-semibold">No books yet</p>
                                    <p className="text-xs text-gray-400">
                                        This user hasn't published any books.
                                    </p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {books.map((book) => (
                                        <Card key={book._id} className="overflow-hidden">
                                            <AspectRatio ratio={3 / 2} className="bg-muted">
                                                {imgErrors[book._id] ? (
                                                    <div className="h-full w-full flex items-center justify-center text-xs text-muted-foreground">
                                                        No image
                                                    </div>
                                                ) : (
                                                    <img
                                                        alt={book.title}
                                                        src={book.coverImage}
                                                        className="h-full w-full object-cover"
                                                        onError={() => setImgErrors(prev => ({ ...prev, [book._id]: true }))}
                                                    />
                                                )}
                                            </AspectRatio>
                                            <CardContent className="p-4">
                                                <h3 className="font-semibold truncate">{book.title}</h3>
                                                <div className="flex flex-wrap gap-1 mt-2">
                                                    {(Array.isArray(book.genre) ? book.genre : [book.genre]).map((g) => (
                                                        <Badge key={g} variant="secondary">{g}</Badge>
                                                    ))}
                                                </div>
                                                <p className="text-xs text-muted-foreground mt-1">
                                                    by {book.author?.name ?? "Unknown"}
                                                </p>
                                                <Button
                                                    className="mt-3 w-full"
                                                    onClick={() => handleDownload(book)}
                                                >
                                                    <Download size={16} />
                                                    <span className="ml-2">Download</span>
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            )}
                        </div>
                    </>
                ) : null}
            </div>
        </div>
    )
}

export default PublicProfilePage;