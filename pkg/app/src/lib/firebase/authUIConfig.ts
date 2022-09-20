import {GoogleAuthProvider, GithubAuthProvider, TwitterAuthProvider} from 'firebase/auth'

export const authUiConfig = () => {
    return {
        signInFlow: 'popup',
        signInSuccessUrl: '/blogs',
        tosUrl: '/terms-of-service',
        privacyPolicyUrl: '/privacy-policy',
        signInOptions: [
           GoogleAuthProvider.PROVIDER_ID,
           GithubAuthProvider.PROVIDER_ID,
        ]
    }
}