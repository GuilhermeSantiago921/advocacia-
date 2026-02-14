# Escritório de Advocacia – Landing Page

**Landing page de atendimento jurídico com foco em conversão via WhatsApp.**

## 🚀 Deploy no Vercel

1. Faça push do repositório para GitHub
2. Acesse [vercel.com](https://vercel.com) e conecte a conta
3. Importe este repositório
4. Configure a variável de ambiente `WHATSAPP_PHONE` (opcional, veja abaixo)
5. Deploy automático em produção

## 📋 Checklist antes de publicar

- [ ] Atualizar `WHATSAPP_PHONE` em `index.html` (3 ocorrências)
- [ ] Atualizar nome do escritório (`Santiago & Associados`)
- [ ] Configurar coordenadas corretas do Google Maps em `id="localizacao"`
- [ ] Revisar lista de serviços conforme áreas de atuação
- [ ] Adicionar depoimentos reais de clientes
- [ ] Ajustar cores em `styles.css` se necessário (variáveis CSS no `:root`)

## 📁 Estrutura de arquivos

```
.
├── index.html       (HTML semântico)
├── styles.css       (Estilos responsivos)
├── script.js        (Interações e validação)
├── vercel.json      (Config de deploy)
├── .gitignore       (Arquivos ignorados)
└── README.md        (Este arquivo)
```

## 🔧 Variáveis de ambiente

Opcionalmente, configure no `.env.local` (desenvolvimento) ou no Vercel (produção):

```
WHATSAPP_PHONE=5511999999999
```

## 🎨 Personalização

### Cores
Edite as variáveis CSS no início de `styles.css` (`:root`)

### Serviços
Atualize a lista em `index.html` seção `#servicos`

### Depoimentos
Substituir exemplos na seção `#depoimentos`

### Mapa
Modifique a URL do iframe em `#localizacao` com as coordenadas reais

## 📊 Performance

- ✅ 100% HTML/CSS/JS estático (zero latência)
- ✅ Lazy loading de imagens e iframe de mapa
- ✅ Resposta imediata em qualquer dispositivo
- ✅ Otimizado para Core Web Vitals

## 📱 Responsividade

- Desktop (1200px+): 3 colunas
- Tablet (680px–1000px): 2 colunas
- Mobile (<680px): 1 coluna full-width