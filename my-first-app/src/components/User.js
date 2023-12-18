import PropTypes from "prop-types";
//Firstly PropTypes is added from prop-types to determine the type of variables.

function User({ name, surname, age, isLoggedIn, friends, address }) {
    // We return the parameters as a object because of props return as a object that mean we can return the
    //  parameter as props. In that way, we use them props.name , props.surname, props.age...

    // We are going to do early return to determine to show user information up to logged in.
    if (!isLoggedIn) {
        return <h1>You're not logged in!</h1>
    }
    return (
        <div className="centered">
            <div className="border">
                <h1>
                    {`${name} ${surname} (${age})`}
                </h1>
                <br />
                <h2>
                    ADDRESS TITLE : {address.title}
                    <br />
                    ZIP CODE : {address.zip}
                </h2>
                <br />
                <h2>
                    {
                        // we need to define the key when loop any variable to be written in any tag.
                        // Because every parent element of jsx has a unique key while is list it to not loss any performence
                        friends && friends.map(friend => <div key={friend.id}>{friend.name}</div>)

                        // if we need to define any variable in map method, the method can be used like below.
                        /*
                            friends.map(((friend) => {
                            const x = friend.id + 2
                            return <div key={friend.id}>{friend.name}</div>
                         }))
                         */
                    }
                </h2>
            </div>
        </div>
    )
}

// When we need to determine our variable types, the PropTypes method is used like below. 
// isRequired is used for the elemetn must be defined or added in structure and if the variable will not be
// defined in element, return as undefined and shown a error in console like the element is pinned as a 
// required but there is not defined anywhere!!!!...
// =======oneOfType Using=======
// When we accept to define element more than one type, the oneOfType keyword is used as below.
User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,

    // To sample we dont need to any mathematical calculations in age parameter. We can also accept string type.
    age: PropTypes.oneOfType(
        [
            PropTypes.number,
            PropTypes.string
        ]
    ),
    friends: PropTypes.array,

    // When the our object element is defined as a proptype, shape keyword is used like below.
    address: PropTypes.shape(
        {
            title: PropTypes.string,
            zip: PropTypes.oneOfType(
                [
                    PropTypes.number,
                    PropTypes.string
                ]
            )
        }
    )
}

// WE CAN MAKE A DEFAULT PROPS WHEN THE VARIABLE IS NOT DEFINED LIKE BELOW!
//  ALSO, WE CAN USE IT REQUIRED VARIABLES
User.defaultProps = {
    name: "EMPTY NAME!",
    surname: "EMPTY SURNAME!",
    isLoggedIn: false
}

export default User;