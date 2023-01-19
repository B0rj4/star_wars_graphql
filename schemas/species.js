import { GraphQLObjectType, GraphQLString } from "graphql";

const SpeciesType = new GraphQLObjectType({
  name: "Species",
  description:
    "A Species resource is a type of person or character within the Star Wars Universe.",
  fields: () => ({
    name: { type: GraphQLString, description: "The name of this planet." },
    classification: { type: GraphQLString },
    designation: { type: GraphQLString },
    average_height: { type: GraphQLString },
    average_lifespan: { type: GraphQLString },
    eye_colors: { type: GraphQLString },
    hair_colors: { type: GraphQLString },
    skin_colors: { type: GraphQLString },
    language: { type: GraphQLString },
    homeworld: { type: GraphQLString },
    people: { type: GraphQLString },
    films: { type: GraphQLString },
    url: { type: GraphQLString },
    created: { type: GraphQLString },
    edited: { type: GraphQLString },
  }),
});

export { SpeciesType };
