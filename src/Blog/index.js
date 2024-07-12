import './index.css'

function Blog(){
    return(
<div>
    
       <div className='blog-text'>
        <p>Femme Blogs</p>
    </div>
    <div className='blog-layout-container'>

     <div className='book-cover'>
        <img src='images/Born A crime.jpg'></img>
        </div>

    <div className='aerial-view-book'>
        <img src='images/aerial view book.jpg'></img>
    </div>

    <div className='books-and-flowers'>
        <img src = 'images/books and flowers.jpg'></img>

    </div>
    
        </div>
        <div className='button'>
            <button>Read More</button>
        </div>

</div>
    
    )
       
          
    }
export default Blog;
