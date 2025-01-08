# Type 'string[]' is not assignable to type 'string'
This bug demonstrates a common type error in TypeScript where an array of strings is passed to a function expecting a single string. The error occurs because the function signature `greeter(person: string)` explicitly defines the parameter `person` as a single string, and not an array of strings.  The solution involves either modifying the function to accept an array of strings or changing how the function is called.