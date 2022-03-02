const express = require('express')
// const expressGraphQL = require('express-graphql') 
// make sure to replace for graphqlHTTP VVV
const { graphqlHTTP } = require('express-graphql')
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql')
const app = express()

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'HelloWorld',
        fields: ()=>({
            message: { 
                type: GraphQLString,
                resolve: ()=>'Hello World'
            }
        })
    })
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))
app.listen(5001., () => console.log('Server Running'))