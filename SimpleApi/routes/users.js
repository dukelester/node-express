import express from  'express';


const router = express.Router();
import { createNewUser,getUserDetails,deleteUser,editUserdetails, users } from "../controllers/users.js";

// let users = [
//     {
//         firstName: "Kathleen",
//         lastName: "Bennett",
//         age:23
//     },
//     {
//         firstName: "John",
//         lastName: "Doe",
//         age:30
//     },
//     {
//         firstName: "Jane",
//         lastName: "Doe",
//         age:25
//     }
// ];

//routes start with /users
router.get('/', (req, res) =>{
    console.log(users)
    res.send(users);
});
//post data
router.post('/',createNewUser );
//get data by id
router.get('/:id', getUserDetails);
//delete user
router.delete('/:id',deleteUser);

//change details (update the user info)
router.patch("/:id", editUserdetails);







// module.exports = router;
export default router;