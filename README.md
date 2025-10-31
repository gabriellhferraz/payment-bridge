# payment-bridge

O **payment-bridge** é um microserviço desenvolvido em **Node.js + TypeScript** que funciona como uma ponte entre diversos gateways de pagamento, como Asaas, Cielo, Mercado Pago, PagSeguro, entre outros.

Ele centraliza e padroniza o fluxo de pagamentos, simplificando a integração entre sistemas e reduzindo a complexidade de lidar com múltiplas APIs.

---

## 🚀 Objetivo

* Unificar integrações com múltiplos gateways
* Padronizar requests e responses entre sistemas diferentes
* Facilitar a troca ou adição de novos provedores
* Reduzir acoplamento entre aplicação principal e serviços de pagamento

---

## 🏛️ Arquitetura

* **Express** como framework HTTP
* **TypeScript** para tipagem forte e segurança
* **Providers** independentes para cada gateway
* Camada de **orquestração** para escolher o provedor conforme regra de negócio

```
src/
 ├ core/
 │   └ payment-bridge.ts
 ├ providers/
 │   ├ asaas/
 │   │   └ asaas.service.ts
 │   └ cielo/
 │       └ cielo.service.ts
 ├ routes/
 │   └ payment.routes.ts
 └ index.ts
```

---

## 🔌 Exemplos de Uso

### Health Check

```
GET /health
```

Retorno:

```
{
  "status": "ok",
  "service": "payment-bridge"
}
```

---

## ⚙️ Variáveis de Ambiente

Configure um arquivo `.env` com as credenciais necessárias. Exemplo:

```
PORT=3000
ASAAS_API_KEY=seu_token_aqui
ASAAS_BASE_URL=https://api.asaas.com/v3
```

---

## 🛣️ Roadmap

* [ ] Suporte ao gateway Asaas
* [ ] Suporte ao gateway Cielo
* [ ] Suporte ao Mercado Pago
* [ ] Webhooks padronizados
* [ ] Logs estruturados + Monitoramento

---

## 📄 Licença

Projeto sob licença MIT.
