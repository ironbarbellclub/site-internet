# 🏋️ Iron Barbell Club — Site React

Conversion fidèle du site HTML en **React (Vite)**, avec :

- ✅ **Tout le texte dans un fichier JSON** (`src/content/fr.json`) → modifiable et traduisible sans toucher au code
- ✅ **Images en local** (`src/assets/images/`) — reprises du site d'origine
- ✅ **Formulaire de contact EmailJS** → les messages arrivent directement sur ton Gmail
- ✅ **Lien "Se connecter"** dans le menu (URL configurable dans le JSON)
- ✅ **Aucune base de données** — 100% statique, parfait pour Netlify
- ✅ CSS d'origine conservé à l'identique (`src/styles/`)

---

## 🚀 Démarrer en local

```bash
npm install
cp .env.example .env    # puis remplis les 3 clés EmailJS (voir ci-dessous)
npm run dev             # → http://localhost:5173
```

---

## ✏️ Modifier les textes

**Tout** le contenu est dans `src/content/fr.json` : titres, menus, tarifs, formulaire, footer...
Modifie le JSON, sauvegarde, c'est en ligne au prochain déploiement. Aucun code à toucher.

### Ajouter une langue plus tard

1. Duplique `fr.json` → `en.json` et traduis les valeurs
2. Dans `src/content/index.js`, suis les commentaires (3 lignes à décommenter)

### Changer le lien "Se connecter"

Dans `fr.json` → `nav.loginUrl`. Mets l'URL de ton application de coaching quand elle sera en ligne.

---

## 📧 Configurer EmailJS (lié à ton Gmail)

EmailJS envoie les messages du formulaire **directement sur ta boîte Gmail**, sans serveur. Gratuit jusqu'à 200 emails/mois.

1. Crée un compte sur [emailjs.com](https://www.emailjs.com)
2. **Email Services** → *Add New Service* → **Gmail** → connecte ton compte Google → note le **Service ID** (ex : `service_ab12cd3`)
3. **Email Templates** → *Create New Template* :
   - **To Email** : ton adresse Gmail
   - **Subject** : `Nouveau contact IBC — {{prenom}} {{nom}}`
   - **Content** :
     ```
     Nouveau message depuis le site Iron Barbell Club :

     Prénom : {{prenom}}
     Nom : {{nom}}
     Email : {{email}}
     Téléphone : {{telephone}}
     Formule : {{formule}}

     Message :
     {{message}}
     ```
   - Note le **Template ID** (ex : `template_xy98zw7`)
4. **Account → General** → copie ta **Public Key**
5. Renseigne les 3 valeurs dans `.env` (local) **et** dans Netlify (production, voir ci-dessous)

> ⚠️ Les noms de variables du template (`{{prenom}}`, `{{nom}}`, `{{email}}`, `{{telephone}}`, `{{formule}}`, `{{message}}`) doivent correspondre exactement — ils sont déjà câblés dans le formulaire.

---

## 🌐 Déployer sur Netlify

### Option A — Depuis GitHub (recommandé : déploiement auto à chaque push)

1. Pousse ce projet sur ton repo GitHub (`ironbarbellclub/site-internet` ou un nouveau repo)
2. Sur [app.netlify.com](https://app.netlify.com) → *Add new site* → *Import an existing project* → choisis ton repo
3. Netlify détecte tout automatiquement grâce au fichier `netlify.toml` (build : `npm run build`, dossier : `dist`)
4. **Avant de déployer** : *Site configuration → Environment variables* → ajoute :
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
5. *Deploy* 🚀

### Option B — Drag & drop (rapide, sans Git)

```bash
npm run build
```
Puis glisse le dossier `dist/` sur [app.netlify.com/drop](https://app.netlify.com/drop).
⚠️ Avec cette option, crée d'abord un fichier `.env` rempli en local avant le build (les clés sont intégrées au moment du build).

### 🌍 Nom de domaine

1. Netlify → *Domain management* → *Add custom domain* → entre ton domaine (ex : `ironbarbellclub.fr`)
2. **Si tu achètes le domaine chez Netlify** : tout est automatique (DNS + HTTPS)
3. **Si le domaine est ailleurs** (OVH, Gandi...) : chez ton registrar, configure :
   - Enregistrement `A` → `75.2.60.5`
   - Enregistrement `CNAME` pour `www` → `TON-SITE.netlify.app`
   ou plus simple : utilise les **DNS Netlify** (Netlify te donne 4 serveurs de noms à renseigner chez ton registrar)
4. HTTPS (Let's Encrypt) s'active automatiquement en quelques minutes

---

## 📁 Structure

```
ibc-site/
├── index.html               ← Meta SEO (title, description, OG)
├── netlify.toml             ← Config Netlify (build + redirections)
├── .env.example             ← Modèle des clés EmailJS
├── public/                  ← favicon, robots.txt
└── src/
    ├── content/
    │   ├── fr.json          ← ★ TOUT LE TEXTE DU SITE ★
    │   └── index.js         ← Sélecteur de langue (prêt pour i18n)
    ├── styles/              ← CSS d'origine (variables, style, responsive)
    ├── assets/images/       ← Images locales (logo, fondateur, disciplines...)
    └── components/          ← Header, Hero, Ticker, Philosophy, Disciplines,
                                Quote, Coach, Pricing, Contact (EmailJS), Footer
```

---

## 📨 Emails aux couleurs du club (dossier `email/`)

### Template EmailJS (`email/emailjs-template.html`)
Design noir/rouge du site pour les messages reçus du formulaire :
1. EmailJS → **Email Templates** → ton template → onglet **Design** → bouton **`</>`** (code editor)
2. Colle tout le contenu du fichier
3. Remplace `VOTRE-SITE.netlify.app` par ton domaine (pour afficher le logo)
4. Le bouton **"Répondre à {{prenom}}"** ouvre directement une réponse pré-adressée

### Signature Gmail (`email/signature-gmail.html`)
Signature adaptable par personne/rôle :
1. Ouvre le fichier dans un navigateur → tout sélectionner → copier
2. Gmail → ⚙️ → Voir tous les paramètres → Général → **Signature** → coller
3. Pour chaque membre : modifie les 3 zones marquées `✏️ MODIFIER ICI` (nom, rôle, téléphone)
4. Exemples de rôles fournis en commentaire dans le fichier

## 🖼️ Images détourées (fond transparent)
Le CSS est déjà prêt : toute image avec la classe `philosophy-cutout` s'affiche **sans fond, centrée, jamais étirée, avec une ombre portée**. Quand tu auras retiré le fond de tes photos :
1. Exporte en **PNG** ou mieux **WebP** avec transparence (remove.bg puis squoosh.app pour compresser)
2. Remplace le fichier dans `src/assets/images/` en gardant le même nom
