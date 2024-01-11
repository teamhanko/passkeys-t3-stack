"use client"

import { Github } from "lucide-react"
import { Button } from "./ui/button"
import { signIn } from "next-auth/react"

const SignInWithGithub = () => {
    return (
        <Button onClick={() => signIn('github', {
            callbackUrl: `${window.location.origin}/dashboard/settings`,
        })} className="mt-4" variant="secondary">  <Github className="w-4 h-4 mr-2" /> GitHub </Button>
    )
}

export default SignInWithGithub