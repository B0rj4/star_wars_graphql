import express from "express";
import { graphqlHTTP } from "express-graphql";
import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import { PlanetType } from "./schemas/planet.js";
import { PLANETS } from "./DB/PLANETS.js";
import { SpeciesType } from "./schemas/species.js";
import { SPECIES } from "./DB/SPECIES.js";

const app = express();

const RootQueryType = new GraphQLObjectType({
  name: "Root",
  description: "Root Query",
  fields: () => ({
    planet: {
      type: PlanetType,
      description: "Single planet",
      args: {
        name: { type: GraphQLString },
      },
      resolve: (parent, args) =>
        PLANETS.find(
          (planet) => planet.name.toLowerCase() === args.name.toLowerCase()
        ),
    },
    planets: {
      type: new GraphQLList(PlanetType),
      description: "List of all Planets",
      resolve: () => PLANETS,
    },
    specie: {
      type: SpeciesType,
      description: "Single Specie",
      args: {
        name: { type: GraphQLString },
      },
      resolve: (parent, args) =>
        SPECIES.find(
          (specie) => specie.name.toLowerCase() === args.name.toLowerCase()
        ),
    },
    species: {
      type: new GraphQLList(PlanetType),
      description: "List of all SPECIES",
      resolve: () => SPECIES,
    },
  }),
});
// const RootMutationType = new GraphQLObjectType({});

const schema = new GraphQLSchema({
  query: RootQueryType,
  //   mutation: RootMutationType,
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(5000, () => console.log("Server Running on 5000"));
