# Personal Budget API
Created By Pedro Bueno

## How to use

This api helps a user to create envelopes that can be used to create a budgeting plan. For instance, say they want to save money for trip or set aside money for rent.

To start there are several different routes implmented:

ROUTE: GET '/envelopes'

Will display all envelopes currently stored. Dummy information has been supplied.

ROUTE: GET '/:id'

Will allow you to view a single envleope based on it's identification number. This number has to is retreieved through a parameter.

ROUTE: PUT '/edit/:id'

Will allow editing information of any existing envelope. The two fields that can be modified are *category* and *budget*.

Category: The name of the envelope e.g. 'Rent'
Budget: The number of money that is needed for this envelope

ROUTE POST '/create'

Will allow the user to create a new envelope. The requested information is retrieved through the body. The name of the two fields are *category* and *budget*. ID is automatically assigned when the envelope is created.

ROUTE PUT '/edit/:envelopeOne/:envelopeTwo/:transfer'

Will allow the user to transfer budget from one envelope to another. For instance say you have an extra $20 leftover from Rent that can be applied to savings. We will be able to transfer that amount.

ROUTE DELETE '/edit/:id'

Will allow the user to delete an exisiting envelope. Envelope is removed by utilizing its ID number. This requested information is retrieved through params. Once an envelope is deleted. All enveloped will be reassigned a new ID number.