function checkUsersValid(goodUsers){
	return function allUsersValid(suppliedUsers){
		return suppliedUsers.every(function(item){ // gather all of these
			return goodUsers.some(function(value){ // and gather all of these
				return value.id === item.id; // now compare
			})
		})


	}
}
module.exports = checkUsersValid;

/* breakdown... in the checkUsersValid function....

1. We have to return a function (allUsersValid) and return another function
   (suppliedUsers)
2. suppliedUsers is a function that takes 'every' item and will return true
   if EVERY item passes a supplied test in the callback...
		--- in this case the supplied test is by taking the goodUsers array
			and using a supplied test for each value to see if 'some' of its
			values pass a test.

			--- the test is checking for equality between ALL of the 
			suppliedUsers.id and SOME of the goodUsers.id.
3. Remember, this is like a double test all of one have to pass, versus
   only some of the other have to pass.

official solution
────────────────────────────────────────────────────────────────────────────────
    module.exports = function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(submittedUser) {
          return goodUsers.some(function(goodUser) {
            return goodUser.id === submittedUser.id
          })
        })
      }
    }

────────────────────────────────────────────────────────────────────────────────
