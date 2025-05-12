import Cookies from 'js-cookie';
import { SubscriptionPlan } from 'fetch-subscription-status';

interface UsageData {
    [date: string]: number;
}

function getMaxDailyUses(plan: SubscriptionPlan): number {
    switch (plan) {
        case SubscriptionPlan.TRIAL:
            return 10;
        case SubscriptionPlan.MONTHLY:
            return 80;
        default:
            return 10; // Default to trial limit
    }
}

export const trackSubscriptionUsage = (
    plan: SubscriptionPlan,
    pageCount: number | null = null
): boolean => {
    const today = new Date().toISOString().split('T')[0];
    const COOKIE_NAME = 'subscriptionUsage';
    const maxDailyUses = getMaxDailyUses(plan);
    const usageData: UsageData = JSON.parse(Cookies.get(COOKIE_NAME) || '{}');

    if (!usageData[today]) {
        usageData[today] = 0;
    }

    let usageIncrement = 1;
    if (plan === SubscriptionPlan.TRIAL && pageCount !== null) {
        if (pageCount > 100) return false;
        usageIncrement = pageCount <= 50 ? 1 : 2;
    }

    if (usageData[today] + usageIncrement > maxDailyUses) {
        return false;
    }

    usageData[today] += usageIncrement;
    Cookies.set(COOKIE_NAME, JSON.stringify(usageData), { expires: 1, path: '/' });
    return true;
};

export const getRemainingUsage = (plan: SubscriptionPlan): number => {
    const today = new Date().toISOString().split('T')[0];
    const COOKIE_NAME = 'subscriptionUsage';
    const maxDailyUses = getMaxDailyUses(plan);
    const usageData: UsageData = JSON.parse(Cookies.get(COOKIE_NAME) || '{}');
    const todayUsage = usageData[today] || 0;

    return Math.max(0, maxDailyUses - todayUsage);
};