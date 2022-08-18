import { Person } from "../interfaces/person.i";

type props = {
  person: Person;
  handleRemove: (personId: number) => void;
};
export const Card = ({ person, handleRemove }: props) => {
  return (
    <>
      <div
        key={`card-${person.id}`}
        className="shadow-lg flex flex-row justify-between rounded p-1"
      >
        <div className="flex flex-row">
          <div className="flex flex-col w-1/4">
            <img
              src={person.photo}
              alt={person.fullName}
              className="drop-shadow-md flex rounded-full w-full"
            />
          </div>
          <div className="flex flex-col text-justify m-2">
            <h5 className="font-bold text-lg capitalize">{person.fullName}</h5>
            <span>
              <b>Age: </b>
              {person.age}
            </span>
            <span>
              <b>Position: </b>
              {person.jobPosition}
            </span>
            <div className="flex flex-row">
              <p className="justify">
                <b>Abstract:</b>
                <br />
                {person.abstract}
              </p>
            </div>
          </div>
        </div>
        <button
          className="ease-in-out duration-300 text-xs m-2 px-1 border-2 border-solid border-orange max-h-4 rounded-lg text-orange font-bold hover:bg-orange hover:text-white"
          onClick={() => handleRemove(person.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};
