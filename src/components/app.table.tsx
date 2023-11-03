'use client'

import Link from "next/link"
import { useState } from "react"
import { Button, Table } from "react-bootstrap"
import CreateModal from "./create.modal"
import UpdateModal from "./update.modal"


interface IProps {
    blogs: IBlog[]
}
const AppTable =(props: IProps)=>{
    const {blogs} =props
    const [blog, setBlog]= useState<IBlog | null>(null)
    const [showModalCreate,setShowModalCreate]=useState<boolean>(false)
    const [showModalUpdate,setShowModalUpdate]=useState<boolean>(false)

    return (
       <>
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
                                <Button>Delete</Button>

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