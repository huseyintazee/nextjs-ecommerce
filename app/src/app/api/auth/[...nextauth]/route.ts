import NextAuth, {NextAuthOptions} from "next-auth";
import {PrismaAdapter} from "@auth/prisma-adapter";
import {prisma} from "@/lib/db/prisma";
import {Adapter} from "next-auth/adapters";
import {env} from "@/lib/env";
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        GoogleProvider({
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        session({session,user}) {
            session.user.id = user.id
            return session;
        }
    }

}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}