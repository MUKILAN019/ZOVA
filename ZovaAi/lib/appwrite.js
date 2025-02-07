
import { Client,Account, ID, Avatars, Databases, Query } from 'react-native-appwrite';

export default appwriteConfig = {
    endpoint:'https://cloud.appwrite.io/v1',
    platform:'com.Mukilan.ZOVA',
    projectId:'674b1931001892652083',
    databaseId:'674b1c2c003aeae9ebde',
    userCollectionId:'674b1c64002964623a6c',
    videoCollectionId:'674b1cb7000079883101',
    storageId:'674b28cd003970921d37'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client);
const DB = new Databases(client);
export const createUser = async(email,password,username)=>{
    try{
      const newAccount =  await account.create(ID.unique(),email,password,username)
      if(!newAccount) throw Error;
      const avatarUrl = avatars.getInitials(username)
      await SignIn(email,password)
      const newUser = await DB.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        ID.unique(),
        {
            accountId: newAccount.$id,
            email,
            username,
            avatar:avatarUrl
        } 
      )
    //   console.log(newUser)
      return newUser
    }
    catch(er){
      console.log(er);
      throw new Error(er);  
    }
}

export async function SignIn(email, password) {
    try {
        const existingSession = await account.getSession('current');
        return existingSession;
    } catch (noSessionError) {
        try {
            const newSession = await account.createEmailPasswordSession(email, password);
            return newSession;
        } catch (createSessionError) {
            throw new Error(createSessionError);
        }
    }
}

export const getCurrentUser =  async()=>{
    try{
       const currentAccount = await account.get()
       if(!currentAccount){
        throw Error;
       }
       const currentUser = await DB.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        [Query.equal('accountId',currentAccount.$id)]
       )
       if(!currentUser){
          throw Error;
       }
       return currentUser.documents[0];
    }
    catch(err){
        console.log(err)
    }
}