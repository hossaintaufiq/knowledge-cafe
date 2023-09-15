import PropTypes from 'prop-types';

const Blog = ({blog,HandleAddToBookMark}) => {
    const {cover_img,author_img,author,posted_date,reading_time,headline,hashtag}= blog;
    return (
        <div className=''>
            <img src={cover_img} alt="" />
            <div className='flex justify-between items-center mt-2'>
                <div className='flex gap-2  items-center'>
                    <img src={author_img} alt="" className='w-[60px] h-[60px] rounded-full'/>
                    <div>
                    <h2>{author}</h2>
                    <h3>{posted_date}</h3>
                    </div>
                </div>

                <div className='flex gap-1'>
                <h2>{reading_time} Min read</h2>
                <button
                onClick={()=>HandleAddToBookMark(blog)}
                
                ><img src="Frame.png" alt="" /></button>
                

                </div>
            </div>
            <h1> {headline}</h1>
            <h2><a href="">{hashtag}</a></h2>


            
        </div>
    );
};

Blog.PropTypes={
    blog: PropTypes.object.isRequired,
    HandleAddToBookMark: PropTypes.func
        
    
}
export default Blog;