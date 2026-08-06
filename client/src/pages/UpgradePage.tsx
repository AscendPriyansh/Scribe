import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Crown, Zap } from 'lucide-react';
import { Link } from 'react-router';
import { cn } from '@/lib/utils';

const plans = [
    {
        name: 'Free',
        price: '$0',
        period: 'forever',
        description: 'For casual readers getting started.',
        features: [
            'Up to 10 books',
            'Basic analytics',
            'Community support',
        ],
        cta: 'Current Plan',
        disabled: true,
        highlight: false,
    },
    {
        name: 'Pro',
        price: '$9',
        period: '/month',
        description: 'For serious authors and publishers.',
        features: [
            'Unlimited books',
            'Advanced analytics',
            'Priority support',
            'Custom cover designs',
            'Remove branding',
        ],
        cta: 'Upgrade to Pro',
        disabled: false,
        highlight: true,
    },
    {
        name: 'Lifetime',
        price: '$79',
        period: 'one-time',
        description: 'Pay once, own it forever.',
        features: [
            'Everything in Pro',
            'Early access to features',
            'Dedicated support',
        ],
        cta: 'Get Lifetime',
        disabled: false,
        highlight: false,
    },
];

const UpgradePage = () => {
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
                        <BreadcrumbPage>Upgrade to Pro</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="text-center">
                <h1 className="font-bold text-2xl">Upgrade to Pro</h1>
                <p className="text-muted-foreground mt-1">
                    Unlock more books, better analytics, and premium features.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3 w-full">
                {plans.map((plan) => (
                    <Card
                        key={plan.name}
                        className={cn(
                            'flex flex-col',
                            plan.highlight && 'border-primary shadow-md',
                        )}
                    >
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-lg flex items-center gap-2">
                                    {plan.name}
                                    {plan.highlight && (
                                        <Badge className="flex items-center gap-1">
                                            <Zap className="size-3" />
                                            Popular
                                        </Badge>
                                    )}
                                </CardTitle>
                            </div>
                            <CardDescription>{plan.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-bold">{plan.price}</span>
                                <span className="text-sm text-muted-foreground">{plan.period}</span>
                            </div>
                            <ul className="mt-4 space-y-2 text-sm">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2">
                                        <Check className="size-4 text-primary" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            {plan.disabled ? (
                                <Button className="w-full" variant="outline" disabled>
                                    {plan.cta}
                                </Button>
                            ) : (
                                <Link to="/dashboard/billing" className="w-full">
                                    <Button className="w-full">
                                        {plan.highlight ? <Crown className="size-4" /> : null}
                                        {plan.cta}
                                    </Button>
                                </Link>
                            )}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default UpgradePage;
