# Din Naturliga Guide Till Graviditetsdiabetes (GDM)
OBS! Detta projekt finns i identisk upplaga med engelsk titel.

## Beskrivning
Detta är ett examensarbete för Frontenduvecklarstudier på Medieinstitutet i Stockholm (2022-2024).

Jag valde att bygga en app som ger naturliga tips och info på hur man kan hantera en graviditetsdiabetes (GDM).
Appen har även en sökfunktion för att söka fram ett livsmedels näringsvärden (datan hämtas dynamiskt från en JSON-fil), källan för denna livsmedelsdata är Livsmedelsverket i Sverige.

Projektet är förberett för en implementering av api-anrop till: 
- Svenska Livsmedelsverket (LSV). Dock kräver detta en proxy-server då api-anropen från frontenden får nekad åtkomst pga CORS.
- FoodCentral API (usda.gov) för att kunna lägga till engelskt sök.

Denna applikation är byggd i React + TypeScript + Vite.

Projektets språk är svenska.

OBS! Då GitHub inte stödjer SPA's (Single Page Applications) innebär detta att om du uppdaterar någon av applikationens 'subpages' (annat än startsidan) får du en 404 från GitHub. 
Om detta sker - för att fixa detta - vänligen återgå till startsidans url (https://ayngie.github.io/naturlig-guide-till-graviditetsdiabetes/), därefter kan du navigera mha navbar, och uppdatera inte sidan som är deployad med GitHub Actions :)

## Tekniker använda (shields/badges)
![React badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB/to/img.png)
![React Router badge](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white/to/img.png)
![Styled Components badge](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white/to/img.png)
![TypeScript badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white/to/img.png)
![JSON badge](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white/to/img.png)
![Vite badge](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E/to/img.png)
![Cypress badge](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white/to/img.png)
![SPA badge](https://img.shields.io/badge/SPA-0FAAFF?style=for-the-badge&logo=sap&logoColor=white/to/img.png)
![Git badge](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white/to/img.png) 
![npm badge](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white/to/img.png)
![VSCode badge](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white/to/img.png)
![ESLint badge](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white/to/img.png)
![Prettier badge](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E/to/img.png)
![HTML5 badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white/to/img.png)
![JavaScript badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E/to/img.png)
![Adobe Photoshop badge](https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black/to/img.png)
![Axios badge](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white/to/img.png)
![Postman badge](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white/to/img.png)
![.env badge](https://img.shields.io/badge/.env%20-%20%23FF4FA7?style=for-the-badge&color=%23FF4FA7/to/img.png)
![GitHub badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white/to/img.png)
![GitHub Actions badge](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white./to/img.png)


---

## Git commit konvention:
- 👷 build: - *project build-up*
- 📝 docs: - *documentation / README*
- ✨ feat: - *introduces a new feature to the codebase*
- ♻️ refactor: - *refactoring of code*
- 💄 style: - *css/scss styling*
- 🐛 bugfix: - *patches a bug in your codebase*
- 🚚 moved: - *moved files*
- 🔥 deleted: - *deleted files or code*
- ⏪ revert: - *revert to previous code*
- ✅ test: - *add or update tests*

---

## Skärmbild på projektet:
![Demonstration of my degree project](./public/Project-screenshot.png?raw=true "Your Natural Guide to Gestational Diabetes")

---

## Kör lokalt:

Klona ned projektet

```terminal
  git clone https://github.com/Ayngie/naturlig-guide-till-graviditetsdiabetes.git
```

Gå till projectmappen

```terminal
  cd naturlig-guide-till-graviditetsdiabetes
```

Installera dependencies

```terminal
  npm install
```

Starta servern

```terminal
  npm run dev
```
