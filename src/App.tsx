import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { FormEvent } from "react";

function App({ signOut, user }: WithAuthenticatorProps) {
  
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log(event);

    // event.target[petName];

    const { target } = event;

    // await client.graphql({
    //   query: createPet,
    //   variables: {
    //     input: {
    //       name: target.petName,
    //       description,
    //       petType
    //     }
    //   }
    // })
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
          <option value="mpme">Please select a dog</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="rabbit">Rabbit</option>
          <option value="turtle">Turtle</option>
        </select>
        <button>Create pet</button>
      </form>
    </div>
  );
}

export default withAuthenticator(App);
