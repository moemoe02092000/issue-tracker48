"use client";
import { Callout, Text, TextArea, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import React, { useState } from "react";
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { creatIssueSchema } from "@/app/createIssueSchema";
import {z} from 'zod';
import ErrorMessage from "@/app/components/ErrorMessage";

type IssueForm = z.infer<typeof creatIssueSchema>;

/*interface IssueForm {
  title: string;
  description: string;
}*/

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit,formState:{errors} } = useForm<IssueForm>({
    resolver:zodResolver(creatIssueSchema)
  });
  const[error,setError]=useState('');
  //console.log(register('title'))
  return (

    <div className="max-w-xl" >
      {error && <Callout.Root color="red" className="mb-5">

        <Callout.Text>{error}</Callout.Text>
        </Callout.Root>}
      <form
        className="space-y-3"
        onSubmit={handleSubmit(
          async (data) => {try {
            await axios.post("/api/issues", data);
            router.push('/issues');
          } catch (error) {
            setError('An unexpected error occurred.');
      
          } }
      
        )}
      >
        {" "}
        {/*enlarging the placeholder*/}
        <TextField.Root placeholder="Title" {...register("title")} />
        {/*errors.title && /*<Text color="red"as="p">*/}<ErrorMessage>{errors.title?.message}</ErrorMessage>{/*</Text>*/}
        {/*<TextArea placeholder='Description'/>*/}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        {/*errors.description &&*/ /*<Text color="red" as="p">*/}<ErrorMessage>{errors.description?.message}</ErrorMessage>{/*</Text>*/}
        {/*<SimpleMDE placeholder='Description'/>*/}
        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
//1.07hour
