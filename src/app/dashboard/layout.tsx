import { UserAccountNav } from "@/components/user-nav"
import { getServerAuthSession } from "@/server/auth"



export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await getServerAuthSession()
    const user = session?.user
    return (
        <div>
            <header className='flex justify-between items-center p-6 px-12 border-b'>
                <div>
                    <p className="text-2xl font-bold">Hanko</p>
                </div>
                <UserAccountNav
                    user={{
                        name: user?.name,
                        image: user?.image,
                        email: user?.email,
                    }}
                />
            </header>
            <main>{children}</main>
        </div>
    )
}
