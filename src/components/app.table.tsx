'use client'

import Link from "next/link"
import { useState } from "react"
import { Button, Table } from "react-bootstrap"
import CreateModal from "./create.modal"
import UpdateModal from "./update.modal"
import { toast } from "react-toastify"
import { mutate } from "swr"


interface IProps {
    blogs: IBlog[]
}
const AppTable =(props: IProps)=>{
    const {blogs} =props
    const [blog, setBlog]= useState<IBlog | null>(null)
    const [showModalCreate,setShowModalCreate]=useState<boolean>(false)
    const [showModalUpdate,setShowModalUpdate]=useState<boolean>(false)

    const handleDeleteBlog = (id: number) => {
        if (confirm(`Do you want to delete this blog (id = ${id})`)) {
            fetch(`http://localhost:8000/blogs/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },

            }).then(res => res.json())
                .then(res => {
                    if (res) {
                        toast.success("Delete blog succeed !");
                        mutate("http://localhost:8000/blogs")
                    }
                });
        }

    }

    return (
       <>
       <div
                className='mb-3'
                style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Table Blogs</h3>
                <Button variant="secondary"
                    onClick={() => setShowModalCreate(true)}
                >Add New</Button>
            </div>
        <Table bordered hover size="sm">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {blogs.map(blog => {
                    return(
                        <tr key={blog.id}>
                            <td>{blog.id}</td>
                            <td>{blog.title}</td>
                            <td>{blog.author}</td>
                            <td>
                                <Link 
                                    className='btn btn-primary'
                                    href={`/blogs/${blog.id}`}
                                >View</Link>
                                <Button className="mx-3"
                                        onClick={()=>{
                                            setBlog(blog)
                                            setShowModalUpdate(true);
                                        }}
                                >Edit</Button>
                                <Button variant='danger' onClick={()=>handleDeleteBlog(blog.id)}>Delete</Button>

                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table> 
        <CreateModal
            showModalCreate={showModalCreate}
            setShowModalCreate={setShowModalCreate}
        />
        <UpdateModal 
            showModalUpdate={showModalUpdate}
            setShowModalUpdate={setShowModalUpdate}
            blog={blog}
            setBlog={setBlog}
        />
       </>
    )
}
export default AppTable