import { gql } from "@apollo/client";

export const CreateOrUpdatePerson = gql`
    mutation createOrUpdatePerson($request:PhoneRequest){
        createOrUpdatePerson(request:$request){
            name 
            phone
        }
    }
`

export const DeletePerson = gql`
    mutation deletePerson($request:DeleteRequest){
        deletePerson(request:$request)
    }
`

export const GetPeople = gql`
    query getPeople($request:SearchRequest){
        getPeople(request:$request)
    }
`
