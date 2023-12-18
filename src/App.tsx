import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { Image, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { uploadData } from "aws-amplify/storage";
import { FormEvent, useEffect, useState } from "react";
import { client } from ".";
import { Pet } from "./API";
import { createPet, deletePet } from "./graphql/mutations";
import { listPets } from "./graphql/queries";

function App({ signOut, user }: WithAuthenticatorProps) {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await client.graphql({
        query: listPets,
      });
      console.log(data);

      // data.listPets.items.map(async (item) => {
      //   const getUrlResult  = await getUrl({
      //     key: item.image,
      //     options: {
      //       accessLevel: 'guest'
      //     }
      //   });
      //   console.log(getUrlResult.url);
        
      //   item.image = getUrlResult.url.toString() || "";
      // });
      setPets(data.listPets.items);
    })();
  }, []);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const target = event.target as any;

    console.log(target.image.files[0]);
    

    // console.log(target);

    // console.log(target.image.value);

    await uploadData({
      key: target.image.files[0].name,
      data: target.image.files[0],
      options: {
        accessLevel: "guest",
      },
    }).result;

    // console.log("result", result);

    try {
      const { data } = await client.graphql({
        query: createPet,
        variables: {
          input: {
            name: target.petName.value,
            description: target.petDescription.value,
            petType: target.petType.value,
            image: target.image.files[0].name,
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
      {/* <PetCreateForm /> */}
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
        <input type="file" id="image" name="image" accept="image/png, image/jpeg" />
        <button>Create pet</button>
      </form>
      <main>
        <ul>
          {pets?.map((pet) => (
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
                <Image
                  src="https://pets769fb945d12148fa856dfd62e8a01dae181049-dev.s3.eu-west-1.amazonaws.com/public/IMG20221026210728.jpg"
                  alt={`visual aid for ${pet.name}`}
                  style={{ width: 400 }}
                />
              </article>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default withAuthenticator(App);
