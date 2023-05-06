const createCredentialOptions = {
    publicKey: {
        challenge: new Uint8Array([/* 生成一個隨機的挑戰值 */]),
        rp: {
            name: 'WebAuthn Demo',
        },
        user: {
            id: new Uint8Array([/* 填寫用戶的唯一識別 */]),
            name: 'user@example.com',
            displayName: 'User',
        },
        pubKeyCredParams: [
            {
                type: 'public-key',
                alg: -257, // 表示使用ES256算法
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
