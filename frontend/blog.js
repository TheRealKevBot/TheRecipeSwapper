const baseURl = 'http://localhost:3000';
const blogsURL = 'http://localhost:3000/blogs';  

const blogContainer = document.querySelector('.blog-container')

fetch(blogsURL)
    .then(response => response.json())
    .then(blogs => {
        console.log(blogs)
        blogs.forEach(showBlog)
    }) 

    function showBlog(blog){
        const blogCard = document.createElement('div');
        blogCard.classList.add('blog-card');

        const blogImg = document.createElement('img');
        blogImg.classList.add('blog-image');
        blogImg.src = blog.img
        blogImg.alt = blog.title; 

        const blogTitle = document.createElement('h2');
        blogTitle.classList.add('blog-title');
        blogTitle.textContent = blog.title; 

        const blogAuthor = document.createElement('h3');
        blogAuthor.classList.add('blog-author');
        blogAuthor.textContent = `By ${blog.author}`; 

        const viewButton = document.createElement('button')
        viewButton.classList.add('show-page')
        viewButton.textContent = "📚 Read It 📚"
        viewButton.addEventListener('click', () => {
            window.location.replace(`blogShowPage.html?id=${blog.id}`)
        })

        blogCard.append(blogImg, blogTitle, blogAuthor, viewButton)
        console.log(blogCard)
        blogContainer.append(blogCard)
    }