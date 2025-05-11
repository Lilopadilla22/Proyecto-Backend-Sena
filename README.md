# 🧩 Proyecto: Módulo Web con Node.js y EJS

Este proyecto consiste en el desarrollo de un módulo web funcional utilizando tecnologías del entorno JavaScript. Permite registrar usuarios mediante un formulario HTML y mostrar los datos almacenados desde una base de datos MongoDB utilizando vistas EJS. El objetivo es simular el comportamiento clásico de aplicaciones construidas con Servlets y JSP, aplicando buenas prácticas modernas con Node.js y Express.

---

## 🚀 Tecnologías utilizadas

- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **EJS (Embedded JavaScript Templates)**

---

## 🎯 Funcionalidades principales

- Mostrar formulario HTML para registrar usuarios (`GET /formulario`)
- Enviar datos del formulario al backend (`POST /formulario`)
- Mostrar todos los usuarios registrados (`GET /usuarios`)
- Soporte API REST para crear, obtener, actualizar y eliminar usuarios (`/`)

---

## 📂 Estructura del proyecto

```
LILIAPADILLA_AA2_EV02/
├── src/
│   ├── config/         # Conexión a MongoDB
│   ├── controllers/    # Lógica del módulo
│   ├── models/         # Modelo de datos (Mongoose)
│   ├── routes/         # Definición de rutas
│   ├── views/          # Vistas EJS (formulario, listado)
│   └── index.js        # Punto de entrada de la app
├── .env                # Variables de entorno (MONGO_URI, PORT)
├── package.json
├── .gitignore
```


---

## 📌 Rutas principales

| Ruta             | Método | Descripción                       |
|------------------|--------|-----------------------------------|
| `/formulario`    | GET    | Muestra el formulario HTML        |
| `/formulario`    | POST   | Procesa y guarda los datos        |
| `/usuarios`      | GET    | Muestra lista de usuarios         |
| `/`              | GET    | Devuelve todos los usuarios (JSON)|
| `/`              | POST   | Crea un usuario (JSON)            |
| `/:id`           | PUT    | Actualiza usuario por ID (JSON)   |
| `/:id`           | DELETE | Elimina usuario por ID (JSON)     |

---

## ⚠️ Advertencia sobre el versionamiento

Todo el desarrollo del proyecto fue manejado en la **rama `main`**, ya que el repositorio fue creado exclusivamente para presentar actividades del **SENA**. No se utilizaron ramas adicionales porque no es un proyecto colaborativo ni de producción, sino una entrega individual para evidenciar conocimientos.

---

## 🧑‍💻 Autora

- **Lilia Padilla**

---

## ✅ Para correr el proyecto

1. Clonar el repositorio  
2. Crear un archivo `.env` con tu URI de MongoDB:
