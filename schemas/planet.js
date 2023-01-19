import { GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";

const PlanetType = new GraphQLObjectType({
  name: "Planet",
  description:
    "A Planet resource is a large mass, planet or planetoid in the Star Wars Universe, at the time of 0 ABY.",
  fields: () => ({
    name: { type: GraphQLString, description: "The name of this planet." },
    diameter: { type: GraphQLString },
    rotation_period: { type: GraphQLString },
    orbital_period: { type: GraphQLString },
    gravity: { type: GraphQLString },
    population: { type: GraphQLString },
    climate: { type: GraphQLString },
    terrain: { type: GraphQLString },
    surface_water: { type: GraphQLString },
    residents: { type: new GraphQLList(GraphQLString) },
    films: { type: new GraphQLList(GraphQLString) },
    url: { type: GraphQLString },
    created: { type: GraphQLString },
    edited: { type: GraphQLString },
  }),
});

export { PlanetType };
