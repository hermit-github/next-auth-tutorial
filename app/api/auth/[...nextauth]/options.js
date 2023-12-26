import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

const options = {
    providers:[
        GithubProvider({
            profile(profile){
                console.log('Github Profile: ', profile );
    
                let userRole = "Github User";
                if(profile?.email == "shubhamhalder0@gmail.com"){
                    userRole = 'admin';
                }
    
                return {...profile,role:userRole}
            },
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        // GoogleProvider({
        //     profile(profile){
        //         console.log('Google Profile: ', profile );
    
        //         let userRole = "Google User";
        //         if(profile?.email == "shubhamhalder0@gmail.com"){
        //             userRole = 'admin';
        //         }
    
        //         return {...profile,role:userRole,id:profile.sub}
        //     },
        //     clientId: process.env.GOOGLE_ID,
        //     clientSecret: process.env.GOOGLE_SECRET
        // }),
    ],
    callbacks:{
        async jwt({ token, user }) {
            // Persist the OAuth access_token to the token right after signin
            if (user) {
              token.role = user.role;
            }
            return token;
          },
          async session({ session, token, user }) {
            if(session?.user) session.user.role = token.role;
            return session;
          }
        
    }
}

export default options;