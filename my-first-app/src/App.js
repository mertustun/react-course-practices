import Navbar from './components/navbar';
import User from './components/User';
function App() {
  // const name = "Mert",
  //   surname = "Ustun",
  //   isLoggedIn = true,
  //   usingOf = "{variable}"
  const friends = [
    {
      id: 1,
      name: "Can"
    },
    {
      id: 2,
      name: "Mehmet"
    },
    {
      id: 3,
      name: "Ulas"
    },
    {
      id: 4,
      name: "Omer"
    }
  ]
  return (
    // <div>
    //     <Navbar />
    // </div>
    // --- How to added in jsx Conditional and variational things!!! ---
    <> {/* <> </> is a react fragment also use like <React.Fragment> </React.Fragment> */}
      <Navbar />

      {/* ----PROPS USING---- */}

      <User
        // To sample, we are delete our name variable and go back to program we can see the default prop.
        /*
        name="Mert"
        */
        surname="Ustun"
        age={22}
        isLoggedIn={true} // IF WE DONT DEFINED THIS VARIABLE, DEFAULT PROPS IS RUNNIG.
        friends={friends}
        address={
          {
            title: "Munchen/GERMANY",
            zip: 267242
          }
        }
      />
      {/* WE CAN USE THE PROPS WHEN CREATE A NEW COMPONENTS AND NEED THROW ANY VARIABLES THEM LIKE ABOVE! */}


      {/* {isLoggedIn &&  `My name is ${name} and surname is ${surname}`}
        {!isLoggedIn &&  "You are not logged in!"}  */}

      {/* 
          {isLoggedIn ? `My name is ${name} and surname is ${surname}` : "You are not logged in!"}
          The using above is also used like that
        */}

      {/* <h2>
        while not Conditional thing in element, the variable thing is used like {usingOf}
      </h2> */}
    </>// The using of variables is {} like above.
  );
}

export default App;
