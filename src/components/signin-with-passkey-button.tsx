"use client"

import { env } from "@/env";
import Passkey from "./icons/passkey";
import { Button } from "./ui/button"
import { signInWithPasskey } from "@teamhanko/passkeys-next-auth-provider/client";

const SignInWithPasskey = () => {
    return (
        <Button onClick={() => signInWithPasskey({ tenantId: env.NEXT_PUBLIC_PASSKEYS_TENANT_ID, callbackUrl: `${window.location.origin}/dashboard/settings` })} className="mt-4" variant="secondary"> <Passkey className="w-4 h-4 mr-2" /> Passkey </Button>
    )
}

export default SignInWithPasskey