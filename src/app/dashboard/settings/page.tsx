import RegisterNewPasskey from '@/components/register-new-passkey-button'

const Settings = () => {
    return (
        <div className="p-10 rounded-lg border border-muted mt-10 m-20">
            <div className="space-y-6">
                <div className="space-y-3">
                    <h2 className="text-xl font-medium">Register a passkey</h2>
                    <p className="text-sm text-secondary-foreground mt-3">
                        Register a passkey to make logging in a breeze.
                    </p>
                </div>
                <RegisterNewPasskey />
            </div>
        </div>
    )
}

export default Settings