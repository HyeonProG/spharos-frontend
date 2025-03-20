import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import KakaoProvider from "next-auth/providers/kakao";

export const options: NextAuthOptions = {
    providers: [
         CredentialsProvider ({
            name: 'credentials',
            credentials: {
                username: { label: "Username", type: " text "},
                password: { label: "Password", type: " password "}
            },
            async authorize(credentials): Promise<any> {
                if (!credentials?.username || !credentials?.password) {
                    return null;
            }
            console.log('credentials', credentials);
            // 회원 로인 api 호출
            return null;
            }
         }),
         KakaoProvider({
            clientId: process.env.KAKAO_CLIENT_ID || '',
            clientSecret: process.env.KAKAO_CLIENT_SECRET || '',
         })
    ],
    callbacks: {
        async jwt ({ token, user }) {
            return { ...token, ...user }
        },
        async session ({ session, token }) {
            session.user = token as any;
            return session;
        },
        async redirect ({ url, baseUrl }) {
            return url.startsWith(baseUrl) ? url : baseUrl
        }
    },
    pages: {
        signIn: '/sign-in',
        error: '/error',
    },

}

