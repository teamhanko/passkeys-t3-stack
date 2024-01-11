"use client"

import { finishServerPasskeyRegistration, startServerPasskeyRegistration } from '@/server/passkey';
import { Button } from './ui/button'
import Passkey from './icons/passkey';
import {
    create,
    type CredentialCreationOptionsJSON,
} from "@github/webauthn-json";

const RegisterNewPasskey = () => {
    async function registerPasskey() {
        const createOptions = await startServerPasskeyRegistration();
        const credential = await create(createOptions as CredentialCreationOptionsJSON);
        console.log("credential", credential)
        await finishServerPasskeyRegistration(credential);
    }
    return (
        <Button
            onClick={() => registerPasskey()}
            className="flex justify-center items-center space-x-2"
        >
            <Passkey className="w-4 h-4 mr-2" />
            Register a new passkey
        </Button>
    )
}

export default RegisterNewPasskey