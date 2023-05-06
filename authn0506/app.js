const createCredentialOptions = {
    publicKey: {
        const challenge = new Uint8Array(32); // 生成 32 個隨機的位元組
        crypto.getRandomValues(challenge); // 使用 crypto.getRandomValues() 方法填充挑戰值,
        rp: {
            id:'webauthn.me',
            name: 'WebAuthn Demo',
        },
        user: {
            id: new Uint8Array(20010922),
            name: 'user@example.com',
            displayName: 'User',
        },
        pubKeyCredParams: [
    {
        type: 'public-key',
        alg: -7, // ES256 算法的識別符
    },
    {
        type: 'public-key',
        alg: -257, // RS256 算法的識別符
    }
],
        authenticatorSelection: {
            authenticatorAttachment: 'platform',
        },
        attestation: 'direct',
        timeout: 60000,
    }
};

async function register() {
    try {
        const credential = await navigator.credentials.create(createCredentialOptions);
        console.log('Credential created:', credential);
        showMessage('Registration successful!');
    } catch (error) {
        console.error(error);
        showMessage(`Registration failed: ${error.message}`);
    }
}

function showMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';
}
