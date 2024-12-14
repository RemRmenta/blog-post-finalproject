
        const postsContainer = document.getElementById("posts-container");
        const postModal = document.getElementById("post-modal");
        const deleteModal = document.getElementById("delete-modal");
        const postTitleInput = document.getElementById("post-title");
        const postBodyInput = document.getElementById("post-body");
        const modalTitle = document.getElementById("modal-title");
        const postForm = document.getElementById("post-form");
        const notification = document.getElementById("notification");
        const notificationMessage = document.getElementById("notification-message");

        let posts = [];
        let editingPostId = null;
        let deletingPostId = null;

        // Fetch posts
        async function fetchPosts() {
            const cachedPosts = JSON.parse(sessionStorage.getItem("posts"));
            if (cachedPosts) {
                posts = cachedPosts;
                renderPosts();
            } else {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                posts = await response.json();
                sessionStorage.setItem("posts", JSON.stringify(posts));
                renderPosts();
            }
        }

        // Render posts
        function renderPosts() {
            postsContainer.innerHTML = posts
                .map(
                    post => `
                    <div class="post" data-id="${post.id}">
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                        <div class="buttons">
                            <button class="edit-btn" onclick="editPost(${post.id})">Edit</button>
                            <button class="delete-btn" onclick="openDeleteModal(${post.id})">Delete</button>
                        </div>
                    </div>
                `
                )
                .join("");
        }

        // Open modal
        function openAddModal() {
            modalTitle.textContent = "Add Post";
            postTitleInput.value = "";
            postBodyInput.value = "";
            editingPostId = null;
            postModal.classList.add("active");
        }

        function openEditModal(post) {
            modalTitle.textContent = "Edit Post";
            postTitleInput.value = post.title;
            postBodyInput.value = post.body;
            postModal.classList.add("active");
        }

        // Close modal
        function closeModal() {
            postModal.classList.remove("active");
        }

        // Open delete confirmation modal
        function openDeleteModal(id) {
            deletingPostId = id;
            deleteModal.classList.add("active");
        }

        // Close delete confirmation modal
        function closeDeleteModal() {
            deleteModal.classList.remove("active");
        }

        // Show notification
        function showNotification(message) {
            notificationMessage.textContent = message;
            notification.classList.add("active");
        }

        // Close notification
        function closeNotification() {
            notification.classList.remove("active");
        }

        // Submit form
        async function submitForm(event) {
            event.preventDefault();
            const title = postTitleInput.value;
            const body = postBodyInput.value;

            if (editingPostId) {
                // Update post
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${editingPostId}`,
                    {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ title, body }),
                    }
                );

                if (response.ok) {
                    const updatedPost = await response.json();
                    posts = posts.map(post => (post.id === editingPostId ? updatedPost : post));
                    sessionStorage.setItem("posts", JSON.stringify(posts));
                    renderPosts();
                    closeModal();
                    showNotification("Post edited successfully!");
                }
            } else {
                // Add new post
                const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ title, body }),
                });

                if (response.ok) {
                    const newPost = await response.json();
                    posts.unshift(newPost);
                    sessionStorage.setItem("posts", JSON.stringify(posts));
                    renderPosts();
                    closeModal();
                    showNotification("Post added successfully!");
                }
            }
        }

        // Edit post
        function editPost(id) {
            const post = posts.find(post => post.id === id);
            if (post) {
                editingPostId = id;
                openEditModal(post);
            }
        }

        // Delete post
        async function confirmDelete() {
            if (!deletingPostId) return;

            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${deletingPostId}`, {
                method: "DELETE",
            });

            if (response.ok) {
                posts = posts.filter(post => post.id !== deletingPostId);
                sessionStorage.setItem("posts", JSON.stringify(posts));
                renderPosts();
                closeDeleteModal();
                showNotification("Post deleted successfully!");
            }
        }

        // Initialize
        fetchPosts();

        // Close modal on outside click
        postModal.addEventListener("click", e => {
            if (e.target === postModal) closeModal();
        });

        deleteModal.addEventListener("click", e => {
            if (e.target === deleteModal) closeDeleteModal();
        });