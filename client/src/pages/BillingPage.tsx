import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { CreditCard, Crown, FileText } from 'lucide-react';
import { Link } from 'react-router';

const invoices = [
    { id: 'INV-2026-007', date: 'Jul 1, 2026', description: 'Pro Plan - Monthly', amount: '$9.00', status: 'Paid' },
    { id: 'INV-2026-006', date: 'Jun 1, 2026', description: 'Pro Plan - Monthly', amount: '$9.00', status: 'Paid' },
    { id: 'INV-2026-005', date: 'May 1, 2026', description: 'Pro Plan - Monthly', amount: '$9.00', status: 'Paid' },
    { id: 'INV-2026-004', date: 'Apr 1, 2026', description: 'Pro Plan - Monthly', amount: '$9.00', status: 'Pending' },
];

const BillingPage = () => {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link to="/dashboard/home">Home</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Billing</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="grid gap-4 md:grid-cols-2 w-full">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <Crown className="size-5 text-primary" />
                            Current Plan
                        </CardTitle>
                        <CardDescription>Your current subscription plan</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-semibold text-xl">Free Plan</p>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Renews never - Free forever
                                </p>
                            </div>
                            <Link to="/dashboard/upgrade">
                                <Button>
                                    <Crown className="size-4" />
                                    Upgrade
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <CreditCard className="size-5 text-primary" />
                            Payment Method
                        </CardTitle>
                        <CardDescription>Card used for billing</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-12 items-center justify-center rounded-md bg-muted text-xs font-bold">
                                    VISA
                                </div>
                                <div>
                                    <p className="font-medium">Visa ending in 4242</p>
                                    <p className="text-sm text-muted-foreground">Expires 12/28</p>
                                </div>
                            </div>
                            <Button variant="outline">Update</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="text-lg">Billing History</CardTitle>
                    <CardDescription>Your recent invoices and receipts</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Invoice</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead className="hidden md:table-cell">Description</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {invoices.map((invoice) => (
                                <TableRow key={invoice.id}>
                                    <TableCell className="font-medium">{invoice.id}</TableCell>
                                    <TableCell>{invoice.date}</TableCell>
                                    <TableCell className="hidden md:table-cell">{invoice.description}</TableCell>
                                    <TableCell>{invoice.amount}</TableCell>
                                    <TableCell>
                                        <Badge variant={invoice.status === 'Paid' ? 'default' : 'outline'}>
                                            {invoice.status}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                        <FileText className="size-4" />
                        Invoices are generated automatically after each billing cycle.
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default BillingPage;
