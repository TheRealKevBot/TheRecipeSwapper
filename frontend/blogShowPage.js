const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id') 

const blogShowContainer = document.querySelector('.blog-show-container')

fetch(`http://localhost:3000/blogs/${id}`)
    .then(response => response.json())
    .then(blog => {
        const blogCard = document.createElement('div');
        blogCard.classList.add('blog-card');

        const blogTitle = document.createElement('h2');
        blogTitle.classList.add('blog-title');
        blogTitle.textContent = blog.title; 

        const blogAuthor = document.createElement('h3');
        blogAuthor.classList.add('blog-author');
        blogAuthor.textContent = `By ${blog.author}`; 

        const blogImg = document.createElement('img');
        blogImg.classList.add('blog-image');
        blogImg.src = blog.img
        blogImg.alt = blog.title; 

        const blogContent = document.createElement('p')
        blogContent.classList.add('blog-content')
        blogContent.textContent = blog.content

        blogCard.append(blogTitle, blogAuthor, blogImg, blogContent)
        blogShowContainer.append(blogCard)
    })