# Etapa 1: Construcción
FROM node:18 AS build

# Crear el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos necesarios
COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src

# Instalar dependencias
RUN npm install

# Compilar el proyecto
RUN npm run build

# Etapa 2: Ejecución
FROM node:18

# Crear el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar las dependencias instaladas y los archivos compilados desde la etapa de construcción
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./

# Instalar únicamente las dependencias de producción
RUN npm install --only=production

# Exponer el puerto que usará tu API
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
