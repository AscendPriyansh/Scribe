// import { useQuery } from "@tanstack/react-query";

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

function Profile() {
    return (
        <div className="w-full">
            <div className="m-4">
                <AspectRatio ratio={8 / 1} className="rounded-lg bg-muted overflow-hidden">
                    <img
                        src="https://avatar.vercel.sh/shadcn7"
                        alt="Photo"
                        className="h-full w-full object-cover"
                    />
                </AspectRatio>
                <div className="pl-8 pr-8 mb-5">
                    <div className="flex">
                        <Avatar className="h-28 w-28 relative -mt-14 sm:-mt-16 inline-block">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>

                    <div className="mt-4">
                        <h1 className="font-bold text-2xl">Priyansh Tiwari</h1>
                        <p className="text-md text-gray-500">Senior Software Engineer at Vercel</p>
                    </div>
                    <div className="flex gap-4 mt-2">
                        <div className="flex items-center gap-1">
                            <MapPin className="text-md text-gray-500 size-4" />
                            <h1 className="text-md text-gray-500">San Francisco, CA</h1>
                        </div>
                        <div className="flex items-center gap-1">
                            <Calendar className="text-md text-gray-500 size-4" />
                            <p className="text-md text-gray-500">Joined March 2021</p>
                        </div>
                    </div>
                    <div className="flex mt-4">
                        <p className="text-md text-gray-700">Building the future of web development. Open source contributor, TypeScript enthusiast, and coffee addict. Previously at Stripe and Google.</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 px-4 *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
                    <Card className="@container/card">
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <CardDescription className="mb-3">Number of Books</CardDescription>
                                <CardDescription className="mb-3 text-green-500">+5 this month</CardDescription>
                            </div>
                            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                                69
                            </CardTitle>
                        </CardHeader>
                    </Card>
                    <Card className="@container/card">
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <CardDescription className="mb-3">Profile Visits</CardDescription>
                                <CardDescription className="mb-3 text-green-500">+29.7k this month</CardDescription>
                            </div>
                            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                                269k
                            </CardTitle>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Profile;