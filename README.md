# Guía para correr un proyecto con Angular 14 y .NET

Este repositorio contiene un proyecto que combina **Angular 14** para el frontend y **.NET** para el backend. A continuación, te proporcionaré las instrucciones para configurarlo y ejecutarlo en tu máquina local.

## Requisitos previos

Antes de empezar, asegúrate de tener instalados los siguientes programas en tu máquina:

### 1. **Node.js y npm**
   Angular 14 requiere **Node.js 18** y su administrador de paquetes **npm**.

   - **Instalar Node.js**: Ve a [Node.js official website](https://nodejs.org/) y descarga la versión estable.
   - Verifica la instalación:
     ```bash
     node -v
     npm -v
     ```

### 2. **Angular CLI**
   Angular CLI es una herramienta de línea de comandos para Angular.

   - Para instalarla globalmente, ejecuta el siguiente comando:
     ```bash
     npm install -g @angular/cli
     ```

   - Verifica la instalación:
     ```bash
     ng version
     ```

### 3. **.NET SDK**
   Necesitas tener instalado el **.NET SDK** para poder ejecutar el backend.

   - **Instalar .NET SDK**: Ve a [dotnet.microsoft.com](https://dotnet.microsoft.com/download) y descarga la última versión del SDK.
   - Verifica la instalación:
     ```bash
     dotnet --version
     ```

### 4. **Base de datos (opcional)**
   Si tu proyecto usa una base de datos (por ejemplo, SQL Server, MySQL, etc.), asegúrate de tenerla instalada y configurada correctamente.

---

## Configuración del proyecto

### 1. **Correr el FontEnd**
   necesitas descargar las dependencia
   ```bash
   npm i
   ```
   Y ahora para correr el proyecto
   ```bash
   ng serve -o
   ```
   


Run `ng serve` para el servidor de desarrollo. puedes acceder mediante la ruta `http://localhost:4200/`. 



# Antes de correr el back


### Repositorio BackEnd
[Link Repositorio BackEnd](https://github.com/EdsonAmaya7/WeatherAppBE)


---
porfavor ingresa el api key en el archivo señalado,
el archivo se encuentra, dentro de la carpeta Service

![App Screenshot](src\assets\ruta.jpg)

Aqui donde esta indicado puedes actualizar el valor, con el apikey
![App Screenshot](src\assets\apiKey.jpeg)

