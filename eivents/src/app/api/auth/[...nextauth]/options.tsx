import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from "next-auth/providers/facebook";
import { signIn } from 'next-auth/react'

interface FacebookProfile {
    id: string;
    name: string;
    email: string;
    picture: object;

  }

  const Header = () => {
    return (
      <div>
          
      </div>
    )
  }
  
export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
          FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_SECRET as string,
        }),
        // CredentialsProvider({
        //     name: "Credentials",
        //     credentials: {
        //         fullName: {
        //             label: "Full Name:",
        //             type: "text",
        //             placeholder: "Please enter username"
        //         },
        //         email:{
        //             label: "Email",
        //             type: "text",
        //             placeholder: "Please enter email"
        //         },
        //         password: {
        //             label: "Password:",
        //             type: "password",
        //             placeholder: "Please enter password"
        //         }
        //     },
        //      async authorize(credentials) 
        //     {

        //       if (credentials?.email === "ade@mahindra.com" && credentials?.password === user.password) {
                
        //           return user
        //       } else {
        //           return null
        //       }
        //     }
        // })
    ],
    callbacks: {
        async signIn({ user, account, profile, email }) {
           if(account?.provider === "facebook") {

           
            const postData = async (url: string, data: any) => {
                const response = await fetch(url, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
                });
              
                if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
                }
              
                const responseData = await response.json(); 
              
                return responseData;
              }
              const url = `http://${process.env.DATABASE_BASE_URL}/api/v1/signin` || 'http://localhost:3100/api/v1/signin'
              //const url = 'http://localhost:3100/api/v1/signin';
              const data = {
                fullName: profile?.name,
                email: profile?.email,
              };

          
              
              postData(url, data)
                .then(responseData => {
                  console.log('done');
                  
                })
                .catch(error => {
                  console.error('Error:', error);
                });
              
              }
            return true; 


        },
      },
      
}