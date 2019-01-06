## Google Cloud Storage
link : [google-cloud auth getting started](https://cloud.google.com/docs/authentication/getting-started)

Exportar variable de entorno:

```
$ export GOOGLE_APPLICATION_CREDENTIALS="/Users/adrianeguez/Documents/Gitlab/manticore-labs/backend/backend/documentacion/google-cloud-api-key.json"
```

Ejemplo de JSON:

```json
{
  "type": "service_account",
  "project_id": "NOMBRE_DOMINIO",
  "private_key_id": "LLAVE_PRIVADA_ID",
  "private_key": "LLAVE_PRIVADA",
  "client_email": "CORREO",
  "client_id": "ID_CLIENTE",
  "auth_uri": "URI_AUTH",
  "token_uri": "TOKEN_URI",
  "auth_provider_x509_cert_url": "CERT_URL",
  "client_x509_cert_url": "CERT_509_URL"
}
```