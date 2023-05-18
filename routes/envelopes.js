import express from 'express';

//Initializing my router
const router = express.Router();

const envelopes = [
    {
        Category: "Gas",
        paymentDue: 50,
        currentBalance: 0
    }
]
// All routes start with /envelope
router.get('/', (req,res) => {
    console.log(envelopes);
    res.send(envelopes);
})


export default router;