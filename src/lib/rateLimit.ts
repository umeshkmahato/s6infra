type RateLimitResult = {
  allowed: boolean;
  retryAfter: number;
  remaining: number;
};

declare global {
  var __s6ContactRateLimitStore: Map<string, number[]> | undefined;
}

const getStore = () => {
  if (!globalThis.__s6ContactRateLimitStore) {
    globalThis.__s6ContactRateLimitStore = new Map<string, number[]>();
  }

  return globalThis.__s6ContactRateLimitStore;
};

export function checkRateLimit(key: string, maxRequests: number, windowMs: number): RateLimitResult {
  const now = Date.now();
  const store = getStore();
  const timestamps = (store.get(key) ?? []).filter((timestamp) => now - timestamp < windowMs);

  if (timestamps.length >= maxRequests) {
    const retryAfter = Math.max(1, Math.ceil((windowMs - (now - timestamps[0])) / 1000));
    store.set(key, timestamps);

    return {
      allowed: false,
      retryAfter,
      remaining: 0,
    };
  }

  timestamps.push(now);
  store.set(key, timestamps);

  return {
    allowed: true,
    retryAfter: 0,
    remaining: Math.max(0, maxRequests - timestamps.length),
  };
}

