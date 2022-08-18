import { Person } from "../interfaces/person.i"

export const Card = ({id, fullName, age, photo, jobPosition, abstract}:Person) => {
    return (
        <>
            <div key={id} className="flex flex-row drop-shadow-sm rounded border p-1 border-2 border-solid border-blue">
                <div className="flex flex-row rounded">
                    <div className="flex flex-col w-1/4">
                        <img src={photo} alt={fullName} className=" rounded-full w-full"/>
                    </div>
                    <div className="flex flex-col text-justify">
                        <h5 className="font-bold text-lg capitalize">{fullName}</h5>
                        <span><b>Age: </b>{age}</span>
                        <span><b>Position: </b>{jobPosition}</span>
                        <div className="flex flex-row">
                            <p className="justify">
                                <b>Abstract:</b><br/>
                                {abstract}
                            </p>
                        </div>  
                    </div>
                </div>
            </div>
        </>
    )
}