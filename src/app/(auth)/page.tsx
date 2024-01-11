import SignInWithGithub from "@/components/signin-with-github-button";
import SignInWithPasskey from "@/components/signin-with-passkey-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";


export default async function AuthPage() {
    const session = await getServerAuthSession()

    if (session) {
        return redirect('/dashboard')
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <Card className="w-full max-w-lg">
                <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription className="">Choose your preferred sign in method</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col">
                        <SignInWithGithub />
                        <SignInWithPasskey />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
