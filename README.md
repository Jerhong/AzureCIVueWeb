# 🚀 部署 Vue 3 + Vite + TypeScript 專案到 Azure 靜態網頁應用程式 (Azure Static Web Apps)

本指南詳細說明如何使用 **SWA CLI (Azure Static Web Apps CLI)** 來將 Vue 3 + Vite + TypeScript 應用程式部署到 **Azure Static Web Apps (SWA)**。

---

## 📌 1. 安裝必要工具

### 🔹 1.1 安裝 Node.js (如果未安裝)
請確保你的開發環境已安裝 **Node.js 14+**，可以在端末機 (Terminal / CMD / PowerShell) 輸入以下命令來確認：
```sh
node -v
```
若未安裝，請前往 [Node.js 官方網站](https://nodejs.org/) 下載並安裝最新版本。

### 🔹 1.2 安裝 SWA CLI
使用 `npm` 安裝 Azure Static Web Apps CLI：
```sh
npm install -g @azure/static-web-apps-cli
```
安裝完成後，驗證是否安裝成功：
```sh
swa --version
```

---

## 📌 2. 建立 Vue 3 + Vite + TypeScript 應用 (可略過)
如果你還沒有 Vue 3 + Vite + TypeScript 應用程式，請先建立：
```sh
npm create vite@latest AzureVueWeb --template vue-ts
cd AzureVueWeb
code .
npm install
npm install vue-router
npm install axios vue-i18n quasar @quasar/extras dayjs material-symbols
npm install -D @intlify/unplugin-vue-i18n @quasar/vite-plugin sass vite-plugin-pwa chalk inquirer ora typescript

```
## 自行建置專案內容&Vite.config配置....
---

## 📌 3. 本地開發與測試

### 🔹 3.1 啟動開發伺服器
```sh
npm run dev
```
這將啟動 Vite 開發伺服器，並在 `http://localhost:5175` 運行。

### 🔹 3.2 編譯應用
在部署前，必須先編譯 Vue 3 + Vite + TypeScript 應用：
```sh
npm run build
```
這將會在 `dist/` 資料夾內生成靜態網頁。

### 🔹 3.3 使用 SWA CLI 測試本地環境
```sh
swa start dist
```
這會啟動一個本地測試伺服器，網址：
```
http://localhost:4280
```
如果你的專案有 **Azure Functions API**，請使用：
```sh
swa start dist --api-location api
```

---

## 📌 4. 登入 Azure
如果尚未登入 Azure，請執行：
```sh
swa login
```
這將開啟瀏覽器，要求你使用 **Azure 帳戶** 登入。

---

## 📌 5. 部署到 Azure Static Web Apps

### 🔹 5.1 使用 SWA CLI 直接部署
如果 Azure 上只有一個 SWA，可以直接執行：
```sh
swa deploy --app-location dist --env production
```
如果 Azure 有 **多個 SWA**，需要指定部署目標：
```sh
swa deploy --app-location dist --env production --app-name VueTest
```
或者使用 **部署 Token** 確保部署到正確的 SWA：
```sh
swa deploy --app-location dist --env production --deployment-token "Azure部署 Token"
```

---

🚀 **恩，現在你的 Vue 3 + Vite + TypeScript 專案已成功部署到 Azure Static Web Apps ！** 🎉

