import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { FormEvent, useEffect, useState } from "react";
import { client } from ".";
import { createPet } from "./graphql/mutations";
import { listPets } from "./graphql/queries";

function App({ signOut, user }: WithAuthenticatorProps) {
  const [pets, setPets] = useState([]);

  console.log("pets", pets);

  useEffect(() => {
    (async () => {
      const res: any = await client.graphql({
        query: listPets,
      });
      setPets(res.data.listPets.items);
    })();
  }, []);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const target = event.target as any;

    try {
      await client.graphql({
        query: createPet,
        variables: {
          input: {
            name: target.petName.value,
            description: target.petDescription.value,
            petType: target.petType.value,
          },
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
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
