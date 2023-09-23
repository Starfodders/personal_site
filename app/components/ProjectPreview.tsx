import Link from 'next/link'
import React from 'react'

const ProjectPreview = () => {
  return (
    <div>
        <div>Project: Hearth
            <Link href = "./components/projects">Go</Link>
        </div>
        <div>Project: Scobaby</div>
    </div>
  )
}

export default ProjectPreview