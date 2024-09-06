import './review.css'

function Review(){
    return(
        <div id='Review' className='Review'>
    <div className = 'blog-review-container'>
    <div className ='landing-page'>
        <div>
        <img src = './images/blog page1.png' className ='blogs'></img>
    </div>

    <div className ='political-issue'>
    <img src ='./images/political issue.png' className ='blogs'></img>
</div>
</div>
<div>
    <div className = 'economic-issue'>
        <img src= './images/economic issue.png' className ='blogs'></img>
    </div>

   <div className = 'social-issue'>
    <img src = './images/social issue.png' className = 'blogs'>

    </img>
   </div>
   
 </div>
 
 <div className = 'article'>
    <img src = './images/article.png' className = 'blogs'/>
    </div>
 </div>
</div>
 
    )
}

export default Review;