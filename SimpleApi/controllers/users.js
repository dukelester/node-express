import { v4 as uuidv4 } from 'uuid';

export let users = [];

export const createNewUser = (req, res) =>{
    let user = req.body;
    const userId = uuidv4();
    const usersWithId = {...user, id: userId};

    users.push(usersWithId);
    res.send(`User with a name ${user.firstName} was added successfully`);
    
    
    // res.send(users);
    console.log(req.body);
};


export const getUserDetails =  (req, res) =>{
    // res.send("Get user with id: " + req.params.id);
    let { id } = req.params;
    let result = users.find((user) => user.id === id)
    // users.find((user) => user.id === id);
    res.send(result);
   
    console.log(result);

};

export const deleteUser =  (req, res) =>{
    
    try{
        let { id } = req.params;
        users = users.filter((user) => user.id !== id);
        res.send(`User with id ${id} was deleted successfully`);
        }
    catch(err){
        console.log(err)
        res.send(`User with id ${id} was not found`);
    }
};

export const editUserdetails = (req, res) =>{
    let { id } = req.params;
    //get the user details
    let {firstName, lastName, age} = req.body;
    let user = users.find((user) => user.id === id);
    //update the user details
    if (firstName){
        user.firstName = firstName;
    }
    if (lastName){
        user.lastName = lastName
    }
    if(age){
        user.age = age;
    }
   
    res.send(`user with the id ${id } was successifully updated`)

};