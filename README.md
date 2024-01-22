# Hanko Passkey Starter for T3 Stack

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app` along with Hanko Passkey API for logging in with passkey.


If you are not familiar with the different technologies used in this project, please refer to the respective docs.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- [Hanko Passkey API](https://www.hanko.io/features/hanko-passkey-api)

## Clone the repo

```bash
git clone https://github.com/teamhanko/t3-stack-with-passkeys.git
```

## Add the environment variables

Add the following environment variables to `.env` file.

```sh
NEXTAUTH_SECRET=random-string
NEXTAUTH_URL=http://localhost:3000

GITHUB_ID=
GITHUB_SECRET_ID=

DATABASE_URL=your-db-url

PASSKEYS_API_KEY=your-hanko-passkey-api-key
NEXT_PUBLIC_PASSKEYS_TENANT_ID=your-hanko-passkey-tenant-id
```

## Install dependencies

```bash
pnpm install
```

## Run the project

```bash
pnpm run dev
```




