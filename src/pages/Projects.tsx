import React from 'react'
import { useParams } from 'react-router-dom';

const Projects = () => {
    const { id } = useParams();
  return (
    <>
        <div>Projects ID: {id}</div>
    </>
  )
}

export default Projects