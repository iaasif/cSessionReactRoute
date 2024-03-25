import { useEffect, useState } from 'react';
import { deleteBlogs, getBlogs } from '../utils';
import BlogCard from '../components/BlogCard';
import EmptyState from '../components/EmptyState';


// console.log(blogs);

const Bookmarks = () => {

    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);

    }, [])

    // {address,msg,lable}

    const handleDelete = id => {
        deleteBlogs(id);
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);

    }

    if (blogs.length < 1) return <EmptyState msg='no bookmaks available '
        address={'/Blogs'}
        lable='go to blogs'    ></EmptyState >

    return (
        <div className=" grid px-4  gap-5 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* console.log(blogs); */}
            {
                blogs.map(blog =>
                    <BlogCard
                        handleDelete={handleDelete}
                        blog={blog} key={blog.id}
                        deletable={true}
                    >
                    </BlogCard>)
            }
        </div>
    );
};

export default Bookmarks;