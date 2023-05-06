const createCredentialOptions = {
    publicKey: {
      challenge: new Uint8Array([/* 生成一個隨機的挑戰值 */]),
      rp: {
        id: 'webauthn.me',
        name: 'WebAuthn Demo'
      },
      user: {
        id: new Uint8Array([/* 填寫用戶的唯一識別 */]),
        name: 'user@example.com',
        displayName: 'User'
      },
      pubKeyCredParams: [
        {
          type: 'public-key',
          alg: -7 // 表示使用 ES256 算法
        }
      ],
      attestation: 'direct',
      timeout: 60000
    }
  };
  
  const requestCredentialOptions = {
    publicKey: {
      challenge: new Uint8Array([/* 生成一個隨機的挑戰值 */]),
      allowCredentials: [
        {
          type: 'public-key',
          id: new Uint8Array([/* 填寫註冊時返回的憑證ID */]),
          transports: ['internal']
        }
      ],
      timeout: 60000
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
  
  async function login() {
    try {
      const credential = await navigator.credentials.get(requestCredentialOptions);
      console.log('Credential retrieved:', credential);
      showMessage('Login successful!');
    } catch (error) {
      console.error(error);
      showMessage(`Login failed: ${error.message}`);
    }
  }
  
  function showMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';
  }
  