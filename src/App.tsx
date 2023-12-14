import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { FormEvent, useEffect, useState } from "react";
import { client } from ".";
import { Pet } from "./API";
import { createPet, deletePet } from "./graphql/mutations";
import { listPets } from "./graphql/queries";
import { PetCreateForm } from "./ui-components";

function App({ signOut, user }: WithAuthenticatorProps) {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await client.graphql({
        query: listPets,
      });
      setPets(data.listPets.items);
    })();
  }, []);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const target = event.target as any;

    try {
      const { data } = await client.graphql({
        query: createPet,
        variables: {
          input: {
            name: target.petName.value,
            description: target.petDescription.value,
            petType: target.petType.value,
          },
        },
      });
      setPets((prev) => [...prev, data.createPet]);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeletePet(id: string) {
    try {
      await client.graphql({
        query: deletePet,
        variables: {
          input: {
            id,
          },
        },
      });
      setPets(pets.filter((pet) => pet.id !== id));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <PetCreateForm  />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a name" name="petName" />
        <input
          type="text"
          placeholder="Enter a description"
          name="petDescription"
        />
        <select name="petType">
          <option value="mpme">Please select a pet</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="rabbit">Rabbit</option>
          <option value="turtle">Turtle</option>
        </select>
        <button>Create pet</button>
      </form>
      <main>
        <ul>
          {pets?.map((pet: any) => (
            <li
              onClick={() => handleDeletePet(pet.id)}
              key={pet.id}
              style={{
                listStyle: "none",
                border: "1px solid black",
                margin: "10px",
                width: "200px",
              }}
            >
              <article>
                <h3>{pet.name}</h3>
                <h5>{pet.petType}</h5>
                <p>{pet.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default withAuthenticator(App);
