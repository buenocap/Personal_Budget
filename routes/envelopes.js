import express from 'express';
import * as functions from '../envelopesFunctions.js';
//Initializing my router
const router = express.Router();

const envelopes = [
    {
        category: "Gas",
        budget: 50,
        id: 0
    }
]

// All routes start with /envelopes

// Create an envelope for a new budget
router.post('/create',(req,res) => {
    console.log('Creating a new envelope');
    //Accessing information from the URL 
    const categoryName = req.query.category;
    const budgetAmount = Number(req.query.budget);
    const idNumber = envelopes.length;
    envelopes.push({category:categoryName,budget:budgetAmount,id:idNumber});
    console.log(envelopes);
    //Sending back a response
    res.status(201).send(`A new envelope has been created for ${categoryName} with a budget of $${budgetAmount}!`);
});

// Display all current envelopes
router.get('/', (req,res) => {
    console.log(envelopes);
    res.send(envelopes);
})

// Display envelope by ID number
router.get('/:id', (req,res) => {
    const id = req.params.id;
    const envelope = functions.findEnvelope(envelopes,id);
    if (envelope == -1) {
        res.status(404).send('Envelope requested could not be found');
    } else {
        res.status(200).send(envelope);
    }
    
});


export default router;