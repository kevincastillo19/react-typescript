
import {useForm} from "react-hook-form"
import { Person } from "../interfaces/person.i";
import { getPersonPhoto } from "./personPhoto";

type props = {
    handleAddPerson: (newPerson:Person) => void;    
}
export const Form = ({handleAddPerson}:props) => {
    const { register, reset, handleSubmit, formState:{errors}} = useForm<Person>();    
    const onSubmit = handleSubmit(data => {
            getPersonPhoto().then(({url, id}) => {
                data.photo = url
                data.id = id
                handleAddPerson(data)
                reset()
            })
        })
    return (
        <>
            <form className="flex flex-col border-right-2 border-solid rounded p-2" onSubmit={onSubmit}>
                <input {...register("fullName", {required:true})} type="text" placeholder="full name" className="px-1 capitalize w-full py-0.5 my-2 mx-auto border-2 rounded border-solid border-blue"/>
                <span className="text-red">{errors.fullName?.message}</span>

                <input {...register("age", {required:true, pattern:/^[0-9]+$/i}) } type="number" placeholder="age"  className="px-1 capitalize w-full py-0.5 my-2 mx-auto border-2 rounded border-solid border-blue"/>
                <span className="text-red">{errors.age?.message}</span>

                <input {...register("jobPosition", {required:true})} type="text" placeholder="position" className="px-1 capitalize w-full py-0.5 my-2 mx-auto border-2 rounded border-solid border-blue"/>
                <span className="text-red">{errors.jobPosition?.message}</span>

                <textarea {...register("abstract", {required:true})} name="abstract" placeholder="abstract" className="px-1 capitalize w-full py-0.5 my-2 mx-auto border-2 rounded border-solid border-blue"></textarea>
                <span className="text-red">{errors.abstract?.message}</span>
                
                <button type="submit" className="active:border-purple focus:border-purple ease-in-out duration-300 hover:bg-purple text-white font-bold border-2 rounded-full bg-blue border-solid p-1 border-blue">Add person</button>
            </form>
        </>
    )
}