

const Bookmarks = ({bookmarks}) => {
    // console.log(bookmarks);
    return (
        <div className="lg:w-1/3 w-full">
            
            <h2 className="text-3xl font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
        </div>
    );
};

export default Bookmarks;