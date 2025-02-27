# DotnetTypescriptExample

This is an example of a **.NET 9 Web API** with a **frontend using HTML, TypeScript, and Gulp** for automated builds.

## 📌 Features
- 🛠 **.NET 9 Web API** serving backend endpoints.
- 🌐 **Frontend built with TypeScript** and compiled using Gulp.
- 📦 **Uses `npx tsc`** for TypeScript compilation.
- 📂 **Project structure follows best practices** for separating frontend & backend.

## 🚀 Getting Started

### **1️⃣ Prerequisites**
- Install **Node.js** (LTS recommended) 👉 [Download](https://nodejs.org/)
- Install **.NET 9 SDK** 👉 [Download](https://dotnet.microsoft.com/en-us/download/dotnet/9.0)

### **2️⃣ Install Dependencies**
Run the following command inside `DotnetTypescriptExample.Front/`:
```console
npm install
```

### **3️⃣ Running the Backend**
Inside DotnetTypescriptExample.Api/, start the API:
```console
dotnet run
```

### **4️⃣ Compiling the Frontend**
Inside DotnetTypescriptExample.Front/, compile TypeScript using Gulp:
gulp

## 📜 License
This project is MIT Licensed.

## 💡 Notes
- TypeScript is compiled into wwwroot/scripts/, which is ignored by Git.
