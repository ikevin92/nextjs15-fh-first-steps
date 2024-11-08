FROM node:22-alpine

# Instala pnpm globalmente
RUN npm install -g pnpm

WORKDIR /app

# Copia solo los archivos de dependencias
COPY package.json pnpm-lock.yaml* ./

# Instala las dependencias usando pnpm
RUN pnpm install --frozen-lockfile

# Copia el resto de la aplicación
COPY . .

# Construye la aplicación
RUN pnpm run build

# Expone el puerto de la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["pnpm", "start"]
