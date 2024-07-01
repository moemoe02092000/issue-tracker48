'use client'
import { TextArea, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import React from 'react'
import { Button } from '@radix-ui/themes'

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'> {/*enlarging the placeholder*/}
        <TextField.Root placeholder='Title'/>
        <SimpleMDE placeholder='Description'/>
        <Button>Submit New Issue</Button>

    </div>
  )
}

export default NewIssuePage