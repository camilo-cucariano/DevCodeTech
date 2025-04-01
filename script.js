document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.getElementById("blog-container");
    
    const blogPosts = [
        { title: "Primer Post", content: "Este es el primer artículo del blog." },
        { title: "Segundo Post", content: "Aquí va otro artículo interesante." }
    ];
    
    blogContainer.innerHTML = "";
    blogPosts.forEach(post => {
        let article = document.createElement("div");
        article.classList.add("blog-post");
        article.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        blogContainer.appendChild(article);
    });
});
