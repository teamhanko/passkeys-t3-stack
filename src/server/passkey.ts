"use server";

import { tenant } from "@teamhanko/passkeys-next-auth-provider";
import { db } from "./db";
import { getServerAuthSession } from "./auth";
import { env } from "@/env";

const passkeyApi = tenant({
  apiKey: env.PASSKEYS_API_KEY,
  tenantId: env.NEXT_PUBLIC_PASSKEYS_TENANT_ID,
});

export async function startServerPasskeyRegistration() {
  const session = await getServerAuthSession();
  const sessionUser = session?.user;

  if (!sessionUser || !sessionUser.email) {
    throw new Error("Session user or email is not defined");
  }

  const user = await db.user.findUnique({
    where: { email: sessionUser.email },
    select: { id: true, name: true },
  });

  const createOptions = await passkeyApi.registration.initialize({
    userId: user!.id,
    username: user!.name ?? "",
  });

  return createOptions;
}

export async function finishServerPasskeyRegistration(credential: any) {
  const session = await getServerAuthSession();
  if (!session) throw new Error("Not logged in");

  await passkeyApi.registration.finalize(credential);
}
