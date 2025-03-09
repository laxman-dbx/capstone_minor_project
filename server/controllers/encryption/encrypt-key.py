from cryptography.hazmat.primitives import hashes, serialization
from cryptography.hazmat.primitives.asymmetric import rsa,padding
import base64
import sys

def encrypt_aes_key_with_rsa(aes_key_base64, public_key_pem_base64):
    aes_key = base64.b64decode(aes_key_base64)
    public_key_pem = base64.b64decode(public_key_pem_base64)

    public_key = serialization.load_pem_public_key(public_key_pem)

    encrypted_aes_key = public_key.encrypt(
        aes_key,
        padding.OAEP(
            mgf=padding.MGF1(algorithm=hashes.SHA256()),
            algorithm=hashes.SHA256(),
            label=None
        )
    )

    encrypted_aes_key_base64 = base64.b64encode(encrypted_aes_key).decode('utf-8')

    return encrypted_aes_key_base64

aes_key_base64 = base64.b64encode(sys.argv[1].encode('utf-8')).decode('utf-8')
public_key_pem_base64 = base64.b64encode(sys.argv[2].encode('utf-8')).decode('utf-8')
# aes_key_base64 = "8ed3533521b1141523622e09c980da28ac6bf3fd54ea2ba8c5674cb333802cd0"
# public_key_pem_base64 = "-----BEGIN PUBLIC KEY----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzg7HO0ucovB3WHOyJ6HjsUWlvACTnLrKJJBJ1y20p9Ziro2GjY+SiiB371MtKLp7gxyvmbqOo/16r+FF5cDOLRj1KbTtLc67uNv4CLUj8MaygVDIOKJDxGHfErPmZdGEagZcL8B9AXY1Lz6EHmfgRuDZfNsT6qV2HKUKUXlrRCJnrYJL6BNlv4/Lwlrn/E94k7OnZXV9gKoImps5H3ZZYj/HF04ui4mxbf8VT5Lu0l/cs6WaMBaDOOi6cSpGo402rO+ZwIvYKRmo8AEukjDB7VYdGWml6uXFVAzm6HRElwidsmc+XbVNZfuoUr2d5uvxXeXcVXoOYsSpACnPr8tG7wIDAQAB-----END PUBLIC KEY-----"

encrypted_aes_key_base64 = encrypt_aes_key_with_rsa(aes_key_base64, public_key_pem_base64)

print(encrypted_aes_key_base64)


