import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const RATE_LIMIT_REQUESTS = 3; // Number of requests allowed
const RATE_LIMIT_WINDOW = 60 * 60; // Time window in seconds (1 hour)

export async function rateLimit(request: NextRequest) {
  // Use a combination of IP and User-Agent as a unique identifier
  const ip =
    request.ip ?? request.headers.get("x-forwarded-for") ?? "127.0.0.1";
  const userAgent = request.headers.get("user-agent") ?? "unknown";
  const key = `ratelimit_${ip}_${userAgent}`;

  const [currentUsage] = await redis
    .multi()
    .incr(key)
    .expire(key, RATE_LIMIT_WINDOW)
    .exec();

  const remaining = Math.max(0, RATE_LIMIT_REQUESTS - (currentUsage as number));

  const headers = new Headers();
  headers.set("X-RateLimit-Limit", String(RATE_LIMIT_REQUESTS));
  headers.set("X-RateLimit-Remaining", String(remaining));
  headers.set("X-RateLimit-Reset", String(RATE_LIMIT_WINDOW));

  if ((currentUsage as number) > RATE_LIMIT_REQUESTS) {
    return NextResponse.json(
      { error: "Rate limit exceeded" },
      { status: 429, headers }
    );
  }

  return { success: true, remaining, headers };
}
