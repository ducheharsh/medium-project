# Minimalist Blogs ✨

![Designer (12)](https://github.com/ducheharsh/medium-project/assets/79721045/fddb7d0b-eeaf-493d-8719-d81542aafd58)


## Overview 📝

Minimalist Blogs is a sleek and simple blogging platform designed to provide essential blogging features with a clean interface. Users can create, publish, and manage their blogs effortlessly. Additional functionalities are in development to enhance user experience, including:

- [ ] **🖋️ Markdown-based editor**
- [ ] **📊 Portfolios/Dashboards for each user**
- [ ] **📚 Ability to create collections**
- [ ] **📝 Save multiple drafts**
- [ ] **🖼️ Adding media and generating table of contents for blogs**

## Backend 🛠️

This project utilizes a serverless architecture, leveraging Cloudflare Workers for hosting. The backend stack is composed of the following technologies:

### Tech Stack

- **⚡ Hono** as the web framework
- **🗃️ Prisma** as the ORM, with Prisma Accelerate for connection pooling
- **🐘 PostgreSQL** for the database, provided by Avien
- **☁️ Cloudflare Workers** for serverless hosting

## Frontend 💻

The frontend is designed to be minimalist and responsive, providing a seamless user experience. The stack includes:

### Tech Stack

- **⚛️ React** as the frontend framework
- **🌐 React Router Dom** for routing
- **📡 Axios** for data fetching and posting
- **🎨 Tailwind CSS** for styling

## Getting Started 🚀

To get started with Minimalist Blogs, follow these steps:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/minimalist-blogs.git
    cd minimalist-blogs
    ```

2. **Install dependencies for the backend:**

    ```sh
    cd backend
    npm install
    ```

3. **Install dependencies for the frontend:**

    ```sh
    cd frontend
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env` file in both `backend` and `frontend` directories and configure the necessary environment variables as specified in the `.env.example` files.

5. **Run the backend server:**

    ```sh
    cd backend
    npm run dev
    ```

6. **Run the frontend development server:**

    ```sh
    cd frontend
    npm run dev
    ```

7. **You will also need to change the deployed backend URLs for fetching and posting  data to your backend's localhost url to run it locally.**

    ```
     https://backend.ducheharsh.workers.dev/api/v1/*      --replace this
     https://localhost:(`whatever your backend post is`)   -- to this
    ```

## Contributing 🤝

We welcome contributions to enhance the functionalities of Minimalist Blogs. To contribute, please follow these guidelines:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License 📄

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

We appreciate your interest in Minimalist Blogs. If you have any questions or feedback, please feel free to open an issue or contact the maintainers. Happy blogging! ✍️😊
